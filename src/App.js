import "antd/dist/antd.css";
import React from "react";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AccountigDetailPaymentPage, AccountingBerandaPage } from "./pages/Accounting";
import { ADCreateRolePage, ADManagementRolePage, ADUpdateRolePage } from "./pages/Admin";
import { GSPaymentRequestPage } from "./pages/GeneralSupport";
import { UKBerandaPage, UKDetailPaymentPage, UKLoginPage, UKPaymentRequestPage } from "./pages/UnitKerja";
import AuthorizedRoute from "./AuthorizedRoute";
import RestrictedWrapper from "./RestrictedWrapper";
import { AuthorizedContextProvider } from "./AuthorizedContext";
import { CookiesProvider } from "react-cookie";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <AuthorizedContextProvider>
          <Router>
            <Switch>
              <Route path="/unitkerja-login" exact>
                <RestrictedWrapper>
                  <LoginContainer />
                </RestrictedWrapper>
              </Route>
              <Route component={DefaultContainer} />
            </Switch>
          </Router>
        </AuthorizedContextProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

const LoginContainer = () => <Route path="/" component={UKLoginPage} />;

const DefaultContainer = () => (
  <>
    <Navbar />
    <Route path="/" exact component={UKLoginPage} />
    <AuthorizedRoute path="/unitkerja-beranda" exact component={UKBerandaPage}></AuthorizedRoute>
    <AuthorizedRoute path="/unitkerja-paymentrequest" exact component={UKPaymentRequestPage}></AuthorizedRoute>
    <AuthorizedRoute path="/unitkerja-detailpayment/:id" exact component={UKDetailPaymentPage}></AuthorizedRoute>
    <AuthorizedRoute path="/gs-paymentrequest" component={GSPaymentRequestPage}></AuthorizedRoute>
    <AuthorizedRoute path="/accounting-request" component={AccountigDetailPaymentPage}></AuthorizedRoute>
    <AuthorizedRoute path="/accounting-beranda" component={AccountingBerandaPage}></AuthorizedRoute>
    <AuthorizedRoute path="/role-account-update" component={ADUpdateRolePage}></AuthorizedRoute>
    <AuthorizedRoute path="/role-account-add" component={ADCreateRolePage}></AuthorizedRoute>
    <AuthorizedRoute path="/admin-beranda" component={ADManagementRolePage}></AuthorizedRoute>
    <Footer />
  </>
);

export default App;
