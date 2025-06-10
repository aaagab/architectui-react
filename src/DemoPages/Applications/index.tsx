import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";

// APPLICATIONS
const Mailbox = lazy(() => import("./Mailbox"));
const Chat = lazy(() => import("./Chat"));
const FaqSection = lazy(() => import("./FaqSection"));

export const ApplicationsRoutes = () => (
  <Route path="applications" element={<CustomSuspense text="Applications" />}>
    <Route path="mailbox" element={<Mailbox />} />
    <Route path="chat" element={<Chat />} />
    <Route path="faq-section" element={<FaqSection />} />
  </Route>
);
