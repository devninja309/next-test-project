import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "../../styles/AboutUs.module.css";

const font = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <div className={styles.root}>
      <div className={styles.contentItem}>
        <div className={styles.item}>
          <div className={styles.itemFront}>
            <Image
              src="/icon/product_icon.svg"
              alt="13"
              width={45}
              height={45}
              priority
            />
          </div>
          <div className={styles.itemMain}>
            <div className={styles.itemHeader}>
              <h1 className={font.className}>ECOSYSTEM</h1>
            </div>
            <div className={styles.itemDiv}></div>
            <div className={styles.itemDes}>
              <h5 className={font.className}>
                Enable real-time payment and cross-border transaction with zero
                gas fee.
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemFront}>
            <Image
              src="/icon/product_icon.svg"
              alt="13"
              width={45}
              height={45}
              priority
            />
          </div>
          <div className={styles.itemMain}>
            <div className={styles.itemHeader}>
              <h1 className={font.className}>PayTech.</h1>
            </div>
            <div className={styles.itemDiv}></div>
            <div className={styles.itemDes}>
              <h5 className={font.className}>
                Seamless payment gateway for multiple transaction medium and
                suitable for any cryptowallet.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
