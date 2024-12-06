import { ProductService } from "@/app/serivices/ProductService";
import React from "react";

const productdetails = async (props: any) => {
  let productid = props.params.productid;
  let product = await ProductService.getProducts(`/products/${productid}`);

  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title"> {product.title}</h5>
          <p className="card-text">
           {product.description}
          </p>
          <h6>          {product.price}
          </h6>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default productdetails;
