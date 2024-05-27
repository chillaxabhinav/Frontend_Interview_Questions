import { CommerceState } from '../context/context';
import Filters from '../components/filter';
import { useEffect, useState } from 'react';

const Home = () => {
    const [productState, setProductState] = useState([]);

    const { state, filterState } = CommerceState();

    const { BY_RATING, SORT_BY_PRICE, FILTER_BY_STOCK, FILTER_BY_SEARCH } = filterState;

    const { products } = state;

    useEffect(() => {
        setProductState(products);
    }, [BY_RATING, SORT_BY_PRICE, FILTER_BY_SEARCH, FILTER_BY_STOCK, products]);

    return (
        <div className='flex flex-row gap-2 h-[90vh]'>
            <aside className='w-1/3 p-2 border-[1px] border-black'>
                <Filters />
            </aside>
            <main className='w-2/3 p-4 border-[1px] border-black flex flex-wrap gap-[30px] overflow-y-scroll'>
                {productState.map(product => {
                    return (
                        <div className='w-[29%] border-2 border-black p-6 rounded-md' key={product.id}>
                            <img src={product.thumbnail} />
                            <div>{product.title}</div>
                            <div>In Stock- {product.inStock ? 'Yes' : 'No'}</div>
                            <div>Rating- {product.rating || '---'}</div>
                            <div>Price- {product.price}</div>
                        </div>
                    )
                })}
            </main>
        </div>
    )
};

export default Home;
