import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ListPage} from "../list-page/list-page";
import {MainPage} from "../main-page/main-page";
import {QueuePage} from "../queue-page/queue-page";
import {SortingPage} from "../sorting-page/sorting-page";
import {StackPage} from "../stack-page/stack-page";

import "./app.module.css";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <MainPage/>
                    </Route>
                    <Route path="/stack">
                        <StackPage/>
                    </Route>
                    <Route path="/queue">
                        <QueuePage/>
                    </Route>
                    <Route path="/list">
                        <ListPage/>
                    </Route>
                    <Route path="/sorting">
                        <SortingPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
