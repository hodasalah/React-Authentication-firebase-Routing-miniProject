			<Box fontSize={"3xl"} color="blue.400" fontWeight={"bold"}>
				<Link href="/" paddingLeft="2">
					RealEstate
				</Link>
			</Box>
			<Spacer />
			<Box>
				<Menu>
					<MenuButton
						as={IconButton}
						icon={<FcMenu />}
						variant="outline"
						color={"blue.400"}
					/>
					<MenuList>
						<Link href="/" passHref>
							<MenuItem icon={<FcHome />}>Home</MenuItem>
						</Link>
						{/* Search */}
						<Link href="/search" passHref>
							<MenuItem icon={<BsSearch />}>Search</MenuItem>
						</Link>
						{/* search for sale */}
						<Link href="/search?purpose=for-sale" passHref>
							<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
						</Link>

						{/* search for rent */}
						<Link href="/search?purpose=for-rent" passHref>
							<MenuItem color="blue.400" icon={<FiKey />}>
								Rent Property
							</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Box>
		</Flex>
	);
};

export default Navbar;
