export interface Country {
  id: number;
  code: string;
  name: string;
  emoji: string;
  continent?: {
    id: number;
    name: string;
  };
}
