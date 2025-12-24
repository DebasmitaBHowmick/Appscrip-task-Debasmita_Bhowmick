import { useState, useMemo } from "react";
import styles from "@/styles/productList.module.css";
import Accordian from "./Accordian";
import SideBar from "./SideBar";

const ProductHome = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <p>No products are available</p>
      </div>
    );
  }

  const [sortOption, setSortOption] = useState("RECOMMENDED");

  //Logic for sorting products based on sortOption using memoization

  const sortProducts = useMemo(() => {
    let sortedProducts = [...products];

    switch (sortOption) {
      case "PRICE : HIGH TO LOW":
        return sortedProducts.sort((a, b) => b.price - a.price);

      case "PRICE : LOW TO HIGH":
        return sortedProducts.sort((a, b) => a.price - b.price);

      case "NEWEST FIRST":
        return sortedProducts.reverse(); // FakeStore has no date, acceptable for assignment
      case "POPULAR":
        return sortedProducts.sort((a, b) => b.rating?.count - a.rating?.count);

      default:
        return sortedProducts;
    }
  }, [products, sortOption]);

  //For sidebar filters
  const [filters, setFilters] = useState(false);

  return (
    <section className={styles.productsPage}>
  {/* Heading */}
  <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
  <p className={styles.subtitle}>
    lorem* ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
    tempor incididunt ut labore et dolore magna aliqua. 
  </p>

  {/* Toolbar / Accordion */}
  <Accordian totalItems={products.length}
    sortOption={sortOption}
    onSortChange={setSortOption}
    onToggleFilters={() => setFilters((prev) => !prev)} />

  {/* Sidebar + Products */}
  <div className={styles.sideLayout}>
    {/* Sidebar */}
    {filters && (
      <aside className={styles.sidebarSlot}>
        <SideBar isOpen={filters} />
      </aside>
    )}

    {/* Products Grid */}
    <div className={styles.grid}>
      {sortProducts.map((product) => (
        <article key={product.id} className={styles.card}>
          <div className={styles.imageWrap}>
            <img
              src={product.image}
              alt={product.title || "Product Image"}
              className={styles.image}
            />
          </div>

          <div className={styles.info}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.category}>{product.category}</p>
            <p style={{fontStyle: "italic"}}>{product.description}</p>

            <div className={styles.meta}>
              <span className={styles.price}>₹ {product.price}</span>
              <span className={styles.wishlist}>♡</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProductHome;
