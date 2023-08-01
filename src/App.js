import React, { Suspense } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./component/Home'));
const Showdata = React.lazy(() => import('./component/Showdata'));
const Update = React.lazy(() => import('./component/Update'));
const Loading = React.lazy(() => import('./component/Loading'));
function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/">
          <Route index path='/' element={<Showdata />} />
          <Route path="createprofile" element={<Home/>} />
          <Route path="updateprofile/:id" element={<Update />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
