import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.development';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import './category.styles.scss';

const Category = () => {
    const { category } = useParams(); // take the param from URL
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                isLoading ? (<Spinner />) :
                    (
                        <div className='category-container'>
                            {
                                products && products.map((item) => <ProductCard key={item.id} product={item} />)
                                // need to check 'products' because it is a result of async function
                            }
                        </div>
                    )
            }

        </Fragment>
    );
};

export default Category;