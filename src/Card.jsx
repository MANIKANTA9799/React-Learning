function Card(props) {

    return (
        <div className="card">

            <img
                className="card-image"
                src={`./src/assets/${props.image}`}
                alt="profile"
            />

            <h2 className="card-title">
                {props.name}
            </h2>

            <p className="card-text">
                {props.hobby}
            </p>

        </div>
    );
}

export default Card;