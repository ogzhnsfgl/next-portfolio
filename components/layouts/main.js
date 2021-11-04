import Head from "next/head";
import Navbar from "../navbar.js";
import { Box, Container } from "@chakra-ui/layout";
import { VoxelDog } from "../voxel-dog.js";
import NoSsr from "../no-ssr.js";

const Main = ({ children, router }) => {
  return (
    <Box as="Main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Oğuzhan Sofuoğlu - Homepage </title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
