import { Box, useColorModeValue } from '@chakra-ui/react';
import TypeIt from 'typeit-react';

export const HomeTextFrame = () => {
  return (
    <Box
      maxW="400px"
      width="100%"
      mx={['auto', 'auto', 0]}
      mt="50px"
      fontSize={['18px', '19px', '20px']}
      fontWeight="700"
      letterSpacing=".2 rem"
      lineHeight="2"
      fontFamily="PT Mono"
      color={useColorModeValue('purple.600', 'teal.400')}
    >
      <TypeIt
        options={{ loop: true }}
        getBeforeInit={instance => {
          instance
            .pause(1500)
            .type('Hey hey!!!')
            .pause(750)
            .delete(2)
            .pause(300)
            .delete(1)
            .pause(200)
            .type('..!')
            .pause(300)
            .type(
              ' Grogu is very happy to see you, and wants to presents PhoneBook App from planet Mandalore.'
            )
            .pause(500)
            .delete(1)
            .pause(200)
            .type('..!')
            .pause(300)
            .type(' Don`t wait! Let`s try this piece of she*')
            .pause(300)
            .delete(4)
            .type('galaxy...')
            .pause(300)
            .delete(3)
            .type('!!! ')
            .pause(2000);

          return instance;
        }}
      />
    </Box>
  );
};
