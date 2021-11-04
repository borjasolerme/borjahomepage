import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import mvp from '../public/images/contents/mvp.jpeg'
import superhuman from '../public/images/contents/superhuman.jpg'
import Lambda from '../public/images/contents/Lambda.jpeg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        ✍️ Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="🍷 del MVP al producto soñado"
            thumbnail={mvp}
            href="https://creando.substack.com/p/-del-mvp-al-producto-soado"
          />
          <GridItem
            title="La estrategia de Superhuman para crecer y encontrar product/market fit"
            thumbnail={superhuman}
            href="https://medium.com/@borjasolerr/la-estrategia-de-superhuman-para-crecer-y-encontrar-product-market-fit-6742e8ba8fef"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Starting a Bootcamp. Starting Lambda School in Europe"
            thumbnail={Lambda}
            href="https://medium.com/@borjasolerreyes/starting-a-bootcamp-starting-lambda-school-in-europe-291fa1749f6a"
          />
          
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        
      </Section>
      <Divider mb={6} mt={16} />
    </Container>
  </Layout>
)

export default Posts
