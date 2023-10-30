import Headers from '../../components/Headers/Headers';
import CategorySearch from '../../components/CategorySearch/CategorySearch';
import Footer from '../../components/Footer/Footer';
import DetailsBanner from '../../components/DetailsPageComp/DetailsBanner';
import Details from '../../components/DetailsPageComp/Details';

const ProductDetails = () => {
    return (
        <div className='w-full dark:bg-slate-800 transition-colors duration-300'>
            <Headers />
            <CategorySearch />
            <DetailsBanner />
            <Details />
            <Footer />
        </div>
    );
};

export default ProductDetails;