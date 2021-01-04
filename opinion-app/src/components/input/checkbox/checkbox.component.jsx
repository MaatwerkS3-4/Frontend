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
        <div className="checkbox-container" onClick={() => {
            console.log("Clicked on checkbox:", id);
            handleClick(id);
        }

        }>
            <div className="checkbox-padding-column"/>
            <div className="checkbox-content">
                {/* padding */}
                <div className="checkbox-padding-row"/>

                {/* checkbox */}
                <div className={`checkbox ${type}`}/>

                {/* padding */}
                <div className="checkbox-padding-row"/>
                {/* value */}
                <div className="checkbox-tag">{value}</div>

                {/* padding */}
                <div className="checkbox-padding-row"/>
            </div>
            <div className="checkbox-padding-column"/>


        </div>
    )
}