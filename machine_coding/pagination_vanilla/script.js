document.addEventListener("DOMContentLoaded", function () {
    const app = document.querySelector('.app');

    let products = [];
    let currentPage = 1;
    const productsPerPage = 10;
    let totalPages = 0;

    async function fetchProducts () {
        try {
            const resp = await fetch('https://dummyjson.com/products?limit=100');
            const data = await resp.json();
            if (data && data.products) {
                products = data.products;
                totalPages = Math.abs(products.length / productsPerPage);
                if ((products.length % productsPerPage) !== 0) totalPages += 1;
                render();
            }
        } catch (e) {
            console.log('error while getting products ---> ', e);
        }
    }

    function makePaginationButton (page, id) {
        const pageButton = document.createElement('button');
        pageButton.setAttribute('data-id', id);
        pageButton.innerText = page;
        pageButton.classList.add('pagination__button');
        return pageButton;
    }

    function render () {
        app.innerHTML = '';
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
        const pagination = document.createElement('div');
        pagination.classList.add('pagination');
        // back Button
        if (currentPage !== 1 && totalPages > 1) {
            const backButton = makePaginationButton('👈', -1);
            pagination.appendChild(backButton);
        }
        // All Pages Button
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = makePaginationButton(`${i}`, i);
            if (currentPage === i) pageButton.classList.add('selected');
            pagination.appendChild(pageButton);
        };
        // forward Button
        if (currentPage < totalPages) {
            const moveButton = makePaginationButton('👉', -2);
            pagination.appendChild(moveButton);
        }

        pagination.addEventListener('click', function (e) {
            let id = e.target.getAttribute('data-id');
            if (!id) return;
            id = parseInt(id);
            if (id > 0) {
                currentPage = id;
                render();
            } else if (id < 0) {
                if (id === -1) currentPage -= 1;
                else if (id === -2) currentPage += 1;
                render();
            }
        });

        app.appendChild(pagination);
    }
    

    fetchProducts();
});