import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Component/Header'
import Home from './Component/Home'
import Student from './Component/Student'
import ContactUs from './Component/ContactUs'
import PageNotFound from './Component/PageNotFound'

function App() {
  return (
      <Router>
      <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/students' element={<Student/>}/>
          <Route path='/students/:stuId' element={<Student/>}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </Router>
  );
}

export default App;
