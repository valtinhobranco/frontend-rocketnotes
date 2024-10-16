
import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   width: 100%;

   display: grid;
   grid-template-rows: 10.5rem auto;

   grid-template-areas: 
     "header"
     "content"
   ;

   > main{
    grid-area: content;

    overflow-y: auto;
   }

   .tags{
    display: flex;
    
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    
   }
`;

export const Form = styled.form`
    width: min(55rem, 90vw);
    margin: 3.8rem auto;

    > header{
        display: flex;
        align-items: center;
        justify-content: space-between;
         margin-bottom: 3.6rem;
        button{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 2.0rem;
        }
    }
`;
