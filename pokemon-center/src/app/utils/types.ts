export interface Pokemon {
  name: string;
  url?: string;
  image?: string;
  abilities?: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: 1;
    }
  ];
  base_experience?: number;
  height?: number;
  weight?: number;
  id?: number;
  moves?: [
    {
      move: {
        name: string;
        url: string;
      };
    }
  ];
  stats?: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  order?: number;
  types?: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
}
