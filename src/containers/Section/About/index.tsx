import Image from "next/image";
import { SectionType } from "@/@types/containers/Section";
import { Heading2 } from "@/components/Heading";

import technologiesData from "@/data/technologies";

import styles from "./styles.module.scss";

export function About({ id, title }: SectionType) {
  return (
    <section id={id} className={styles.aboutSection}>
      <div>
        <Heading2 text={title} />
        <div className={styles.content}>
          <div className={styles.avatar}>
            <Image
              layout="responsive"
              src="/assets/images/profile.webp"
              alt="Thiago Souza"
              height="148"
              width="148"
            />
          </div>
          <div className={styles.description}>
            <h1>Hello, I&apos;m Thiago Souza!</h1>
            <p>
              Working in the development area, always seeking to achieve the
              goals proposed by the company and, in parallel, I seek to improve
              myself and achieve professional growth, continuously maintaining
              commitment, agility and responsibility
              <span>.</span>
            </p>
            <p>
              In addition to coding, I enjoy listening to great music, watching
              movies / series and exploring new technologies
              <span>.</span>
            </p>
          </div>
        </div>
        <ul className={styles.footer}>
          {technologiesData.map((item, index) => (
            <li key={index}>
              <item.SvgIcon width={"4rem"} height={"4rem"} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
