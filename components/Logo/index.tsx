import Link from "next/link";
import React from "react";

export default (props: {routerLink?: string}) => {
    return <>
        <Link href={props.routerLink || '/'}>
            <img src="/images/header/logo-tapchikhoahoc.svg" alt={"Logo tạp chí khoa học"} />
        </Link>
    </>
}