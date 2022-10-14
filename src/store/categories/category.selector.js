import { createSelector } from "@reduxjs/toolkit";

const selectCategoryReducer = (state) => state.categories;

//memorize
export const selectCategories = createSelector(
    [selectCategoryReducer],
    // the output of function inside the first parameter is the input of the callback of the second parameter
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);