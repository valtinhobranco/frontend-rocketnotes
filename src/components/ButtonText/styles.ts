import styled from 'styled-components';
import { ButtonTextProps } from '.';



export const Container = styled.button<ButtonTextProps>`
   background: none;
   border: none;
   font-size: 1.6rem;
   color: ${({theme, $isactive}) => ($isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100) };
`;
