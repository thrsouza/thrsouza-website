import { SVGProps } from "react";

export type TechnologiesDataType = {
  name: string;
  SvgIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
