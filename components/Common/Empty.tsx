import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Empty = (props: { title?: string }) => {
	const {dataConfigLang}=useContext(AuthContext)
	let title = props.title ?? dataConfigLang?.khongCoDuLieu;

	return (
		<div className='empty-content'>
			<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg' width={80}>
				<rect fill='none' height='256' width='256' />
				<path
					d='M156.7,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.7a7.9,7.9,0,0,1-2.3,5.6l-51.4,51.4A7.9,7.9,0,0,1,156.7,216Z'
					fill='none'
					stroke='#999'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='8'
				/>
				<polyline
					fill='none'
					points='215.3 160 160 160 160 215.3'
					stroke='#999'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='8'
				/>
			</svg>
			{title}
		</div>
	);
};

export default Empty;
