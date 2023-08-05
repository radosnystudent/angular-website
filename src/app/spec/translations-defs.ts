export type Translations = {
  [key: string]: LanguageTranslations;
};

export type LanguageTranslations = { [key: string]: string };

export enum Languages {
  Pl = 'pl',
  En = 'en',
}
