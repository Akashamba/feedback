import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component.jsx';
import Homepage from './pages/homepage/homepage.component.jsx';
import Feedback from './pages/feedback/feedback.component.jsx';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <br/>
        <div className="card">
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/:website' component={Feedback} />
            </Switch>
        </div>
      
    </div>
  );
}

export default App;
