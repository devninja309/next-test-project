import { Inter } from "@next/font/google";
import styles from "../../styles/AboutUs.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <>
      <div className={styles.root}>about us page</div>
    </>
  );
}
