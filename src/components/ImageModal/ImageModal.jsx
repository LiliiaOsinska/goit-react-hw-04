import Modal from "react-modal";
Modal.setAppElement("#root");
import s from "../ImageModal/ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
  },
  overlay: { backgroundColor: "rgba(18, 18, 18, 0.7)" },
};

const ImageModal = ({ isOpen, closeModal, imageUrl }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} // Закриває при кліку поза модалкою або ESC
        style={customStyles}
      >
        {/* <div className={s.modal_info}>
          <h2>{imageUrl.description || "Без опису"}</h2>
          <p>
            <strong>Автор:</strong> {imageUrl.author || "Невідомий"}
          </p>
          {imageUrl.authorPhoto && (
            <img
              src={imageUrl.authorPhoto}
              alt={imageUrl.author}
              className="author-photo"
            />
          )}
          <p>
            <strong>Лайки:</strong> {imageUrl.likes}
          </p>
          <p>
            <strong>Дата публікації:</strong> {imageUrl.date}
          </p>
          <a
            href={imageUrl.originalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Відкрити оригінал
          </a>
        </div> */}
        <div className={s.modal_img}>
          <img src={imageUrl} alt="Large preview" />
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
