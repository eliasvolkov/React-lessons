import React from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import CourseItem from "../components/CourseItem/CourseItem";
const Courses = () => {
  const onClikedItem = item => {
    console.log(item);
  };
  return (
    <div>
      <h1>Courses</h1>

      <CourseCard
        img="https://i.udemycdn.com/course/240x135/975916_aa6e_2.jpg"
        title="17 Complete JavaScript projects explained step"
      />
      <CourseItem
        img="https://i.udemycdn.com/course/240x135/975916_aa6e_2.jpg"
        title="17 Complete JavaScript projects explained step"
        descr="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, rerum? Lorem ipsum dolor sit amet consectetur,"
      />

      {/* <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <CourseCard
          img="https://i.udemycdn.com/course/240x135/886614_68cc.jpg"
          title="
          Accelerated ES6 JavaScript Training"
          item={onClikedItem}
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <CourseCard
          img="https://i.udemycdn.com/course/240x135/996320_c020_2.jpg"
          title="
          Shopping Cart Website from Scratch Ecommerce"
          item={onClikedItem}
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <CourseCard
          img="https://i.udemycdn.com/course/240x135/975916_aa6e_2.jpg"
          title="17 Complete JavaScript projects explained step"
          item={onClikedItem}
        />
      </div> */}
    </div>
  );
};

export default Courses;
