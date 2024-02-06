import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Cards from "@/components/cards/cards";
import Menu from "@/components/menu/Menu";



export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Menu />
      <Cards />
    </div>
  );
}
