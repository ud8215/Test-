import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [searchText, setSearchText] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/homepage" element={<Homepage userInfo={userInfo} searchText={searchText} setSearchText={setSearchText} />} />
        <Route path="/search" element={<SearchPage searchText={searchText} setSearchText={setSearchText} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;