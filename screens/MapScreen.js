import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Dimensions, Button} from 'react-native'

import firebase from '../database/Firebase'
import Map from '../components/Map'

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
    <Map data={data}/>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },    
})

export default MapScreen