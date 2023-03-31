import { RootState } from "@/store/store";
import { Typography, List } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import styles from "./Sidebar.module.css";
import CountryItem from "../CountryItem/CountryItem";
import { fetchCountries } from "@/features/countries/countriesSlice";
import { useEffect } from "react";

const { Title } = Typography;

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const { isOpen, countries } = useAppSelector((state: RootState) => ({
    isOpen: state.sidebar.isOpen,
    countries: state.countries.countries,
  }));

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <aside
      className={styles.wrapper}
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <Title level={4}>Select country:</Title>
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={countries}
        renderItem={country => <CountryItem country={country} />}
      />
    </aside>
  );
};

export default Sidebar;
