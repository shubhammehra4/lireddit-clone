import { extendTheme } from "@chakra-ui/react";
const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
} as const;

const theme = extendTheme({ config });
export default theme;
