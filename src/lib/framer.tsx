import { AnimatePresence } from 'framer-motion';

export const Framer = ({ children }: { children: React.ReactNode }) => {
	return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
};
