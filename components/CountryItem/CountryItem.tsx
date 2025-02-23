import { Country } from "@/types/country";
import { List, Avatar } from "antd";
import Link from "next/link";
import styles from "./CountryItem.module.css";

const CountryItem = ({ country }: { country: Country }) => {
  return (
    <List.Item className={styles.list_item}>
      <List.Item.Meta
        className={styles.list_item_meta}
        avatar={
          <Avatar className={styles.list_item_avatar} src={country.flags.png} />
        }
        title={
          <Link
            className={styles.link}
            href={`/country/${country.name.common.split(" ").join("-")}`}
          >
            {country.name.common}
          </Link>
        }
      />
    </List.Item>
  );
};

export default CountryItem;
