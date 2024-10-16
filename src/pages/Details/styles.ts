import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 10.5rem auto;
   grid-template-areas: 
    "header"
    "content"
   ;

   > main {
      grid-area: content;
      overflow-y: scroll;
      padding: 6.4rem 0;
   }
`;

export const Content = styled.div`
    width: min(55rem, 90vw)  ;
    margin: 0 auto;

    > button:first-child{
      display: flex;
    margin-left: auto;
    }

    > h1 { 
      font-size: 3.6rem;
      font-weight: 500;
      padding-top: 6.4rem;
    }

    p{
      text-align: justify;
      margin-top: 1.6rem;
    }
`;

export const Links = styled.ul`
  list-style: none;

  > li{
   margin-top: 1.2rem;
   a{
      color: ${({theme}) => theme.COLORS.WHITE};
   }
  }
`;
