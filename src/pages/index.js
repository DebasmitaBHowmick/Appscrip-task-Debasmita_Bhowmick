import Head from "next/head";
import ProductHome from "../components/ProductHome";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) throw new Error("API failed");

    const products = await res.json();

    return { props: { products } };
  } catch (error) {
    console.error("SSR fetch failed:", error.message);

    return {
      props: { products: [] }
    };
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
