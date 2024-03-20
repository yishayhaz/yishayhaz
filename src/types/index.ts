export type Project = {
  cardHeight: number;
  timeline: string;
  name: string;
  shortDescription: string;
  id: string;
  tags: string[];
  thumbnail: string;
  gallery: string[];
  content: { title: string; content?: string; gallery?: string[] }[];
};
