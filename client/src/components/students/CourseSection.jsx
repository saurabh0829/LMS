import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Appcontext";
import CourseCard from "./CourseCard";

const CourseSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 m-3 whitespace-nowrap">
        Discover our tuo-rated cousrses across various categories. From coding design to <br/> business and welness, our courses are crafted to deliver results.
      </p>
      <div className="grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0,4).map((course, index)=><CourseCard key={index} course={course}/>)}
      </div>
      
      <Link
        to={"/course-list"}
        className="text-gray-500 underline rounded border border-gray-500 px-10 py-3 mt-4"
        onClick={() => scrollTo(0, 0)}
      >
        Show all courses.
      </Link>
    </div>
  );
};

export default CourseSection;
