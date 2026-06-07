import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

:root {
  font-family:
    Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #111827;
  background: #f8fafc;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  background-color: #e9ecef;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.app-page {
  width: min(1180px, 100%);
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px 24px;
}

.app-page h1 {
  margin: 0;
  font-size: 32px;
  line-height: 1.2;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: 600;
}
`;
