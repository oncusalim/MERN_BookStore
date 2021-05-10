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

  const addShoppingCart = ()=>{
    let myList = selectedBooks
    let removedList = [];
    if (!buttonFlag) { 
    setSelectedBooks((prev)=> [...prev,data])
    } else {
    
    
    myList.filter((value)=>{
       if (value._id !== data._id) removedList.push(value) 
      
    })
    setSelectedBooks(removedList)  
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
       
    <Col span={8}>
      <div className="site-card-border-less-wrapper">
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={data?.url} />}
  >
    
    <Rate disabled defaultValue={2} />
 
    
  </Card>
    
    
    </div>
    </Col>
    <Col span={16}>
    <div className="site-card-border-less-wrapper">
    <Card title= {data?.title} bordered={false} style={{ width: 300 }}>
      <p>Description: {data?.description}</p>
      <p>Price: {data?.price}TRY</p>
      <p>Page: {data?.page}</p>
      <Button type="primary" onClick={()=>addShoppingCart()} >
        {!buttonFlag ? "SEPETE EKLE" : "SEPETTEN ÇIKAR" }</Button>
    
    </Card>
  </div>
     
    
    </Col>
  </Row>
  );
}