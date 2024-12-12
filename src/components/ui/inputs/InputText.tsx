'use client';
import { type IInputPasswordProps, type IInputProps } from './interface';
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from 'react';
import { IconTogglePassword } from './iconInputs';
import { useField } from 'formik';
import { getInputClasses, getValidClass } from './helpers';
import { delayfunc } from '@/helpers/helpers';
import { cn } from '@/lib/utils';
import { setInputTextProps } from '@/components/common/form/Form';

export const InputText = (props: IInputProps) => {
	const { name, className = '', placeholder, extraClass = '', defaultValue = '', type, ...rest } = props;
	const [field, meta, helpers] = useField({ name });

	return (
		<div className={`relative ${props.icon ? 'include-icon' : ''}`}>
			<input
				id='input'
				{...field}
				className={
					cn(
						`text-1/1 w-full border border-solid px-6 text-white rounded-lg border-borderinput min-h-[4rem] mobile:text-1/0 placeholder:text-1/1 mobile:placeholder:text-1/0 ${className} `
					) +
					' ' +
					`${extraClass} ${getValidClass(meta)}`
				}
				type='text'
				autoComplete='off'
				placeholder={placeholder || ''}
				tabIndex={props.tabIndex ?? 0}
			/>
			{props.icon && (
				<div className='w-[35px] absolute top-0 bottom-0 my-auto left-[1px] flex items-center justify-center'>
					<div style={{ WebkitMaskImage: `url(${props.icon.src})` }} className='mask-center w-5 h-5 bg-gray-300 '></div>
				</div>
			)}
		</div>
	);
};

export const InputTextPassword = (props: IInputPasswordProps) => {
	const { name, placeholder, form, ...rest } = props;
	const inputPassword = useRef<HTMLInputElement>(null);
	const [iconShowPassword, SetIconShowPassword] = useState<boolean>(true);
	const showPassword = () => {
		const type: HTMLInputTypeAttribute = inputPassword?.current?.getAttribute('type') ?? 'password';
		if (type === 'password') SetIconShowPassword(false);
		else SetIconShowPassword(true);
	};
	return (
		<div className={`relative ${rest?.className ? rest.className : ''}`}>
			<div className={`content-sub-input ${props.icon ? 'include-icon' : ''}`}>
				<input
					className={`w-full border border-solid border-borderinput h-12 px-4 rounded-lg text-letterinput placeholder:text-letterinput ${getInputClasses(name, form)}`}
					type={iconShowPassword ? 'password' : 'text'}
					placeholder={placeholder || ''}
					{...setInputTextProps(name, form)}
					ref={inputPassword}
				/>
				<IconTogglePassword class={iconShowPassword} showPassword={showPassword}></IconTogglePassword>
			</div>
		</div>
	);
};
