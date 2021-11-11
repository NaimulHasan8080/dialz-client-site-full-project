import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import AddReview from './Pages/AddReview/AddReview';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import PrivateRoute from './routes/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';
import Explore from './Pages/Explore/Explore';
import Register from './Pages/Register/Register';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/admindashboard">
              <AdminDashboard></AdminDashboard>
            </Route>
            <PrivateRoute exact path="/addReview">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute exact path="/myorder">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageOrders />
            </PrivateRoute>
            <Route exact path="/update/:id">
              <UpdateStatus />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
