import { SVGProps } from "react";

export type SocialDataType = {
  name: string;
  href: string;
  SvgIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
