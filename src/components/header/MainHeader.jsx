import LogoSneakes from "../../assets/imagenes/logo.svg";
import AvatarImg from "../../assets/imagenes/image-avatar.png";
import MenuIcon from "../iconos/MenuIcon";
import IconCart from "../iconos/IconCart";
import CloseIcon from "../iconos/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "./NavLinkHeader";
const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden font-blond md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0")

    const handleOpenMenu = () => { 
        //console.log('click');
        setNavClass("absolute top-0 left-0 flex w-4/6 h-full flex-col p-8 gap-y-[21px] font-blond md:static md:flex md:h-auto md:flex-row md:gap-4 md:mr-auto md:p-0 bg-white")
    }
    const handleCloseMenu = () => {
        setNavClass("hidden font-blond md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ");
    }
    return(
        <>
            <header className=" container mx-auto flex items-center gap-8 p-4 md:p-0 ">
                <button className="md:hidden" onClick={handleOpenMenu}> <MenuIcon/> </button>
                <img src={LogoSneakes} alt="Logo de Sneakes" className="mr-auto md:mb-1 md:mr-0"/>
                <nav className={navClass}>
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
                    <button><IconCart/></button>
                    <img src={AvatarImg} alt="Imagen del Usuario" className="w-10" />
                </div>
            </header>
            <span className="container mx-auto md:block h-[2px] w-full bg-gray-500"></span>
        </>  
        );
};
export default MainHeader ;


