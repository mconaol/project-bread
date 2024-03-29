const React = require('react')
const Default = require('./layouts/default')

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

<div className="backButton">
  <a href="/breads"><button>Go back to the index</button></a>
</div>

      </Default>
    )
}



module.exports = Index
