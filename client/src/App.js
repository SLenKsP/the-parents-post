import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Books from './pages/Books'
import Detail from './pages/Detail'
import NoMatch from './pages/NoMatch'
import Nav from './components/Nav'
import 'jquery/src/jquery'
// materialize
// import 'materialize-css/dist/css/materialize.min.css';

// function App() {

class App extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Achieved location', position.coords.latitude, position.coords.longitude)
    })
  }

  render() {
    return (
      <Router>
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

          <Nav />
          <Switch>
            <Route exact path="/" component={Detail} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
