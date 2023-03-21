import imgSmall from "@/assets/imagenes/image-product-1-thumbnail.jpg"
import DeleteIcon from "@/components/iconos/DeleteIcon";
import {useCartDetails} from "@/context/useCartDetails";
import { useContext } from "react";
export default  () => {
const {cartProduct, deleteCartProduct} = useContext(useCartDetails); 

    return(
        <section className="absolute top-[125%] left-0 z-10 w-full md:max-w-md md:left-full md:-translate-x-full">
            <div className="mx-4 rounded-md bg-white shadow-md py-5">
                <h4 className="py-3 font-bold text-lg px-5">Cart</h4>
                <hr />
                {
                    cartProduct.length === 0 && (<p className="py-10 text-center">Your cart is empty</p>
                )}
                {
                    cartProduct.map(product => (
                        <article key={product.id} className="grid grid-cols-[1fr_4fr_1fr] gap-4 py-8 items-center px-5">
                            <img src={product.img} alt="" className="rounded-md"/>
                            <div>
                                <h6>{product.title}</h6>
                                <p>
                                    <span>${product.discountPrice} x {product.quantity} </span> 
                                    <span className="font-bold">${(product.discountPrice * product.quantity).toFixed(2)}</span>
                                </p>
                            </div>
                            <button className="ml-auto" onClick={() => deleteCartProduct(product.id)}>
                                <DeleteIcon className="hover:fill-orange-primary"/>
                            </button>
                        </article>
                    ))
                }
                {
                    cartProduct.length != 0 && (
                        <div className="px-5">
                            <button className=" flex w-full py-3 items-center justify-center bg-orange-primary hover:bg-orange-800 transition-all text-white rounded-md ">
                                Checkout
                            </button>
                        </div>
                )}
            </div>
        </section>
    );
 };