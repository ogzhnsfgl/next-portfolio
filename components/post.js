import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge, ListItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/posts">
      <Link>Posts</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const ArticleBody = styled.div`
  text-align: justify;
  text-indent: 1em;

  h3 {
    display: none;
  }

  figure {
    text-align: center;
    font-size: 10px;
    margin: 1rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    line-height: 1.5rem;
    margin: 1rem 0;
  }

  a {
    color: #ff63c3;
  }
`;
