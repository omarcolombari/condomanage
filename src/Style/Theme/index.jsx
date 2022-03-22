import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
    color: {
        color_60:"#ffffff",
        color_30:"#c5e8fb",
        color_10:"#141155",
        grey_1:"#00a5ae",
        grey_2:"#f2f6ff",
    },
    fonts: {
        heading: 'Poppins',
        body: 'Roboto',
    },
    components: {
        Heading: {
            variants: {
                /*  Import { Heading } from "@chakra-ui/react"
                    <Heading variant="title2"></Heading>   */
                title1: { color:"#141155",fontStyle: "regular",fontWeight: "semibold" },
                title2: { color:"#00a5ae",fontStyle: "regular",fontWeight: "semibold" },
                title3: { color:"#000000",fontStyle: "regular",fontWeight: "light" },
                title4: { color:"#000000",fontStyle: "regular",fontWeight: "bold" },
                title5: { color:"#ffffff",fontStyle: "regular",fontWeight: "light" },
            }
        },
        Text: {
            variants: {
                /*  Import { Text } from "@chakra-ui/react"
                    <Text variants="text2"></Text>     */
                text1: { color:"#000000",fontStyle: "regular",fontWeight: "light" },
                text2: { color:"#ffffff",fontStyle: "regular",fontWeight: "semibold" },
                text3: { color:"#000000",fontStyle: "regular",fontWeight: "light",d:"flex",flexDir:"row",alignItems:"center",ml:"18px"},
            }
        },
        Button: {
                /*  Import { Button } from "@chakra-ui/react"
                    <Button variant="default"></Button>    */
            variants: {
                default: {
                    bg:"#00a5ae",
                    color:"#ffffff",
                    borderRadius:"4px",
                    _hover:{
                        bg:"#c5e8fb",
                        color:"#141155",
                    },
                    _focus:{
                        boxShadow:"none"
                    }
                }
            }
        }
    },
})

export default CustomTheme;
