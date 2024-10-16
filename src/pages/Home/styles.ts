import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-columns: 25rem auto;

grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
 
 grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content"
 ;

 background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};

`
export const Brand = styled.div`
   grid-area: brand;
   
   display: flex;
   justify-content: center;
   align-items: center;

   border-right: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
   
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   > h1{
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }
`


export const Menu = styled.ul`
grid-area: menu;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

text-align: center;
padding-top: 6.4rem;
border-right: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
border-top: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

> li {
   margin-bottom: 24px;
}
  
`
export const Search = styled.div`
grid-area: search;

padding:  64px   64px  0;
  
`
export const Content = styled.div`
grid-area: content;

padding:  0 64px  ;

overflow-y: auto;
  
`
export const NewNote = styled(Link)`
grid-area: newnote;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: center;
  align-items: center;
   gap: .8rem;
 
  font-size: 2rem;


`


