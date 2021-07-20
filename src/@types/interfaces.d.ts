export interface IImage {
  url: string;
}

export interface IGalleryImage {
  image: IImage;
}

export interface ILocal {
  banner: IImage;
  city: string;
  covid: string;
  energy: "Radical" | "Zen" | "Cultural";
  risk: "0" | "1" | "2";
  name: string;
  images: IGalleryImage[];
  description: {
    text: string;
  }[];
}
