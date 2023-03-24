import { Card, Typography } from "antd";
import styles from "./Card.module.css";
const { Meta } = Card;
const { Title, Paragraph } = Typography;

type IProps = {
  isBig?: boolean;
};

const CardContainer = ({ isBig }: IProps) => {
  return (
    <Card
      hoverable={!isBig}
      cover={
        isBig ? null : (
          <img
            alt="example"
            src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg"
          />
        )
      }
      className={isBig ? styles.card_big : styles.card}
    >
      <Meta
        title={<Title level={4}>Tytuł kafelka</Title>}
        description={
          isBig && (
            <Paragraph>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              odio sunt eos pariatur ipsam, recusandae perspiciatis explicabo
              nulla gfdagaegfodio sunt eos pariatur ipsam, recusandaedagaegfodio
              sunt eos perspiciatis explicabexplicabodsg...read more sunt eos
              perspiciatis explicabexplicabodsg...read more
            </Paragraph>
          )
        }
      />
    </Card>
  );
};

export default CardContainer;
