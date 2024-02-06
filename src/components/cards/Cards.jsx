import Link from "next/link";
import styles from "./cards.module.css";
import Image from "next/image";

const Cards = () => {
  return (
    <div className={styles.container}>
      {/* Featured */}
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>

      <div className={styles.cards}>
        <div className={styles.post}>
          <Image src="/sample.png" width={100} height={100} alt="post" />
          <div className={styles.readPost}>
            <p>politics
            </p>
            <h1>The Curmudgeon of Rivington Street</h1>
            <p>As his Lower East Side apartment crumbled, a former Club Kid resented the moneyed millennials who filled his building. Then he let them in on a transformative secret.</p>
            <p>10 min read</p>
          </div>
        </div>
      </div>

      {/* Trending now and other features */}
      <div className={styles.extras}>

        <div className={styles.extra1}>
          <div className={styles.extra1Con}>
            <h1>Trending Now </h1>
            <ol>
              <li><Link href="/about">Texas Border</Link></li>
              <li><Link href="/about">Computers</Link></li>
              <li><Link href="/about">Bill Cosby</Link></li>
              <li><Link href="/about">Oj Simpson</Link></li>
              <li><Link href="/about">Coup de tat</Link></li> 
            </ol>
            
          </div>
        </div>

        <div className={styles.extra2}>
          <h1>Best of last week</h1>
          <div className={styles.pos}>
            <h1>After Years, F.B.I. Recovers Remains of American Woman in Afghanistan</h1>
            <Image src="/sample.png" width={90} height={90} alt="pic"/>
            <p>Real-world celebrities respond to the outlandish observations and questions of a pompous stop-motion puppet in the comedy “In the Know.” <br></br> Here’s more on that series and other entertainment highlights this weekend</p>
          </div>
        </div>
        <div className={styles.extra3}>
          <h1>In case you missed it </h1>
          <div className={styles.extraPosts}>
            <p>The Menu Trends That Define Dining Right Now</p>
            <Image src="/sample.png" width={90} height={90} alt="pic"/>
          </div>
          <div className={styles.extraPosts}>
            <p>After Years, F.B.I. Recovers Remains of American Woman in Afghanistan</p>
            <Image src="/sample.png" width={90} height={90} alt="pic"/>
          </div>
          <div className={styles.extraPosts}>
            <p>The One Part of the Housing Market That’s Growing</p>
            <Image src="/sample.png" width={90} height={90} alt="pic"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;