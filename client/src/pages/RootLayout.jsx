import { Outlet, useNavigation } from "react-router-dom";

import Login from "./Login";
import MainNavigation from "../components/MainNav";
import Footer from "../components/Footer";
import { useState } from "react";

const RootLayout = () => {
	// const navigation = useNavigation();
	const [loginModalIsShown, setLoginModalIsShown] = useState();

	const showLoginModalHandler = () => {
		setLoginModalIsShown(true);
	};

	const hideLoginModalHandler = () => {
		setLoginModalIsShown(false);
	};

	return (
		<>
			{loginModalIsShown && <Login onClose={hideLoginModalHandler} />}
			<MainNavigation onSignIn={showLoginModalHandler} />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
