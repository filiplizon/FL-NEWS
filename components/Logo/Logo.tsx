import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <span>gn</span>News
    </Link>
  );
};

export default Logo;
