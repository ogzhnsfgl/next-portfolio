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
    <Layout title="HIGHER">
      <Container>
        <Title>
          HIGHER <Badge>2021</Badge>
        </Title>
        <P>
          Higher is a simple blog project that has been built using React and
          SCSS.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://cicek-sepeti-patika-dev-homework-3.vercel.app/"
              target="_blank"
            >
              Live Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/Ogzhnsfgl/CicekSepeti-patika.dev-Homework-3"
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
            <span>React-Modal, React-Toastify</span>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/higher-01.jpg" alt="HigherImg" />
        <ProjectImage src="/images/projects/higher-02.jpg" alt="HigherImg" />
        <ProjectImage src="/images/projects/higher-03.jpg" alt="HigherImg" />
      </Container>
    </Layout>
  );
};

export default Project;
