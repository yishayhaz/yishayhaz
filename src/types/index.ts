export type Project = {
  cardHeight: number;
  timeline: string;
  name: string;
  shortDescription: string;
  folder: string;
  thumbnail: string;
  gallery: string[];
  content: { title: string; content?: string; gallery?: [] }[];
};
