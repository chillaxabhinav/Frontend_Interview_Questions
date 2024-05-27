import { useEffect } from 'react';
import { CommerceState } from '../context/context';
import { useSearchParams } from 'react-router-dom';

const Filters = () => {
    const { filterState, filterDispatch } = CommerceState();

    const [param, setParam] = useSearchParams();

    useEffect(() => {
        if (param.size) {
            param.forEach((value, key) => {
                filterDispatch({
                    type: key,
                    payload: value
                })
            })
        }
    }, []);

    useEffect(() => {
        setParam(filterState);
    }, [filterState])

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
            <button
                onClick={() => filterDispatch({
                    type: 'CLEAR_FILTERS'
                })}
            >
                Clear Filters
            </button>
        </div>
    )
};

export default Filters;
