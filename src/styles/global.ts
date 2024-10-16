import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
scroll-behavior: smooth;
}

html,
body,
input,
textarea {
    font-family: "Roboto", sans-serif;
}

h1, 
h2, 
h3, 
h4, 
h5, 
h6, 
button, 
span, 
strong{
    font-family: "Roboto Slab", serif;
}

:root {
    font-size: clamp(40%, 1% + 2vw, 62.5%) ;
    
}

body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) =>  theme.COLORS.WHITE};

}



::-webkit-scrollbar {
    width:10px;
    height: 10px;
}


::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

::-webkit-scrollbar-thumb {
    
    background: ${({ theme }) => theme.COLORS.ORANGE};
  
    border-radius: 5px;
}


 a { 
     text-decoration: none;
}
button, a { 
    cursor: pointer;
    transition: filter .2s;
}

button:hover, a:hover { 
   filter: brightness(0.9)
}



`;
