/* eslint-disable jsx-a11y/anchor-is-valid */
function Card(props) {
  return (
    <div className="card col">
      <img className="comic-image content" src={props.photo} alt={props.name} />
      <div className="comic-name content">Name: {props.name}</div>
      <div className="comic-language content">Language: {props.language}</div>
      <div className="comic-type content">
        Type:&nbsp;
        {props.type.map((type) => (
          <span>{type}</span>
        ))}
      </div>
      <div className="comic-price content">Price: {props.price}</div>
      <a href="#" className="content">
        {' '}
        Details
      </a>
    </div>
  )
}

export default Card
