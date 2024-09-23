import {
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";
import { Person } from "../../types";

const PersonCard = ({ person }: { person: Person }) => {
  return (
    <div className="bg-primary/30 max-w-sm py-4">
      <Avatar
        className="w-32 h-32 mx-auto"
        src={person.avatarUrl}
        title={person.name}
      />
      <CardContent>
        <Typography
          className="text-white text-center -mt-7"
          gutterBottom
          variant="h5"
          component="div"
        >
          {person.name}
        </Typography>
        <Typography
          className="text-white"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          E-mail: {person.email}
        </Typography>
        <Typography
          className="text-white"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          CPF: {person.cpf}
        </Typography>
        <Typography
          className="text-white"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          Número: {person.phone}
        </Typography>
        <Typography
          className="text-white"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          Músicas preferidas: {person.songs.join(", ")}
        </Typography>
        <Typography
          className="text-white"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          Filmes preferidos: {person.movies.join(", ")}
        </Typography>
      </CardContent>
    </div>
  );
};

export default PersonCard;
