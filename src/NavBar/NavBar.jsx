import Link from "../components/Link/Link";


const NavBar = () => {

	const routes = [
		{ id: 1, path: "/", name: "Home", component: 'Home' },
		{ id: 2, path: "/products", name: "Products", component: 'Products' },
		{ id: 3, path: "/about", name: "About", component: 'About' },
		{ id: 4, path: "/contact", name: "Contact", component: 'Contact' },
		{ id: 5, path: "/cart", name: "Cart", component: 'Cart' },
	  ];
	  

	return (
		<nav>
			<ul className="md:flex">
				{
					routes.map(route => <Link key={route.id} route={route} ></Link>)
				}
			</ul>
		</nav>
	);
};

export default NavBar;