import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a product manager/designer from Spain!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Borja Soler
          </Heading>
          <p>Digital Craftsman ( PM / Designer / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Borja.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I'm a product manager, designer and developer, specialized
          on the product side. Previously I built some sideprojects and
          worked at Lambda School and at Airhopping.
          You can find me on {' '}  
          <a href="https://twitter.com/borjasolerme" target="_blank">
            <Link>Twitter</Link>
          </a>
           & {' '}
          <a href="https://twitter.com/borjasolerme" target="_blank">
            <Link>Linkedin</Link>
          </a>
          .
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Ibiza 🏝, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Started studies in Business Administratrion
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          👨‍💻 Studied full stack development at Lambda School
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Team leader at Lambda School
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          👨🏻‍🎨 Product designer at Airhopping
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          🦖 Dinoclass Cofounder, b2c startup doing product and development
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          Startups, Sport, Music,{' '}
          <Link href="https://www.instagram.com/borjasolerme/" target="_blank">
            Photography and Video
          </Link>
          , Science, Art
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/borjasolerr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @borjasolerr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/borjasolerme" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @borjasolerme
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/borjasolerreyes/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @borjasolerreyes
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @borjasolerme
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={8}>
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

export default Home
