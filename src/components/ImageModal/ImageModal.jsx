import Modal from "react-modal";
Modal.setAppElement("#root");

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

const ImageModal = ({ modalIsOpen, closeModal, imageUrl }) => {
  return (
    <>
      <Modal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <img src={imageUrl} onClick={closeModal} />
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
