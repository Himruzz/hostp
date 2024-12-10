import Image from "next/image";
import { ProductService } from "./serivices/ProductService";
import Products from "./products/page";
import Link from "next/link";

export default async function Home() {
  let all_products = await ProductService.getProducts("/products");
  let products = all_products.slice(15,18);
  // console.log(products);

  return (
    <>
      <div className="hero">
        <h1>Featured products</h1>
      </div>
   
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((p: any) => (
          <div className="col" key={p.id}>
            <div className="card h-100 shadow-sm border-light">
              <img
                src={p.image}
                className="card-img-top"
                alt={p.title}
                style={{ objectFit: "contain", height: "200px", width: "100%" }}
              />
              <div className="card-body">
                <div className="card-top-title">
                  <h5 className="card-title">
                    <Link href={`/products/${p.id}`}>
                    {p.title.length > 150
                      ? `${p.title.substring(0, 150)}...`
                      : p.title}</Link>
                  </h5>
                </div>
                <div className="card_text">
                {/* <p className="card-text">
                  {p.description.length > 150
                    ? `${p.description.substring(0, 150)}...`
                    : p.description}
                </p> */}
                </div>
                <h5 className="text-muted">${p.price}</h5>
                <a href="#" className="btn btn-primary w-100">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
