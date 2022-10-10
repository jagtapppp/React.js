import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts,AddToCart } from "../Redux/Reducers/ProductSlice";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { carts } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products , loading } = useSelector((state) => state.products);

  return (
    <div>
      <div className="container">
        <div className="col-md-12">
          <NavLink to={"/product"}>
        <button className="btn btn-primary my-2 my-sm-0 mx-3 cart1" type="submit">cart:{carts.length}</button>
        </NavLink>
          <div className="row">
            <h1 className="text-center">All products</h1>
            {loading && <h2 className="text-center">Loading....</h2>}
            {products &&
              products.map((item) => {
                return (
                  <div className="card card1 mx-auto my-4">
                    <img
                      className="card-img-top img-responsive"
                      src={`${item.image}`}
                      alt="img top"
                    />
                    <div className="card-body">
                      <p className="card-text">{item.title}</p>
                      <p className="card-text">{item.price}</p>
                      <button onClick={()=>dispatch(AddToCart(item.id))} className="btn btn-info">Add to Cart</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
