// import { Modal } from '../ui-global/modal/modal';
// import { ModalHome } from '../ui-global/modal/modalHome';
// import { Footer } from './footer/footer';
// import { Framer } from './framer';
// import { Navbar } from './navbar/navbar';

import { Navbar } from '../page/navbar/navbar';
import { CartBuy } from '../ui/global/cartBuy/cartBuy';
import Toast from '../ui/toast/toast';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<CartBuy></CartBuy>
			{/* <Modal index={11}>
				<ModalHome></ModalHome>
			</Modal> */}
			<Toast />
			{children}
			{/* <Footer /> */}
		</>
	);
}
