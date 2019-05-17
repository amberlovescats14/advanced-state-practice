import React from "react";
import Reviews from './Reviews';


function ProductDetail(props) {
  const {name,description,rating,imgUrl} = props.product;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" />);
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
        <div className="caption">
          <h4><a href="#">{name}</a>
          </h4>
          <p>{description} 
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">15 reviews</p>
          <Reviews product={props.product}/>
          <p>
            {stars}
          </p>
        </div>
      </div>
   
    </div>
  );
}

const buttonStyle = {
  border: '2px solid grey',
  borderRadius: '8px',
  background: 'grey',
  color: 'white'
}
export default ProductDetail;
