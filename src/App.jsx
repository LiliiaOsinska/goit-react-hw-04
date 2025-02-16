import { useEffect } from "react";
import { useState } from "react";
import { fetchArticles } from "../src/services/api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    // axios
    //   .get(
    //     `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=1&query=office`
    //   )
    //   .then((res) => setArticles(res.data.results));
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchArticles(query, page);
        setArticles((prev) => [...prev, ...results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    // console.log(newQuery);
    setQuery(newQuery);
    setArticles([]); // при новому запиті видаляє дані старого
    setPage(1); // починає новий запит з 1 стр.
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar handleSetQuery={handleSetQuery} />
      <ImageGallery articles={articles} openModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {articles.length > 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </>
  );
};
export default App;
