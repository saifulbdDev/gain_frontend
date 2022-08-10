import { useState, useEffect } from "react";
const isBottom = (el) => {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
};
const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  function handleScroll() {
    const wrappedElement = document.getElementById("table");
    if (isBottom(wrappedElement)) {
      setTimeout(() => {
       
        setIsFetching(true);
      }, 100);
    }
  
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
