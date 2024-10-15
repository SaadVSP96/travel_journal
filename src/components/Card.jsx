import React from "react";

function Card() {
    return (
        <section className="card--container">
            <img src="/mount-fuji.jpeg" alt="" className="card--image" />
            <div className="card--info">
                <div>
                    <i className="fa-solid fa-location-dot location--icon"></i>
                    <span className="card--location"> JAPAN&ensp;</span>
                    <a
                        src="https://scrimba.com/links/travel-journal-australia-image-url"
                        className="card--googleLink"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h3 className="card--name">Mount Fuji</h3>
                <h4 className="card--date">12 Jan, 2023 - 24 Jan, 2023</h4>
                <p className="card--description">
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </section>
    );
}

export default Card;
