function Card(props) {
  
  return(
    <div className="card" style={{width: '18rem'}}>
      {props.imgURL ? <img src={props.imgURL} alt="" /> : null}
      <div className="card-body">
        {props.children}
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
}

export default Card;