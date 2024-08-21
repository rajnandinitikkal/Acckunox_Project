import React, { useState } from 'react';
import Tab from './Tab';

const WidgetModal = ({ isOpen, closeModal, data, saveChanges }) => {
    const [activeTab, setActiveTab] = useState("CSPM");
    const [localData, setLocalData] = useState(data);

    const handleInputChange = (key, index, field, value) => {
        const updatedData = {...localData };
        updatedData[key].widgets[index][field] = value;
        setLocalData(updatedData);
    };

    const handleSave = () => {
        saveChanges(localData);
        closeModal();
    };

    if (!isOpen) return null;

    return ( <
        div className = "modal" >
        <
        div className = "modal-content" >
        <
        span className = "close"
        onClick = { closeModal } > × < /span> <
        Tab tabs = { Object.keys(localData) }
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        /> <
        div > {
            localData[activeTab].widgets.map((widget, index) => ( <
                div key = { index } >
                <
                label > Title: < input type = "text"
                value = { widget.title }
                onChange = {
                    (e) => handleInputChange(activeTab, index, 'title', e.target.value) }
                /></label >
                <
                label > Description: < input type = "text"
                value = { widget.description }
                onChange = {
                    (e) => handleInputChange(activeTab, index, 'description', e.target.value) }
                /></label >
                <
                label > Show: < input type = "checkbox"
                checked = { widget.displayStatus }
                onChange = {
                    (e) => handleInputChange(activeTab, index, 'displayStatus', e.target.checked) }
                /></label >
                <
                /div>
            ))
        } <
        /div> <
        button onClick = { handleSave } > Save < /button> <
        button onClick = { closeModal } > Cancel < /button> <
        /div> <
        /div>
    );
};

export default WidgetModal;