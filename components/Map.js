import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import markerIcon from '../assets/marker.png'
import ShopInfo from './ShopInfo'

const Map = props => {
    const [markerId, setMarkerId] = useState('')
    const [markerData, setMarkerData] = useState(undefined)

    useEffect(() => {
        let markerState = props.data.find(target => {
            return target.key === markerId
        })
        setMarkerData(markerState)
    })

    return (
      <View style={StyleSheet.absoluteFillObject}>
        <MapView 
            initialRegion={{
                latitude: 51.2182,
                longitude: 4.42038,
                latitudeDelta: 0.08,
                longitudeDelta: 0.08,
            }}
            style={StyleSheet.absoluteFillObject}
            customMapStyle={generatedMap}
            provider={PROVIDER_GOOGLE}
            >
            {props.data.map(info => {
                return (
                    <Marker 
                        coordinate={{latitude: info.lat, longitude: info.long}}
                        image={markerIcon}
                        key={info.key}
                        onPress={() => {
                            setMarkerId(info.key)          
                        }}
                    >
                    </Marker>
                )
            })}
        </MapView>
            {markerData !== undefined &&
              <View>
                <ShopInfo data={markerData} />
              </View>
            }
      </View>
    )}

const generatedMap = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

  export default Map