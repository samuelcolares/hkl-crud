export type Song = {
  id: string;
  name: string;
  genre: string;
  singerOrBand: string;
  createdAt: number;
  updatedAt: number;
};

export type SongWithoutId = Omit<Song, 'id'>