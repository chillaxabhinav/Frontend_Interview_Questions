import { CommerceState } from '../context/context';
import Filters from '../components/filter';
import { useEffect, useState } from 'react';

const Home = () => {
    const [productState, setProductState] = useState([]);

    const { state, filterState } = CommerceState();

    const { INCLUDE_OUT_OF_STOCK, FILTER_BY_SEARCH } = filterState;

    const { products } = state;

    useEffect(() => {
        let filtered = products;
        if (!INCLUDE_OUT_OF_STOCK) {
            filtered = filtered.filter(product => product.inStock === true);
        }
        if (FILTER_BY_SEARCH !== "") {
            filtered = filtered.filter(product => product.title.toLowerCase().includes(FILTER_BY_SEARCH.toLowerCase()));
        }
        setProductState(filtered);
    }, [FILTER_BY_SEARCH, INCLUDE_OUT_OF_STOCK, products]);

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
