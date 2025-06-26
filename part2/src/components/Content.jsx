import Part from "./Part"

const Content = ({parts}) => {
  return (
    <div>
      <ul>
        {parts.map(part => {
          return <Part key={part.id} part={part} />
        })}
      </ul>
    </div>
  )
}

export default Content