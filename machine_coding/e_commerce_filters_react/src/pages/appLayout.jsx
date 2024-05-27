import { CommerceState } from '../context/context';

import Home from './home';

const AppLayout = () => {
    const { filterDispatch, filterState } = CommerceState();
    return (
        <div className='flex flex-col p-4 gap-5'>
            <div className='flex flex-row items-center justify-between font-mono'>
                <div className='text-2xl'>E-Commerce Store</div>
                <div>
                    <input
                        type='text'
                        placeholder='Search Product...'
                        className='text-2xl'
                        onChange={(e) => filterDispatch({
                            type: 'FILTER_BY_SEARCH',
                            payload: e.target.value
                        })}
                        value={filterState.FILTER_BY_SEARCH}
                    />
                </div>
            </div>
            <Home />
        </div>
    )
};

export default AppLayout;
