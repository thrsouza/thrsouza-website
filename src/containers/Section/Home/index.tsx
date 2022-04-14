import { SectionType } from "@/@types/containers/Section";
import { Heading1 } from "@/components/Heading";
import { TrademarkSvgIcon } from "@/components/SvgIcon";

import socialData from "@/data/social";

import styles from "./styles.module.scss";

export function Home({ id }: SectionType) {
  return (
    <section id={id} className={styles.homeSection}>
      <TrademarkSvgIcon
        className={styles.logo}
        height={"9rem"}
        width={"9rem"}
      />
      <Heading1 text="Thiago Souza" />
      <img
        src="/assets/images/banner/subtitle.svg"
        alt="Full Stack Developer"
        className={styles.subTitle}
        height="34"
        width="360"
      />
      <ul>
        {socialData.map((item, index) => (
          <li key={index}>
            <a href={item.href} rel="noreferrer" target="_blank">
              <item.SvgIcon aria-label={item.name} width={28} height={28} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
