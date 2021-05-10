import React, { useState, useEffect } from "react";
import { Row, Col, Image, Card, Rate, Button } from 'antd';
import {useParams} from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function BookDetail({}) {
  const location = useLocation();   
  const [data, setData] = useState()
  const { Meta } = Card;
    useEffect(() => {
      
      setData(location.state.data);
    }, [])
  

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
      <Button type="primary">SEPETE EKLE</Button>
    </Card>
  </div>
     
    
    </Col>
  </Row>
  );
}