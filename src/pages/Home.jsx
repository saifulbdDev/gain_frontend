import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import Navbar from "../components/Navbar";
import Modal from "../components/Modals/AddProduct";
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import Products from "../components/Product/Products";
import data from "../Data/data.1659939065";
import { newPro } from "../utils/newPro";
function Home() {
  const [storeData, setStoreData] = useState(data);

  const [showModal, setModal] = useState(false);

  const addProduct = (childdata) => {
    const newProduct = newPro(childdata);

    setStoreData([...storeData, newProduct]);
    NotificationManager.success(
      `Product Name: ${newProduct.phone_title}`,
      "Product added successfully"
    );
  };
  const isSticky = () => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 50
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
  }, []);
  return (
    <>
      {/* Navbar */}
      <header className="header">
        <Navbar onHide={() => setModal(true)} />
      </header>
      {/* Chart section */}
      <section className="myChart-section">
        <div className="container">
          {storeData && storeData ? (
            <div className="row my-4">
              {" "}
              <div className="col-md-5">
                <div className="myChartDiv">
                  <h3 className="myChartDiv-title">Sourse</h3>
                  <div className="card-body mt-3">
                    <PieChart chatData={storeData} />
                  </div>
                </div>
              </div>
              <div className="col-md-7  ">
                <div className="myChartDiv">
                  <h3 className="myChartDiv-title">Condition</h3>
                  <div className="card-body mt-3">
                    <BarChart chatData={storeData} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>

      {/* product section */}
      <section className="product-section" id="product">
        <div className="container">
          <Products storeData={storeData} />
        </div>
      </section>
      {showModal ? (
        <Modal addProduct={addProduct} onHide={() => setModal(false)} />
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
