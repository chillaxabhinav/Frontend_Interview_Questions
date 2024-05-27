export const CommerceReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FETCH_PRODUCTS': {
            return {
                ...state,
                products: payload.products,
            }
        }
        default: return state;
    }
};

export const FilterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        // ALL, EXCLUDE
        case 'INCLUDE_OUT_OF_STOCK': {
            return {
                ...state,
                'INCLUDE_OUT_OF_STOCK': payload
            }
        };
        case 'FILTER_BY_SEARCH': {
            return {
                ...state,
                'FILTER_BY_SEARCH': payload
            }
        };
        case 'CLEAR_FILTERS': {
            return {
                ...state,
                // ALL, OUT, IN
                'INCLUDE_OUT_OF_STOCK': true,
                // Seach param
                'FILTER_BY_SEARCH': '',
            }
        }
        default: {
            return state;
        }
    }
}