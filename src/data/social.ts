import { SocialDataType } from "@/@types/data/social";
import * as SvgIcon from "@/components/SvgIcon";

const socialData = <SocialDataType[]>[
  {
    name: "Github",
    href: "https://github.com/thrsouza",
    SvgIcon: SvgIcon.GithubSvgIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/thrsouza",
    SvgIcon: SvgIcon.LinkedinSvgIcon,
  },
  {
    name: "Google Play",
    href: "https://play.google.com/store/apps/dev?id=8865737054333441628",
    SvgIcon: SvgIcon.GooglePlaySvgIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCObFBuhVmi48ZHS07Li5h5A",
    SvgIcon: SvgIcon.YoutubeSvgIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thrsouza.sh",
    SvgIcon: SvgIcon.InstagramSvgIcon,
  },
];

export default socialData;
