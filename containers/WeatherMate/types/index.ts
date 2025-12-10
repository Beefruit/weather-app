export interface IOutfitData {
  category: string;
  items: {
    type: string;
    name: string;
    color: string;
  }[];
  temprature_range: string;
  tips: string[];
  title: string;
}
