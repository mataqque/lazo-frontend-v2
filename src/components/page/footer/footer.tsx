'use client';
import './footer.scss';
import iconBrand from '../../../assets/images/global/icons/icon-brand.png';
import Image from 'next/image';
import { formSchemaFooter } from './formSchema';
import Link from 'next/link';
import { FormContainer } from '@/components/common/form/Form';
import { InputText } from '@/components/ui/inputs/InputText';
import { ParametersForm } from '@/components/common/form/interface';
// import { ParametersForm } from '@/app/account/interfaces/interface';
export const Footer = (props: any) => {
	const initialValues = {
		email: '',
	};
	const onsubmit = (values: any) => {};
	return (
		<footer className='footer z-10 relative'>
			<div className='container flex flex-row md:flex-wrap !py-12'>
				<div className='content-brand '>
					<div className='mask-left icon-brand bg-secondary w-5' />
					<div className='flex'>
						<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-white border-solid'>
							<div className='icon-mask icon-facebook h-4 w-4 mask-center bg-white'></div>
						</a>
						<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-white border-solid'>
							<div className='icon-mask icon-instagram h-4 w-4 mask-center bg-white'></div>
						</a>
						<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-white border-solid'>
							<div className='icon-mask icon-youtube h-4 w-4 mask-center bg-white'></div>
						</a>
					</div>
				</div>
				<div className='flex content-column mr-auto w-max'>
					<div className='column flex flex-col'>
						<Link href='/' className='t-column text-white IBMPlexSans-Bold'>
							Inicio
						</Link>
						<Link href='/blog' className='sub-t-column IBMPlexSans-Bold text-white'>
							Blog
						</Link>
						<Link href='/Regalos' className='sub-t-column IBMPlexSans-Bold text-white'>
							Regalos
						</Link>
						<Link href='/contacto' className='sub-t-column text-white'>
							Contacto
						</Link>
					</div>
					<div className='column flex flex-col'>
						<Link href='/peluches' className='t-column text-white IBMPlexSans-Bold'>
							Peluches
						</Link>
						<Link href='/osos' className='sub-t-column text-white'>
							Osos
						</Link>
						<Link href='/animes' className='sub-t-column text-white'>
							Animes
						</Link>
						<Link href='/fantasia' className='sub-t-column text-white'>
							Fantasía
						</Link>
						<Link href='/animales' className='sub-t-column text-white'>
							Animales
						</Link>
					</div>
					<div className='column flex flex-col'>
						<Link href='/Bisuteria' className='t-column text-white IBMPlexSans-Bold'>
							Bisutería
						</Link>
						<Link href='/anillos' className='sub-t-column text-white'>
							Anillos
						</Link>
						<Link href='/cadenas' className='sub-t-column text-white'>
							Cadenas
						</Link>
					</div>
				</div>
				<div className='flex flex-col newletters'>
					<span className='t-column text-white text-1/3 IBMPlexSans-Bold mb-4'>Noticias</span>
					<FormContainer initialValues={initialValues} validationSchema={formSchemaFooter} onSubmit={onsubmit}>
						{(form: any) => {
							const { handleSubmit, isSubmitting }: ParametersForm = form;
							return (
								<form onSubmit={handleSubmit}>
									<span className='text-white mb-6 flex'>Recibe noticias sobre nuestros productos</span>
									<div className='flex content-newletters gap-4'>
										<div className='inp '>
											<InputText
												name='email'
												placeholder='Example@example.com'
												className='placeholder:text-[#ffffff86] text-white'
												//  className='placeholder:text-[#ffffff86] text-white font-ibm_medium border-none border-b'
											/>
										</div>
										<button
											type='submit'
											className='submit rounded-lg bg-white text-secondary duration-300 min-h-[4rem] border-solid border-white border px-8 mx-auto flex items-center'
										>
											<span>Subcribrirse</span>
										</button>
									</div>
								</form>
							);
						}}
					</FormContainer>
				</div>
			</div>
			<div className='w-full py-6 bar-footer'>
				<div className='container flex justify-between items-between'>
					<span className='text-white font-ibm_light text-0/9'>Derechos reservados Lazo, 2023 </span>

					<div className=''>
						<span className='mx-2 text-white font-ibm_light text-0/9'>Legal</span>
						<span className='mx-2 text-white font-ibm_light text-0/9'>Politicas de privacidad</span>
						<a href='/terminos-y-condiciones' className='mx-2 text-white font-ibm_light text-0/9'>
							Términos y Condiciones
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
