import Head from "next/head";
import { products } from "./api/products";
import ProductHome from "../components/ProductHome";

export async function getServerSideProps() {
  return {
    props: {
      products,
    },
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
