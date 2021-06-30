import { Box, Button, Heading, Divider, Text } from '@chakra-ui/react';

export default function Card({ post }) {
  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Box p="5">
        <Heading as="h2" size="md" paddingBottom="1">
          {post.frontmatter.title}
        </Heading>
        <Divider />
        <Text mt="1">{post.frontmatter.excerpt}</Text>
        <Text fontSize="xs" mt="1">
          Posted on: {post.frontmatter.date}
        </Text>
        <Button as="a" href={`/${post.slug}`} colorScheme="blue" mt="4">
          Read More
        </Button>
      </Box>
    </Box>
  );
}
