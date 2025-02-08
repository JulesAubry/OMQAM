import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddRestaurant from './AddRestaurant.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<AddRestaurant />
  </StrictMode>
);
