import Context from './index';
import React, { useEffect, useState } from 'react';

const FilterProvider = (props) => {
    const [brand, setBrand] = useState(['Diesel', 'Hudson', 'Lee']);
    const [value, setValue] = useState({ min: 100, max: 950 });
    const [sortBy, setSortBy] = useState('');
    const [category, setCategory] = useState('');
    const [searchBy, setSearchBy] = useState('');
    const [colors, setColor] = useState('');
    const [filterContext, setFilterContext] = useState(false);
    const [filter, setFilter] = useState({
        brand: brand,
        color: colors,
        value: value,
        sortBy: sortBy,
        searchBy: searchBy,
        category: category,
    });
    useEffect(() => {
    }, [setBrand, setValue, setSortBy, setCategory, setColor, setFilter, setSearchBy]);

    const filterCategory = (category) => {
        setCategory(category);
        setFilter((prev) => ({ ...prev, category: category }));
    };

    const filterBrand = (brand) => {
        setBrand(brand);
        setFilter((prev) => ({ ...prev, brand: brand }));
    };

    const filterColor = (color) => {
        setColor(color);
        setFilter((prev) => ({ ...prev, color: color }));
    };

    const filterPrice = (val) => {
        setValue({ min: val[0], max: val[1] });
        setFilter((prev) => ({ ...prev, value: value }));
    };

    const filterSortBy = (sort_bys) => {
        setSortBy(sort_bys);
        setFilter((prev) => ({ ...prev, sortBy: sortBy }));
    };

    const filterSearchBy = (search) => {
        setSearchBy(search);
        setFilter((prev) => ({ ...prev, searchBy: search }));
    };

    return (
        <Context.Provider
            value={{
                ...props,
                brand,
                colors,
                sortBy,
                searchBy,
                value,
                filter,
                filterContext,
                setFilterContext: setFilterContext,
                filterCategory: filterCategory,
                filterBrand: filterBrand,
                filterColor: filterColor,
                filterPrice: filterPrice,
                filterSearchBy: filterSearchBy,
                filterSortBy: filterSortBy,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default FilterProvider;
