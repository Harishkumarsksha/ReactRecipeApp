import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './components/recipe'

const App = () => {

  const App_ID = '86d6aa9a'
  const App_Key = 'ca3084a91f442a28ea67575da28987d4	'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  useEffect(() => {
    getRecipe()
  }, [query])

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`)
    const { hits } = await response.json()
    setRecipes(hits)
    //console.log(hits)
  }
  return (
    <div className='App'>
      <form onSubmit={e => { e.preventDefault(); setQuery(search); setSearch('') }} className='search-form'>
        <input type='text' className='search-bar' value={search} onChange={(e) => { setSearch(e.target.value) }} />
        <button type='submit' className='search-button' >search</button>

      </form>
      <div className='recipes'>

        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>

  )
}
export default App;
