import { Image, SimpleGrid } from '@chakra-ui/react';
import { HomeImgFrame, HomeTextFrame, Section } from 'components';
import homePageContent from 'images/content/homePageContent.webp';

const Home = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, 1, 2]}
        spacingX={[0, 0, 5]}
        mt={['30px', '50px', '70px']}
        mb="0"
      >
        <Section delay={0.2}>
          <HomeImgFrame>
            <Image
              maxW={['200px', '250px', '350px']}
              width="100"
              m={['0 auto 0 auto', '0 auto 0 auto', '0 0 0 auto']}
              src={homePageContent}
              alt="Grogu search your not found page"
            />
          </HomeImgFrame>
        </Section>
        <Section delay={0.3}>
          <HomeTextFrame />
        </Section>
      </SimpleGrid>
    </>
  );
};

export default Home;
