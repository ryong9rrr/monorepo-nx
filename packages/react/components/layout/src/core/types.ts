import { vars } from "@package/themes";
import { StyleSprinkles } from "./style.css";

type AsProps = {
  // Exclude는 첫 번째 유니온에서 두 번째 유니온에 포함된 타입을 제외한 나머지 타입을 얻는 유틸리티 타입.
  // 따라서 as는 HTML 요소 중에서 SVG 요소를 제외한 모든 요소의 집합을 나타낸다.
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
