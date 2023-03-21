import NextIcon from "@/components/iconos/NextIcon"
import PrevIcon from "@/components/iconos/PrevIcon"
import CloseIcon from '@/components/iconos/CloseIcon'
import { useEffect, useRef, useState } from "react"
//import { useRef } from "react"

export default ({ARRAY_IMG = [],
                 ARRAR_IMG_SMALL = [],
                 isOpenModal = false,
                 handleCloseModal = null,
                 handleOpenModal = null,
                    ...props
}) => {
    //const btnSlider = useRef(null);
    const btnSlider = useRef(null)
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
      //console.log(btnSlider.current)
      if(isOpenModal) return btnSlider.current.classList.remove('md:hidden')
    }, [isOpenModal])
    

    const HandleClickNext = () => {
        if( index === ARRAY_IMG.length -1) return setIndex(0);
        setIndex(index + 1)
    }
    const HandleClickPrev = () => {
        if(index === 0) return setIndex(ARRAY_IMG.length -1);
        setIndex(index - 1);
    }

    return(
        <section {...props}>
            {
                isOpenModal && <button className="col-span-4 " onClick={handleCloseModal}>
                    <CloseIcon fill="white"/>
                </button>
            }
            <div className="col-span-4 relative">
                {/* <img src={ARRAY_IMG[index]} alt="" className="aspect-[16/13] w-full md:rounded  xl:mt-20 " onClick={handleOpenModal}/> */}
                <img src={ARRAY_IMG[index]} alt="" className="aspect-[16/13] objec  t-cover w-full md:aspect-[16/18] md:cursor-pointer md:rounded-md xl-aspect-[16/16] 2xl:max-h-[500px] xl:mt-20" onClick={handleOpenModal}/>
                <div ref={btnSlider} className="absolute top-1/2 left-0 -traslate-y-1/2 flex w-full justify-between px-4 md:hidden">
                    <button className="bg-white w-10 h-10 rounded-full grid place-items-center" onClick={HandleClickPrev}>
                        <PrevIcon/>
                    </button>
                    <button className="bg-white w-10 h-10 rounded-full grid place-items-center" onClick={HandleClickNext}>
                        <NextIcon/>
                    </button>
                </div>
            </div>
            {
                ARRAR_IMG_SMALL.map((smallImg, i) => (
                        
                    <div key={smallImg} onClick={() => {setIndex(i)}} className="relative rounded overflow-hidden">
                        <img
                            src={smallImg} 
                            alt="" className="hidden md:block"/>
                        <span className={`h-full w-full top-0 hover:bg-[rgba(255,255,255,0.5)] absolute cursor-pointer ${i === index && "bg-[rgba(255,255,255,0.5)] border-2 border-orange-primary"}`}></span>
                    </div>
                ))
            }
            {/* 
            <img src={imgProduct2Small} alt="" className="hidden md:block"/>
            <img src={imgProduct3Small} alt="" className="hidden md:block"/>
            <img src={imgProduct4Small} alt="" className="hidden md:block"/> */}
        </section>
    );
};