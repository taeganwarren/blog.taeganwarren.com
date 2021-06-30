import { Box, Container, Link } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';

export default function Header() {
  return (
    <Box w="100%" bgColor="#3182ce">
      <Container maxW="container.lg">
        <Heading as="h1" size="lg" paddingY="2" color="white">
          <Link href="/">Blog</Link>
        </Heading>
      </Container>
    </Box>
  );
}
