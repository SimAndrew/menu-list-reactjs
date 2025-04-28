import { useState } from 'react';
import Title from './Title.jsx';
import Menu from './Menu.jsx';
import Categories from './Categories.jsx';

import menu from './data.js';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(menu);
			return;
		}

		const newItems = menu.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className="menu">
				<Title text="Our menu" />
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
