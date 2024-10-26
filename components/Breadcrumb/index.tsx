import { Breadcrumb } from "flowbite-react";
import styled from "styled-components";

interface IProps {
	data: {
		title: string;
		path: string;
	}[];
}
const BreadcrumbPage = (props: IProps) => {
	return (
		<BreadcrumbPageWrapper>
			<Breadcrumb aria-label='breadcrumb'>
				{props.data.map((val, i) => {
					return (
						<Breadcrumb.Item href={val.path} key={i}>
							{val.title}
						</Breadcrumb.Item>
					);
				})}
			</Breadcrumb>
		</BreadcrumbPageWrapper>
	);
};
export default BreadcrumbPage;

const BreadcrumbPageWrapper = styled.div`
    a {
		font-size: 15px;
		font-weight: 400;
		line-height: 22.5px;
		text-align: left;
		color: white;
		text-transform: unset;
	}
`;

