import { useState } from 'react';
import Title from './Title.jsx';
import Menu from './Menu.jsx';

import menu from './data.js';

function App() {
	const [menuItems, setMenuItems] = useState(menu);

	return (
		<main>
			<section className="menu">
				<Title text="Our menu" />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
