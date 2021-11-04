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
    <Layout title="Splitter">
      <Container>
        <Title>
          Splitter App <Badge>2021</Badge>
        </Title>
        <P>Splitter is an simple app to calculate bill amount with tip.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://splitter-app-iota.vercel.app/" target="_blank">
              Live Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/Ogzhnsfgl/Splitter-App"
              target="_blank"
            >
              Github Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={1}>
            <Meta>Base Tech Stack</Meta>
            <span>Pure JS and SCSS</span>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/splitter.jpg" alt="Splitter App" />
      </Container>
    </Layout>
  );
};

export default Project;
