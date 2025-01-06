import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default () => {
  return (
    <AuthorAndRegisterWrapper className="flex items-center gap-[20px]">
      <Link
        href={"https://tapchikhoahoc.hvpnvn.edu.vn/guibai/dashboard"}
        className="flex items-center gap-[8px]"
      >
        <svg
          className="h-5 w-5 color-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <span>Đăng nhập</span>
      </Link>
      <div className="vertical-line"></div>
      <Link
        href={"https://tapchikhoahoc.hvpnvn.edu.vn/guibai/dashboard"}
        className="flex items-center gap-[8px]"
      >
        <svg
          className="h-5 w-5 color-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>

        <span>Đăng ký</span>
      </Link>
    </AuthorAndRegisterWrapper>
  );
};

const AuthorAndRegisterWrapper = styled.div`
  .vertical-line {
    width: 2px;
    background: var(--primary-color);
    height: 100%;
  }
`;
