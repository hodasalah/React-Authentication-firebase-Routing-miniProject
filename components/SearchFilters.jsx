import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import {
	Flex,
	Box,
	Select,
	Text,
	Icon,
	Input,
	Button,
	Spinner,
} from "@chakra-ui/react";

const SearchFilters = () => {
	const [filters, setFilters] = useState({});
	return (
		<Flex jutifyContent="center" bg="gray.100" p="4" flexWrap="wrap"></Flex>
	);
};

export default SearchFilters;
