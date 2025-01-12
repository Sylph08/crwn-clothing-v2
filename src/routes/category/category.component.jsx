import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.development';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {
                    products && products.map((item) => <ProductCard key={item.id} product={item} />)
                    // need to check 'products' because it is a result of async function
                }
            </div>
        </Fragment>
    );
};

export default Category;