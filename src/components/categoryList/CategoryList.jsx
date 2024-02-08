import Link from "next/link";
import Image from "next/image";
import styles from "./categoryList.module.css"

const CategoryList = () => {
    return (
      <div className={styles.container}>
        <div><Link href='/'>Ghana</Link></div>
        <div><Link href='/'>World</Link></div>
        <div><Link href='/'>Politics</Link></div>
        <div><Link href='/'>Business</Link></div>
        <div><Link href='/'>Opinion</Link></div>
        <div><Link href='/'>Sports</Link></div>
        <div><Link href='/'>Entertainment</Link></div>
        <div><Link href='/'>Elephant NewsRoom</Link></div> 
      </div>
  );
};

export default CategoryList;