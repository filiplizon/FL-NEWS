import { List, Avatar } from "antd";
import Link from "next/link";
import styles from "./CountryItem.module.css";
import { Country } from "@/features/countries/countriesSlice";

const CountryItem = ({ country }: Country) => {
  return (
    <List.Item className={styles.list_item}>
      <List.Item.Meta
        className={styles.list_item_meta}
        avatar={
          <Avatar className={styles.list_item_avatar} src={country.flags.png} />
        }
        title={
          <Link className={styles.link} href={`/country/${country.cca2}`}>
            {country.name.common}
          </Link>
        }
      />
    </List.Item>
  );
};

export default CountryItem;
