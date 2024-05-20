import { useState } from "react";
import Tab from "./tab";
import { useEffect } from "react";
import './style.css';

const tabData = [
    {
        id: 1,
        heading: 'first',
        content: 'First Tab'
    },
    {
        id: 2,
        heading: 'second',
        content: 'Second Tab'
    },
    {
        id: 3,
        heading: 'Third',
        content: 'Third Tab'
    },
    {
        id: 4,
        heading: 'Fourth',
        content: 'Fourth Tab'
    }
]

const TabContainer = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        const selectedTab = tabData.find(tab => tab.id === selectedId);
        setSelectedData(selectedTab.content);
    }, [selectedId]);

    const handleTabClick = (e) => {
        const clickedTabId = parseInt(e.target.getAttribute('data-id'));
        if (!clickedTabId) return;
        if (selectedId === clickedTabId) return;
        setSelectedId(clickedTabId);
    }

    return (
        <div className="tab-container">
            <div className="tabs" onClick={(e) => handleTabClick(e)}>
                {tabData.map((data) => {
                    return (
                        <Tab
                            key={data.id}
                            data-id={data.id}
                            selected={data.id === selectedId}
                            className="tab"
                        >
                            {data.heading}
                        </Tab>
                    )
                })}
            </div>
            <div className="tab-content">
                {selectedData}
            </div>
        </div>
    )
};

export default TabContainer;
