import { useState } from 'react'
import './AddRestaurant.css'

let currentId = 0;


function AddRestaurant() {	

	const [restaurantName, setRestaurantName] = useState('');
	const [restaurantAddress, setRestaurantAddress] = useState('');
	const [restaurantType, setRestaurantType] = useState('');
	const [restaurantList, setRestaurantList] = useState([]);
		
	function addNewRestaurant() {
		if(restaurantName != "" && restaurantAddress != "" && restaurantType != "") {
			currentId = currentId + 1;
			setRestaurantList([
			...restaurantList,
			{ id: currentId, restaurantName: restaurantName, restaurantAddress: restaurantAddress, restaurantType: restaurantType }
			]);
			alert(currentId);
		}
	}	
	
	function deleteRestaurant(restaurantId) {
		setRestaurantList(restaurantList.filter(restaurant => restaurant.id !== restaurantId));
		alert(restaurantId);
	}	

		
  return (
    <>
	  <label htmlFor="restaurantName">Nom du restaurant :</label>
	  <input type="text" value={restaurantName} onChange={e => setRestaurantName(e.target.value)}/>
	  <br/>
	  <label htmlFor="restaurantAddress">Adresse du restaurant : (URL)</label>
	  <input type="url" value={restaurantAddress} onChange={e => setRestaurantAddress(e.target.value)}/>
	  <br/>
	  <label htmlFor="restaurantAddress">Type du restaurant :</label>
	  <select value={restaurantType} onChange={e => setRestaurantType(e.target.value)}>
		<optgroup label="Asiatique">		
		  <option value="Coréen">Coréen</option>
		  <option value="Japonais">Japonais</option>
		  <option value="Chinois">Chinois</option>		  
		  <option value="AutreAsiatique">Autre Asiatique</option>
		</optgroup>
		<optgroup label="Européen">		
		  <option value="Francais">Français</option>
		  <option value="Italien">Italien</option>
		  <option value="Anglais">Anglais</option>
		  <option value="Allemand">Allemand</option>		  
		  <option value="AutreEuropeen">Autre Européen</option>
		</optgroup>
		<optgroup label="Africain">		
		  <option value="Tunisien">Tunisien</option>		  
		  <option value="AutreEuropeen">Autre Européen</option>
		</optgroup>		
	  </select>
	  <br/>
      <button onClick={() => addNewRestaurant()}> Proposer un restaurant </button>
	  <br/>
	  <br/> 
	  <br/> 
	  <br/>
	  <label htmlFor="restaurantList">Liste des restaurants :</label>
	  <ul>
        {restaurantList.map(restaurant => (
          <li key={restaurant.id}>{restaurant.restaurantName} ({restaurant.restaurantType}) -> {restaurant.restaurantAddress} <button onClick={() => deleteRestaurant(restaurant.id)}> Supprimer le restaurant </button> </li>  
        ))}
      </ul>
	  
    </>
  )
}

export default AddRestaurant
