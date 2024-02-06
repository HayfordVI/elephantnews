import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <Image src="/Logo.svg" width="300" height="300" alt="d" />
        <div className={styles.menuSocials}>
          <Link href='/'>Ghana</Link>
          <Link href='/'>World</Link>
          <Link href='/'>Politics</Link>
          <Link href='/'>Business</Link>
          <Link href='/'>Opinion</Link>
          <Link href='/'>Sports</Link>
          <Link href='/'>Entertainment</Link>
          <Link href='/'>Elephant NewsRoom</Link>
          <Link href='/'>News</Link>
          <Link href='/'>Trending</Link>
          <Link href='/'>Corrections</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>Facebook</Link>
        </div>
        <hr></hr>
        {/* <button className="">Back to top</button> */}
        <div className={styles.links}>
          <Link className={styles.lin} href='/'>Terms of use</Link>
          <Link className={styles.lin} href='/'>About ElephantNews</Link>
          <Link className={styles.lin} href='/'>Help</Link>
          <Link className={styles.lin} href='/'>Privacy Policy</Link>
          <Link className={styles.lin} href='/'>Contact Us</Link>
          <Link className={styles.lin} href='/'>Advertise</Link>
        </div>
        
        <div className={styles.copyright}><p>© 2024 Elephantnews. All right are reserved</p></div>
      </div>
    </div>
  );
};

export default Footer;