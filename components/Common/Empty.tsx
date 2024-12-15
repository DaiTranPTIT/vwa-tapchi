import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";

const Empty = (props: { title?: string }) => {
	const {dataConfigLang}=useContext(AuthContext)
	let title = props.title ?? dataConfigLang?.khongCoDuLieu;

	return (
		<EmptyWrapper className='empty-content'>
			<img width={200} src="/images/empty-post.jpg"/>
			<strong>{title}</strong>
		</EmptyWrapper>
	);
};

const EmptyWrapper = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
`

export default Empty;
