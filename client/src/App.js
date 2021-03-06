import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Books from './pages/Books'
import Detail from './pages/Detail'
import 'jquery/src/jquery'
import jwt_decode from 'jwt-decode'
import setAuthToken from './setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authentication'
import SignUp from '../src/components/SignUp/'
import SignIn from '../src/pages/SignInPage'
import UserAccount from '../src/pages/UserAccountPage'
import { Provider } from 'react-redux'
import store from './store'
import Home_Sports from './pages/Home-Sports'
import Home_Behavior from './pages/Home-Behavior'
import Home_Camp from './pages/Home-Camp'
import Home_Health from './pages/Home-Health'
import Home_Development from './pages/Home-Development'
import Home_Sleep from './pages/Home-Sleep'
import Home_Discipline from './pages/Home-Discipline'
import Home from './pages/Home'
// materialize
// import 'materialize-css/dist/css/materialize.min.css';

// function App() {
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = '/signin'
  }
}
class App extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('Achieved location', position.coords.latitude, position.coords.longitude)
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Cinzel:700|Luckiest+Guy&display=swap"
              rel="stylesheet"
            ></link>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/art" component={Home} />
              <Route exact path="/sport" component={Home_Sports} />
              <Route exact path="/behavior" component={Home_Behavior} />
              <Route exact path="/camp" component={Home_Camp} />
              <Route exact path="/health" component={Home_Health} />
              <Route exact path="/development" component={Home_Development} />
              <Route exact path="/sleep" component={Home_Sleep} />
              <Route exact path="/discipline" component={Home_Discipline} />
              {/* <Route exact path="/books" component={ Books } />
              <Route exact path="/books/:id" component={ Detail } /> */}
              {/* <Route exact path="/signup" component={ SignUp } /> */}
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/useraccount" component={UserAccount} />
              {/* <Route component={ NoMatch } /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
