import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dinoclass">
    <Container>
      <Title>
        Virtux <Badge>2018</Badge>
      </Title>
      <P>
        Virtux have the mission of giving startups the possibility to manage legal issues faster and better. As a legal services Saas we have helped our client to manage constitutions, fundraising and other the legal matters all in one place.
      </P>
      <P>
        👨🏻‍💻 Developed the platform and the marketing site. The design was done with Figma and Webflow. The product was done using React, nodejs and deployed on AWS.
      </P>
      <List ml={4} mt={4} mb={8}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser webapp/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>🤦‍♂️ User pain</Meta>
          <span>Startups want to have a faster access to legal issues</span>
        </ListItem>
        <ListItem>
          <Meta>🙋‍♀️ Solution</Meta>
          <span>A platform where lawyers could communicate and provide legal assistance faster to startups</span>
        </ListItem>
        <ListItem>
          <Meta>PM Stack</Meta>
          <span>Whimsical, Figma, Webflow, GA, Airtable, Asana, Notion, Hotjar</span>
        </ListItem>
        <ListItem>
          <Meta>Dev Stack</Meta>
          <span>React, Javascript, NodeJS, Postgress, AWS</span>
        </ListItem>
      </List>

      <>
            <iframe width="100%" height="315" borderRadius="lg"
            src="https://www.loom.com/embed/c022c9a185854888ad7379b806321829" 
            title="Virtux" 
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
      <>
            <iframe width="100%" height="315" borderRadius="lg"
            src="https://www.loom.com/embed/99534b8dcd7c416c81321ef1e6196114" 
            title="Virtux" 
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
      <WorkImage src="/images/works/virtux.png" alt="virtux" />
      <WorkImage src="/images/works/virtuxpm.png" alt="virtuxpm" />
    </Container>
  </Layout>
)

export default Work