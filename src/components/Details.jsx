import React from "react";

function Details(props) {
  return (
    <div>
      <p className="info">{props.detailTel}</p>
      <p className="info">{props.detailEmail}</p>
    </div>
  );
}

export default Details;
