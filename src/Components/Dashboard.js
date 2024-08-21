import React, { useState } from 'react';
import WidgetCard from './WidgetCard';
import WidgetModal from './WidgetModal';
import widgetData from '../data/widgetData';

const Dashboard = () => {
    const [data, setData] = useState(widgetData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveChanges = (updatedData) => {
        setData(updatedData);
    };

    return ( <
        div >
        <
        button onClick = {
            () => setIsModalOpen(true) } > Modify Widgets < /button> <
        div id = "container" > {
            Object.keys(data).map(key => ( <
                div key = { key }
                className = "row" >
                <
                h2 > { key } < /h2> {
                    data[key].widgets.map((widget, index) => (
                        widget.displayStatus && < WidgetCard key = { index }
                        widget = { widget }
                        />
                    ))
                } <
                /div>
            ))
        } <
        /div> <
        WidgetModal isOpen = { isModalOpen }
        closeModal = {
            () => setIsModalOpen(false) }
        data = { data }
        saveChanges = { saveChanges }
        /> <
        /div>
    );
};

export default Dashboard;