import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import { Fragment, useState } from "react";

function App() {
// lessons from calling a modal : state of a component should be managed from where it is 
  const [isCartVisible,setIsCartVisible]=useState(false);
  const  visiblityHandler=()=>{
    setIsCartVisible((prev)=>{return !prev});
  }
  // visiblity handler function is passed through props.. then there will be a pointer to this function from where it is passed to
  return (
    <CartProvider>
     {isCartVisible? <Cart setVisiblity={visiblityHandler}></Cart>: "" }
      <Header setVisiblity={visiblityHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
