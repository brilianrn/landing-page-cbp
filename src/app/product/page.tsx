"use client";

import dynamic from "next/dynamic";

const ProductListView = dynamic(
  () =>
    import("@/packages/product/presentation/view").then(
      (mod) => mod.ProductListView
    ),
  {
    ssr: false,
  }
);

export default ProductListView;
