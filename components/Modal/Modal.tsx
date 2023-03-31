import { toggleModalVisibility } from "@/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store/store";
import { Typography, Modal, Image } from "antd";
import Link from "next/link";
import { useCallback } from "react";
import styles from "./Modal.module.css";
import ModalInfo from "./ModalInfo";

const { Paragraph, Title } = Typography;

interface ModalState {
  isOpen: boolean;
  currentArticle: {
    title?: string;
    urlToImage?: string;
    content?: string;
    description?: string;
    author?: string;
    publishedAt: string;
    url: string;
  } | null;
}

const regex = /\[\+\d+\s(chars)\]/;

const ModalContainer = () => {
  const dispatch = useAppDispatch();
  const { isOpen, currentArticle }: ModalState = useAppSelector(
    (state: RootState) => ({
      isOpen: state.modal.isOpen,
      currentArticle: state.news.currentArticle,
    })
  );

  const handleClose = useCallback(() => {
    dispatch(toggleModalVisibility());
  }, [dispatch]);

  return (
    <Modal
      keyboard={true}
      title={
        <Title className={styles.modal_title} level={5}>
          {currentArticle?.title || null}
        </Title>
      }
      open={isOpen}
      onCancel={handleClose}
      footer={null}
      className={currentArticle ? styles.modal : styles.modal_info}
    >
      {currentArticle ? (
        <>
          <Image
            className={styles.modal_image}
            alt="news-avatar"
            src={currentArticle.urlToImage || "/news-placeholder.png"}
          />
          <Paragraph style={{ marginTop: "10px" }}>
            {currentArticle.content ? (
              <>
                {currentArticle.content.replace(regex, "")}
                <Link
                  href={currentArticle.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  read more
                </Link>
              </>
            ) : (
              currentArticle.description
            )}
          </Paragraph>
          <Paragraph>{currentArticle.author || "Unknown author"}</Paragraph>
          <Paragraph>
            {new Date(currentArticle.publishedAt).toLocaleDateString("pl-PL")}
          </Paragraph>
          <Link href={currentArticle.url} target="_blank">
            {currentArticle.url}
          </Link>
        </>
      ) : (
        <ModalInfo />
      )}
    </Modal>
  );
};

export default ModalContainer;
