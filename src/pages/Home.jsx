import {  useState } from "react";
import { NotificationManager} from 'react-notifications';
import Navbar from "../components/Navbar";
import Modal from "../components/Modals/AddProduct";
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import Products from "../components/Product/Products";
import data from "../Data/data.1659939065";
import {  newPro } from "../utils/newPro";
function Home() {
  const [storeData, setStoreData] = useState(data);

  const [showModal, setModal] = useState(false);

  const addProduct = (childdata) => {
   const newProduct = newPro(childdata)

  

    setStoreData([...storeData, newProduct])
    NotificationManager.success(`Product Name: ${newProduct.phone_title}`, 'Product added successfully');
  };


  return (
    <>
      {/* Navbar */}
      <header className="header">
        <Navbar onHide={() => setModal(true)} />
      </header>
      {/* product section */}
      <section className="product-section">
        <div className="container">
          {storeData && storeData ? (
            <div className="row my-4">
              {" "}
              <div className="col-md-6">
                <span className="barChart">Condition</span>
                <PieChart chatData={storeData} />
              </div>
              <div className="col-md-6  mt-5">
                <span className="barChart">Sourse</span>
                <BarChart chatData={storeData} />
              </div>
            </div>
          ) : (
            ""
          )}

          <Products storeData={storeData}  />
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
