import s from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ articles, openModal }) => {
  // if (!articles.length) {
  //   return <p className={s.no_results}>No images found. Try another search.</p>;
  // }

  return (
    <ul className={s.gallery}>
      {articles.map((item) => (
        <li key={item.id} className={s.img_container}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
