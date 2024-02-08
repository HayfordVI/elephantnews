import React from 'react';
import MenuPosts from "../menuPosts/MenuPosts"
import styles from "./menu.module.css"

const Trending = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Trending Now </h1>
        <MenuPosts withImage={false} />

        <h1 className={styles.title}>Best of The Week</h1>

        <h1 className={styles.title}>Incase You Missed it</h1>
        <MenuPosts withImage={true} />
        
    </div>
  )
}

export default Trending; 


{/* <ol>
          <li><Link href="/about">Texas Border</Link></li>
          <li><Link href="/about">Computers</Link></li>
          <li><Link href="/about">Bill Cosby</Link></li>
          <li><Link href="/about">Oj Simpson</Link></li>
          <li><Link href="/about">Coup de tat</Link></li> 
        </ol> */}