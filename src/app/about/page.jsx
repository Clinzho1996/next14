import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/14875250/pexels-photo-14875250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
          fill
        />
      </div>
    </div>
  );
};

export default About;
