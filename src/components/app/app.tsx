import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ListPage} from "../list-page/list-page";
import {MainPage} from "../main-page/main-page";
import {QueuePage} from "../queue-page/queue-page";
import {SortingPage} from "../sorting-page/sorting-page";
import {StackPage} from "../stack-page/stack-page";

import "./app.module.css";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/VisuAlGo" Component={MainPage}/>
                    <Route path="/VisuAlGo/stack" Component={StackPage} />
                    <Route path="/VisuAlGo/queue" Component={QueuePage} />
                    <Route path="/VisuAlGo/list" Component={ListPage} />
                    <Route path="/VisuAlGo/sorting" Component={SortingPage} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
