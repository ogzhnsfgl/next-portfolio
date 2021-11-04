import { Container, Badge, Link, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Title,
  ProjectImage,
  Meta,
  ProjectDetailListItem as ListItem,
} from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="devFinder">
      <Container>
        <Title>
          devFinder <Badge>2021</Badge>
        </Title>
        <P>
          devFinder App shows you information about developers you wonder from
          Github.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://devfinder-app.vercel.app/" target="_blank">
              Live Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/Ogzhnsfgl/DevfinderApp"
              target="_blank"
            >
              Github Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={1}>
            <Meta>Base Tech Stack</Meta>
            <span>ReactJS, SCSS</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies Used</Meta>
            <span>moment</span>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/devFinder.jpg" alt="DevFinderImg" />
        <ProjectImage
          src="/images/projects/devFinder-mobile.png"
          alt="DevFinderImg"
        />
      </Container>
    </Layout>
  );
};

export default Project;
