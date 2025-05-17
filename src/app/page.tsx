import RootLayout from "./layout";
import styles from "./page.module.scss";
import { Faq } from "./components/Faq/Faq";
import MainTitle from "./components/MainTitle/MainTitle";
import { CourseInfo } from "./components/CourseInfo/CourseInfo";
import { CourseTabs } from "./components/CourseTabs/CourseTabs";
import { SkillsInfo } from "./components/SkillsInfo/SkillsInfo";
import { WaterAnimation } from "./components/WaterAnimation/WaterAnimation";

export default function Home() {
  return (
    <RootLayout>
      <div className={styles.page}>
        <MainTitle />
        <CourseInfo />
        <SkillsInfo />
        <WaterAnimation />
        <CourseTabs />
        <Faq />
      </div>
    </RootLayout>
  );
}
