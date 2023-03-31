import { useAppDispatch } from "@/hooks/hooks";
import { Article } from "@/types/article";
import { List } from "antd";
import { setCurrentArticle } from "@/features/news/newsSlice";
import { toggleModalVisibility } from "@/features/modal/modalSlice";
import styles from "./ListItem.module.css";

type Props = {
  article: Article;
  index: number;
};

const ListItem = ({ article, index }: Props) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setCurrentArticle(article));
    dispatch(toggleModalVisibility());
  };

  return (
    <List.Item
      onClick={handleOnClick}
      className={styles.list_item}
      key={article.id || index}
    >
      <List.Item.Meta
        className={styles.list_item_meta}
        title={article.title}
        description={article.author}
      />
      <span>{new Date(article.publishedAt).toLocaleDateString("pl-PL")}</span>
    </List.Item>
  );
};

export default ListItem;
