import imgProduct1 from "../../assets/imagenes/image-product-1.jpg"
import imgProduct2 from "../../assets/imagenes/image-product-2.jpg"
import imgProduct3 from "../../assets/imagenes/image-product-3.jpg"
import imgProduct4 from "../../assets/imagenes/image-product-4.jpg"
import imgProduct1Small from "../../assets/imagenes/image-product-1-thumbnail.jpg"
import imgProduct2Small from "../../assets/imagenes/image-product-2-thumbnail.jpg"
import imgProduct3Small from "../../assets/imagenes/image-product-3-thumbnail.jpg"
import imgProduct4Small from "../../assets/imagenes/image-product-4-thumbnail.jpg"
import NextIcon from "@/components/iconos/NextIcon"
import PrevIcon from "@/components/iconos/PrevIcon"
import { useState } from "react"

const ARRAR_IMG = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]
export default () => {
    const [index, setIndex] = useState(0);

    const HandleClickNext = () => {
        if( index === ARRAR_IMG.length -1) return setIndex(0);
        setIndex(index + 1)
    }
    const HandleClickPrev = () => {
        if(index === 0) return setIndex(ARRAR_IMG.length -1);
        setIndex(index - 1);
    }

    return(
        <section className="grid grid-cols-1 md:grid-cols-4 md:gap-8">
            <div className="col-span-4 relative">
                <img src={ARRAR_IMG[index]} alt="" className="aspect-[16/12]" />
                <div className="absolute top-1/2 left-0 -traslate-y-1/2 flex w-full justify-between px-4">
                    <button className="bg-white w-10 h-10 rounded-full grid place-items-center" onClick={HandleClickPrev}>
                        <PrevIcon/>
                    </button>
                    <button className="bg-white w-10 h-10 rounded-full grid place-items-center" onClick={HandleClickNext}>
                        <NextIcon/>
                    </button>
                </div>
            </div>
                           
            <img src={imgProduct1Small} alt="" className="hidden md:block"/>
            <img src={imgProduct2Small} alt="" />
            <img src={imgProduct3Small} alt="" />
            <img src={imgProduct4Small} alt="" />
        </section>
    );
};