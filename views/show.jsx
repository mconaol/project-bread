const React = require('react')
const Default = require('./layouts/default')

let index

function Show ({bread, index}) {
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
  <p>
    and it
    {
      bread.hasGluten
      ? <span> does </span>
      : <span> does NOT </span>
    }
    have gluten.
  </p>
  <img src={bread.image} alt={bread.name} />

  
  <form action={`/breads/${index}?method=DELETE`} method= "POST">
    <input type='submit' value="DELETE"/>
  </form>
  
  <li><a href="/breads">Go home</a></li>
</Default>
    )
  }

 

module.exports = Show
