import React from 'react';

const WidgetCard = ({ widget }) => {
    return ( <
        div className = "card" >
        <
        h3 > { widget.title } < /h3> <
        p > { widget.description } < /p> <
        p > Display Status: { widget.displayStatus ? "Shown" : "Hidden" } < /p> <
        /div>
    );
};

export default WidgetCard;