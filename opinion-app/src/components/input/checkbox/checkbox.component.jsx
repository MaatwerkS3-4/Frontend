import React from "react";
import "./checkbox.styles.css";

export const Checkbox = ({id, checked, disabled, handleClick, value}) => {
    let type = "";
    if (checked) {
        if (disabled) type = "checkbox-checked-disabled";
        else type = "checkbox-checked";
    } else {
        if (disabled) type = "checkbox-unchecked-disabled";
        else type = "checkbox-unchecked"
    }

    return (
        <div className={`checkbox-container`}
             onClick={() => {
                 handleClick(id);
             }
        }>
            <div className={`checkbox ${type}`}/>
            <div className="checkbox-tag">{value}</div>

        </div>
    )
}