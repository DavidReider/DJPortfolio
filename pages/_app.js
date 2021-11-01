import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router } ) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter intial={true}>
                    <Component {...pageProps} key={router.route}></Component>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website