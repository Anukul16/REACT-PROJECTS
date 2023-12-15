import { CartState } from '../context/Context';
import '../styles/card.css'

const Card = () => {
    const {
        cartState: {
            products,
            cart
        },
        cartDispatch,
    } = CartState()

    // console.log("CArd: ", cart);

    return (
        <>
            {products.map((prod) => (
                <div key={prod.id} className="col-md-3 mt-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={prod.image} className="card-img-top" alt={prod.name} />
                        <div className="card-body">
                            <h5 className="card-title">{prod.name}</h5>
                            <p className="card-text">
                                <strong>Price:</strong> {prod.price} /-<br />
                                <strong>Fast Delivery:</strong> {prod.fastDelivery ? "Possible" : "Not Possible"} <br />
                            </p>
                            {
                                cart.some((p) => p.id === prod.id) ? (
                                    <button
                                        className="btn btn-primary bg-danger"
                                        onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })}
                                    >
                                        Remove From Cart
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary bg-success"
                                        onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: prod })}
                                    >
                                        Add To Cart
                                    </button>
                                )
                            }




                        </div>
                    </div>
                </div >
            ))}

        </>
    )
}

export default Card