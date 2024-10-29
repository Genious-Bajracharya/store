import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";


export default function Home() {
  return (
    <div className=" bg-slate-50">
      <Navbar/>
      <Hero/>
      <Products/>
 
    </div>
  );
}
