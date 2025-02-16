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

const ImageModal = ({ isOpen, closeModal, image }) => {
  console.log(image);
  if (!image) return null;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} // Закриває при кліку поза модалкою або ESC
        style={customStyles}
      >
        <div className={s.modal_info}>
          <p>
            <span>Автор: {image.user.name || "Невідомий"}</span>
          </p>
          <p>
            <span>Лайки: {image.likes}</span>
          </p>
          <a
            className={s.image_link}
            href={image.links.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            Відкрити оригінал
          </a>
        </div>
        <div>
          <img
            className={s.modal_img}
            src={image?.urls?.regular}
            alt="Large preview"
          />
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
