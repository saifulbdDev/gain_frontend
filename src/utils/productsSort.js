const productsSort = (value, data) => {
    let filterData = []
  // All products
  if (value === "all-products") {
    filterData = data;
   
  }

  // Best value products
  if (value === "best-value") {
    const valueProducts = data.filter((item) => {
      if (
        (item.phone_price <= 20000 &&
          item.ram >= "4" &&
          item.storage >= "64" &&
          item.brand === "Xiaomi") ||
        item.brand === "Realme"
      ) {
        return item;
      }
    });

    filterData = valueProducts;
  }

  // Best camera products
  if (value === "best-camera") {
    const cameraProducts = data.filter((item) => {
      if (
        parseInt(
          item.phone_details.mainCamera.split(",")[0].match(/\d+/g)[0]
        ) >= 16 &&
        parseInt(
          item.phone_details.selfieCamera.split(",")[0].match(/\d+/g)[0]
        ) >= 13 &&
        item.storage >= "64" &&
        item.phone_details.external.includes("microSDXC")
      ) {
        return item;
      }
    });
    filterData = cameraProducts;
   
  }

  // Best performance products
  if (value === "best-performance") {
    const performanceProducts = data.filter((item) => {
      if (
        item.phone_details.chipset.includes("Snapdragon") &&
        item.phone_price > 20000 &&
        item.ram > "4" &&
        item.storage >= "128" &&
        item.speciality[4] === "1080p display"
      ) {
        return item;
      }
    });
    filterData = performanceProducts;
   
  }
 return  filterData
};
export { productsSort };