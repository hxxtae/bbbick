import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .css-10hburv-MuiTypography-root {
    font-size: 14px !important;
    font-weight: inherit;
  }

  .css-ejie8s-MuiButtonBase-root-MuiMenuItem-root {
    font-size: 14px !important;
  }

  /* Dark */
  .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input {
    font-size: 14px !important;
  }

  /* Light */
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font-size: 14px !important;
  }

  /* Scroll_width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Scroll_Track */
  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  /* Scroll_Handle */
  ::-webkit-scrollbar-thumb {
    /* background: rgba(226, 227, 230, 1); */
    background: rgba(191, 198, 208, .8);
    border-radius: 4px 0 0 4px;
  }




  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
