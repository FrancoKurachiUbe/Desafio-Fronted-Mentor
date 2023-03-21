import IndexHeader from '@/components/header/IndexHeader.jsx';
import IndexProduct from '@/components/product/IndexProduct.jsx';
import CartDetailProvider from '@/context/useCartDetails';
const App = () => { 
    return  (
        <CartDetailProvider>
            <IndexHeader />
            <IndexProduct />
        </CartDetailProvider>
    );
};

export default App;

