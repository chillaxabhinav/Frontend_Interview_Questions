document.addEventListener("DOMContentLoaded", function () {
    const app = document.querySelector('.app');

    let products = [];
    let currentPage = 1;
    const productsPerPage = 10;

    async function fetchProducts () {
        try {
            const resp = await fetch('https://dummyjson.com/products?limit=100');
            const data = await resp.json();
            console.log(data);
            if (data && data.products) {
                products = data.products;
                render();
            }
        } catch (e) {
            console.log('error while getting products ---> ', e);
        }
    }

    function render () {
        // product list div
        const productListContainer = document.createElement('div');
        productListContainer.classList.add('products');

        let productsHTML = '';
        products
        .slice((currentPage * productsPerPage) - 10, currentPage * productsPerPage)
        .forEach((product) => {
            productsHTML += `
                <div class='product__card'>
                    <img src=${product.thumbnail} alt='product' />
                    <div>${product.title}</div>
                </div>
            `;
        });
        productListContainer.innerHTML = productsHTML;
        app.appendChild(productListContainer);

        // Pagination below
    }
    

    fetchProducts();
});