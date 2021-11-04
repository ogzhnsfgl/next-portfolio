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
    <Layout title="İkinci El Project">
      <Container>
        <Title>
          İkinci El Project <Badge>2021</Badge>
        </Title>
        <P>
          It's full featured e-commerce app built as Patika & Çiçeksepeti React
          Bootcamp final project.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://ciceksepeti-patika-graduation-project.vercel.app/"
              target="_blank"
            >
              Live Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/Ogzhnsfgl/ciceksepeti-patika-graduation-project"
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
            <span>Redux, Axios, Toastify, uuid, prop-types</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/IkincielThumb.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/Ikinciel-02.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/Ikinciel-03.png"
          alt="İkinci El Project"
        />
      </Container>
    </Layout>
  );
};

export default Project;
