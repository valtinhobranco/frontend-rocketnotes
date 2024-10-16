
import styled from 'styled-components';

import BackgroundIMG from "../../assets/background.png";

export const Container = styled.div`
   height: 100vh;
   display: flex;

   align-items: stretch;
`;

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 padding: 0 13.6rem;

 > h1{
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
 }
 > h2{
    font-size: 2.4rem;
    margin: 4.8rem 0 2.4rem;
 }

 > p{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
 }

 > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 12.4rem;
 }
`;

export const Background = styled.div`
   flex: 1;
   background: url(${BackgroundIMG}) no-repeat center center;
   background-size: cover;
`;
