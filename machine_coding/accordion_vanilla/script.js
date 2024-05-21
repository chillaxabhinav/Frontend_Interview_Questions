const accordionData = [
    {
        id: 1,
        header: 'first',
        data: 'I am first data',
        open: true
    },
    {
        id: 2,
        header: 'second',
        data: 'I am second data',
        open: false
    },
    {
        id: 3,
        header: 'third',
        data: 'I am third data',
        open: false
    }
];

document.addEventListener("DOMContentLoaded", function () {
    let initialAccordionState = accordionData;

    const accordionContainer = document.querySelector('.accordion-container');

    accordionContainer.addEventListener("click", function (e) {
        const accordionId = e.target.getAttribute('data-id');
        if (!accordionId) return;
        const updatedAccordionState = initialAccordionState.map(accordion => {
            if (accordion.id === parseInt(accordionId)) {
                return {
                    ...accordion,
                    open: !accordion.open
                };
            };
            return {
                ...accordion
            };
        });
        initialAccordionState = updatedAccordionState;
        renderAccordions();
    });

    function renderAccordions() {
        let accordionhtml = "";
        initialAccordionState.forEach(accordion => {
            accordionhtml += `
                <div class="accordion">
                    <div
                        class="accordion-header${accordion.open ? " active" : ""}"
                        data-id=${accordion.id}
                    >
                        ${accordion.header}
                    </div>
                    <div
                        class="accordion-content${!accordion.open ? " hidden" : ""}"
                    >
                        ${accordion.data}
                    </div>
                </div>
            `;
        });
        accordionContainer.innerHTML = accordionhtml;
    };

    renderAccordions();
});