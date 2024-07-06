import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from '@adobe/react-spectrum';
import { defaultTheme } from '@adobe/react-spectrum';
import AirportTable from './Components/AirportTableComponent/AirportTable/AirportDetail';
import AirportDetail from './Components/AirportDetailComponent/AirportDetail.js';
import HeaderComponent from './Components/Header/HeaderComponent.js';
// import SidebarComponent from './Components/SideBar/SideBarComponent.js';

const App = () => {
  return (
    <Provider theme={defaultTheme}>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<AirportTable />} />
          <Route path="/airport/:id" element={<AirportDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;