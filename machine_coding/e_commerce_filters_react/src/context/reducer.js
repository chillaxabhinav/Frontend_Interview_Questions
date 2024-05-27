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
}