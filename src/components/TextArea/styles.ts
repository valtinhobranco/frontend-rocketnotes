import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  border-radius:1rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  padding: 16px;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
  }
`;
