import React, {Component} from "react";
import {TextHeadline} from "../../components/text/text-headline.component";
import {TextTitle} from "../../components/text/text-title.component";
import {TextSubheader} from "../../components/text/text-subheader.component";
import {TextQuote} from "../../components/text/text-quote.component";
import {TextBodyLarge} from "../../components/text/text-body-large.component";
import {TextBodyRegular} from "../../components/text/text-body-regular.component";
import {TextBodySecondary} from "../../components/text/text-body-secondary.component";
import {TextButton} from "../../components/text/text-button.component";
import CheckboxGroup from "../../components/input/checkbox/checkbox-group/checkbox-group.component";

class TestPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: []
        }
    }

    handleCheckboxChange = (boxes) =>{
        console.log("boxes changed:", boxes);
        this.setState({checkboxes: boxes})
    }

    render() {
        return(
            <div style={{width: 500 + 'px'}}>
                <CheckboxGroup
                    values={["1asdfasfasfaadfadsfasfassfa", "2asfasdfasa", "3asfasfa", "4asfasdfasd", "5asdffda", "6asdfasdfasdfdsafadsa", "7asfasdf"]}
                    checkboxes={this.state.checkboxes}
                    maxAmountChecked={3}
                    name="Test checkbox tool"
                    handleCheckboxChange={this.handleCheckboxChange}
                />
            </div>
        )
    }
}

export default TestPage;

