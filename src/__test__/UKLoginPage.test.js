import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { UKLoginPage } from "../pages/UnitKerja";

configure({ adapter: new Adapter() });

it("render UKLoginPage without crash", () => {
  shallow(<UKLoginPage />);
});
