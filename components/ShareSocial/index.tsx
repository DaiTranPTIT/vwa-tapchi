import styled from "styled-components";
import Link from "next/link";

export default () => {
    return <ShareSocialWrapper>
        <div className="flex gap-[16px]">
            <Link href="/" className="social-icon-box bg-primary hover:bg-secondary-500">
                <img src={'/images/icons-tckh/facebook-icon.svg'}/>
            </Link>
            <Link href="/" className="social-icon-box bg-primary hover:bg-secondary-500">
                <img src={'/images/icons-tckh/zalo-icon.svg'}/>
            </Link>
            <Link href="/" className="social-icon-box bg-primary hover:bg-secondary-500">
                <img src={'/images/icons-tckh/twetter-icon.svg'}/>
            </Link>
        </div>
    </ShareSocialWrapper>
}

const ShareSocialWrapper = styled.div`
    .social-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`