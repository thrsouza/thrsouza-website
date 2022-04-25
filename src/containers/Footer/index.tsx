import { BuyMeACoffeSvgElement } from '@/components/Svg/Elements';
import Image from 'next/image'

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.buyMeACoffee}
        href="https://www.buymeacoffee.com/thrsouza"
        rel="noreferrer"
        target="_blank"
      >
        <BuyMeACoffeSvgElement width={"2rem"} height={"2rem"} />
        <span>Buy me a coffee</span>
      </a>
      <span>Layout designed &amp; built by</span>
      <span>© Thiago Souza - {new Date().getFullYear()}</span>
    </footer>
  );
}
