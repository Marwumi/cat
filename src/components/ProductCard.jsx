import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <div className="m-2 ">
      <div className="container"  style={{paddingTop: '70px'}}>
        <div className="row">
          {items.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card" style={{ backgroundColor: "wheat" }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">#{item.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className=" chkout"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
