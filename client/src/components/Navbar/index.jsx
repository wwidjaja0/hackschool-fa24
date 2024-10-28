import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        {/* Bonus: add a logo image with the Image tag that comes with Next.js: https://nextjs.org/docs/pages/api-reference/components/image */}
      </div>
      <div className={styles.navButtons}>
      </div>
    </div>
  );
};

export default Navbar;
