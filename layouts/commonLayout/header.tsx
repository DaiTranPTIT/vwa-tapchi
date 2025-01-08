import axios from "axios";
import { Tooltip } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ip } from "../../api/ip";
import AuthorAndRegister from "../../components/AuthorAndRegister";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { AuthContext, useAuth } from "../../context/AuthContext";
import { navMenu } from "../../data";
import { MainMenu } from "../../utils/interface";

interface IProps {
  language: string;
  handleChangeLanguage: (lang: string) => void;
}

const Header = (props: IProps) => {
  const [common] = useTranslation("common");
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [typeMenu, setTypeMenu] = useState<string>("");
  // const [dataMenu, setDataMenu] = useState<DataMenu[]>([]);
  const [, setLinkLogo] = useState<string>();
  const [mainMenu, setMainMenu] = useState<MainMenu[]>([]);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const { language, handleChangeLanguage } = props;
  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { setDataThongTin, dataThongTin, langCode, setDataMenu, dataMenu } =
    useContext(AuthContext);

  const [isChangeLang, setIsChangeLang] = useState<boolean>(false);
  const {
    isAuthenticated,
    user,
    dataConfig,
    showAuthModal: showModal,
    setShowAuthModal: setShowModal,
    userLoading,
    setMenu,
  } = useAuth();
  const onClickLanguage = () => {
    setIsChangeLang(!isChangeLang);
  };
  const onChangeLanguage = (e: any, language: string) => {
    props.handleChangeLanguage(language);
    setIsChangeLang(false);
  };
  const getThongTinChung = async () => {
    try {
      const res = await axios.get(
        `${ip}/htqt-thong-tin-chung?locale=${langCode}&populate=deep`
      );
      if (res) {
        setDataThongTin(res?.data?.data?.attributes);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getDataNav = async () => {
    try {
      // const res = await axios.get(
      //   `${ip}/htqt-cau-truc-trang-web?populate=deep&locale=${langCode}`
      // );
      // if (res) {
      //   setDataMenu(res?.data?.data?.attributes?.cauTruc ?? []);
      //   setDataMenu(res?.data?.data?.attributes?.cauTruc ?? []);
      // }
      setDataMenu(navMenu);
    } catch (e) {
      console.log(e);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();
  const onSubmit = (data: any) => {
    if (data?.keyword) {
      router.push(`/tim-kiem?keyword=${data?.keyword}`);
    }
  };
  useEffect(() => {
    getDataNav();
  }, [langCode]);
  useEffect(() => {
    console.log("router", router);
    if (router && router.pathname) {
      setTypeMenu(router?.pathname);
    }
  }, [router]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e: any) => {
    if (window.scrollY > 132) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    //getThongTinChung();
    setShowMenu(false);
  }, [router, langCode]);
  const handleClickOutside = (e: any) => {
    const { target } = e;
    const node = searchRef?.current;
    const node2 = menuRef?.current;
    const node3 = langRef?.current;
    if (node) {
      if (!node.contains(target)) {
        setIsShowSearch(false);
      }
    }
    if (node2) {
      if (!node2.contains(target)) {
        setShowMenu(false);
      }
    }
    if (node3) {
      if (!node3.contains(target)) {
        setIsChangeLang(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <HeaderWrapper className={`shadow-header`}>
      <div className={`hidden lg:block bg-[white] px-6`}>
        <div className="container mx-auto ">
          <div className="header-branch flex justify-between items-center">
            <div className="flex items-center title-header">
              <Logo />
            </div>
            <div className="flex item-center gap-[50px]">
              <div className="flex items-center">
                <strong>ISSN</strong>
                <span>: 2615 - 9007</span>
              </div>
              <AuthorAndRegister />
            </div>
          </div>
        </div>
      </div>
      <div className={`label bg-white shadow`}>
        <div className="lg:mx-auto py-0">
          <div
            className={` ${isScroll ? "bg-white" : "lg:bg-white"} ${
              isScroll ? "lg:fixed top-0 left-0 w-full z-50 shadow" : ""
            }`}
          >
            <div
              className={`container mx-auto hidden lg:flex justify-between items-center `}
            >
              <div className="flex items-center justify-center gap-[32px]">
                {dataMenu?.map((value, index) => {
                  return (
                    <div
                      onClick={() => {
                        if (value?.trangCon?.length > 0) {
                        } else {
                          if (value?.sangTrangMoi) {
                            window.open(value?.link);
                          } else {
                            router.push(value?.link);
                          }
                        }
                      }}
                      // href={value?.children?.length > 0 ? "" : value?.linkTo}
                      className={`text-nav cursor-pointer ${
                        value?.link
                          ?.split("?")?.[0]
                          ?.localeCompare(typeMenu) === 0 ||
                        value?.trangCon?.some(
                          (subValue) =>
                            subValue?.link?.localeCompare(typeMenu) === 0
                        )
                          ? `text-white ${
                              isScroll ? "text-active " : "text-active "
                            } `
                          : `lg:border-none ${
                              isScroll ? "text-black" : "text-black"
                            }`
                      } block  `}
                      key={index}
                    >
                      {value?.trangCon?.length > 0 ? (
                        <>
                          <Tooltip
                            className={"tooltip-label"}
                            content={value?.trangCon?.map((value2, index2) => {
                              return (
                                <div
                                  onClick={() => {
                                    if (value?.sangTrangMoi) {
                                      window.open(value2?.link);
                                    } else {
                                      router.push(value2?.link);
                                    }
                                  }}
                                  className={`text-children mr-[40px] cursor-pointer pt-2 ${
                                    value2?.link?.localeCompare(typeMenu) === 0
                                      ? "text-active lg:border-b-2 lg:border-secondary"
                                      : "lg:border-none"
                                  } mb-[8px] hover:text-secondary`}
                                  key={index2}
                                >
                                  {value2.ten}
                                </div>
                              );
                            })}
                            style={"light"}
                            placement="bottom-start"
                          >
                            <div className="flex items-center gap-[10px]">
                              <span>{value?.ten}</span>
                              <svg
                                width="8"
                                height="6"
                                viewBox="0 0 8 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`
                                ${
                                  value?.link
                                    ?.split("?")?.[0]
                                    ?.localeCompare(typeMenu) === 0 ||
                                  value?.trangCon?.some(
                                    (subValue) =>
                                      subValue?.link?.localeCompare(
                                        typeMenu
                                      ) === 0
                                  )
                                    ? "text-active" // Add a custom class for active state
                                    : "text-black" // Custom class for inactive state
                                }`}
                              >
                                <path
                                  d="M3.86207 5.06896L0 0.93103L8 0.931031L3.86207 5.06896Z"
                                  fill={
                                    value?.link
                                      ?.split("?")?.[0]
                                      ?.localeCompare(typeMenu) === 0 ||
                                    value?.trangCon?.some(
                                      (subValue) =>
                                        subValue?.link?.localeCompare(
                                          typeMenu
                                        ) === 0
                                    )
                                      ? "#007bff" // Active color
                                      : "#212529" // Default color
                                  }
                                />
                              </svg>
                            </div>
                          </Tooltip>
                        </>
                      ) : (
                        <>{value?.ten}</>
                      )}
                    </div>
                  );
                })}
              </div>
              <Button
                type={"primary"}
                classname=""
                onClick={() => {
                  // router.push("/huong-dan-gui-bai");
                  window.open(
                    "https://tapchikhoahoc.hvpnvn.edu.vn/guibai/dashboard",
                    "_blank"
                  );
                }}
              >
                Gửi bài
              </Button>
            </div>
            {/*==================mobile===============*/}

            <div
              className={
                "lg:hidden lg:invisible flex  justify-between items-center lg:mt-[16px] mt-0 px-2 py-[8px] lg:py-0 bg-primary"
              }
            >
              <div className="mr-[8px]">
                <div
                  className="title-header"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <Logo />
                </div>
              </div>

              <div className="flex items-center relative shrink-0">
                <div ref={menuRef}>
                  <div className="" onClick={() => setShowMenu(!showMenu)}>
                    <img src={"/images/icons/menu.svg"} alt={"image"} />
                  </div>

                  {showMenu && (
                    <>
                      <div
                        className="cover-ham"
                        onClick={() => {
                          setShowMenu(false);
                        }}
                      ></div>
                      <div className="ham-menu z-50">
                        <ul>
                          {dataMenu?.map((value, index) => {
                            return (
                              <div
                                onClick={() => {
                                  if (value?.trangCon?.length > 0) {
                                  } else {
                                    if (value?.sangTrangMoi) {
                                      window.open(value?.link);
                                    } else {
                                      router.push(value?.link);
                                    }
                                  }
                                }}
                                // href={value?.children?.length > 0 ? "" : value?.linkTo}
                                className={` mr-[24px] mb-[16px] last-of-type:mr-0 text-nav pt-2 cursor-pointer  ${
                                  value?.link
                                    ?.split("?")?.[0]
                                    ?.localeCompare(typeMenu) === 0
                                    ? `text-primary ${
                                        isScroll
                                          ? "text-primary lg:border-b-2  lg:border-primary-500"
                                          : "text-active lg:border-b-2  lg:border-primary-500"
                                      } `
                                    : `lg:border-none ${
                                        isScroll ? "text-black" : "text-black"
                                      }`
                                } block  `}
                                key={index}
                              >
                                {value?.trangCon?.length > 0 ? (
                                  <>
                                    <Tooltip
                                      className={"tooltip-label"}
                                      content={
                                        <>
                                          {value?.trangCon?.map(
                                            (value2, index2) => {
                                              return (
                                                <div
                                                  onClick={() => {
                                                    if (value?.sangTrangMoi) {
                                                      window.open(value2?.link);
                                                    } else {
                                                      router.push(value2?.link);
                                                    }
                                                  }}
                                                  className={`text-children mr-[40px] cursor-pointer pt-2 ${
                                                    value2?.link?.localeCompare(
                                                      typeMenu
                                                    ) === 0
                                                      ? "text-active lg:border-b-2  lg:border-primary-500"
                                                      : "lg:border-none"
                                                  } block  hover:border-b hover:border-primary mb-[8px]`}
                                                  key={index2}
                                                >
                                                  {value2.ten}
                                                </div>
                                              );
                                            }
                                          )}
                                        </>
                                      }
                                      style={"light"}
                                      placement="bottom-start"
                                    >
                                      <div className="text-sm md:text-xl">
                                        {value?.ten}
                                      </div>
                                    </Tooltip>
                                  </>
                                ) : (
                                  <div className="text-sm md:text-xl">
                                    {value?.ten}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                {/*<div className="relative mr-2" ref={langRef}>*/}
                {/*  <div*/}
                {/*    className="language flex items-center "*/}
                {/*    onClick={() => onClickLanguage()}*/}
                {/*  >*/}
                {/*    <img*/}
                {/*      className="w-8"*/}
                {/*      src={*/}
                {/*        props.language === "vi-VN"*/}
                {/*          ? "/images/icons/vn.svg"*/}
                {/*          : "/images/icons/us.svg"*/}
                {/*      }*/}
                {/*      alt=""*/}
                {/*    />*/}
                {/*    /!*{isChangeLang ? (*!/*/}
                {/*    /!*  <svg*!/*/}
                {/*    /!*    className="w-6 h-6"*!/*/}
                {/*    /!*    fill="none"*!/*/}
                {/*    /!*    stroke="currentColor"*!/*/}
                {/*    /!*    viewBox="0 0 24 24"*!/*/}
                {/*    /!*    xmlns="http://www.w3.org/2000/svg"*!/*/}
                {/*    /!*  >*!/*/}
                {/*    /!*    <path*!/*/}
                {/*    /!*      strokeLinecap="round"*!/*/}
                {/*    /!*      strokeLinejoin="round"*!/*/}
                {/*    /!*      strokeWidth="2"*!/*/}
                {/*    /!*      d="M5 15l7-7 7 7"*!/*/}
                {/*    /!*    ></path>*!/*/}
                {/*    /!*  </svg>*!/*/}
                {/*    /!*) : (*!/*/}
                {/*    /!*  <svg*!/*/}
                {/*    /!*    className="w-6 h-6"*!/*/}
                {/*    /!*    fill="none"*!/*/}
                {/*    /!*    stroke="currentColor"*!/*/}
                {/*    /!*    viewBox="0 0 24 24"*!/*/}
                {/*    /!*    xmlns="http://www.w3.org/2000/svg"*!/*/}
                {/*    /!*  >*!/*/}
                {/*    /!*    <path*!/*/}
                {/*    /!*      strokeLinecap="round"*!/*/}
                {/*    /!*      strokeLinejoin="round"*!/*/}
                {/*    /!*      strokeWidth="2"*!/*/}
                {/*    /!*      d="M19 9l-7 7-7-7"*!/*/}
                {/*    /!*    ></path>*!/*/}
                {/*    /!*  </svg>*!/*/}
                {/*    /!*)}*!/*/}
                {/*  </div>*/}
                {/*  {isChangeLang && (*/}
                {/*    <div className="language absolute top-9 right-0 shadow-lg py-2.5 w-40 secondary-bg rounded-xl ">*/}
                {/*      <ul>*/}
                {/*        <li className="hover:hover-bg px-2.5 cursor-pointer">*/}
                {/*          <a*/}
                {/*            className="flex items-center"*/}
                {/*            onClick={(e) => onChangeLanguage(e, "en")}*/}
                {/*          >*/}
                {/*            <img*/}
                {/*              className="w-8 mr-2"*/}
                {/*              src="/images/us.png"*/}
                {/*              alt=""*/}
                {/*            />{" "}*/}
                {/*            <span>English (US)</span>*/}
                {/*          </a>*/}
                {/*        </li>*/}
                {/*        <li className="hover:hover-bg px-2.5 cursor-pointer">*/}
                {/*          <a*/}
                {/*            className="flex items-center"*/}
                {/*            onClick={(e) => onChangeLanguage(e, "vi-VN")}*/}
                {/*          >*/}
                {/*            <img*/}
                {/*              className="w-8 mr-2"*/}
                {/*              src="/images/vi.png"*/}
                {/*              alt=""*/}
                {/*            />{" "}*/}
                {/*            Tiếng Việt*/}
                {/*          </a>*/}
                {/*        </li>*/}
                {/*      </ul>*/}
                {/*    </div>*/}
                {/*  )}*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
  .title-header {
    font-family: "SVN-Product Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    /* White */

    color: #ffffff;
  }
  .header-branch {
    padding: 11px 0;
    .info {
      .line {
        width: 1px;
        height: 100%;
        margin: 0 16px;
        border-right: 1px solid #ffffff;
      }
      img {
        margin-right: 4px;
        width: 20px;
        height: 20px;
      }
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
    .socical {
      img {
        margin-right: 20px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
  .label {
    .tooltip-label {
      border-radius: 0px !important;
      padding: 20px 24px !important;
      margin-left: -24.906px;
    }
  }
  .search {
    input {
      height: 100%;
      padding-left: 12px;
      background: #f1f3f5;
      border-radius: 4px 0 0 4px;
      &:focus {
        outline: none;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
    button {
      padding: 4px 12px;
      background: #f1f3f5;
      border-radius: 0px 4px 4px 0px;
      font-family: "Inter";
      font-style: normal;
      line-height: 20px;

      display: flex;
      align-items: center;

      color: #ffffff;
    }
  }
  .text-nav {
    padding-top: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22.5px;
  }
  .text-active {
    color: var(--text-main) !important;
    fill: #007bff;
  }
  .menu-mobile {
    ul {
      li {
        margin-bottom: 8px;
        border-bottom: 1px solid #ececec;
      }
    }
  }
  .text-children {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #18202a;
    &:hover {
      color: var(--main-color);
    }
  }
  .shadow-header {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  }
  .cover-ham {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffffa1;
    z-index: 30;
    opacity: 1;
    -webkit-transition: 500ms;
    transition: 500ms;
  }
  .ham-menu {
    width: 50%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    //visibility: hidden;
    //transform: translate(110%);
    //z-index: 998;
    background-color: #ffffff;
    animation: slide 0.5s forwards;
    //transition: 1s;
    display: flex;
    //justify-content: center;
    padding-left: 16px;
    align-items: center;
  }
  @keyframes slide {
    from {
      right: -50%;
    }
    to {
      right: 0;
    }
  }
`;
export default React.memo(Header);
