
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;

> header{
   width: inherit;
   height: 14.4rem;
   background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   display: flex;
   align-items: center;
   padding: 0 12.4rem;
   svg{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
   }

   button{
      background: none;
     
      border: none;
   }
}
`;


export const Form = styled.form`
width: min(34rem, 90vw) ;
margin:  3rem auto 0 ;

> div:nth-child(4){
   margin-top: 24px;
}
`;

export const Avatar = styled.div`
position: relative;

width: 186px;
height: 186px;

margin: -124px auto 32px ;
> img {
   width: 186px;
   height: 186px;
   
   border-radius: 50%;
}

> label {
   width: 48px;
   height: 48px;
   
   background-color: ${({ theme }) => theme.COLORS.ORANGE};
   border-radius: 50%;
   
   display: flex;
   justify-content: center;
   align-items: center;
   
   position: absolute;
   bottom: 7px;
   right: 7px;
   
   cursor: pointer;
   
   input{
       display: none;
   }

   svg{
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

   }
   
}
`;