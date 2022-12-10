import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import filterSelectors from '../../redux/filter/filterSelectors';
import { setFilter } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterSelectors.getFilterValue);

  const backgroundBtn = useColorModeValue('purple.600', 'btnOutlineBG');
  const inputBorderColor = useColorModeValue('purple.300', 'teal.900');

  const handleFilterChange = event => {
    const filtered = event.target.value;
    dispatch(setFilter(filtered));
  };
  return (
    <>
      <Box my="20px" mx="auto" maxW="700px">
        <form>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color={backgroundBtn} />}
            />
            <Input
              value={filterValue}
              onChange={handleFilterChange}
              type="text"
              borderColor={inputBorderColor}
              _hover={{ borderColor: inputBorderColor }}
              focusBorderColor={backgroundBtn}
              _placeholder={{ opacity: 0.6, color: backgroundBtn }}
              placeholder="Search contacts..."
            />
          </InputGroup>
        </form>
      </Box>
    </>
  );
};
