import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component.jsx';
import Homepage from './pages/homepage/homepage.component.jsx';
import Feedback from './pages/feedback/feedback.component.jsx';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/:website' children={Feedback} />
        </Switch>
      
    </div>
  );
}

export default App;
