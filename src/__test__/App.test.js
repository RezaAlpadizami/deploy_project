import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
import App from "../App";

configure({ adapter: new Adapter() });

it("render without crash", () => {
  shallow(<App />);
});
