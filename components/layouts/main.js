import Head from "next/head";
import Navbar from "../navbar.js";
import { Box, Container } from "@chakra-ui/layout";

const Main = ({ children, router }) => {
  return (
    <Box as="Main" pb={8}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Oguzhan Sofuoglu - Frontend Developer - Personal Website"
        />
        <title> Oğuzhan Sofuoğlu - Homepage </title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
