const initialTabsData = [
    {
        id: 1,
        name: 'first',
        data: "I am tab first data",
        selected: false
    },
    {
        id: 2,
        name: 'second',
        data: "I am tab second data",
        selected: false
    },
    {
        id: 3,
        name: 'third',
        data: "I am tab third data",
        selected: false
    },
    {
        id: 4,
        name: 'fourth',
        data: "I am tab fourth data",
        selected: true
    }
];

function makeTabsHtml (tabsData) {
    let tabsHtml = "";
    tabsData.forEach(tab => {
        tabsHtml += `
            <div class="tab${tab.selected ? ' active' : ""}" data-id=${tab.id}>
                ${tab.name}
            </div>\n
        `;
    });
    const selectedTabData = tabsData.find(tab => tab.selected === true)?.data || "";
    return { tabsHtml, selectedTabData };
}

document.addEventListener("DOMContentLoaded", function () {
    // current tab state
    let currentTabData = [...initialTabsData];

    const tabsContainer = document.querySelector(".tab-container");
    const tabData = document.querySelector(".tab-data");

    tabsContainer.addEventListener("click", function (e) {
        // remember this target.classList
        if (!e.target.classList.contains("active")) {
            // remember getAttribute, also you can use setAttribute
            const newTabId = e.target.getAttribute('data-id');
            const newTabsData = initialTabsData.map(tab => {
                if (tab.id == newTabId) {
                    return {
                        ...tab,
                        selected: true
                    }
                }
                return {
                    ...tab,
                    selected: false
                }
            });
            currentTabData = newTabsData;
            render();
        }
    });

    function render () {
        const { tabsHtml, selectedTabData } = makeTabsHtml(currentTabData);
        tabsContainer.innerHTML = tabsHtml;
        tabData.innerHTML = selectedTabData;
    };

    // initial render
    render();
})