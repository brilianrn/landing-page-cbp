import { SVGProps } from "react";

export interface ISectionHeader {
  headerTitle: string;
  headerID: string;
  headerRef: React.RefObject<HTMLDivElement | null>;
  headerIcon?: FC<SVGProps<SVGSVGElement>>;
}
