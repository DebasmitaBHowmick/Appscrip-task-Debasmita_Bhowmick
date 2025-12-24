import Head from "next/head";
import ProductHome from "../components/ProductHome";

export async function getServerSideProps() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_URL || 'https://fakestoreapi.com/products');
    if(!res.ok){ 
      throw new Error('Failed to fetch data');
    };

    const products = await res.json();
    //console.log(products);
    return {
      props: {products}
    };
   
  } catch (error) {
    console.error(error);

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
      </Head>
      <ProductHome products = {products} />
    </>
  );
}
