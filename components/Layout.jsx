import Head from "next/head";
import { Box } from "@chakra-ui/react";

function Layout({ children }) {
	return (
		<>
			<Head>RealEstate</Head>
			<Box maxWidth={"1280px"} m="auto">
				<header>Navbar</header>
				<main>{children}</main>
				<footer>Footer</footer>
			</Box>
		</>
	);
}

export default Layout;
