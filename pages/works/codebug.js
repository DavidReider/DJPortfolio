import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="codebug">
            <Container>
                <Title>
                    Codebug <Badge>2021</Badge>
                </Title>
                <P>
                    A fake blog created in React to practice learning and becoming familiar with ReactJS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Website </Meta>
                        <Link href="https://codebug.netlify.app/">
                            https://codebug.netlify.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Technologies </Meta>
                        <span> HTML/CSS/JS/ReactJS </span>
                    </ListItem>
                    <ListItem>
                        <Meta> Topic </Meta>
                        <span> Technology, Coding </span> 
                    </ListItem>
                </List>

                <WorkImage src="/images/works/Codebug.jpg" alt="Codebug" />
            </Container>
        </Layout>
    )
}

export default Work
