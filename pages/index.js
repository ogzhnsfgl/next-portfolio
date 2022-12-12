import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  Icon,
  GridItem,
  Text
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoMedium,
  IoMail,
} from "react-icons/io5";
import Image from "next/image";
import {  PostIndexGridItem } from "../components/grid-item";

const Page = ({postList,image}) => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          my={12}
          align="center"
        >
          Hello, I'm software developer from Turkey.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Oğuzhan Sofuoğlu
            </Heading>
                <Text color={useColorModeValue("blackAlpha.700", "whiteAlpha.600")}>Frontend Developer - @Ciceksepeti, Ankara</Text>
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
              overflow={"hidden"}
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
            <BioYear>Dec,2021 to Present</BioYear>
            Jr. Frontend Developer | Ciceksepeti.com / Mizu.com
          </BioSection>
        </Section>
        <Section delay={0.5}>
         <Heading as="h3" variant="section-title">
            Posts
          </Heading>
        <Box >
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
              <Link href="https://www.github.com/ogzhnsfgl" target="_blank">
                <Button
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
              <Link href="mailto://o.sofuoglu@yahoo.com" target="_blank">
                <Button
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
              >
                <Button
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
              <Link href="https://o-sofuoglu.medium.com/" target="_blank">
                <Button
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
              <Link href="https://www.twitter.com/ogzhnn_" target="_blank">
                <Button
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
              <Link href="https://www.instagram.com/ogzhnsfgl" target="_blank">
                <Button
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
  );
};

export default Page;

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osofuoglu`
  );
  const data = await response.json();

  return {
    props: {
      postList: data.items,
      image : data.feed.image
    },
    revalidate: 100,
  };
};
