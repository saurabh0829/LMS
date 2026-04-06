import React from 'react'
import {Route, Routes, useMatch} from 'react-router-dom'
import Home from './pages/students/Home' 
import MyEnrollments from './pages/students/MyEnrollments.jsx'
import Courselist from './pages/students/CourseList.jsx'
import CourseDetails from './pages/students/CourseDetails.jsx'
import Player from './pages/students/Player.jsx'
import Loading from './pages/students/Loading.jsx'
import Educator from './pages/educator/Educator.jsx'
import Dashboard from './pages/educator/Dashboard.jsx'
import AddCourse from "./pages/educator/Addcourse.jsx";
import MyCourse from './pages/educator/MyCourse.jsx'
import StudentEnrolled from './pages/educator/StudentEnrolled.jsx'
import Navbar from './components/students/Navbar.jsx'


function App() {
  
  const isEducator = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      
      {!isEducator && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<Courselist />} />
        <Route path='/course-list/:input' element={<Courselist />} />
        <Route path='/my-enrollments' element={<MyEnrollments/>} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/laoding/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator/>} >
            <Route path='educator' element={<Dashboard/>}/>
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-courses' element={<MyCourse/>}/>
            <Route path='student-enrolled' element={<StudentEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
