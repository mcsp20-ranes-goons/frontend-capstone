import TopNav from "./components/TopNav/TopNav";
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import Footer from "./components/Footer/Footer";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const results = await fetch("http://localhost:3000/api/product");
  const products = await results.json()
  return { products };
}

function App() {
  const { products } = useLoaderData();
  console.log(products)
  return (
    <>
      <TopNav />
      <main className="flex flex-col w-3/4 justify-center m-auto max-w-screen-xl">
        <SecondaryNav />
          {products.length ? (
            <ul className="flex gap-4 text-blue-500">
              {products.map((product) => (
                <li key={product.id} className="hover:underline hover:text-blue-400">
                  <Link to={`product/${product.id}`}>
                    {product.Title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No products</i>
            </p>
          )}
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
