import { useState } from "react";
import Link from "../components/Link/Link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {

	const [open, setOpen] = useState(false);

	const routes = [
		{ id: 1, path: "/", name: "Home", component: 'Home' },
		{ id: 2, path: "/products", name: "Products", component: 'Products' },
		{ id: 3, path: "/about", name: "About", component: 'About' },
		{ id: 4, path: "/contact", name: "Contact", component: 'Contact' },
		{ id: 5, path: "/cart", name: "Cart", component: 'Cart' },
	  ];
	  

	return (
		<nav>
			<div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>

				{
					open === true? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
				}
			
			</div>
			<ul className="md:flex">
				{
					routes.map(route => <Link key={route.id} route={route} ></Link>)
				}
			</ul>
		</nav>
	);
};

export default NavBar;