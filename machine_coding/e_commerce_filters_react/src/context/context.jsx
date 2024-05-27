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

    return (
        <CommerceContext.Provider value={{ state, dispatch }}>
            {children}
        </CommerceContext.Provider>
    )
};

export const CommerceState = () => {
    return useContext(CommerceContext);
}

export default CommerceProvider;