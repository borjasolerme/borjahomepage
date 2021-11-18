import { Container, Heading, SimpleGrid, Divider, Link, Button, Icon, Text } from '@chakra-ui/react'
import {
  IoLogoDribbble,
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, DribbleGridItem } from '../components/grid-item'

import thumbDinoclass from '../public/images/works/dinoclass.png'
import thumbAirhopping from '../public/images/works/airhopping.png'
import thumbLambda from '../public/images/works/lambda.png'
import thumbDribble from '../public/images/works/dribble.png'
import thumbVirtux from '../public/images/works/virtux.png'



const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={8}>
        Works
        <Divider mt={4} />
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dinoclass" title="Dinoclass 🦖 - Founder & Product lead" thumbnail={thumbDinoclass}>
            An education platform for kids where we provide interactive
            live classes, similar to Peloton for kids education.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="airhopping"
            title="Airhopping 🛫 - Product Designer"
            thumbnail={thumbAirhopping}
          >
            A Valencia based start-up that connects several destinations 
            together through the cheapest route.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="lambda"
            title="Lambda School 💻 - Team Lead"
            thumbnail={thumbLambda}
          >
            Lambda School, now Bloomtech is an online coding school where students pay a portion 
            of their income after they're hired. 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <DribbleGridItem id="dribble" title="My work on Dribbble" thumbnail={thumbDribble}>
            You can find most of my sideprojects and work on Dribbble
            with the designs I developed for that projects.
          </DribbleGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Sideprojects
          </Heading>
        </Section>
        
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="virtux"
            title="Virtux - Product & Design"
            thumbnail={thumbVirtux}
          >
            Virtux was a sideproject were I helped a person from Italy to develop a saas where lawyers could provide legal assistance and have a complete CRM and communication tools with its clients.
          </WorkGridItem>
        </Section>
        </SimpleGrid>

      <Divider my={6} />
    </Container>
  </Layout>
)

export default Works
