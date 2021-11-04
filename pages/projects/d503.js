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
    <Layout title="D503 Project">
      <Container>
        <Title>
          D503 <Badge>2021</Badge>
        </Title>
        <P>
          D503 Game Portal created with pure CSS(SCSS). It's my first big SASS
          practice.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://d503.vercel.app/" target="_blank">
              Live Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link href="https://github.com/Ogzhnsfgl/D503" target="_blank">
              Github Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={1}>
            <Meta>Base Tech Stack</Meta>
            <span>HTML, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies Used</Meta>
            <span>SCSS</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/d503-01.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/d503-02.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/d503-03.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/d503-04.jpg"
          alt="İkinci El Project"
        />
      </Container>
    </Layout>
  );
};

export default Project;
