import { useEffect, useState } from "react";
const isBottom = (el) => {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
};
const InfiniteScroll = ({ fetchMore }) => {
  const [isLoader, setLoader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const wrappedElement = document.getElementById("product");
  

    if (isBottom(wrappedElement)) {
      // clearTimeout

      setLoader(true);
       setTimeout(() => {
        setLoader(false);
        fetchMore()
     
      }, 1000);
     
    }
  }
  return (
    <>
      {isLoader ? (
        <div   className="loader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150px"
          height="150px"
          viewBox="0 0 100 100"
        
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#0095A0"
            strokeWidth="5"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default InfiniteScroll;
