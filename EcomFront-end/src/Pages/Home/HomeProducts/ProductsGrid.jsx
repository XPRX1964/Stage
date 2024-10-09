import React from "react";
import ProductGridCard from "./ProductGridCard";

function ProductsGrid() {
  const products = [
    {
      id: 1,
      productname: "product1",
      price: "$100",
      imgsrc1: "/Images/p1i1.png",
      imgsrc2: "/Images/p1i2.png",
    },
    {
      id: 2,
      productname: "product2",
      price: "$100",
      imgsrc1: "/Images/p2i1.png",
      imgsrc2: "/Images/p2i2.png",
    },
    {
      id: 3,
      productname: "product3",
      price: "$100",
      imgsrc1: "/Images/p1i2.png",
      imgsrc2: "/Images/p1i1.png",
    },
    {
      id: 4,
      productname: "product4",
      price: "$100",
      imgsrc1: "/Images/p4i1.png",
      imgsrc2: "/Images/p2i1.png",
    },
    {
      id: 5,
      productname: "product5",
      price: "$100",
      imgsrc1: "/Images/p2i2.png",
      imgsrc2: "/Images/p4i1.png",
    },
    {
      id: 6,
      productname: "product6",
      price: "$100",
      imgsrc1: "/Images/p6i1.png",
      imgsrc2: "/Images/p6i2.png",
    },
    {
      id: 7,
      productname: "product7",
      price: "$100",
      imgsrc1: "/Images/p7i1.png",
      imgsrc2: "/Images/p7i2.png",
    },
    {
      id: 8,
      productname: "product8",
      price: "$100",
      imgsrc1: "/Images/p7i2.png",
      imgsrc2: "/Images/p8i1.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 laptop:grid-rows-auto laptopl:grid-cols-4 place-items-center">
      {products.map((product) => (
        <ProductGridCard
          key={product.id}
          productname={product.productname}
          price={product.price}
          imgsrc1={product.imgsrc1}
          imgsrc2={product.imgsrc2}
        />
      ))}
    </div>
  );
}

export default ProductsGrid;
