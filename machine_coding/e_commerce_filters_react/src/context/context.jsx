import { createContext, useContext, useEffect, useReducer } from 'react';

import { CommerceReducer, FilterReducer } from './reducer';

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
        // ALL, INCLUDE
        INCLUDE_OUT_OF_STOCK: true,
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