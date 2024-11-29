'use client';
import './navbar.scss';
import { usePathname } from 'next/navigation';
import { NavbarLink } from './components/link';
import { useEffect, useState } from 'react';
import { ContentLinks } from './components/contentlink';
import Link from 'next/link';
import { ButtonCart } from './components/buttonCart';
import { ButtonUser } from './components/buttonUser';
import { useSession } from 'next-auth/react';

interface IPropsChangeActive {
	(value: string, firstValue: string, secondValue: string): string;
}
export const Navbar = () => {
	const [toggle, setToggle] = useState<string>('');
	const handleToggle = (type: string) => {
		const newValue = changeActive(toggle, 'open', 'close');
		setToggle(newValue);
	};
	const changeActive: IPropsChangeActive = (value, firstValue, secondValue): string => {
		let newStatus;
		switch (value) {
			case '':
				newStatus = 'open';
				break;
			case firstValue:
				newStatus = 'close';
				break;
			case secondValue:
				newStatus = 'open';
				break;
			default:
				newStatus = '';
		}
		return newStatus;
	};

	return (
		<nav className={`nav w-full bg-secondary z-[20] sticky top-0`}>
			<div className='w-full bg-primary py-2 mobile:py-1'>
				<div className='container text-white flex items-center justify-center'>
					<div className='mr-4 leading-none text-0/9xl mobile:text-0/8'>Aprovecha las promociones y descuentos que tenemos para tí</div>
					<Link href='/promociones' className='rounded-full h-max text-primary border-white bg-white  mr-2 px-5 py-2 mobile:py-1 whitespace-nowrap'>
						Descuentos
					</Link>
				</div>
			</div>
			<div className='container content-nav '>
				<div className=' component-nav flex items-center xsm:justify-between h-[5rem] mobile:h-[4.5rem] relative justify-between'>
					<Link href='/' className='icon mask-left icon-brand w-12 h-12 bg-white'></Link>
					<Routes className=''></Routes>
					<div className='link flex gap-4 btns-action items-center xmd:h-full h-max mobile:justify-center py-6'>
						<ButtonUser></ButtonUser>
						<div className='w-px bg-white my-auto h-8 mr-6 ml-6 xmd:flex hidden'></div>
						<ButtonCart></ButtonCart>
					</div>

					<div
						className={`toggle xmd:hidden right-0 flex flex-col gap-2 z-[11] ${toggle}`}
						onClick={e => {
							handleToggle('active');
						}}
					>
						<div className='line line-2 h-[3px] w-[3rem] bg-white mobile:h-[2px] mobile:w-[2.5rem]'></div>
						<div className='line line-1 h-[3px] w-[3rem] bg-white mobile:h-[2px] mobile:w-[2.5rem]'></div>
					</div>
				</div>
				<div className={`menu fixed top-0 h-0 w-full bg-primary z-10 right-0 flex xmd:flex-row flex-col items-center justify-center ${toggle}`}>
					<RoutesMobile className=''></RoutesMobile>
				</div>
			</div>
		</nav>
	);
};

export const Routes = ({ className }: { className?: string }) => {
	return (
		<ContentLinks>
			<div className='compact_links relative xmd:h-full flex items-center group xmd:justify-start justify-center'>
				<NavbarLink to='/regalos' className='link text-white opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
					<span className='title-link xmd:text-1/0 text-1/3'>Productos</span>
				</NavbarLink>
				<div className='sub_links xmd:flex hidden flex-col absolute bottom-0 translate-y-[100%] bg-white h-0 overflow-hidden shadow '>
					<NavbarLink to='/regalos/peluches' className='link text-white py-2 px-4 hover:bg-black duration-200 group'>
						<span className='text-letter '>Peluches</span>
					</NavbarLink>
					<NavbarLink to='/regalos/arreglos-florales' className='link text-white py-2 px-4 hover:bg-black duration-200 group'>
						<span className='text-letter whitespace-nowrap '>Arreglos florales</span>
					</NavbarLink>
					<NavbarLink to='/regalos/visuteria' className='link text-white py-2 px-4 hover:bg-black duration-200 group'>
						<span className='text-letter white-space-nowrap '>Visuteria</span>
					</NavbarLink>
				</div>
			</div>
			<NavbarLink to='/promociones' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Promociones</span>
			</NavbarLink>
			<NavbarLink to='/contacto' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Contacto</span>
			</NavbarLink>
			<NavbarLink to='/blog' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Blog</span>
			</NavbarLink>
			<NavbarLink to='/nosotros' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Nosotros</span>
			</NavbarLink>
		</ContentLinks>
	);
};

export const RoutesMobile = ({ className }: { className?: string }) => {
	return (
		<div className='content-links flex w-max gap-4 xmd:h-full xmd:flex-row flex-col justify-center items-center'>
			<NavbarLink to='/regalos' className='link text-white opacity-70 [&.active]:opacity-100 flex xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3 text-center'>Productos</span>
			</NavbarLink>
			<NavbarLink to='/regalos/peluches' className='link text-white py-2 px-4 hover:bg-black duration-200 group'>
				<span className='text-white '>Peluches</span>
			</NavbarLink>
			<NavbarLink to='/regalos/arreglos-florales' className='link text-white py-2 px-4 hover:bg-black duration-200 group'>
				<span className='text-white whitespace-nowrap '>Arreglos florales</span>
			</NavbarLink>
			<NavbarLink to='/regalos/visuteria' className='link text-white py-2 px-4 hover:bg-black duration-200 group'>
				<span className='text-white white-space-nowrap '>Visuteria</span>
			</NavbarLink>
			<NavbarLink to='/promociones' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Promociones</span>
			</NavbarLink>
			<NavbarLink to='/contacto' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Contacto</span>
			</NavbarLink>
			<NavbarLink to='/blog' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Blog</span>
			</NavbarLink>
			<NavbarLink to='/nosotros' className='link text-white flex items-center opacity-70 [&.active]:opacity-100 xmd:justify-start justify-center'>
				<span className='title-link xmd:text-1/0 text-1/3'>Nosotros</span>
			</NavbarLink>
			<div className='link flex gap-4 btns-action items-center xmd:h-full h-max mobile:justify-center py-6'>
				<ButtonUser></ButtonUser>
				<ButtonCart></ButtonCart>
			</div>
			<div className='link flex justify-center items-center gap-4'>
				<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-gray-10 border-solid hover:bg-gray-10 group'>
					<div className='icon-facebook h-4 w-4 mask-center bg-white group-hover:bg-secondary'></div>
				</a>
				<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-gray-10 border-solid hover:bg-gray-10 group'>
					<div className='icon-instagram h-4 w-4 mask-center bg-white group-hover:bg-secondary'></div>
				</a>
				<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-gray-10 border-solid hover:bg-gray-10 group'>
					<div className='icon-youtube h-4 w-4 mask-center bg-white group-hover:bg-secondary'></div>
				</a>
			</div>
		</div>
	);
};
