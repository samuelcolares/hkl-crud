export type Movie = {
  id: string;
  title: string;
  genre: string;
  createdAt: number;
  updatedAt: number;
};

export type MovieWithoutId = Omit<Movie, 'id'>
