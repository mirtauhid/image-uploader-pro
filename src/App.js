import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Upload from './Components/Upload';
import Uploaded from './Components/Uploaded';
import Uploading from './Components/Uploading';
import './Styles/Styles.css';

const App = () => {
    return (
        <div id="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Upload />
                    </Route>
                    <Route exact path="/uploading">
                        <Uploading />
                    </Route>
                    <Route exact path="/uploaded">
                        <Uploaded />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
