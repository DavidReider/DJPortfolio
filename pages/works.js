import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCodebug from '../public/images/works/Codebug.jpg'
import thumbYota from '../public/images/works/yota.jpg'

const Works = () => {
    return (
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
    )
}

export default Works