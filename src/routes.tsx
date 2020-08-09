import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/" component={Landing} /> */}
            <Route path="/study" component={TeacherList} />
            <Route path="/give-class" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes