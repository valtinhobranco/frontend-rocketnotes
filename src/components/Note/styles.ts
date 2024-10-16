import styled from 'styled-components';

export const Container = styled.button`
 width: 100%;
 background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
 border: none;
 border-radius:1.0rem;
 padding: 2.2rem;
   margin-bottom: 1.6rem;

   > h1{
    font-size: 2.4rem;
    text-align: left;
    font-weight: 700;
    flex: 1;
    color: ${({ theme }) => theme.COLORS.WHITE};
   }

   > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
   }
 `;
