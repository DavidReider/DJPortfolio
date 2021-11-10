import NextLink from 'next/link'
import { Link, Container, Heading, Box, Image, SimpleGrid, Button, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a web developer based in the United States.
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            DJ Reider
                        </Heading>
                        <p> HTML / CSS / JavaScript </p>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph> I am a Web Developer based in Pennsylvania, USA with a passion for building digital services and other various projects. I enjoy launching products and planning and designing solutions for real-life problems with code. </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal"> My Work </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear> 1997 </BioYear>
                        Born in Harrisburg, Pennsylvania.
                    </BioSection>
                    <BioSection>
                        <BioYear> 2016 </BioYear>
                        Graduated from East Pennsboro High School.
                    </BioSection>
                    <BioSection>
                        <BioYear> 2019 </BioYear>
                        Worked at Penn State Applied Research Lab as a Software Engineer.
                    </BioSection>
                    <BioSection>
                        <BioYear> 2020 </BioYear>
                        Graduated from Widener University with a Bachelor of Science Degree in Computer Science. 
                    </BioSection>
                    <BioSection>
                        <BioYear> 2020 to present</BioYear>
                        Work at WebFX as a Web Developer.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                    On the web
                    </Heading>
                    <List>
                    <ListItem>
                        <Link href="https://github.com/DavidReider" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoGithub} />}
                        >
                            @DavidReider
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/Reider_DJ" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoTwitter} />}
                        >
                            @Reider_DJ
                        </Button>
                        </Link>
                    </ListItem>
                    </List>
                    
                    <Box align="center" my={4}>
                    <NextLink href="/posts">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        Popular posts
                        </Button>
                    </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page