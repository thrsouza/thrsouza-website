import Image from "next/image";
import { SectionType } from "@/@types/containers/Section";
import { Heading1 } from "@/components/Heading";

import socialData from "@/data/social";

import styles from "./styles.module.scss";

export function Home({ id }: SectionType) {
  return (
    <section id={id} className={styles.homeSection}>
      <span className={styles.logo}>
        <Image
          src="/assets/images/banner/logo.svg"
          alt="Thiago Souza"
          height="148"
          width="184"
        />
      </span>
      <Heading1 text="Thiago Souza" />
      <span className={styles.subTitle}>
        <Image
          src="/assets/images/banner/subtitle.svg"
          alt="Full Stack Developer"
          className={styles.subTitle}
          height="34"
          width="360"
        />
      </span>
      <ul>
        {socialData.map((item, index) => (
          <li key={index}>
            <a href={item.href} rel="noreferrer" target="_blank">
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
