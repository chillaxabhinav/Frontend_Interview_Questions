import { createContext, useContext } from 'react';
import './tabs.css';

const TabsContext = createContext();

const Tabs = (props) => {
    const { children, currentTab, onChangeTab } = props;
    return (
        <TabsContext.Provider value={{ currentTab, onChangeTab }}>
            <div className='tabs'>
                {children}
            </div>
        </TabsContext.Provider>
    )
};

Tabs.HeaderContainer = (props) => {
    const { children } = props;
    return <div className='headerContainer'>{children}</div>
};

Tabs.Tab = (props) => {
    const { index, label } = props;
    const { currentTab, onChangeTab } = useContext(TabsContext);
    return (
        <div className={`tab${currentTab === index ? ' active': ''}`} key={index} onClick={() => onChangeTab(index)}>
            {label}
        </div>
    )
}

Tabs.ContentContainer = (props) => {
    const { children } = props;
    return (
        <div className='contentContainer'>
            {children}
        </div>
    )
}

Tabs.TabContent = (props) => {
    const { children, index } = props;
    const { currentTab } = useContext(TabsContext);
    if (currentTab === index) {
        return (
            <div className='tabContent'>
                {children}
            </div>
        )
    } else {
        return null;
    }
}

export default Tabs;

