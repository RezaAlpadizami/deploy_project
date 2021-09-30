import React from 'react';
import { shallow, mount, configure } from "enzyme";
import App from "../App"

it("test renders APP component", () => {
    const components = mount(<App />)
    expect(components.state('error')).toEqual(null);
})

it("render without crash", () => {
    shallow(<App />)
}) 
