import { CardContent, Typography } from "@mui/material";
import { Movie } from "../../types";
import FavoriteIconButton from "@/src/components/favorite";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="bg-primary/30 max-w-xs p-4 h-24 pr-12 rounded-md relative max-md:w-full">
      <CardContent className="p-0">
        <Typography
          className="text-white text-left"
          gutterBottom
          variant="h5"
          component="div"
        >
          {movie.title}
        </Typography>
        <Typography
          className="text-white absolute bottom-4 left-4"
          variant="body2"
          sx={{ color: "text.secondary" }}
          padding={0}
        >
          {movie.genre}
        </Typography>
        <div className="absolute bottom-1 right-1">
          <FavoriteIconButton item={movie} type="movies" />
        </div>
      </CardContent>
    </div>
  );
};

export default MovieCard;
