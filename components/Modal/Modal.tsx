import { toggleModalVisibility } from "@/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store/store";
import { Typography, Modal, Image } from "antd";
import Link from "next/link";
import { useCallback } from "react";
import styles from "./Modal.module.css";

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

  const handleToggleModalVisibility = useCallback(() => {
    dispatch(toggleModalVisibility());
  }, [dispatch]);

  return (
    <Modal
      keyboard={true}
      title={
        <Title className={styles.modal_title} level={5}>
          {currentArticle?.title || "Trudności i przyjemności"}
        </Title>
      }
      open={isOpen}
      onCancel={handleToggleModalVisibility}
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
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
          similique voluptas! Facilis dolore voluptas temporibus voluptate
          incidunt amet reprehenderit aspernatur, tempore, praesentium
          laboriosam non voluptatum ipsa exercitationem beatae. Voluptatem
          exercitationem deserunt assumenda repudiandae aut, sequi cumque
          distinctio voluptatibus officiis quisquam, est commodi nulla repellat
          magnam. Omnis ea corporis odit! Vel.
        </Paragraph>
      )}
    </Modal>
  );
};

export default ModalContainer;
