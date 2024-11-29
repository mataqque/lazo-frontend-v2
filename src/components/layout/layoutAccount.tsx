import { Navbar } from '../page/navbar/navbar';
import Toast from '../ui/toast/toast';

export default function LayoutAccount({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Toast />
			<Navbar />
			{children}
		</>
	);
}
