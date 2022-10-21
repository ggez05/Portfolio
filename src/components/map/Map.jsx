import React from "react";
import { MapContainer,Marker, Popup,TileLayer  } from "react-leaflet";

const Map = () => {
    const position = [28.642250, 77.213350];
    return(
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    BreakThrough! Now you know where I live.
                </Popup>
            </Marker>
            <div className="map-content">
                <h3 className="switch__color">
                    <span>Garvit</span>
                    <br />
                    <span>
                        Location: Delhi,India
                    </span>
                    <br />
                    <span>
                        Email: garvit510bhatia@gmail.com
                    </span>
                </h3>
            </div>
        </MapContainer>

    )

}
export default Map;
