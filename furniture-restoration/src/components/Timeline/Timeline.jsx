import './Timeline.css'

const Timeline = (props) => {
  const {timeline} = props;
  if (!timeline || timeline.length === 0) return <p>Not found</p>
  
  return (
    timeline.map(item => {
      return (
        <div className="timeline_item" key={item.id}>
          <p className='technology'>{item.text}</p>
        </div>
      )
    })
  )
}

export default Timeline