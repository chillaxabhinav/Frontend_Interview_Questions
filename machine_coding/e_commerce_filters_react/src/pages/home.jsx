import { CommerceState } from '../context/context';
import Filters from '../components/filter';
import { useEffect } from 'react';

const Home = () => {
    const { state, filterState } = CommerceState();

    const { BY_RATING, SORT_BY_PRICE, FILTER_BY_STOCK, FILTER_BY_SEARCH } = filterState;

    useEffect(() => {
        // do product filter here
        // dispatching product state here
    }, [BY_RATING, SORT_BY_PRICE, FILTER_BY_SEARCH, FILTER_BY_STOCK])   

    console.log('state ---> ', state);

    return (
        <div className='flex flex-row gap-2 h-screen'>
            <aside className='w-1/3 p-2 border-[1px] border-black'>
                <Filters />
            </aside>
            <main className='w-2/3 p-4 border-[1px] border-black'>
                Products here
                {/* Products Here */}
            </main>
        </div>
    )
};

export default Home;
