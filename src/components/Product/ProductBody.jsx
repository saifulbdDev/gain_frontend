
const Product = ({ sortingProducts, pageSize }) => {
  return (
    <>
    <tbody>
        {sortingProducts?.length > 0 &&
          sortingProducts.slice(0, pageSize).map((data) => {
            const {
              _id,
              phone_images,
              phone_title,
              brand,
              ram,
              storage,
              phone_price,
              speciality,
              phone_details,
            } = data;
            return (
            <tr key={_id} >
              <td className="d-flex align-items-center td-margin">
                <div className="me-4">
                  <img
                    src={
                      phone_images[0]
                        ? phone_images[0]
                        : "https://source.unsplash.com/user/c_v_r"
                    }
                    width="100px"
                    alt=""
                  />
                </div>
                <div className="ptitle">
                  <h5>{phone_title}</h5>
                  <span>{brand}</span>
                </div>
              </td>
              <td>
                <span>
                  {ram}/{storage}
                </span>
              </td>
              <td >
                <div className="tagsName">
                {(phone_price <= 20000 &&
                  ram >= "4" &&
                  storage >= "64" &&
                  brand === "Xiaomi") ||
                brand === "Realme" ? (
                  <span className="tags value-tag ">Best Value</span>
                ) : (
                  ""
                )}

                {phone_details.chipset.includes("Snapdragon") &&
                phone_price > 20000 &&
                ram > "4" &&
                storage >= "128" &&
                speciality[4] === "1080p display" ? (
                  <span className="tags performance-tag mr-2">Best Performance</span>
                ) : (
                  ""
                )}

                {parseInt(
                  phone_details.mainCamera.split(",")[0].match(/\d+/g)[0]
                ) >= 16 &&
                parseInt(
                  phone_details.selfieCamera.split(",")[0].match(/\d+/g)[0]
                ) >= 13 &&
                storage >= "64" &&
                phone_details.external.includes("microSDXC") ? (
                  <span className="tags camera-tag">Best Camera</span>
                ) : (
                  ""
                )}
                </div>
              </td>
              <td>Tk.{phone_price}</td>
            </tr>)
          })}
      </tbody>
    </>
  );
};

export default Product;
