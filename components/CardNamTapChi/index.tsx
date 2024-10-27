import styled from "styled-components";
import Link from "next/link";

export default () => {
    return <CardNamTapChiWrapper>
        <div className="card-type-2">
            <div className="heading">
                <div className="flex items-center justify-between">
                    <h2 className="title">Năm 2024</h2>
                    <strong className="sub-title">Từ tháng 1- tháng 12 2024</strong>
                </div>
            </div>
            <div className="card-body">
                <ul className="ds-so-tapchi">
                    <li className="item">
                        <div className="flex items-center gap-[12px]">
                            <Link href="/so-tap-chi/so-1" className="link">
                                Quyển. 25, Số 1
                            </Link>
                            <div className="vertical-line"></div>
                            <p className="meta">
                                Tháng 12 2024
                            </p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="flex items-center gap-[12px]">
                            <Link href="/so-tap-chi/so-1" className="link">
                                Quyển. 25, Số 1
                            </Link>
                            <div className="vertical-line"></div>
                            <p className="meta">
                                Tháng 12 2024
                            </p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="flex items-center gap-[12px]">
                            <Link href="/so-tap-chi/so-1" className="link">
                                Quyển. 25, Số 1
                            </Link>
                            <div className="vertical-line"></div>
                            <p className="meta">
                                Tháng 12 2024
                            </p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="flex items-center gap-[12px]">
                            <Link href="/so-tap-chi/so-1" className="link">
                                Quyển. 25, Số 1
                            </Link>
                            <div className="vertical-line"></div>
                            <p className="meta">
                                Tháng 12 2024
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </CardNamTapChiWrapper>
}

const CardNamTapChiWrapper = styled.div`
  .ds-so-tapchi {
    .item {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid #D6D6D5;
      :last-child {
        padding-bottom: 0px;
        margin-bottom: 0;
        border-bottom: 0;
      }
      .link {
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        text-align: center;
        color: var(--text-main);
        text-decoration: underline;
      }
    }
  }
`