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
        // Number Rating
        case 'BY_RATING': {
            return {
                ...state,
                'BY_RATING': payload
            }
        };
        // TOPLOW, LOWTOP, NONE
        case 'SORT_BY_PRICE': {
            // true means top to low and false means low to high
            return {
                ...state,
                'SORT_BY_PRICE': payload
            }
        };
        // ALL, OUT, IN
        case 'FILTER_BY_STOCK': {
            return {
                ...state,
                'FILTER_BY_STOCK': payload
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
                // Number Rating, 0 means all, top: 5
                'BY_RATING': 0,
                // TOPLOW, LOWTOP, NONE
                'SORT_BY_PRICE': 'NONE',
                // ALL, OUT, IN
                'FILTER_BY_STOCK': 'ALL',
                // Seach param
                'FILTER_BY_SEARCH': '',
            }
        }
        default: {
            return state;
        }
    }
}