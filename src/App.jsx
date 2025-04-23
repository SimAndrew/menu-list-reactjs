import { useState } from 'react';
import Title from './Title.jsx';
import Menu from './Menu.jsx';
import Categories from './Categories.jsx';

import menu from './data.js';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);

	return (
		<main>
			<section className="menu">
				<Title text="Our menu" />
				<Categories categories={categories} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
