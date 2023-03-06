import LogoSneakes from "../../assets/imagenes/logo.svg";
import AvatarImg from "../../assets/imagenes/image-avatar.png";
import MenuIcon from "../iconos/MenuIcon";
import IconCart from "../iconos/IconCart";
import CloseIcon from "../iconos/CloseIcon";
import { useState } from "react";
const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden font-blond md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0")

    const handleOpenMenu = () => { 
        //console.log('click');
        setNavClass("absolute top-0 left-0 flex w-4/6 h-full flex-col p-8 gap-y-[21px] font-blond md:static md:flex md:h-auto md:flex-row md:gap-4 md:mr-auto md:p-0 bg-gray-100")
    }
    const handleCloseMenu = () => {
        setNavClass("hidden font-blond md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");
    }
    return(
            <header className="flex container items-end mx-auto px-4 gap-8 bg-slate-200 py-8">
                <button className="md:hidden" onClick={handleOpenMenu}> <MenuIcon/> </button>
                <img src={LogoSneakes} alt="Logo de Sneakes" className="mr-auto md:mb-1 md:mr-0"/>
                <nav className={navClass}>
                    <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                        <CloseIcon/>
                    </button>
                    <a href="">Coleccions</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
                <div className="flex gap-4">
                    <button><IconCart/></button>
                    <img src={AvatarImg} alt="Imagen del Usuario" className="w-10" />
                </div>
            </header>
        )
}
export default MainHeader ;


