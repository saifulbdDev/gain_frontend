/* eslint-disable eqeqeq */
const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  const newPro = (obj) => {
    return {
      speciality: [
        "Excellent back camera",
        "Fast chipset for heavy usage",
        "Gaming specific chipset",
        "1080p display",
      ],
      phone_images: [
        "https://res.cloudinary.com/towfiqu/image/upload/fl_progressive:steep/v1602744953/masterdeals_v_2.0/q0psvlaiioexlxyamtm5.jpg",
        "https://res.cloudinary.com/towfiqu/image/upload/fl_progressive:steep/v1602744954/masterdeals_v_2.0/le3qh8dc5ff2al9steau.jpg",
        "https://res.cloudinary.com/towfiqu/image/upload/fl_progressive:steep/v1602744955/masterdeals_v_2.0/bscxmcg80ccjc7j3mqe5.jpg",
        "https://res.cloudinary.com/towfiqu/image/upload/fl_progressive:steep/v1602744955/masterdeals_v_2.0/aosvznnbl9vslvwfypn8.jpg",
      ],
      used_phone: false,
      new_phone: true,
      official_warranty: false,
      unofficial_warranty: true,
      no_warranty: false,
      taking_selfies: false,
      taking_photos: true,
      gaming: true,
      mild_usage: false,
      moderate_usage: false,
      heavy_usage: true,
      display_amoled: false,
      high_refresh_rate: false,
      display_res_hd: false,
      display_res_fhd: true,
      added: uuid(),
      more_than_4: false,
      less_than_4: false,
      more_than_64: false,
      less_than_64: false,
      _id: uuid(),
      phone_link:
        "https://bikroy.com/en/ad/xiaomi-redmi-9-4-64gb-global-new-for-sale-dhaka-17",
      phone_title: obj?.phone_title,
      phone_details: {
        model: "Xiaomi Redmi 9",
        released: "2020, June 10",
        displayType: "IPS LCD, 400 nits (typ)",
        displaySize: "6.53 inches, 104.7 cm2 (~83.2% screen-to-body ratio)",
        displayRes: "1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
        mainCamera:
          '13 MP, f/2.2, 28mm (wide), 1/3.1", 1.12µm, PDAF\n8 MP, f/2.2, 118˚ (ultrawide), 1/4.0", 1.12µm\n5 MP, f/2.4, (macro)\n2 MP, f/2.4, (depth)',
        selfieCamera: '8 MP, f/2.0, 27mm (wide), 1/4.0", 1.12µm',
        os: "Android 10, MIUI 11",
        chipset: "Mediatek Helio G80 (12 nm)",
        cpu: "Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
        gpu: "Mali-G52 MC2",
        ram: "4",
        internal_storage: "64",
        external: "microSDXC (dedicated slot)",
        battery: "Li-Po 5020 mAh, non-removable",
        sensors: "Fingerprint (rear-mounted), accelerometer, proximity, compass",
      },
      phone_price: obj?.phone_price,
      _budget: "Low Budget",
      ad_type: "Business",
      ad_category: "Bikroy.com",
      ad_priority: "High",
      youtube_embed: "https://www.youtube.com/embed/3rptT7kXIQ4",
      brand: obj?.brand,
      ram: obj?.ram,
      storage: obj?.storage,
      seller_name: "Maa Mobile Enterprise",
      seller_address: "Mirpur, Dhaka",
      seller_contact: "01303705059",
      __v: 0,
    };
  };
  
  export { newPro };
  