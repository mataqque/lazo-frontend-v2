import Link from 'next/link';

export const LinkComponentRegister = () => {
	return (
		<span className='flex text-letter text-center mt-4 mb-4 w-full ml-auto mr-auto justify-center'>
			¿No eres un miembro aún?  
			<Link href={'/account/register'} className='underline c-letter'>
				Regístrate aquí
			</Link>
		</span>
	);
};

export const LinkComponentLogin = () => {
	return (
		<p className='paragraph text-center mt-4'>
			¿Ya eres miembro?  
			<Link href={'/account/login'} className='underline c-letter'>
				Inicia sesión aquí
			</Link>
		</p>
	);
};

export const ShowErrorLogin = (props: any) => {
	if (props.error)
		return (
			<div className='alert text-red-600 text-center mb-2' role='alert'>
				Usuario o contraseña invalidos
			</div>
		);
	return <></>;
};
