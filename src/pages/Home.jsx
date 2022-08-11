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
  const [search, setSearch] = useState("");
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
    scrollTop >= 150
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
  }, []);
  useEffect(() => {
    const filteredData = data.filter((el) => {
      //if no input the return the original
      if (search === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return (
          el.phone_title?.toUpperCase().includes(search.toUpperCase()) ||
          el.brand?.toUpperCase().includes(search.toUpperCase())
        );
      }
    });
    setStoreData(filteredData);
  }, [search]);
  return (
    <>
      {/* Navbar */}
      <header className="header">
        <Navbar onHide={() => setModal(true)} setSearch={setSearch} />
      </header>
      {/* Chart section */}
      {storeData && storeData.length > 0 ? (
        <>         
          <section className="myChart-section">
            <div className="container">            
                <div className="row my-4">               
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
            </div>
          </section>
          {/* product section */}
          <section className="product-section" id="product">
            <div className="container">
              <Products storeData={storeData} />
            </div>
          </section>
        </>
      ) : (
        <div className="col-md-6 serach-div"><h2>No matching records found!  </h2></div>
      )}
      {showModal ? (
        <Modal addProduct={addProduct} onHide={() => setModal(false)} />
      ) : (
  ''
      )}
    </>
  );
}

export default Home;
