import LoaderCircle from "@/src/components/ui/icons/loader-circle";
import MovieCard from "@/src/features/movies/components/movies-card";
import { Movie } from "@/src/features/movies/types";
import PersonCard from "@/src/features/people/components/person-card";
import { Person } from "@/src/features/people/types";
import SongCard from "@/src/features/songs/components/song-card";
import { Song } from "@/src/features/songs/types";
import { useLoading } from "@/src/hooks/convinient-states.hooks";
import { useStore } from "@/src/Providers/store-provider";
import { simulateServerDelay } from "@/src/utils";
import { Box, Divider, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/pesquisa/")({
  component: () => <SearchComponent />,
});

function SearchComponent() {
  const search: {
    q: string;
  } = useSearch({
    from: "/pesquisa/",
  });
  const { searchQuery } = useStore();
  const { loading, startLoading, stopLoading } = useLoading();
  const { filteredMovies, filteredPeople, filteredSongs, status } = searchQuery(
    search.q
  );

  useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      try {
        startLoading();
        await simulateServerDelay();
        return true;
      } finally {
        stopLoading();
      }
    },
    staleTime: Infinity,
  });

  console.log(filteredSongs);

  if (loading)
    return (
      <div className="mt-20 flex flex-col items-center gap-4">
        <LoaderCircle className="text-white w-24 h-24" />
        <Typography
          className="text-white"
          gutterBottom
          variant="h5"
          component="div"
        >
          Pesquisando...
        </Typography>
      </div>
    );

  return (
    <Box component={"section"} className="flex-1">
      {filteredPeople.length > 0 && (
        <>
          <Typography
            className="text-white"
            gutterBottom
            variant="h5"
            component="div"
          >
            Pessoas
          </Typography>
          <div className="flex gap-2 flex-wrap max-md:justify-center">
            {filteredPeople.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
          <Divider className="bg-white my-12" />
        </>
      )}
      {filteredSongs.length > 0 && (
        <>
          <Typography
            className="text-white"
            gutterBottom
            variant="h5"
            component="div"
          >
            Músicas
          </Typography>
          <div className="flex gap-2 flex-wrap max-md:justify-center">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
          <Divider className="bg-white my-12" />
        </>
      )}
      {filteredMovies.length > 0 && (
        <>
          <Typography
            className="text-white"
            gutterBottom
            variant="h5"
            component="div"
          >
            Filmes
          </Typography>
          <div className="flex gap-2 flex-wrap max-md:justify-center">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Divider className="bg-white my-12" />
        </>
      )}
    </Box>
  );
}

/**
|--------------------------------------------------
 {
    filteredMovies,
    filteredSongs,
    filteredPeople,
    status,
}
|--------------------------------------------------
*/
