import './Advantages.css'

const Advantages = (props) => {
  const {advantages} = props;
  if (!advantages || advantages.length === 0) return <p>Not found</p>
  
  return (
    advantages.map(advantage => {
      return (
        <div className="advantage" key={advantage.id}>
          <div className="advantage_title">{advantage.title}</div>
          <div className="advantage_text">{advantage.text}</div>
        </div>
      )
    })
  )
}

export default Advantages