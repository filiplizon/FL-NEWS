import { List, Avatar } from "antd";
import Link from "next/link";
import styles from "./CountryItem.module.css";
import { Country } from "@/features/countries/countriesSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { selectCountry } from "@/features/countries/countriesSlice";

const CountryItem = ({ country }: Country) => {
  const dispatch = useAppDispatch();
  return (
    <List.Item className={styles.list_item}>
      <List.Item.Meta
        className={styles.list_item_meta}
        avatar={
          <Avatar className={styles.list_item_avatar} src={country.flags.png} />
        }
        title={
          <a
            onClick={() => dispatch(selectCountry(country.cca2))}
            className={styles.link}
            // href={`country/${country.cca2}`}
          >
            {country.name.common}
          </a>
        }
      />
    </List.Item>
  );
};

export default CountryItem;
