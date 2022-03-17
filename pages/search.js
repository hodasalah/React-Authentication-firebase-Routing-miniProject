/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const search = () => {
	const [searchFilters, setSearchFilters] = useState(false);
	const router = useRouter();
	return (
		<Box>
			<Flex></Flex>
		</Box>
	);
};

export default search;
