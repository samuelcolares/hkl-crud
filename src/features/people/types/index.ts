export type Person = {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  avatarUrl: string;
  movies: string[];
  songs: string[];
  createdAt: number;
  updatedAt: number;
};

export type PersonWithoutId = Omit<Person, "id">;

export type Avatar = {
  id: string;
  url: string;
};
