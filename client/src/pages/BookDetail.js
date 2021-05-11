import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Image, Card, Rate, Button } from 'antd';
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const { Meta } = Card;

export default function BookDetail({}) {
  const location = useLocation();   
  const [data, setData] = useState()
  const [buttonFlag, setButtonFlag] = useState(false)
  
  const {selectedBooks, setSelectedBooks} = useContext(AuthContext)

  const history = useHistory()

  const addShoppingCart = async()=>{
    let myList = await localStorage.getItem("selectedBooks");
   
    myList = JSON.parse(myList)
    let removedList = [];

    if (!buttonFlag) { 
    setSelectedBooks((prev)=> [...prev,data])
    sessionStorage.setItem("selectedBooks", JSON.stringify(selectedBooks) )
    } else {
    myList.filter((value)=>{
       if (value._id !== data._id) removedList.push(value) 
      
    })
    setSelectedBooks(removedList)
    sessionStorage.setItem("selectedBooks", JSON.stringify(selectedBooks) )  
  }
    setButtonFlag((prev)=>!prev)
  }

    useEffect(() => {
      console.log("useefect", selectedBooks)
      console.log("useefect data", data)

      setData(location.state.data);
      selectedBooks?.map((value)=>{
        if (value._id==data?._id) setButtonFlag(true) 
      })

    }, [data])
  

  return (
   
    <Row>
       
    <Col span={8} order={1}>
    
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={data?.url} />}
  >
    
    <Rate disabled defaultValue={2} />
 
    
  </Card>
    
   
    </Col>
    <Col span={16} order={2}>
   
    <Card title= {data?.title} bordered={false} >
      <p>Description: {data?.description}</p>
      <p>Price: {data?.price}TRY</p>
      <p>Page: {data?.page}</p>
      <Button type="primary" onClick={()=>addShoppingCart()} >
        {!buttonFlag ? "SEPETE EKLE" : "SEPETTEN ÇIKAR" }</Button>
    
    </Card>
  
     
    
    </Col>
  </Row>

  );
}