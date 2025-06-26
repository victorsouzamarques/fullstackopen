import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({course}) => {
        console.log("COURSE",course)
  return (
    <div>
        {course.map(course => {
            return (
                <div key={course.id}>
                    <Header courseName={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )
        })}
    </div>
  )
}

export default Course;