import React, { useEffect, useState } from "react";
import "../assets/css/home.css";

import { Scrollbars } from "react-custom-scrollbars-2";

const Home = () => {
  const [data, setData] = useState ([
    {
      "categoryName": "category 1",
      "categoryId": 1,
      "quantity" : 0,
      "totalPrice":0,
      "products": [
        {
          "id":1,
          "imgFileName": "dubai-marina.png",
          "title": "Product 1",
          "price": 2,
          "description": "Arabian Ranches offers a modern interpretation...",
          "quantity" : 0,
          "totalPrice":0,
        },
        {
          "id":2,
          "imgFileName": "dubai-marina.png",
          "title": "Product 2",
          "price": 10,
          "description": "Arabian Ranches offers a modern interpretation...",
          "quantity" : 0,
          "totalPrice":0,
        },
        {
          "id":3,
          "imgFileName": "dubai-marina.png",
          "title": "Product 3",
          "price": 100,
          "description": "The Centre of Now. The most prestigious square...",
          "quantity" : 0,
          "totalPrice":0,
        }
      ]
    },
    {
      "categoryName": "category 2",
      "categoryId": 2,
      "quantity" : 0,
      "totalPrice":0,
      products: [
        {
          "id":4,
          "imgFileName": "dubai-marina.png",
          "title": "Product 4",
          "price": 50,
          "description": "Sustainably designed, Dubai Hills Estate is...",
          "quantity" : 0,
          "totalPrice":0,
        },
        {
          "id":5,
          "imgFileName": "dubai-marina.png",
          "title": "Product 5",
          "price": 500,
          "description": "Dubai Marina is one of the world’s largest...",
          "quantity" : 0,
          "totalPrice":0,
        },
        {
          "id":6,
          "imgFileName": "dubai-marina.png",
          "title": "Product 6",
          "price": 1000,
          "description": "Launched in 2003, Emirates Living is a...",
          "quantity" : 0,
          "totalPrice":0,
        }
      ]
    }
  ]);
  
  const banner = [
    {
      imgFileName: "dubai-marina.png",
      title: "Service 1",
    },
    {
      imgFileName: "dubai-marina.png",
      title: "Service 2",
    },
    {
      imgFileName: "dubai-marina.png",
      title: "Service 3",
    },
    {
      imgFileName: "dubai-marina.png",
      title: "Service 4",
    },
    {
      imgFileName: "dubai-marina.png",
      title: "Service 5",
    },
    {
      imgFileName: "dubai-marina.png",
      title: "Service 6",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleClick = () => {
    console.log("btn clk");
    setStartIndex((prevIndex) => (prevIndex + 3) % data.length);
  };

 const [res, setRes] = useState({"grandQuantity":0, "grandTotal":0})

useEffect(()=>{
  let grandQuantity = 0;
  let grandTotal = 0;
  data.forEach((category)=>{
    grandQuantity += category.quantity
    grandTotal += category.totalPrice
  })
  setRes({"grandQuantity":grandQuantity, "grandTotal":grandTotal})
},[data])

  const updateProduct = (categoryId, productId, quantity) => {

   
   setData(prevData => {
      const newData = [...prevData];
      
  
      newData.forEach(category => {
        if (category.categoryId && category.categoryId === categoryId) {
          category.products.forEach(product => {
            if (product.id === productId) {
              product.quantity = quantity;
              product.totalPrice = quantity * product.price;
            }
          });
  
          category.quantity = category.products.reduce((acc, curr) => acc + parseInt(curr.quantity), 0);
          category.totalPrice = category.products.reduce((acc, curr) => acc + curr.totalPrice, 0);
          
         
        }
      });
  
      return newData;
    });
 
  };
  



  return (
    <div>
    <nav class="navbar navbar-light bg-light sticky-top">
  <a class="navbar-brand" href="#">
    <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="20" alt="MDB Logo" loading="lazy" />
  </a>
  <div>
      <button type="button" className="btn btn-outline-primary border me-3">
        Quantity: {res.grandQuantity}
      </button>
      <button type="button" className="btn btn-outline-primary border">
        Total price: ₹{res.grandTotal}
      </button>
    </div>
  <div></div>
</nav>

      <div className="container">
        <h1 className="text-center m-4 mb-0">Available Products</h1>

        
    {data.map((category) => (
  <div key={category.categoryId}>
    {category.categoryName && <button type="button" className="btn btn-outline-primary mb-3 mt-5" style={{ width: "100%" }}>
      {category.categoryName}
    </button>}
    <div className="d-flex justify-content-center align-items-center">
      <div className="row g-5">
        {category.products && category.products.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6">
            <div className="card rounded-0">
              <img
                src={require(`../assets/images/${item.imgFileName}`)}
                className="card-img-top rounded-0"
                alt="Card image"
                style={{ height: "250px" }}
              />
              <div className="card-body">
                <div className="card-text-container">
                  <p className="card-text">{item.title}</p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">Actual Price : <span className="text-decoration-line-through text-danger">{item.price}</span></p>
                    <p className="card-text" style={{ fontWeight: 'bold'}}>Discount Price : <span className="text-success">{item.price}</span></p>
                  </div>
                  {item.description && <div className="scrollable-container" style={{maxHeight: '4rem', overflowY: 'scroll', }}>
                    <p className="card-text" style={{marginRight: '17px'}}>
                      {item.description}
                    </p>
                  </div>}
                </div>
              </div>

              <div className="d-flex justify-content-between m-2 align-items-center">
                <button type="button" className="btn btn-primary" style={{ fontWeight: 'bold'}} onClick={() => updateProduct(category.categoryId, item.id, (item.quantity-1))}>-</button>
                <input type="number" className="form-control" value={item.quantity} style={{ width: "100px" }} onChange={(e) => updateProduct(category.categoryId, item.id, e.target.value)}/>
                <button type="button" className="btn btn-primary" style={{ fontWeight: 'bold'}} onClick={() =>updateProduct(category.categoryId, item.id, (item.quantity+1))}>+</button>
                <p className="card-text">Total Price : {item.totalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))}


        <h1
          className="text-center"
          style={{ marginTop: "60px", marginBottom: "40px" }}
        >
          OUR SERVICES
        </h1>

        <div
          className="d-none d-md-block position-relative"
          style={{ marginBottom: "20px" }}
        >
          <div className="row">
            {banner.slice(startIndex, startIndex + 3).map((item, index) => (
              <div key={index} className="col-md-4">
                <img
                  src={require(`../assets/images/${item.imgFileName}`)}
                  style={{ height: "50vh" }}
                  className="img-fluid"
                  alt={`Image ${startIndex + index + 1}`}
                />

                <div
                  className="d-flex justify-content-center"
                  style={{
                    color: "white",
                    marginTop: "-50px",
                    fontWeight: "bold",
                    zIndex: 3,
                  }}
                >
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "-200px" }}>
            <button
              className="arrow-button"
              onClick={() => handleClick(-3)}
              style={{
                left: 0,
                transform: "translateX(-50%)",
                position: "absolute",
                border: "none",
              }}
            >
              &larr;
            </button>

            <button
              className="arrow-button"
              onClick={() => handleClick(-3)}
              style={{
                position: "absolute",
                right: 0,
                border: "none",
                transform: "translateX(50%)",
              }}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: "65vh", marginLeft: "30px" }}>
        <Scrollbars>
          <div className="d-md-none container-fluid p-0">
            <div className="d-flex flex-row flex-nowrap">
              {banner.map((item, index) => (
                <div key={index} className="mr-2">
                  <img
                    src={require(`../assets/images/${item.imgFileName}`)}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "350px",
                      height: "400px",
                      marginRight: "20px",
                    }}
                  />

                  <div
                    className="d-flex justify-content-center"
                    style={{
                      color: "white",
                      marginTop: "-50px",
                      fontWeight: "bold",
                      zIndex: 3,
                    }}
                  >
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Scrollbars>
      </div>
      <div className="fixed-bottom d-flex justify-content-end p-3">
      <button type="button" className="btn btn-primary">Proceed to Buy</button>
    </div>
    </div>
  );
};

export default Home;
