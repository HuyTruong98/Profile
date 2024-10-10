import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='NextJS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='TypeScript' />
        <SkillList src={checkMarkIcon} skill='Bootstrap & Ant & Material UI' />
        <SkillList src={checkMarkIcon} skill='Redux' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='NodeJS (ExpressJS,NestJS)' />
        <SkillList src={checkMarkIcon} skill='MongoDB, MySQL' />
        <SkillList src={checkMarkIcon} skill='ORM(Sequelize,Prisma,Mongoose)' />
        <SkillList src={checkMarkIcon} skill='Firebase' />
        <SkillList src={checkMarkIcon} skill='Docker' />
      </div>
      <hr />
      <div className={styles.skillList}></div>
    </section>
  );
}

export default Skills;
