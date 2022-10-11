import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import './shop.styles.scss'

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
            {/* ':category' is a parameter that can be accessed in Category component */}
        </Routes>
    );
};

export default Shop;