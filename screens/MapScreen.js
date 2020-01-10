import React, {useState, useEffect} from 'react'
import { StyleSheet} from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import firebase from '../database/Firebase'

import markerIcon from '../assets/marker.png'

const MapScreen = () => {
    const ref = firebase.firestore().collection('coffeeShops')

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    return ref.onSnapshot(snapshot => {
      const list = []
      snapshot.forEach(doc => {
        const {name, adres, ratingBeans, ratingFood, ratingPackage, ratingWaste, ratingEconomy, ratingSocial, ratingAwareness, score, hours, website, long, lat} = doc.data()

        list.push({
          key: doc.id,
          name,
          adres,
          ratingBeans,
          ratingFood,
          ratingPackage,
          ratingWaste,
          ratingEconomy,
          ratingSocial,
          ratingAwareness,
          score,
          hours,
          website,
          long,
          lat
        })
      })
      setData(list)

      if (loading){
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
      return null
  }

    return (
        <MapView 
        initialRegion={{
            latitude: 51.2182,
            longitude: 4.42038,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
          }}
          style={styles.map}
          customMapStyle={generatedMap}
          provider={PROVIDER_GOOGLE}
        >
            {data.map(marker => {
                return (
                    <Marker 
                        coordinate={{latitude: marker.lat, longitude: marker.long}}
                        title='werk pls'
                        description= 'plsplspls'
                        image={markerIcon}
                        key={marker.key}
                    />
                )
            })}
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        ... StyleSheet.absoluteFillObject    
    }
    
})

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

export default MapScreen