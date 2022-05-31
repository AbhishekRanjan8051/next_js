import React from 'react'
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
      </ul>
      <ul>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
      </ul>
      <ul>
        <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
      </ul>
      <ul>
        <Link href="contact-us">
          <a>
            <li>Contact us</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar