import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayoutPublic from "./ui/AppLayoutPublic";
import About from "./pages/public pages/About";
import Contact from "./pages/public pages/Contact";
import FAQ from "./pages/public pages/FAQ";
import Home from "./pages/public pages/Home";
import AppLayoutUser from "./ui/AppLayoutUser";
import PageNotFound from "./pages/public pages/PageNotFound";
import AddFund from "./pages/userPages/AddFund";
import Dashboard from "./pages/userPages/Dashboard";
import Profile from "./pages/userPages/Profile";
import Setting from "./pages/userPages/Setting";
import Support from "./pages/userPages/Support";
import TransferFund from "./pages/userPages/MoveFund";
import History from "./pages/userPages/History";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import SignUp from "./features/authentication/SignUp";
import ProtectedRoute from "./ui/ProtectedRoutes";
import PaymentPage from "./features/addFund/PaymentPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayoutPublic />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />

            <Route
              element={
                <ProtectedRoute>
                  <AppLayoutUser />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Setting />} />
              <Route path="support" element={<Support />} />
              <Route path="move-fund" element={<TransferFund />} />
              <Route path="add-fund" element={<AddFund />} />
              <Route path="history" element={<History />} />
              <Route />
            </Route>
            <Route path="wallet/verify?" element={<PaymentPage />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-light-grey)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
