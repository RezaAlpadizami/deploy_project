import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { AccountingBerandaPage } from "../pages/Accounting";
import Title from "antd/lib/skeleton/Title";

configure({ adapter: new Adapter() });

it("render without crash", () => {
  shallow(<AccountingBerandaPage />);
});

it("Cek title text in AccountingBeranda Component", () => {
  const components = shallow(<AccountingBerandaPage />);
  const title = <Title>List Payment Request</Title>;

  expect(components.contains(title)).toEqual(false);
});
