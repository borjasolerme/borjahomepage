import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dinoclass">
    <Container>
      <Title>
        Airhopping <Badge>2019-2020</Badge>
      </Title>
      <P>
        Valencia based start-up that connects several destinations together through the cheapest route.
      </P>
      <P>
        🎨 As a product designer I worked with Figma, Framer and Whimsical
        to build the product, emails and marketing site designs and UX flow. 
      </P>
      <P>
        📲 As a product designer I was in charge of the design, analytics and user research, using tools as Amplitude, Hotjar, Mode, PopSQL and Gsuite.
      </P>
      <P>
        📈 I entered as the first product designer at the company working directly with the CEO, CTO and other 5 developers. We increased revenue by 100% year over year.
      </P>
      <List ml={4} mt={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.airhopping.com">
            https://www.airhopping.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>🤦‍♂️ User pain</Meta>
          <span>People want to find cheap flights to multiple places as easy as possible</span>
        </ListItem>
        <ListItem>
          <Meta>🙋‍♀️ Solution</Meta>
          <span>A platform where once you look for a flight destination it recomends you other places you can add from 0€ to the same travel.</span>
        </ListItem>
        <ListItem>
          <Meta>Product Designer Stack</Meta>
          <span>Whimsical, Figma, Framer, Amplitude, Gsuite, GA, Airtable, Trello, Notion, Hotjar</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/airhopping.png" alt="airhopping" />
      <WorkImage src="/images/works/air1.png" alt="air1" />
      <WorkImage src="/images/works/air2.png" alt="air2" />
      <WorkImage src="/images/works/air3.png" alt="air3" />
      <WorkImage src="/images/works/air4.png" alt="air4" />
      <WorkImage src="/images/works/air5.png" alt="air5" />
    </Container>
  </Layout>
)

export default Work