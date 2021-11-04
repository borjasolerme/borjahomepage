import { Container, Heading, SimpleGrid, Divider, Link, Button, Icon, Text } from '@chakra-ui/react'
import {
  IoLogoDribbble,
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Dinoclass" title="Dinoclass 🦖 - Founder">
            An education platform for kids where we provide interactive
            live classes, similar to Peloton for kids education.
          </WorkGridItem>
          <Text fontSize={14} mt={2}>
            👨🏻‍💻 Developed the platform and the marketing site. Using Ruby on rails,
            javascript, TailwindCss and deployed on Heroku. 
          </Text>
          <Text fontSize={14} mt={2}>
            📲 In the product side I used Amplitude, Segment, Metabase, Hotjar,
            and other tools to gather the best insights for product development.
          </Text>
        </Section>
        <Section>
          <WorkGridItem
            id="Airhopping"
            title="Airhopping 🛫 - Product"
          >
            A Valencia based start-up that connects several destinations 
            together through the cheapest route.
          </WorkGridItem>
          <Text fontSize={14} mt={2}>
            🎨 As a product designer I worked with Figma, Framer and Whimsical
            to build the product, emails and marketing site designs and UX flow. 
          </Text>
          <Text fontSize={14} mt={2}>
            📲 As a product maker I was in charge of the analytics and user research,
            using tools as Amplitude, Hotjar, Mode, PopSQL and Gsuite.
          </Text>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Lambda"
            title="Lambda School 💻 - Team Lead"
          >
            Lambda School is an online coding school where students pay a portion 
            of their income after they're hired. 
          </WorkGridItem>
          <Text fontSize={14} mt={2}>
            💻 As a Team leader in Lambda School my role was to guide a group of 7
            students. Doing code reviews, one-on-one feedback, resolve conflicts and
            doing the management between students and Lambda.
          </Text>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="dribble" title="My work on Dribbble">
            You can find most of my sideprojects and work on Dribbble
            with the designs I developed for that projects.
          </WorkGridItem>
            <Link href="https://dribbble.com/borjasoler" target="_blank"> 
              <Button
                variant="ghost"
                my="4"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDribbble} />}
              >
                borjasoler
              </Button>
            </Link>
        </Section>
      </SimpleGrid>
      <Divider my={6} />
    </Container>
  </Layout>
)

export default Works
