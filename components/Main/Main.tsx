import { fetchNews } from "@/features/news/newsSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { Row } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import News from "../News/News";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";

const MainContent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { country } = router.query;

  useEffect(() => {
    dispatch(fetchNews({ countryName: country }));
  }, [country, dispatch]);

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
