import DetailsProduct from "./DetailsProduct";
import SlideProduct from "./SlideProduct";

const MainProduct = () => {
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideProduct/>
            <DetailsProduct/>
        </main>
    )
}
export default MainProduct;
        