import CartContext from "./cart-context";



const CartProvider = (props) => {
     const addItemToCartHandler = items=> {};
     const removeItemFromCartHandler= id=>{};


    const dynamiccontext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={dynamiccontext}> {props.children}</CartContext.Provider>;
};

export default CartProvider
