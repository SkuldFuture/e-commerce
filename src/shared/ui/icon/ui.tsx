import { SpritesMap } from "./sprite.h"
import { IconProps } from "./types"

export const Icon = <Group extends keyof SpritesMap = "common">({ type, name }: IconProps<Group>) => {
  return (
    <svg className="icon">
        <use xlinkHref={`/sprite/${type}.svg#${name}`} />
    </svg>
  )
}
