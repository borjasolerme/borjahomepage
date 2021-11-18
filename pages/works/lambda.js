import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dinoclass">
    <Container>
      <Title>
        Lambda School, Now Bloomtech <Badge>2019</Badge>
      </Title>
      <P>
        Lambda School is an online coding school where students pay a portion of their income after they're hired.
      </P>
      <P>
        💻 As a Team leader in Lambda School my role was to guide a group of 7 students. Doing code reviews, one-on-one feedback, resolve conflicts and doing the management between students and Lambda.
      </P>
      <List ml={4} mt={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.bloomtech.com/">
            https://www.bloomtech.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          <span>Remote</span>
        </ListItem>
        <ListItem>
          <Meta>🤦‍♂️ User pain</Meta>
          <span>People want to learn to code remote effectively and Lambda wants to make sure people learn and get a job</span>
        </ListItem>
        <ListItem>
          <Meta>🙋‍♀️ Solution</Meta>
          <span>I provided special attention to a group of 7 students, and make sure they succeded learning. Reviewed code, provided guidance, Organized work with Lambda, daily 1:1 feedback, team meetings and workshops.</span>
        </ListItem>
        <ListItem>
          <Meta>Team Lead Stack</Meta>
          <span>Slack, Zoom, Airtable, Notion, Typeform, Github, VSCode, Replit</span>
        </ListItem>
      </List>

      <>
            <iframe width="100%" height="315" borderRadius="lg"
            src="https://www.loom.com/embed/1ba96ce0856b48e5bf50d53a22d24a8e" 
            title="Dinoclass" 
            frameborder="0" 
            allow="accelerometer; 
                autoplay; 
                fullscreen;
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
        >
        </iframe>
      </>
      <WorkImage src="/images/works/lambda1.png" alt="lambda1" />
      <WorkImage src="/images/works/lambda2.png" alt="lambda2" />
      <WorkImage src="/images/works/lambda3.png" alt="lambda3" />
    </Container>
  </Layout>
)

export default Work