export interface ILanguages {
  ch: string;
  en: string;
  ru: string;
  tj: string;
}
export type ILangTitles = keyof ILanguages;

export interface IProductImage {
  color: string;
  imagePath: string;
  isMain: boolean;
}

export type contactType = "name" | "email" | "body" | "phoneNumber";
export type categoryNamesType = "shoes" | "leather" | "belts" | "soles";
