import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Main from './pages/Main/Main'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import MasterClasses from './pages/MasterClasses/MasterClasses'
import CustomMadeFurniture from './pages/CustomMadeFurniture/CustomMadeFurniture'
import AboutUs from './pages/AboutUs/AboutUs'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/master-classes' element={<MasterClasses />} />
          <Route path='/custom-made-furniture' element={<CustomMadeFurniture />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
