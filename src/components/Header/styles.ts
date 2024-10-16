import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
grid-area: header;

height: 10.6rem;
width: 100%;

border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

display: flex;
justify-content: space-between;
align-items: center;
padding: 0 8rem;


`;

export const Profile = styled(Link)`
display: flex;
align-items: center;
gap: 1.6rem;
> img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    
}

> .description{
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    span{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 1.4rem;
    }
    strong{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.8rem;
    }
}
`;

export const Logout = styled.button`
    border: none;
    background: none;
    width: fit-content;
    height: fit-content;

    > svg{
        font-size: 3.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

`;
