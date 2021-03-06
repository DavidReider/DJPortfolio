import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbCodebug from '../public/images/works/Codebug.jpg'
import thumbYota from '../public/images/works/yota.jpg'
import thumbStince from '../public/images/works/stinceBuilt.png'
import thumbWLT from '../public/images/works/wlt.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="codebug" title="Codebug" thumbnail={thumbCodebug}>
                            A sudo blog that I&apos;ve created to practice learning with React and Sanity.IO CMS.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="yotabearingsandhubs" title="Yota Bearings and Hubs" thumbnail={thumbYota}>
                            An online eCommerce website created with Wix CMS for my family&apos;s business.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="stincebuilt" title="StinceBuilt" thumbnail={thumbStince}>
                            StinceBuilt is an eCommerce website that allows users to customize and purchase custom built computers. I assist in maintaining and updating the website as well as contributing to new features.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="wildlandtrekking" title="Wildland Trekking" thumbnail={thumbWLT}>
                            Wildland Trekking is a website that is designed to drive leads to their business. They provide tours and experiences at popular hiking locations. I assisted in creating various aspects of their website.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.4}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Old Projects
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="codebug" title="Codebug" thumbnail={thumbCodebug}>
                            A sudo blog that I&apos;ve created to practice learning with React and Sanity.IO CMS.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="yotabearingsandhubs" title="Yota Bearings and Hubs" thumbnail={thumbYota}>
                            An online eCommerce website created with Wix CMS for my family&apos;s business.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works