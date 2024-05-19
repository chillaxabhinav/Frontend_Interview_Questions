const initialTabsData = [
    {
        id: 1,
        name: 'first',
        data: "I am tab first data",
        selected: true
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
    }
];

function makeTabsHtml (tabsData) {
    let tabsHtml = "";
    tabsData.forEach(tab => {
        tabsHtml += `<div class="tab${tab.selected ? ' active' : ""}" data-id=${tab.id}>${tab.name}</div>\n`;
    });
    const selectedTabData = tabsData.find(tab => tab.selected === true)?.data || "";
    return { tabsHtml, selectedTabData };
}

document.addEventListener("DOMContentLoaded", function () {

    const tabsContainer = document.querySelector(".tab-container");
    const { tabsHtml, selectedTabData } = makeTabsHtml(initialTabsData);
    tabsContainer.innerHTML = tabsHtml;

    const tabData = document.querySelector(".tab-data");
    tabData.innerHTML = selectedTabData;

    tabsContainer.addEventListener("click", function (e) {
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
        const { selectedTabData, tabsHtml } = makeTabsHtml(newTabsData);
        tabsContainer.innerHTML = tabsHtml;
        tabData.innerHTML = selectedTabData;
    });
})