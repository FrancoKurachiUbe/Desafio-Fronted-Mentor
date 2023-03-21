import LogoSneakes from "@/assets/imagenes/logo.svg";
import AvatarImg from "@/assets/imagenes/image-avatar.png";
import MenuIcon from "@/components/iconos/MenuIcon";
import IconCart from "@/components/iconos/IconCart";
import CloseIcon from "../iconos/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetailsHeader from "./CartDetailsHeader";
import { useContext, useState } from "react";
import { useCartDetails } from "@/context/useCartDetails";
const MainHeader = () => {

    const [isOpenMenu, setOpenMenu] = useState(false)
    const [isOpenDetailsCart, setOpenDetailsCart] = useState(false)
    const {totalQuantityProduct} = useContext(useCartDetails); 
    
    const handleOpenMenu = () => { 
        setOpenMenu(true)
    }
    const handleCloseMenu = () => {
        setOpenMenu(false)
    }

    return(
        <>
            <header className="relative container mx-auto flex items-center gap-8 p-4 md:p-0 ">
                <button className="md:hidden" onClick={handleOpenMenu}> <MenuIcon/> </button>
                <img src={LogoSneakes} alt="Logo de Sneakes" className="mr-auto md:mb-1 md:mr-0"/>
                <nav className={`font-blond md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${isOpenMenu ? 'absolute top-0 left-0 flex w-4/6 h-full flex-col p-8 gap-y-[21px] bg-white z-10' : 'hidden'}`}>
                    <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                        <CloseIcon/>
                    </button>
                    <NavLinkHeader text="Colections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex gap-4">
                    <button onClick={() => setOpenDetailsCart(!isOpenDetailsCart)} className="relative" >
                        <IconCart/>
                        <span className="absolute top-0 right-0 traslate-x-1 bg-orange-primary px-1 rounded-full text-xs text-white font-bold">{totalQuantityProduct !== 0 &&(totalQuantityProduct)}</span>
                    </button>
                    <img src={AvatarImg} alt="Imagen del Usuario" className="w-10"/>
                    {
                        isOpenDetailsCart && <CartDetailsHeader/>
                    }
                </div>
            </header>
            <span className="container mx-auto md:block h-[2px] w-full bg-gray-500"></span>
        </>  
        );
};
export default MainHeader ;


