import React from "react";
import {Headline, TextHeadline} from "../../components/text/text-headline.component";
import {TextTitle} from "../../components/text/text-title.component";
import {TextSubheader} from "../../components/text/text-subheader.component";
import {TextQuote} from "../../components/text/text-quote.component";
import {TextBodyLarge} from "../../components/text/text-body-large.component";
import {TextBodyRegular} from "../../components/text/text-body-regular.component";
import {TextBodySecondary} from "../../components/text/text-body-secondary.component";
import {TextButton} from "../../components/text/text-button.component";

export const TestPage = ({}) =>{
    return(
        <div>
            <TextHeadline content="headline test"/>
            <TextTitle content="title test"/>
            <TextSubheader content="subheader text"/>
            <TextQuote content="quote quote quote test"/>
            <TextBodyLarge content="body large test"/>
            <TextBodyRegular content="body regular test test test test."/>
            <TextBodySecondary content="body secondary test test test"/>
            <TextButton content="button test"/>
        </div>

    )
}