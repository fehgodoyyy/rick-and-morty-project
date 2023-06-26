export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  species: string;
  status: string;
  created: string;
}

export interface ApiContextType {
  dataApi: {
    name: string;
    gender: string;
    location: { name: string };
    origin: { name: string };
    species: string;
    image: string;
    id: number;
    created: string;
    status: string;
  } | null;
  children: React.ReactNode;
}

export interface ContextProps {
  apiEndpoint: string;
  children: React.ReactNode;
}

export interface Props {
  favorites: Character[];
  onFavoriteRemoved: (id: number) => void;
}
