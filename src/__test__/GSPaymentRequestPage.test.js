import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { GSPaymentRequestPage } from "../pages/GeneralSupport";

configure({ adapter: new Adapter() });

it("render without crash", () => {
  shallow(<GSPaymentRequestPage />);
});

it("Cek headers text in GSPayment Component", () => {
  const components = shallow(<GSPaymentRequestPage />);
  const titlePage = <h3>Form Payment Request</h3>;

  expect(components.contains(titlePage)).toEqual(true);
});
