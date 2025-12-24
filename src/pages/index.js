"use client";

import Head from "next/head";
import ProductHome from "../components/ProductHome";

export async function getServerSideProps() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_URL || 'https://fakestoreapi.com/products', {
      cache: "no-store"
    })

    if(!res.ok){ 
      throw new Error('Failed to fetch data');
    };

    const products = await res.json();
    //console.log(products);
    return {
      props: {products},
    };
   
  } catch (error) {
    console.error("SSR error :",error.message);

    return{
    props: {products: []}
  };
  };
 
}



export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Product listing page" />
      </Head>

      <ProductHome products = {products} />
    </>
  );
}
