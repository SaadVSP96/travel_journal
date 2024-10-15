import React from "react";

function Card(props) {
    console.log(props);
    return (
        <>
            <section className="card--container">
                <img
                    src={`/${props.imageName}`}
                    alt=""
                    className="card--image"
                />
                <div className="card--info">
                    <div>
                        <i className="fa-solid fa-location-dot location--icon"></i>
                        <span className="card--location">
                            {" "}
                            {props.location.toUpperCase()}&ensp;
                        </span>
                        <a
                            href="https://scrimba.com/links/travel-journal-australia-image-url"
                            target="_blank"
                            className="card--googleLink"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h3 className="card--name">{props.title}</h3>
                    <h4 className="card--date">
                        {props.startDate} - {props.endDate}
                    </h4>
                    <p className="card--description">{props.description}</p>
                </div>
            </section>
            <hr className="card--endline"></hr>
        </>
    );
}

export default Card;
