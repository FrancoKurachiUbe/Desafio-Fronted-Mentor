const NavLinkHeader = ({ text }) => {
    return(
        <a href="" className="py-8 relative group">
            <span className="group-hover:text-orange-primary">{text}</span>
            <span className="absolute bottom-0 block w-full h-1 scale-0 group-hover:scale-100 transition-all duration-300 group-hover:bg-orange-primary"></span>
        </a>
    );
};

export default NavLinkHeader; 