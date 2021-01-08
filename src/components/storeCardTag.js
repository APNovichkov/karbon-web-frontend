import React from 'react'

const StoreCardTag = (props) => {
    let {iconClass, colorClass, text} = props;

    return (
        <div className="store-card-tag">
            <span className={`${iconClass} ${colorClass}`} ></span><span className="store-card-tag-text">{text}</span>
        </div>
    )
}

export default StoreCardTag;