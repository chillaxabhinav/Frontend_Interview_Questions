import { CommerceState } from '../context/context';

const Filters = () => {
    const { filterState, filterDispatch } = CommerceState();
    console.log(filterState);
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-row gap-3 items-center'>
                <label>Include out of stock</label>
                <input
                    type='checkbox'
                    name='stock'
                    checked={filterState.INCLUDE_OUT_OF_STOCK}
                    onChange={(e) => filterDispatch({
                        type: 'INCLUDE_OUT_OF_STOCK',
                        payload: e.target.checked ? true : false
                    })}
                />
            </div>
        </div>
    )
};

export default Filters;
