import React from 'react';

const Tab = ({ tabs, activeTab, setActiveTab }) => {
    return ( <
        div className = "tabs" > {
            tabs.map(tab => ( <
                div key = { tab }
                className = { `tab ${activeTab === tab ? 'active' : ''}` }
                onClick = {
                    () => setActiveTab(tab)
                } > { tab } <
                /div>
            ))
        } <
        /div>
    );
};

export default Tab;