import {
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoTwitter,
  IoMail
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import { PostIndexGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = ({ postList, image }) => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          my={12}
          align="center"
        >
          Hello, I'm software developer from Turkey.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Oğuzhan Sofuoğlu
            </Heading>
            <Text color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
              Frontend Developer - @Trendyol, Istanbul
            </Text>
          </Box>
          <Box
            flexShrink={0}
            ml={{ md: 6 }}
            mt={{ base: 4, md: 0 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              borderRadius="full"
              display="inline-block"
              overflow={'hidden'}
              height="100px"
              width="100px"
            >
              <Image
                priority
                alt="ProfilePic"
                src={image}
                width={100}
                height={100}
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Who am I?
          </Heading>
          <Paragraph>
            I graduated from Yildiz Technical University ‘18, Civil Engineering
            department, and after 3 years working as a civil engineer, I decided
            to change my career. I am working for a year as a Jr. Frontend
            Developer with ReactJs, NextJs, Typescript and other technologies.
            Also, I have written unit tests for all my implementations. I love
            to learn new things and javascript development.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>May,2024 to Present</BioYear>
            Associate Software Developer | Trendyol
          </BioSection>
          <BioSection>
            <BioYear>Dec,2022 to May, 2024</BioYear>
            Frontend Developer | Ciceksepeti.com / Mizu.com
          </BioSection>
          <BioSection>
            <BioYear>Dec,2021 to Dec,2022</BioYear>
            Jr. Frontend Developer | Ciceksepeti.com / Mizu.com
          </BioSection>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Posts
          </Heading>
          <Box>
            {postList.map((post, idx) => (
              <PostIndexGridItem
                title={post.title}
                thumbnail={post.thumbnail}
                key={post.title}
                href={`posts/${idx + 1}`}
              />
            ))}
          </Box>
        </Section>
        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Social Media & Contact
          </Heading>
          <SimpleGrid columns={{ sm: 2 }} gap={1}>
            <GridItem>
              <Link
                href="https://www.github.com/ogzhnsfgl"
                target="_blank"
                _hover={{ borderBottom: '1px solid teal' }}
              >
                <Button
                  _hover={'none'}
                  p={0}
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Ogzhnsfgl
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                href="mailto://o.sofuoglu@yahoo.com"
                target="_blank"
                _hover={{ borderBottom: '1px solid teal' }}
              >
                <Button
                  _hover={'none'}
                  p={0}
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  o.sofuoglu@yahoo.com
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                href="https://www.linkedin.com/in/oguzhan-sofuoglu/"
                target="_blank"
                _hover={{ borderBottom: '1px solid teal' }}
              >
                <Button
                  _hover={'none'}
                  p={0}
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Oguzhan Sofuoglu
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                href="https://osofuoglu.medium.com/"
                target="_blank"
                _hover={{ borderBottom: '1px solid teal' }}
              >
                <Button
                  _hover={'none'}
                  p={0}
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoMedium} />}
                >
                  Oguzhan Sofuoglu
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                href="https://www.twitter.com/ogzhnn_"
                target="_blank"
                _hover={{ borderBottom: '1px solid teal' }}
              >
                <Button
                  _hover={'none'}
                  p={0}
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Ogzhnsfgl
                </Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                href="https://www.instagram.com/ogzhnsfgl"
                target="_blank"
                _hover={{ borderBottom: '1px solid teal' }}
              >
                <Button
                  _hover={'none'}
                  p={0}
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @Ogzhnsfgl
                </Button>
              </Link>
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://osofuoglu.medium.com/feed`
  )
  const data = await response.json()
  console.log(data)

  return {
    props: {
      postList: data.items,
      image: data.feed.image
    },
    revalidate: 100
  }
}

