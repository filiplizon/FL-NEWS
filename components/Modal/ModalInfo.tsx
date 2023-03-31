import { Typography } from "antd";

const { Paragraph, Title } = Typography;

const ModalInfo = () => {
  return (
    <>
      <Title level={5}>Co sprawiło mi największą frajdę?</Title>
      <Paragraph>
        Zdecydowanie praca z nowo poznanymi narzędziami. Jest to moja pierwsza
        aplikacją, którą stworzyłem za pomocą create-next-app, po raz pierwszy
        również miałem okazję skorzystać z atnd. Uważam, że bardzo przyjemnie
        tworzy się z tą biblioteką komponenty. Zadanie ciekawe, udało mi się
        wykonać wszystkie funkcjonalności wymagane w jego opisie.
      </Paragraph>
      <Title level={5}>Na jakie przeszkody trafiłem?</Title>
      <Paragraph>
        Największą przeszkodą był czas. Niestety z powodów prywatnych po moich
        godzinach pracy miałem jego ograniczoną ilość, ale starałem się w każdej
        dłuższej wolnej chwili conieco zakodować. Gdybym miał go troszkę więcej,
        wzbogaciłbym aplikację o możliwość wyboru języka aplikacji za pomocą
        i18n oraz dodał testy.
      </Paragraph>
    </>
  );
};

export default ModalInfo;
