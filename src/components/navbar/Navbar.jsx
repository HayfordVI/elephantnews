import React from 'react';
import Image from 'next/image';
import styles from "./navbar.module.css"
import Link from 'next/link';
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
    return (
      <div className={styles.container}>
          <div className={styles.info}>
            <form className={styles.search}> 
              <input type="search" placeholder="Search News,Headline and Audio&V" className={styles.searchbar}></input>
              <button type='submit'><Image src="/search_icon.svg" width={30} height={30} alt='' /></button>
            </form>
            <div className={styles.Ldated}><p>Last updated: <span>18th  March, 2024</span></p></div>
          </div>

          <div className={styles.logo}>
            <Image src="/Logo.svg" alt='logo' width={400} height={400}/>
          </div>
          

          <div className={styles.links}>
            <AuthLinks />
            <button type="submit" value="Submit" className='w-24 rounded bg-slate-300 h-12'><Link href="/login/page.jsx">Sign In</Link></button>
          </div>
      </div>
    );
};

export default Navbar;