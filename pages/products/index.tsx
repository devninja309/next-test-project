import { Inter } from "@next/font/google";
import styles from "../../styles/Products.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Products() {
  return (
    <>
      <div className={styles.root}>Products page</div>
    </>
  );
}
