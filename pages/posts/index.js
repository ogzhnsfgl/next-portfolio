import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import { PostGridItem } from "../../components/grid-item";

const Posts = ({ postList }) => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} my={12}>
        Posts
      </Heading>
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {postList.map((post, idx) => (
            <PostGridItem
              title={post.title}
              thumbnail={post.thumbnail}
              key={post.title}
              href={`posts/${idx + 1}`}
            />
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);
export default Posts;

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://osofuoglu.medium.com/feed`
  );
  const data = await response.json();

  return {
    props: {
      postList: data.items,
    },
    revalidate: 100,
  };
};
