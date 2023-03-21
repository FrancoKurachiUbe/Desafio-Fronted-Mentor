import SlideProduct from "@/components/product/Gallery/SlideProduct";
import ModalProduct from "@/components/product/Gallery/SlideProduct";
import { useState } from "react";
export default ({ARRAY_IMG, ARRAR_IMG_SMALL}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal  = () => {
        if(window.innerWidth > 767) return setIsOpenModal(true)
          
    }
    const handleCloseModal = () => { 
        setIsOpenModal(false);
     }

    return(
        <>
            <SlideProduct
                ARRAY_IMG={ARRAY_IMG} 
                ARRAR_IMG_SMALL={ARRAR_IMG_SMALL}
                className="grid md:grid-cols-4 md:gap-4"
                handleOpenModal={handleOpenModal}
            />
            { isOpenModal && (
                <>
                    <ModalProduct
                    ARRAY_IMG={ARRAY_IMG} 
                    ARRAR_IMG_SMALL={ARRAR_IMG_SMALL}
                    isOpenModal={isOpenModal}
                    className="hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:top-1/2 md:-translate-x-1/2 md:left-1/2 md:-translate-y-1/2 md:max-w-m md:z-10"
                    handleCloseModal={handleCloseModal}
                    />
                    <span className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-0 left-0"></span>
                </>
            )}
        </>
    )
}