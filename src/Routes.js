import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import BlogsHolderPage from './components/blogView/BlogsHolderPage';
import ProjectsPage from './components/projectsPage/ProjectsPage';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Blogs" component={BlogsHolderPage} />
            <Route exact path="/Projects" component={ProjectsPage} />
            <Route exact path="/Login" component={Login} />
        </Switch>
    </Router>
  );
}

export default App;
