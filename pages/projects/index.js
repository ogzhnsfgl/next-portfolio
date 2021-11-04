import {
  Container,
  Heading,
  SimpleGrid,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import { WorkGridItem } from "../../components/grid-item";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";

import IkincielThumb from "../../public/images/projects/IkincielThumb.jpg";
import Solitaire from "../../public/images/projects/solitaire.jpg";
import devFinder from "../../public/images/projects/devFinder.jpg";
import Splitter from "../../public/images/projects/splitter.jpg";
import ECommerceThumb from "../../public/images/projects/ecommerce-01.jpg";
import D503Thumb from "../../public/images/projects/d503-01.jpg";
import HigherThumb from "../../public/images/projects/higher-01.jpg";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="ikinciElProject"
              title="İkinci El Project"
              thumbnail={IkincielThumb}
            >
              It's full featured e-commerce app built as Patika & Çiçeksepeti
              React Bootcamp final project.
            </WorkGridItem>
          </Section>
          <Section delay={0.35}>
            <WorkGridItem
              id="oneSuitSolitaire"
              title="One Suit Solitaire"
              thumbnail={Solitaire}
            >
              One Suit Solitaire Game created with ReactJS!
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="higher" title="HIGHER" thumbnail={HigherThumb}>
              Higher is a simple blog project that has been built using React
              and SCSS.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="devFinder"
              title="devFinder App"
              thumbnail={devFinder}
            >
              DevFinder App shows you information about developers you wonder
              from Github.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="splitter"
              title="Splitter App"
              thumbnail={Splitter}
            >
              Splitter is an simple app to calculate bill amount with tip.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="e-commerce"
              title="E-Commerce React"
              thumbnail={ECommerceThumb}
            >
              E-Commerce app is an rich featured recap practice, was made to
              refresh my React knowledge.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="d503" title="D-503" thumbnail={D503Thumb}>
              D503 Game Portal created with pure CSS(SCSS). It's my first big
              SASS practice.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <Link href="https://www.github.com/ogzhnsfgl" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={ExternalLinkIcon} />}
                rightIcon={<Icon as={IoLogoGithub} />}
                height="100%"
                width="100%"
                px={3}
              >
                All projects...
              </Button>
            </Link>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Projects;
