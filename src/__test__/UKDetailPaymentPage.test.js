import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { QueryClient, QueryClientProvider } from "react-query";
import { shallow, configure } from "enzyme";
import { UKDetailPaymentPage } from "../pages/UnitKerja";
import DetailPaymentRequest from "../components/DetailPaymentRequest_UnitKerja";

configure({ adapter: new Adapter() });

describe("UKDetailPaymentPage", () => {
  it("render UKDetailPaymentPage without crash", () => {
    shallow(<UKDetailPaymentPage />);
  });
});

describe("DetailPaymentRequest", () => {
  const queryClient = new QueryClient();

  it("render DetailPaymentRequest without crash", () => {
    shallow(
      <QueryClientProvider client={queryClient}>
        <DetailPaymentRequest />
      </QueryClientProvider>
    );
  });
});
