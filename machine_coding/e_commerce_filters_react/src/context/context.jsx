import { createContext, useContext, useEffect, useReducer } from 'react';

import { CommerceReducer } from './reducer';

const CommerceContext = createContext();

const CommerceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CommerceReducer, {
        products: []
    });

    const fetchProducts = async () => {
        const res = await fetch('./products.json');
        const data = await res.json();

        if (data && data.products) {
            dispatch({
                type: 'FETCH_PRODUCTS',
                payload:{
                    products: data.products
                }
            })
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        // Number Rating, 0 means all, top: 5
        BY_RATING: 0,
        // TOPLOW, LOWTOP, NONE
        SORT_BY_PRICE: 'NONE',
        // ALL, OUT, IN
        FILTER_BY_STOCK: 'ALL',
        // Seach param
        FILTER_BY_SEARCH: '',
    });

    return (
        <CommerceContext.Provider value={{ state, dispatch, filterDispatch, filterState }}>
            {children}
        </CommerceContext.Provider>
    )
};

export const CommerceState = () => {
    return useContext(CommerceContext);
}

export default CommerceProvider;