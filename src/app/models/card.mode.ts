export interface Card {
  title: string;
  contentLines: string[];
  links?: CardLink[];
}

interface CardLink {
  target: string;
  text: string;
}
