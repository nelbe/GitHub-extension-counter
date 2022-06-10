import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ExtensionCounter from '../components/ExtensionCounter/ExtensionCounter';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ExtensionCounter/>} exact />
                {/* <Route exact path="/" render={() => <Navigate to="/Extension-counter" />} /> */}
                <Route exact path="/Extension-counter" element={<ExtensionCounter />} />
            </Routes>
        </Router>

        
    );
};
export default AppRouter;
