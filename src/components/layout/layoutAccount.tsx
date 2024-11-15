// import { Footer } from './footer/footer';
// import { Navbar } from './navbar/navbar';

import Toast from '../ui/toast/toast';

export default function LayoutAccount({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Toast />
			{/* <Navbar /> */}
			{children}
		</>
	);
}
