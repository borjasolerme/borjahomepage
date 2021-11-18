import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dinoclass">
    <Container>
      <Title>
        Dinoclass <Badge>2020-2021</Badge>
      </Title>
      <P>
        An education platform for kids where we provide interactive live classes, similar to Peloton for kids education.
      </P>
      <P>
        👨🏻‍💻 Developed the platform and the marketing site. Using Ruby on rails, javascript, TailwindCss and deployed on Heroku.
      </P>
      <P>
        📲 In the product side I used Amplitude, Segment, Metabase, Hotjar, and other tools to gather the best insights for product development.
      </P>
      <P>
        📈 With Dinoclass we built a product from 0 to $1500 MRR reaching 1397 registered users and 8 users that did more than 800 live classes during a year.
      </P>
      <List ml={4} mt={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dinoclass.webflow.io/">
            https://www.dinoclass.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>🤦‍♂️ User pain</Meta>
          <span>Kids get bored learning and they don't develop their curiosity and knowledge</span>
        </ListItem>
        <ListItem>
          <Meta>🙋‍♀️ Solution</Meta>
          <span>A platform where kids during a live class can play games every 2-3mins with other kids around the world, they can connect, and interact during class</span>
        </ListItem>
        <ListItem>
          <Meta>PM Stack</Meta>
          <span>Whimsical, Figma, June, Metabase, Amplitude, Stripe, Profitwell, GA, Airtable, Asana, Notion, Hotjar</span>
        </ListItem>
        <ListItem>
          <Meta>Dev Stack</Meta>
          <span>Ruby on Rails, Javascript, Postgress, Heroku</span>
        </ListItem>
      </List>

      <>
            <iframe width="100%" height="315" borderRadius="lg"
            src="https://www.loom.com/embed/c7eb23924dfd42f28331d09de1ce756a" 
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
      <WorkImage src="/images/works/dino2.png" alt="dino2" />
      <WorkImage src="/images/works/dino3.png" alt="dino3" />
      <WorkImage src="/images/works/dino4.png" alt="dino4" />
      <WorkImage src="/images/works/dino5.png" alt="dino5" />
      <WorkImage src="/images/works/dinopm1.png" alt="dinopm1" />
      <WorkImage src="/images/works/dinopm2.png" alt="dinopm2" />
      <WorkImage src="/images/works/dinopm3.png" alt="dinopm3" />
    </Container>
  </Layout>
)

export default Work