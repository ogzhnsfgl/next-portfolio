import { useRouter } from "next/dist/client/router";
import { Container, Badge, Spinner } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title, ArticleBody } from "../../components/post";

const PostDetail = ({ postList }) => {
  const router = useRouter();
  const { id } = router.query;
  const post = postList[id - 1];
  const body = `<div class='post-body'>${post?.description}</div>`;
  console.log("Post Detail Rendered!");
  if (!postList) {
    return <Spinner />;
  }

  return (
    <Layout title={post?.title}>
      <Container maxWidth="100%">
        <Title>
          {post?.title} <Badge>{post?.pubDate}</Badge>
        </Title>
        <ArticleBody dangerouslySetInnerHTML={{ __html: body }} />
      </Container>
    </Layout>
  );
};

export default PostDetail;

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@o-sofuoglu`
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      postList: data.items,
      revalidate: 100,
    },
  };
};

export async function getStaticPaths() {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@o-sofuoglu`
  );
  const data = await response.json();
  console.log(data);

  // Get the paths we want to pre-render based on posts
  const paths = data.items.map((post, idx) => ({
    params: { id: (idx + 1).toString() },
  }));

  return { paths, fallback: false };
}
