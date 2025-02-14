import s from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
  return (
    <div>
      <img
        className={s.img_item}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item.urls.regular)}
      />
    </div>
  );
};
export default ImageCard;
