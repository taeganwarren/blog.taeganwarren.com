import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Container, SimpleGrid } from '@chakra-ui/layout';
import Header from '../components/Header';
import Card from '../components/Card';

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <Container paddingY="10" maxW="container.lg">
        <SimpleGrid columns={[1, 2, 3]} spacing="5">
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
