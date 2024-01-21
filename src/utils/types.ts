export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type ServerMessage = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Character[];
};

export type Options = {
  method: string;
  body?: string;
  headers: {
    authorization?: string;
    "Content-Type": string;
  };
};
