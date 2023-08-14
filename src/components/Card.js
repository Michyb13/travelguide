
function Card(props){
    
    return(
        <section className="card-container">
            
            <section className="ind-card">
            <div>
                <img className="card-img" src={props.image}/>
            </div>
            <div>
                <h2 className="card-title">{props.title}</h2>
                <h4 className="card-location">{props.location}</h4>
                <h3 className="card-timeline">{props.start} - {props.end}</h3>
                <p className ="card-descr">{props.desc}</p>
            </div>
            </section>
        </section>
    )
}

export default Card