import { Card, Typography } from "antd";
import styles from "./Card.module.css";
const { Meta } = Card;
const { Title, Paragraph } = Typography;

type IProps = {
  isSlider?: boolean;
};

const CardContainer = ({ isSlider }: IProps) => {
  return (
    <Card
      hoverable={!isSlider}
      cover={
        isSlider ? null : (
          <img
            alt="example"
            src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg"
          />
        )
      }
      className={isSlider ? styles.card_big : styles.card}
    >
      <Meta
        title={<Title level={4}>Tytuł kafelka</Title>}
        description={
          isSlider && (
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
