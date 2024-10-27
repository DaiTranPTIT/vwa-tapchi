import styled from "styled-components";
import React from "react";
import Link from "next/link";
import ShareSocial from "../../components/ShareSocial";

const MainFooter = () => {

	return (
		<FooterWrapper>
			<div className="footer-container">
				<div className="container mx-auto">
					<div className="flex flex-col items-center py-[50px] gap-[24px]">
						<div className="logo-footer">
							<Link href='/'>
								<img src="/images/footer/logo-footer.svg" alt={"Logo tạp chí khoa học"} />
							</Link>
						</div>
						<ShareSocial/>
					</div>
				</div>
				<div className="bgr-break">
					<img src={'/images/footer/bgr-break.png'}/>
				</div>
				<div className="copyright container mx-auto">
					<strong>© Copyright 2024 HocvienPhunuVietNam, All rights reserved ® Học viện Phụ nữ Việt Nam giữ bản quyền nội dung trên website này</strong>
					<strong>Phòng 1503, Tầng 15, Tòa A2, Học viện Phụ nữ Việt Nam, 68 Nguyễn Chí Thanh, Đống Đa, Hà Nội</strong>
					<strong>(84-24) 3775-4452; (84) 0983.160.389</strong>

					<div className="contact-info">
						<p>Tạp chí Khoa học Học viện Phụ nữ Việt Nam đang trong quá trình hoàn thiện, phát triển. Mọi ý kiến đóng góp, chia sẻ xin vui lòng gửi về:</p>
						<p>Toà soạn Tạp chí Khoa học, Học viện Phụ nữ Việt Nam </p>
						<p>Email: tapchikh@vwa.edu.vn</p>
					</div>
				</div>
			</div>
		</FooterWrapper>
	);
};
const FooterWrapper = styled.div`
	.footer-container {
		border-top: 2px solid #B2B5C1;
	}
	
	.bgr-break img {
		width: 100%;
		object-fit: contain;
	}

	.copyright {
		padding-top: 40px;
		padding-bottom: 40px;
		strong {
			display: block;
			text-align: center;
			font-size: 16px;
			font-weight: 700;
			line-height: 18.4px;
			color: var(--text-primary);
			margin-bottom: 12px;
		}
		
		.contact-info {
			p {
				display: block;
				text-align: center;
				font-size: 14px;
				font-weight: 400;
				line-height: 16.1px;
				color: var(--text-secondary);
				margin-bottom: 6px;
			}
			margin-top: 24px;
		}
	}
`;
export default MainFooter;
