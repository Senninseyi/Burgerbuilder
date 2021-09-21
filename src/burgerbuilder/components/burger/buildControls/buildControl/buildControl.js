import React from "react";
import { More, Less, Label } from "./theme";

const buildControl = (props) => (
    <div>
        <Label>{props.label}</Label>
        <Less 
            onClick={props.removed}
            disabled={props.disabled}>Less</Less>
        <More onClick={props.added}>More</More>
    </div>
);

export default buildControl