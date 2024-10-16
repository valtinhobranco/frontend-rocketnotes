import styled from 'styled-components';

export const Container = styled.section`
/* width: min(55rem, 90vw)  ; */
display: flex;
flex-direction: column;
margin: 2.8rem 0 ;
gap: 1.6rem;

 > h2{
    font-size: 2rem;
    padding-bottom: 1.6rem;
    color: ${({theme}) => theme.COLORS.GRAY_100} ;
     border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  }
`;


