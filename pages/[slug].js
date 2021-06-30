import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import {
  Container,
  Heading,
  Spacer,
  Text,
  Flex,
  Divider,
} from '@chakra-ui/layout';
import Header from '../components/Header';

export default function PostPage({
  frontmatter: { title, date },
  slug,
  content,
}) {
  return (
    <>
      <Header />
      <Container paddingY="10" maxW="container.lg">
        <Flex paddingBottom="1">
          <Heading as="h1" size="lg">
            {title}
          </Heading>
          <Spacer />
          <Text>{date}</Text>
        </Flex>
        <Divider />
        <MDXRemote {...content} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content: await serialize(content),
    },
  };
}
