import React, { useState } from "react";
import Select from "react-select";
const Modal = (props) => {
  const { onHide, addProduct } = props;
  const options = [
    { value: "Best Value", label: "Best Value" },
    { value: "Best Camara", label: "Best Camara" },
    { value: "Best Parfarmance", label: "Best Parfarmance" },
  ];
  const [formDataValues, setFormDataValues] = useState({
    phone_title: "",
    brand: "",
    ram: "",
    storage: "",
    tags: [],
    phone_price: '',
  });
  const { phone_title, brand, ram, storage, tags, phone_price } =
    formDataValues;
  const enabled =
    phone_title.length > 0 &&
    brand.length > 0 &&
    ram.length > 0 &&
    tags.length > 0 &&
    storage.length > 0 &&
    phone_price.length > 0;
  const handleChange = ({ target }) => {
    let newData = { ...formDataValues };
    newData[target.name] = target.value;
    setFormDataValues(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onHide();
    addProduct(formDataValues);

    setFormDataValues();
  };

  return (
    <>
      <div className={`modal fide`}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div
              className="modal-header text-light"
              style={{ backgroundColor: "#0095A0" }}
            >
              <h5 className="modal-title " id="staticBackdropLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onHide}
              ></button>
            </div>

            <div className="modal-body">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="phone_title"
                    value={formDataValues?.phone_title}
                    className="form-control"
                    id="productName"
                    placeholder="Enter Product name"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="brand" className="form-label">
                    Brand
                  </label>
                  <input
                    onChange={handleChange}
                    name="brand"
                    value={formDataValues?.brand}
                    type="text"
                    className="form-control"
                    id="brand"
                    placeholder="Enter Brand Name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Ram</label>
                  <input
                    onChange={handleChange}
                    name="ram"
                    value={formDataValues?.ram}
                    type="number"
                    className="form-control"
                    placeholder="Enter Ran"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Rom</label>
                  <input
                    onChange={handleChange}
                    name="storage"
                    value={formDataValues?.storage}
                    type="number"
                    className="form-control"
                    placeholder="Enter Ran/Rom"
                  />
                </div>

                <div className="col-md-12">
                  <label className="form-label">Tag</label>
                  <Select
                    options={options}
                    placeholder="Select color"
                    // isSearchable={true}
                    width="100%"
                    value={formDataValues?.tags}
                    isMulti
                    name="tags"
                    onChange={(value) =>
                      handleChange({ target: { name: "tags", value } })
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    onChange={handleChange}
                    name="phone_price"
                    type="number"
                    value={formDataValues?.phone_price}
                    className="form-control"
                    id="price"
                    placeholder="Enter Price"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onHide}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!enabled}
                  >
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade `}></div>
    </>
  );
};

export default Modal;
