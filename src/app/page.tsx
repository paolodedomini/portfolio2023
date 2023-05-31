"use client";
import HomeFirstSection from "@/components/home/homeFirstSection";
import styles from "./page.module.css";
import HomeHeader from "@/components/home/homeHeader";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeader />
      <HomeFirstSection />
    </main>
  );
}
