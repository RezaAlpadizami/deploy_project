import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { AccountigDetailPaymentPage } from "../pages/Accounting";

configure({ adapter: new Adapter() });

it("render without crash", () => {
  shallow(<AccountigDetailPaymentPage />);
});
