import { createContext, useContext, useReducer } from "react";
import  {faker}  from '@faker-js/faker';
import { cartReducer } from "./Reducer";

faker.seed(99)
const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    fastDelivery: faker.datatype.boolean(),
  }));
//   console.log("Products: ",products);

  const [cartState,cartDispatch] = useReducer(cartReducer,{
    products:products,
    cart:[]
  })

  return (
    <Cart.Provider value={{cartState,cartDispatch}}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export  const CartState = () => {
    return useContext(Cart)
}
