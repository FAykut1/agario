// Type definitions for tmx-parser 1.5
// Project: https://github.com/superjoe30/node-tmx-parser#readme
// Definitions by: Fatih Aykut <https://github.com/FAykut1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class TileLayer {
  constructor(map: any);

  setTileAt(x: any, y: any, tile: any): void;

  tileAt(x: any, y: any): any;
}

export class TileSet {
  constructor();

  mergeTo(other: any): void;

  firstGid: number;
  source: string;
  name: string;
  tileWidth: number;
  tileHeight: number;
  spacing: number;
  margin: number;
  tileOffset: { x: number; y: number };
  properties: {};
  image: Image[];
  tiles: Tile[];
  terrainTypes: [];
}

declare type Tile = {
  id: number;
  terrain: [];
  probability: null;
  properties: {};
  animations: [];
  objectGroups: [];
  image: Image;
};

declare type Map = {
  version: string | null;
  orientation: string;
  width: number;
  height: number;
  tileWidth: number;
  tileHeight: number;
  backgroundColor: any;
  layers: [];
  properties: {};
  tileSets: TileSet[];
};

declare type Layer = {};

declare type Image = {};

export function parse(content: any, pathToFile: any, cb: any): any;

export function parseFile(name: string, cb: typeof parseFileCallBack): void;

export function readFile(name: any, cb: any): void;

declare function parseFileCallBack(err: any, map: Map): void;
