import './App.css';
import About from './component/About';
import Shop from './component/Shop';
import ItemDetails from './component/ItemDetails';
import Nav from './component/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" component={Home} exact></Route>
      <Route path='/about' component={About}/>
      <Route path='/shop' component={Shop} exact/>
      <Route path='/shop/:id' component={ItemDetails}/>
    </div>
    </Router>
  );
}

const Home =()=>{
  return(
    <div>Home</div>
  )
}
export default App;
