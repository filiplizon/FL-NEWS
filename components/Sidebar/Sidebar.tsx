import { Divider, Row, Typography, Layout, List, Avatar } from "antd";

import styles from "./Sidebar.module.css";

const { Title } = Typography;

const data = [
  {
    title: "Polanddsfasdafsdf 1",
  },
  {
    title: "Polanddsf 2",
  },
  {
    title: "Po 3",
  },
  {
    title: "Polanddsfsd 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
  {
    title: "Polanda 4",
  },
];

const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <Title level={4}>Select country:</Title>
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className={styles.list_item}>
            <List.Item.Meta
              className={styles.list_item_meta}
              avatar={
                <Avatar
                  className={styles.list_item_avatar}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrbNy1dieu6xoTQpfCRfzyp0PKKuTWWt9Vg7cmnVj4t-YR1g5j7fPpyVLXELzxdBJ_J8&usqp=CAU"
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
            />
          </List.Item>
        )}
      />
    </aside>
  );
};

export default Sidebar;
