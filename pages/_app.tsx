import i18next from "i18next";
import "moment/locale/vi";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { I18nextProvider } from "react-i18next";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import "../i18n";
import CommonLayout from "../layouts/commonLayout";
// CSS
import "react-toastify/dist/ReactToastify.css";
import "../components/TinyEditor/style.css";
import "../styles/global.scss";
import FlowbiteContext from "../context/FlowbiteContext";
import { useContext, useEffect } from "react";
import { googleAnalytics } from "../init-ga";
import "../public/css/animate.css";
import axios from "axios";
import { ip } from "../api/ip";
import moment from "moment/moment";
import Contact from "../components/Contact";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentUrl = process.env.BASE_URL + router.asPath;
  useEffect(() => {
    googleAnalytics();
  }, []);
  return (
    <FlowbiteContext>
      <Head>
        {/* <!-- Mobile Specific Meta--> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Trang quản lý khoa học" />
        <meta name="keywords" content="Quản lý khoa học" />
        <meta name="author" content="ICI" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#cc0d00" />

        <meta property="og:url" content={currentUrl || process.env.BASE_URL} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Tạp chí khoa học - Học viện Phụ nữ Việt Nam"
          key="ogdesc"
        />
        <meta property="og:image" content="/images/vwa-logo.png" key="ogimg" />
      </Head>

      <AuthProvider>
        <I18nextProvider i18n={i18next}>
          <Loading />
          <CommonLayout>
            <Component {...pageProps} />
            <Contact/>
          </CommonLayout>
        </I18nextProvider>
      </AuthProvider>
      
      <ToastContainer autoClose={2000} hideProgressBar />
    </FlowbiteContext>
  );
}

export default MyApp;
