import react, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";

const Search = () => {
	const [searchFilter, setSearchFilter] = useState(false);
	const router = useRouter();
	console.log(searchFilter);
	return (
		<Box>
			<Flex
				cursor="pointer"
				bg="gray.100"
				borderBottom={"1px"}
				borderColor="gray.200"
				p="2"
				fontWeight={"black"}
				fontSize="lg"
				justifyContent={"center"}
				alignItems="center"
				onClick={() => setSearchFilter((prevFilters) => !prevFilters)}
			>
				<Text>Search Properties By filters</Text>
				<Icon paddingLeft={2} w="7" as={BsFilter} />
			</Flex>
			{searchFilter && <SearchFilters />}
		</Box>
	);
};

export default Search;
