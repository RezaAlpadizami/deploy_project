import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { QueryClient, QueryClientProvider } from "react-query";
import { shallow, configure } from "enzyme";
import { GSPaymentRequestPage } from "../pages/GeneralSupport";
import CreatePaymentForm from "../components/CreatePaymentForm";

configure({ adapter: new Adapter() });

describe("GSPaymentRequestPage", () => {
  it("render GSPaymentRequestPage without crash", () => {
    shallow(<GSPaymentRequestPage />);
  });

  it("Cek headers text in GSPayment Component", () => {
    const components = shallow(<GSPaymentRequestPage />);
    const titlePage = <h3>Form Payment Request</h3>;
    expect(components.contains(titlePage)).toEqual(true);
  });
});

describe("CreatePaymentForm", () => {
  const queryClient = new QueryClient();

  it("render CreatePaymentForm without crash", () => {
    shallow(
      <QueryClientProvider client={queryClient}>
        <CreatePaymentForm />
      </QueryClientProvider>
    );
  });
});
