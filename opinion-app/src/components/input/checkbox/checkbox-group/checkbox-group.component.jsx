import React, {Component} from "react";
import "./checkbox-group.styles.css";
import {Checkbox} from "../checkbox.component";

class CheckboxGroup extends Component{
    constructor(props) {
        super(props);

        this.state = {
            maxAmountChecked: this.props.maxAmountChecked
        }
    }

    componentDidMount() {
        if(this.state.maxAmountChecked === undefined)
            this.setState({maxAmountChecked: Number.MAX_SAFE_INTEGER})

        const boxes = [];
        this.props.values.forEach((v, i) => {
            boxes.push({
                id: i,
                checked: false,
                disabled: false,
                value: v
            })
        })

        this.props.handleCheckboxChange(boxes);
    }

    handleClick = (id) =>{
        const boxes = [...this.props.checkboxes];
        let checkedCount = 0;
        boxes.forEach(b => {
            //Set checked if found and not disabled or it is checked
            if(b.id === id && (!b.disabled || b.checked)){
                b.checked = !b.checked;
            }

            //Update counter
            if(b.checked) checkedCount++;
        });

        //disable boxes if max amount reached
        boxes.forEach(b => {
            b.disabled = (checkedCount >= this.state.maxAmountChecked);
        });

        this.props.handleCheckboxChange(boxes);
    }

    render() {
        return(
            <div className="checkbox-group-container">
                <div className="checkbox-group-name-container">
                    <div className="checkbox-group-name text-button">{this.props.name}</div>
                </div>
                <div className="checkbox-group-content-container">
                    <div>
                        {this.props.checkboxes.map(b =>{
                            return <Checkbox
                                id={b.id}
                                checked={b.checked}
                                disabled={b.disabled}
                                handleClick={this.handleClick}
                                value={b.value}
                            />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckboxGroup;