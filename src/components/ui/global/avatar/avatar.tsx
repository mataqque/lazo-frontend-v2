'use client';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const randomWarmColor = () => {
	return 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';
};
const getInitialLetters = (name: string) => {
	return name.substring(0, 2);
};

interface IIconAvatarProps {
	name: string;
	photo: string;
	extra?: any;
	fontSize?: string;
	color?: string;
}

export const IconAvatar = (props: IIconAvatarProps) => {
	const { name, photo, extra, fontSize = '1.5rem', color = randomWarmColor() } = props;
	const bgcolor = randomWarmColor();
	const initialLetters = getInitialLetters(name);
	return (
		<Stack direction='row' spacing={3} className='w-full h-full'>
			<Avatar sx={{ ...extra, bgcolor: color, width: '100%', height: '100%', fontSize: fontSize }} variant='rounded' alt={name} src={photo}>
				{initialLetters}
			</Avatar>
		</Stack>
	);
};
