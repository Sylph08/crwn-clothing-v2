import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // this commented code below is used to insert data to firebase so we just do 1 time
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};