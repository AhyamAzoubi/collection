import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/Context";
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;
  return (
    <>
      <div className="row mx-5 my-3 position-relative ">
        {data.map((product, index) => {
          product.quantity = 1;
          return (
            <div className="col-md-2 mb-2 " key={index}>
              <div
                className="card h-100 text-center p-2  cart-products  img-home"
                key={product.id}
                height="150px"
              >
                <img
                  src={product.image}
                  className="card-img-top "
                  // width={"100px"}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="fs-6">{product.title.substring(0, 12)}</h5>
                  <p className=" fs-6">${product.price}</p>
                  <div className="position-absolute bottom-0 start-50 translate-middle-x ">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() =>
                        dispatch({ type: "add", payload: product })
                      }
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
