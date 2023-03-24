import { Row } from "antd";
import News from "../News/News";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";

const MainContent = () => {
  return (
    <main className={styles.wrapper}>
      <Row className={styles.main}>
        <News />
        <Sidebar />
      </Row>
    </main>
  );
};

export default MainContent;
