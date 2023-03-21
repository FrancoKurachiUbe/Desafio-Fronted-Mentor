import IconCart from '@/components/iconos/IconCart'
import {useCartDetails} from "@/context/useCartDetails"
import { useContext, useState } from 'react';
export default ({ObjetProduct}) => {
    const {addCartProduct} = useContext(useCartDetails)
    const [count, setCount] = useState(0)
    const decrementCount = () => {
        if(count === 0) return
        setCount(count - 1)
    }
    const handleAddToCart = () => {
        {
            addCartProduct({
                id : ObjetProduct.id,
                img: ObjetProduct.imagesSmall[0],
                title: ObjetProduct.title,
                discountPrice: (ObjetProduct.price * (1 - ObjetProduct.discount)).toFixed(2),
                quantity: count || 1
            });
            setCount(0);
        }
    }
    return(
        <section className="container px-4 mx-auto md:px-0">
            <p className="text-orange-primary font-bold mb-3 tracking-wide uppercase">
                {ObjetProduct.subtitle}
            </p>
            <h2 className="font-bold text-3xl mb-3">
                {ObjetProduct.title}
            </h2>
            <p className="text-dark-grayish-blue mb-4">
                {ObjetProduct.descripcion}
            </p>
            <div className="grid grid-cols-3 font-bold mb-5 md:grid-cols-[1fr_3fr]">
                <span className="text-3xl ">${(ObjetProduct.price * (1 - ObjetProduct.discount)).toFixed(2)}</span>
                <span className="mr-auto bg-pale-orange text-orange-primary rounded-md py-1 px-2">{ObjetProduct.discount * 100}%</span>
                <p className="text-right text-grayish-blue text-lg line-through md:col-span-2 md:text-left">{ObjetProduct.price.toFixed(2)}
                </p>
            </div>
            <div>
                <div className="grid grid-cols-3 font-bold pb-5 md:grid-cols-[1fr_1.5fr] gap-3">
                    <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 px-5 h-12 pt-1 mb-5 md:col-span-1">
                        <button className="text-3xl text-orange-primary" onClick={decrementCount}>-</button>
                        <span className="text-xl">{count}</span>
                        <button className="text-3xl text-orange-primary" onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <button className="col-span-3 flex items-center justify-center gap-x-3 bg-orange-primary hover:bg-orange-800 transition-all text-white rounded-md h-12 md:col-span-1" 
                    onClick={handleAddToCart}>
                        <IconCart fill="white"/>
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    );
};