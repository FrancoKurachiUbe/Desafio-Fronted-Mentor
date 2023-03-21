import DetailsProduct from "@/components/product/Details/DetailsProduct";
import GalleryProduct from "@/components/product/Gallery/GalleryProduct";

import imgProduct1 from "@/assets/imagenes/image-product-1.jpg"
import imgProduct2 from "@/assets/imagenes/image-product-2.jpg"
import imgProduct3 from "@/assets/imagenes/image-product-3.jpg"
import imgProduct4 from "@/assets/imagenes/image-product-4.jpg"
import imgProduct1Small from "@/assets/imagenes/image-product-1-thumbnail.jpg"
import imgProduct2Small from "@/assets/imagenes/image-product-2-thumbnail.jpg"
import imgProduct3Small from "@/assets/imagenes/image-product-3-thumbnail.jpg"
import imgProduct4Small from "@/assets/imagenes/image-product-4-thumbnail.jpg"

const ARRAY_IMG = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]
const ARRAR_IMG_SMALL = [imgProduct1Small, imgProduct2Small, imgProduct3Small, imgProduct4Small]
const ObjetProduct = {
    id: 1,
    title:"Fall Limited Edition Sneakers",
    descripcion: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    subtitle:"Sneaker Company",
    price:250,
    discount:0.5,
    imagesMain:ARRAY_IMG,
    imagesSmall:ARRAR_IMG_SMALL
}

const MainProduct = () => {
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-88px-3px)] md:container md:mx-auto items-center">
            <GalleryProduct 
                ARRAY_IMG={ObjetProduct.imagesMain} 
                ARRAR_IMG_SMALL={ObjetProduct.imagesSmall} 
            />
            <DetailsProduct ObjetProduct={ObjetProduct}/>
        </main>
    )
}
export default MainProduct;
        