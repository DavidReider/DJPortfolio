import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, inital-scale=1" />
                <title>DJ Reider - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg.md" pt={14}>
                    <VoxelDog />
                {children}
            </Container>
        </Box>
    )
}

export default Main