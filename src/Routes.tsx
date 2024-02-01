import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ShopDetailitem from "pages/ShopDetailitem";
import SigninDefault from "pages/SigninDefault";
import SigninResetPassword from "pages/SigninResetPassword";
import SigninResetPasswordSuccessful from "pages/SigninResetPasswordSuccessful";
import SignupDefault from "pages/SignupDefault";
import SignupVerification from "pages/SignupVerification";
import SignupVerificationOne from "pages/SignupVerificationOne";
import DashboardOne from "pages/DashboardOne";
import DashboardTwo from "pages/DashboardTwo";
import DashboardThree from "pages/DashboardThree";
import CalendarMonth from "pages/CalendarMonth";
import CalendarDayNoevent from "pages/CalendarDayNoevent";
import CalendarDay1Event from "pages/CalendarDay1Event";
import CalendarWeek from "pages/CalendarWeek";
import FileManagementDefault from "pages/FileManagementDefault";
import Tracktasks from "pages/Tracktasks";
import Conversation from "pages/Conversation";
import Profile from "pages/Profile";
import Settings from "pages/Settings";
import Customer from "pages/Customer";
import EKYCBegin from "pages/EKYCBegin";
import EKYCIntroductionStepOne from "pages/EKYCIntroductionStepOne";
import EKYCScanIDCard from "pages/EKYCScanIDCard";
import EKYCScanIDCardAddimage from "pages/EKYCScanIDCardAddimage";
import EKYCIntroductionStepTwo from "pages/EKYCIntroductionStepTwo";
import EKYCIntroductionStepThree from "pages/EKYCIntroductionStepThree";
import EKYCConfirmInformation from "pages/EKYCConfirmInformation";
import EKYCIntroductionStepFour from "pages/EKYCIntroductionStepFour";
import EKYCSignature from "pages/EKYCSignature";
import EKYCSuccessful from "pages/EKYCSuccessful";
import ShopSearch from "pages/ShopSearch";
import ShopReviews from "pages/ShopReviews";
import Cartempty from "pages/Cartempty";
import Cart from "pages/Cart";
import ShippingInfo from "pages/ShippingInfo";
import PaymentInfo from "pages/PaymentInfo";
import Checkoutinprocess from "pages/Checkoutinprocess";
import CheckoutSuccessful from "pages/CheckoutSuccessful";
import CartProductList from "pages/CartProductList";
import AddProduct from "pages/AddProduct";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "shopdetailitem",
      element: <ShopDetailitem />,
    },
    {
      path: "signindefault",
      element: <SigninDefault />,
    },
    {
      path: "signinresetpassword",
      element: <SigninResetPassword />,
    },
    {
      path: "signinresetpasswordsuccessful",
      element: <SigninResetPasswordSuccessful />,
    },
    {
      path: "signupdefault",
      element: <SignupDefault />,
    },
    {
      path: "signupverification",
      element: <SignupVerification />,
    },
    {
      path: "signupverificationone",
      element: <SignupVerificationOne />,
    },
    {
      path: "dashboardone",
      element: <DashboardOne />,
    },
    {
      path: "dashboardtwo",
      element: <DashboardTwo />,
    },
    {
      path: "dashboardthree",
      element: <DashboardThree />,
    },
    {
      path: "calendarmonth",
      element: <CalendarMonth />,
    },
    {
      path: "calendardaynoevent",
      element: <CalendarDayNoevent />,
    },
    {
      path: "calendarday1event",
      element: <CalendarDay1Event />,
    },
    {
      path: "calendarweek",
      element: <CalendarWeek />,
    },
    {
      path: "filemanagementdefault",
      element: <FileManagementDefault />,
    },
    {
      path: "tracktasks",
      element: <Tracktasks />,
    },
    {
      path: "conversation",
      element: <Conversation />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "customer",
      element: <Customer />,
    },
    {
      path: "ekycbegin",
      element: <EKYCBegin />,
    },
    {
      path: "ekycintroductionstepone",
      element: <EKYCIntroductionStepOne />,
    },
    {
      path: "ekycscanidcard",
      element: <EKYCScanIDCard />,
    },
    {
      path: "ekycscanidcardaddimage",
      element: <EKYCScanIDCardAddimage />,
    },
    {
      path: "ekycintroductionsteptwo",
      element: <EKYCIntroductionStepTwo />,
    },
    {
      path: "ekycintroductionstepthree",
      element: <EKYCIntroductionStepThree />,
    },
    {
      path: "ekycconfirminformation",
      element: <EKYCConfirmInformation />,
    },
    {
      path: "ekycintroductionstepfour",
      element: <EKYCIntroductionStepFour />,
    },
    {
      path: "ekycsignature",
      element: <EKYCSignature />,
    },
    {
      path: "ekycsuccessful",
      element: <EKYCSuccessful />,
    },
    {
      path: "shopsearch",
      element: <ShopSearch />,
    },
    {
      path: "shopreviews",
      element: <ShopReviews />,
    },
    {
      path: "cartempty",
      element: <Cartempty />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "shippinginfo",
      element: <ShippingInfo />,
    },
    {
      path: "paymentinfo",
      element: <PaymentInfo />,
    },
    {
      path: "checkoutinprocess",
      element: <Checkoutinprocess />,
    },
    {
      path: "checkoutsuccessful",
      element: <CheckoutSuccessful />,
    },
    {
      path: "cartproductlist",
      element: <CartProductList />,
    },
    {
      path: "addproduct",
      element: <AddProduct />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
