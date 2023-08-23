import './Works.css'

const Work = (props) => {
  const {works} = props;
  if (!works || works.length === 0) return <p>Not found</p>
  
  return (
    works.map(work => {
      return (
        <div className="work" key={work.id}>
          <div className="work_img" style={{background: `center / cover no-repeat url(${work.img})`}}></div>
          <div className="work_condition">{work.condition}</div>
        </div>
      )
    })
  )
}

export default Work