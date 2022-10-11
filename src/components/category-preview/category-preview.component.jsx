import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title} >{title.toUpperCase()}</Link>
                {/* we need to use a Link in h2 because we only want the user clicks on the title to access the link, not all the row because the h2 will spread entire of the row */}
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default CategoryPreview;