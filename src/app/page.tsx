import HomeFirstSection from "@/components/home/homeFirstSection";
import styles from "./page.module.css";
import HomeHeader from "@/components/home/homeHeader";
import HomeSecondSection from "@/components/home/homeSecondSection";
import HomeBlog from "@/components/home/homeBlog";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeader />
      <HomeFirstSection />
      {/* @ts-expect-error Server Component */}
      <HomeBlog />
      <HomeSecondSection />
    </main>
  );
}
