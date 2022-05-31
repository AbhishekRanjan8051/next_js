import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const blog = () => {
  return (
    <main className={styles.main}>
      <div>
        <h2>Popular Blog of JS</h2>
        <div className={styles.blogs}>
          <Link href={"./blogpost/diff-between-equal-and doubleequal"}>
            <h3>difference between == and ===</h3>
          </Link>
          <p>
            == only comapre the value where === comapre value as well as type
          </p>
        </div>
        <div className={styles.blogs}>
          <Link href={"./blogpost/diff-between-equal-and doubleequal"}>
            <h3>difference between == and ===</h3>
          </Link>
          <p>
            == only comapre the value where === comapre value as well as type
          </p>
        </div>
        <div className={styles.blogs}>
          <h3>difference between == and ===</h3>
          <p>
            == only comapre the value where === comapre value as well as type
          </p>
        </div>
      </div>
    </main>
  );
};

export default blog;
