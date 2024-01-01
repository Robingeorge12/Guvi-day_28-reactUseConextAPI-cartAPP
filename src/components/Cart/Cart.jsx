import React, { useContext, useState } from "react";
import "./Cart.css";
import { AppContext } from "../../Context/Context";

function Cart() {
  const { cart, handleRemove, incPrice,total } = useContext(AppContext);


  // console.log();
  // console.log(cart);

  const handleChangeQuantity = (count, id, el) => {
    console.log(el);

    incPrice(id, count, el);
  };

  return (
    <div className="container bg-white cart-main">
 <div className="col border d-flex justify-content-between align-items-center border-dark-subtle
  rounded py-2 px-3 mt-6 total">
        <p className="p-0 m-0 cart-header-total">TOTAL AMOUNT</p>
        <p className="p-0 m-0 cart-header-totalAmount">
          <span>CHECKOUT</span><span><p></p></span>
          ${total ? total : "Add Items"}</p>
      </div>

      <div className="row row-gap-3 cart-rowDiv">
        {cart?.map((item, i) => {
          return (
            <div
              key={i}
              className="card col-sm-12 col-md-12 col-lg-12 bg-light d-flex flex-column align-items-center
               justify-content-center cart-colDiv"
            >
              <div
                className="row d-flex justify-content-between align-items-center
               cart-part1"
              >
                <div
                  className=" col-md-8 col-lg-8 d-flex justify-content-between h-100 
                cart-lf"
                >
                  <div className="col-4 cart-lf-imgDiv">
                    <img
                      className="img-thumbnail h-100 imCart"
                      src={item.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="col-8 d-flex px-3 flex-column justify-content-between cart-lf-textDiv">
                    {/* text */}
                    {/* <div className="card-body"> */}
                    <h5 className="card-title pt-2 text-start">{item.title}</h5>
                    <p className="card-text text-muted text-start cart-t1">
                      {item.brand}
                    </p>
                    <p className="card-text text-break text-start cart-lt-text">
                      {item.description}
                    </p>

                    <p className="card-text text-muted pb-3 text-start cart-t1">
                      {item.category}
                    </p>
                  </div>
                  {/* </div> */}
                </div>
                <div
                  className=" col-md-4 col-lg-4 h-100 d-flex justify-content-between 
                align-items-center
                 cart-rt"
                >
                 

                  <div className="col-sm-10 col-md-6 col-lg-5 cart-select">
                    <div className="selDiv">
                      <select
                      
                        onChange={(e) =>
                          handleChangeQuantity(e.target.value, item.id, item)
                        }
                        className="sel"
                      >
                        <option defaultValue={1}>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                    </div>

                    <div className="cart-price">${item.price}</div>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id,item)}
                    className="btn btn-danger border-0 cart-remove"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <hr className="hr1" />

              <div className="row text-muted cart-part2">
                <div className="col12 d-flex justify-content-between align-items-center cart-one">
                  <p className="">SUBTOTAL</p>
                  <p>${item.subtotal == 0 ? item.price : item.subtotal}</p>
                </div>
                <div className="col12 d-flex p-0 m-0 justify-content-between align-items-center cart-two">
                  <p className=" p-0 m-0 ">SHIPPING</p>
                  <p className={`${item.shipFee ? "cart-ship" : "cart-ship2"}`}>
                    ${item.shipFee ? item.shipFee : "FREE"}
                  </p>
                </div>
              </div>

              <hr className="my-0 hr2" />

              <div className="row d-flex flex-column justify-content-between align-items-center cart-part3">
                <div className="col12 d-flex justify-content-between align-items-center cart-three">
                  <p className="">SUBTOTAL</p>
                  <p>
                    $
                    {item.shipFee
                      ? item.subtotal + +item.shipFee
                      : item.subtotal}
                  </p>
                </div>
                <div className="col12 d-flex justify-content-end align-items-center cart-four">
                  {/* <p>SHIPPING</p> */}
                  <p>{"Get Daily Cash With Nespola Card"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col border d-flex justify-content-between align-items-center border-dark-subtle rounded py-2 px-3 mt-6 total">
        <p className="p-0 m-0 x">TOTAL AMOUNT</p>
        <p className="p-0 m-0 y">${total ? total : "Add Items"}</p>
      </div>
    </div>
  );
}

export default Cart;
