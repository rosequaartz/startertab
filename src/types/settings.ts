export type Option = {
  title: string;
  subTitle: string;
  localStorageId: string;
  lightDefault?: string;
  darkDefault?: string;
  defaultSetting?: string;
  tileGroup?: TileGroup;
  type: OptionType;
  tileId: TileId;
};

export type OptionType = "ColorPicker" | "SubRedditPicker";

export type TileGroup =
  | "HackerNews Tile"
  | "Strava Tile"
  | "Bonsai Tile"
  | "Weather Tile"
  | "Spotify Tile"
  | "Wind Tile"
  | "Swimming Tile"
  | "Search Tile"
  | "Reddit Tile"
  | "Clock Tile"
  | "Theme Changer Tile"
  | "UV Tile";

export type Themes = "dark" | "light";

export type TileSettings = {
  subReddit?: string;
  twitterFeedURL?: string;
  stravaToken?: string;
  backgroundColor: string;
  textColor: string;
};

export type ThemeSettings = {
  themeName: string;
  globalSettings: TileSettings;
  tile1: TileSettings;
  tile2: TileSettings;
  tile3: TileSettings;
  tile4: TileSettings;
  tile5: TileSettings;
  tile6: TileSettings;
  tile7: TileSettings;
  tile8: TileSettings;
  tile9: TileSettings;
  tile10: TileSettings;
  tile11: TileSettings;
  tile12: TileSettings;
};

export type UserSettings = {
  themes: ThemeSettings[];
};

export type SortedOption = {
  [key in TileGroup]: Option[];
};

export type TileId =
  | "tile1"
  | "tile2"
  | "tile3"
  | "tile4"
  | "tile5"
  | "tile6"
  | "tile7"
  | "tile8"
  | "tile9"
  | "tile10"
  | "tile11"
  | "tile12"
  | "globalSettings";
