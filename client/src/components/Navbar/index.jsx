import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Navbar = () => {
  // Return your navbar code here
  // Hint: use your navbar from the HTML workshop
  // Bonus: you can add an image in the .title div for a logo
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        {/* Bonus: add a logo image with the Image tag that comes with Next.js: https://nextjs.org/docs/pages/api-reference/components/image */}
        <Image width={50} height={50} src="/travel.png"></Image>
        <Link href="/">HackTravels</Link>
      </div>
      <div className={styles.navButtons}>
        <Link href="/addTrip">Add Trip</Link>
        <Link href="/addActivity">Add Trip Activity</Link>
      </div>
    </div>
  );
};

export default Navbar;
