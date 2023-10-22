import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNav";
import Footer from "../components/Footer";

const RootLayout = () => {
	// const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				Main content
				<Outlet />
			</main>
			<Footer/>
		</>
	);
};

export default RootLayout;
