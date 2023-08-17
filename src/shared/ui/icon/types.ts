import { SpritesMap } from "./sprite.h";

export interface IconProps<Group extends keyof SpritesMap> {
  name: SpritesMap[Group];
  type?: Group;
}
