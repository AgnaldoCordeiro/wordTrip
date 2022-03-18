import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4063",
      "500": "#47585B",
      "400": "#797D9A",
      "300": "#9699B8",
      "200": "#B3B5C6",
      "100": "#D1D0DC",
      "50": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },

  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.500",
      },
    },
  },
});
