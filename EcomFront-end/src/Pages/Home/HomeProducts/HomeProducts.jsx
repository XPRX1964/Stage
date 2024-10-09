import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsGrid from "./ProductsGrid";

function HomeProducts() {
  return (
    <div className="flex flex-col items-center w-screen">
      <ProductsHeader />
      <ProductsGrid cardwidth="300px" />
    </div>
  );
}

export default HomeProducts;
