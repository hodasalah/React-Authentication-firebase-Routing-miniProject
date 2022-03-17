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
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
	const [filters, setFilters] = useState(filterData);
	const [locationData, setLocationData] = useState();
	const [showLocations, setShowLocations] = useState(false);
	const router = useRouter();
	const searchProperties = (filterValues) => {
		const path = router.pathname;
		const query = router.query;
		const values = getFilterValues(filterValues);
		values.forEach((val) => {
			query[val.name] = val.value;
		});
		router.push({ pathname: path, query });
		console.log(query);
	};
	return (
		<Flex justifyContent="center" bg="gray.100" p="4" flexWrap="wrap">
			{filters.map((filter) => (
				<Box key={filter.queryName}>
					<Select
						w="fit-content"
						p="2"
						onChange={(e) =>
							searchProperties({
								[filter.queryName]: e.target.value,
							})
						}
						placeholder={filter.placeholder}
					>
						{filter?.items?.map((item) => (
							<option key={item.value} value={item.value}>
								{item.name}
							</option>
						))}
					</Select>
				</Box>
			))}
			<Flex flexDir="column">
				<Button
					onClick={() => setShowLocations(!showLocations)}
					border="1px"
					borderColor="gray.200"
					marginTop="2"
				>
					Search Location
				</Button>
				{showLocations && (
					<Flex flexDir="column" pos="relative" paddingTop="2">
						<Input
							placeholder="Type Here"
							value={searchTerm}
							w="300px"
							focusBorderColor="gray.300"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};

export default SearchFilters;
