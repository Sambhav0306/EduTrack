import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNav";

const RootLayout = () => {
	// const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				Main Content
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
