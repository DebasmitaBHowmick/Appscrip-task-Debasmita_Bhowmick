

import Head from "next/head";
import ProductHome from "../components/ProductHome";

export async function getServerSideProps({ req }) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host;

    const res = await fetch(`${protocol}://${host}/api/products`);
    const products = await res.json();

    return { props: { products } };
  } catch (error) {
    console.error("SSR error:", error.message);
    return { props: { products: [] } };
  }
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
