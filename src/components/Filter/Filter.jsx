import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import filterSelectors from '../../redux/filter/filterSelectors';
import { setFilter } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterSelectors.getFilterValue);
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
              children={<Search2Icon color="purple.600" />}
            />
            <Input
              value={filterValue}
              onChange={handleFilterChange}
              type="text"
              focusBorderColor="purple.600"
              _placeholder={{ opacity: 0.6, color: 'purple.800' }}
              placeholder="Search contacts..."
            />
          </InputGroup>
        </form>
      </Box>
    </>
  );
};
