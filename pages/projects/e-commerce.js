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
    <Layout title="E-Commerce React">
      <Container>
        <Title>
          E-Commerce React <Badge>2021</Badge>
        </Title>
        <P>
          E-Commerce app is an rich featured recap practice, was made to refresh
          my React knowledge.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/Ogzhnsfgl/ECommerceApp_React"
              target="_blank"
            >
              Github Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={1}>
            <Meta>Base Tech Stack</Meta>
            <span>ReactJS</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies Used</Meta>
            <span>
              React-Query, Antd, Chakra UI, Moment, React Image Gallery, Formik,
              Yuv
            </span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/ecommerce-01.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/ecommerce-02.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/ecommerce-03.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/ecommerce-04.jpg"
          alt="İkinci El Project"
        />
        <ProjectImage
          src="/images/projects/ecommerce-05.jpg"
          alt="İkinci El Project"
        />
      </Container>
    </Layout>
  );
};

export default Project;
