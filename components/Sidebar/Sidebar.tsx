import { RootState } from "@/store/store";
import { Typography, List } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import styles from "./Sidebar.module.css";
import CountryItem from "../CountryItem/CountryItem";
import { Country, fetchCountries } from "@/features/countries/countriesSlice";
import { useEffect, useMemo } from "react";

const { Title } = Typography;

const Sidebar = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const { isOpen, countries } = useAppSelector((state: RootState) => ({
    isOpen: state.sidebar.isOpen,
    countries: state.countries.countries,
  }));

  const sortedCountries = useMemo(() => {
    const sortCountriesByName = (countries: Country[]) => {
      return countries
        .map(country => country[0])
        .sort((a, b) => a.name.common.localeCompare(b.name.common));
    };

    return sortCountriesByName(countries);
  }, [countries]);

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
        dataSource={sortedCountries}
        renderItem={country => <CountryItem country={country} />}
      />
    </aside>
  );
};

export default Sidebar;
