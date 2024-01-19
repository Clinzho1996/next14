import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dev-Clinton</div>
      <div className={styles.text}>
        DC creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
