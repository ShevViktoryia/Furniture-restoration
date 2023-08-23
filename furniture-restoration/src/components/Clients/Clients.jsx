import './Clients.css'

const Clients = (props) => {
  const {clients} = props;
  if (!clients || clients.length === 0) return <p>Not found</p>
  
  return (
    clients.map(client => {
      return (
        <div className="client" key={client.id}>
          <div className="client_img" style={{background: `center / contain no-repeat url(${client.img})`}}></div>
        </div>
      )
    })
  )
}

export default Clients