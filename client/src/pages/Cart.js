import React, { useState, useContext, useEffect } from "react";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import {AuthContext} from '../context/AuthContext'

export default function Cart(props) {
  let myList2;
  const {selectedBooks, setSelectedBooks} = useContext(AuthContext)
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const getData = async()=>{
    const myList = await sessionStorage.getItem("selectedBooks")
    myList2 = JSON.parse(myList);
    console.log("myList2",myList2);
    setData(myList2)
    let counter = 0;
    myList2.map((value)=>{
      counter += value.price
    })
    setCount(counter)
  }
  

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div class="shopping-cart">
        <h1 class="title">Shopping Cart</h1>
        {data?.map((value)=>{
         
          return(
     
        <div class="item">
          <div class="buttons">
            <DeleteOutlined style={{ fontSize: 25 }} />
          </div>
          <div class="image">
            <img src={value?.url} alt="" />
          </div>
          <div class="description">
            <span>{value.title}</span>
            <span>{value.author}</span>
            <span>White</span>
          </div>
          <div class="quantity">
            <button class="minus-btn" type="button" name="button">
              <MinusCircleOutlined />
            </button>
            <input type="text" name="name" value="1" />
            <button class="plus-btn" type="button" name="button">
              <PlusCircleOutlined />
            </button>
          </div>
          <div class="total-price">{value.price/100} TRY</div>
        </div>
        )})}

        <StripeCheckout
          stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
          token={() => toast("OK")}
          name="Pay with Stripe"
          //  billingAddress
          //  shippingAddress
          panelLabel="Pay" // prepended to the amount in the bottom pay button
          amount={count} // cents
          currency="TRY" //USD, EUR
        />
      </div>
    </div>
  );
}