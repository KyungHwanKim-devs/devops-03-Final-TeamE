import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        background: black;
        font-family: Helvetica, Arial, sans-serif, -apple-system,
          BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
          "Open Sans", "Helvetica Neue";
      }
    `}
  />
);
