import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, View, Modal, TouchableOpacity, Image, Text, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as WebBrowser from 'expo-web-browser'

import markerIcon from '../assets/marker.png'
import xclose from '../assets/xclose.png'
import ratingbar from '../assets/ratingbar.png'
import scorebar from '../assets/scorebar.png'

const Map = props => {
    const [markerId, setMarkerId] = useState('')
    const [markerData, setMarkerData] = useState(undefined)
    const [visible, setVisible] = useState(true)

    const handleRating = rating => {
      let percent = rating * 20
      let width = percent * 0.7
      return (
        {
          width: width,
          marginRight: 70 - width,
        }
      )
    }

    const handleScore = rating => {
      let percent = rating * 20
      let width = percent * 2.5
      return (
        {
          width: width,
          marginRight: 250- width,
        }
        )
    }
    
    const handleWebsite = async () => {
      url = markerData.website
      await WebBrowser.openBrowserAsync(url)
    }

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
                            setVisible(true)        
                        }}
                    >
                    </Marker>
                )
            })}
        </MapView>
            {markerData !== undefined &&
          <View>
            <Modal
             animationType={Platform.OS === 'ios' ? 'slide' : 'fade'}
             transparent={true}
             visible={visible}
            >
              <View style={styles.container}>
                <TouchableOpacity style={styles.close} onPress={() => {setVisible(false)}}>
                    <Image source={xclose} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.title}>{markerData.name}</Text>
                    <Text style={styles.hours}>{markerData.hours[1]}</Text>
                </View>
                <Text style={styles.adres}>{markerData.adres}</Text>
                <View style={[styles.score, handleScore(markerData.score)]}><Image source={scorebar} alt='scorebar' style={styles.scorebar}/></View>
                <View style={styles.ratingcontainer}>
                  <View style={styles.rating}>
                    <Text style={styles.ratingtext}>coffee beans</Text>
                    <View style={[styles.ratingbar, handleRating(markerData.ratingBeans)]}><Image source={ratingbar} alt='rating coffee' style={styles.ratingimg}/></View>
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.ratingtext}>alternative food</Text>
                    <View style={[styles.ratingbar, handleRating(markerData.ratingFood)]}><Image source={ratingbar} alt='rating coffee' style={styles.ratingimg}/></View>
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.ratingtext}>packaging</Text>
                    <View style={[styles.ratingbar, handleRating(markerData.ratingPackage)]}><Image source={ratingbar} alt='rating coffee' style={styles.ratingimg}/></View>
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.ratingtext}>waste management</Text>
                    <View style={[styles.ratingbar, handleRating(markerData.ratingWaste)]}><Image source={ratingbar} alt='rating coffee' style={styles.ratingimg}/></View>
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.ratingtext}>local economy</Text>
                    <View style={[styles.ratingbar, handleRating(markerData.ratingEconomy)]}><Image source={ratingbar} alt='rating coffee' style={styles.ratingimg}/></View>
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.ratingtext}>social impact</Text>
                    <View style={[styles.ratingbar, handleRating(markerData.ratingSocial)]}><Image source={ratingbar} alt='rating coffee' style={styles.ratingimg}/></View>
                  </View>
                  <View style={styles.rating}>
                    <Text style={styles.ratingtext}>sustainability{'\n'} awareness</Text>
                    <View style={[styles.ratingbar, handleRating(markerData.ratingAwareness)]}><Image source={ratingbar} alt='rating coffee' style={styles.ratingimg}/></View>
                  </View>
                </View>
                <Button style={styles.website} title='visit website' onPress={handleWebsite}/>
              </View>
            </Modal>
          </View>
            }
      </View>
    )}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: '10%',
    marginTop: '25%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 26,
  },
  close: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
      flexDirection: 'row',
      padding: 10,
      marginBottom: 10,
      borderBottomColor: '#C0B8B8',
      borderBottomWidth: 1,
  },
  title: {
      fontSize: 25,
      marginTop: 10
  },
  hours: {
      marginLeft: 'auto',
  },
  adres: {
    fontSize: 12,
    marginBottom: 10,
  },
  rating: {
    flexDirection: 'row',
  },
  ratingcontainer: {
    width: '90%',
    marginTop: 10
  },
  ratingbar:{
    height: 10,
    backgroundColor: '#784D4D',
    marginTop: 8,
  },
  ratingtext: {
    fontSize: 14,
    marginVertical: 5,
    marginRight: 'auto'
  },
  score: {
    alignSelf: 'center',
    height: 20,
    backgroundColor: '#784D4D',
    borderRadius: 7
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

  export default Map