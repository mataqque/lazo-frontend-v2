'use client';
import styled from 'styled-components';
import { IconMask } from '../../../components/ui-global/Inputs/styled/IconDownStyleSelect';
import brand from '../../../assets/images/global/icons/brand-lazo.svg';

interface IProps {
	sizeH?: string;
	sizeW?: string;
}
export const ImageBrand = styled(IconMask)`
	display: block;
	mask-image: url(${brand});
`;
