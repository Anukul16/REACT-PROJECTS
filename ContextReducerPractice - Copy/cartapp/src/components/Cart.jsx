import React from 'react';
import { CartState } from '../context/Context';

const Cart = () => {

  const { cartState: { cart },cartDispatch } = CartState()
  // console.log("From Cart: ", cart);

  return (
    <>
      <div className="container">
        {
          cart.length>0 ?(<table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Product No</th>
              <th scope='col'>Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Fast Delivery</th>
              <th scope='col'>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((prod,id) => (
                <tr key={id}>
                  <th  scope="row">{id+1}</th>
                  <td>
                    <img src={prod.image} alt="Product 1" style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>{prod.fastDelivery ? "Possible":"Not Possible"}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>cartDispatch({type:"REMOVE_FROM_CART",payload:prod})}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>) :
          <div className="div text-center m-5 h1">The Cart Is Empty</div>
        }
      </div>
    </>
  );
}

export default Cart;
