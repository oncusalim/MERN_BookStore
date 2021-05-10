import React, { useState } from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

export const MediaCard = (props) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  console.log(props.data)
  return (
    <div onClick={()=>history.push({
      pathname: "/books/details", 
      state:{data:props.data}
    })}>
      <Skeleton loading={loading} active >
        <Card
        
          
          hoverable
          loading={loading}
          className="media-card"
          cover={<img alt="cover" src={props.imgSrc} />}
        >
          <Meta title={props.data.title} description={props.data.description} />
        </Card>
      </Skeleton>
    </div>
  );
};