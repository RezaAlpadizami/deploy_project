import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { QueryClient, QueryClientProvider } from "react-query";
import { shallow, configure } from "enzyme";

import { UKBerandaPage } from "../pages/UnitKerja";
import ListPaymentRequest from "../components/ListPaymentRequest";

configure({ adapter: new Adapter() });

describe('UKBerandaPage', () => {
  it("render UKBerandaPage without crash", () => {
    shallow(<UKBerandaPage />);
  });
  
  it("Cek headers text in ListPaymentRequest Component", () => {
    const components = shallow(<UKBerandaPage />);
    const headerText = <h1>List Payment Request - KC Bank XXX</h1>
    expect(components.contains(headerText)).toEqual(true);
  });

  // it("test renders App Component", () => {
  //   const components = mount(<UKBerandaPage />)
  //   expect(components.state("error")).toEqual(null)
  // })

})

describe('ListPaymentRequest', () => {
  const queryClient = new QueryClient();
  
  it("render ListPaymentRequest without crash", () => {
    shallow(
      <QueryClientProvider client={queryClient}>
        <ListPaymentRequest />
      </QueryClientProvider>)
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<ListPaymentRequest onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('id', data.id);
  // });
}) 