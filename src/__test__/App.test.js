import React from 'react';
import { shallow, mount } from "enzyme";
import App from "../App"

it("test renders App component", () => {
    const page = mount(<App />)
    expect(page.state('error')).toEqual(null);
})

it("render without crash", () => {
    shallow(<App />)
}) 
