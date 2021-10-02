import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { QueryClient, QueryClientProvider } from "react-query";
import { shallow, configure, mount } from "enzyme";
import { UKPaymentRequestPage } from "../pages/UnitKerja";
import FormPayment from "../components/FormPayment";

configure({ adapter: new Adapter() });

describe("UKPaymentRequestPage", () => {
  it("render UKPaymentRequestPage without crash", () => {
    shallow(<UKPaymentRequestPage />);
  });

  it("Cek headers text in UKPaymentRequestPage Component", () => {
    const components = shallow(<UKPaymentRequestPage />);
    const titleText = <h3>Silahkan Isi Form Payment Request</h3>;
    expect(components.contains(titleText)).toEqual(false);
  });
});

describe("FormPayment", () => {
  const queryClient = new QueryClient();

  it("render FormPayment without crash", () => {
    shallow(
      <QueryClientProvider client={queryClient}>
        <FormPayment />
      </QueryClientProvider>
    );
  });
});
