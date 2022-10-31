import React from 'react';
import ReactDOM from 'react-dom/client';
import ShoesStore from './components/ShoesStore';
import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ShoesStore />
	</React.StrictMode>,
);
