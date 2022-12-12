import { Container, Badge, Spinner } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, ArticleBody } from "../../components/post";

const PostDetail = ({ post }) => {
  const body = `<div class='post-body'>${post?.description}</div>`;

  if (!post) {
    return <Spinner />;
  }

  return (
    <Layout title={post?.title}>
      <Container maxWidth="100%" mt={12}>
        <Title>
          {post?.title} <Badge>{post?.pubDate}</Badge>
        </Title>
        <ArticleBody dangerouslySetInnerHTML={{ __html: body }} />
      </Container>
    </Layout>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osofuoglu`
  );
  const data = await res.json();

  const paths = data.items.map((post, idx) => {
    return {
      params: {
        id: `${idx + 1}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osofuoglu`
  );
  const data = await res.json();
  const post = data.items[params.id - 1];
  return {
    props: {
      post,
    },
    revalidate: 100,
  };
};
