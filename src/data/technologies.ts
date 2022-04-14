import { TechnologiesDataType } from "@/@types/data/technologies";
import * as SvgIcon from "@/components/Svg/Icons";

const technologiesData = <TechnologiesDataType[]>[
  {
    name: "Flutter",
    SvgIcon: SvgIcon.FlutterSvgIcon,
  },
  {
    name: "React",
    SvgIcon: SvgIcon.ReactSvgIcon,
  },
  {
    name: "Node",
    SvgIcon: SvgIcon.NodeSvgIcon,
  },
  {
    name: ".NET C#",
    SvgIcon: SvgIcon.CSharpSvgIcon,
  },
  {
    name: "AWS",
    SvgIcon: SvgIcon.AwsSvgIcon,
  },
  {
    name: "Firebase",
    SvgIcon: SvgIcon.FirebaseSvgIcon,
  },
  {
    name: "Mongo",
    SvgIcon: SvgIcon.MongoSvgIcon,
  },
];

export default technologiesData;
