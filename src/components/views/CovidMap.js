import React, { Component } from "react"
import { compose } from "recompose"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps"
import { Spin } from "antd"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 49.17655, lng: -123.138564 }}>
            {props.markers.map((marker, key) => {
                const onClick = props.onClick.bind(this, marker);
                console.log('marker', marker);
                return (
                    <Marker
                        key={key}
                        onClick={onClick}
                        position={marker.position}
                    >
                        {props.selectedMarker === marker &&
                            <InfoWindow>
                                {marker.shelter}
                            </InfoWindow>}
                    </Marker>
                )
            })}
        </GoogleMap>
    )
})

export default class CovidMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shelters: [
                {
                    name: "marker1",
                    position: { lat: 49.17655, lng: -123.138564 }
                },
                {
                    name: "marker2",
                    position: { lat: 49.16659, lng: -123.113569 }
                },
                {
                    name: "marker3",
                    position: { lat: 49.15659, lng: -123.143569 }
                }
            ],
            selectedMarker: false,
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({ loading: false })
        }.bind(this), 5000);
    }

    handleClick = (marker, event) => {
        this.setState({ selectedMarker: marker })
    }

    render() {
        const { loading } = this.state;

        return (
            <div>
                {loading && <div style={{ textAlign: 'center' }}><Spin size="large"></Spin></div>}

                {!loading && <MapWithAMarker
                    selectedMarker={this.state.selectedMarker}
                    markers={this.state.shelters}
                    onClick={this.handleClick}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />}
            </div>
        )
    }
}