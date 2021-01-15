import React from "react";
import "./logo.styles.css"
import { FormattedMessage, injectIntl } from "react-intl";

export const Logo = ({intl}) =>{
    return(
        <div id="logo-container" onClick={() => window.location.href="/"}>
            <div id="logo-title" className="text-headline">Viewpoint</div>
            <div id="logo-slogan" className="text-title">
                <FormattedMessage id="header.slogan"/>
            </div>
        </div>
    )
}