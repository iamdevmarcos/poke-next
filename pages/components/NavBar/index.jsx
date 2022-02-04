import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.linkItems}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
