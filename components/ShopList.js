import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'

import firebase from '../database/Firebase'

const ShopList = () => {
    const ref = firebase.firestore().collection('coffeeShops')

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        return ref.onSnapshot( snapshot => {
            const list = []
            snapshot.forEach(doc => {

                const { name, adres, ratingBeans, ratingFood, ratingPackage, ratingWaste, ratingEconomy, ratingSocial, ratingAwareness, score, hours, website} = doc.data()

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
                    website
                })
            })
            setData(list)

            if (loading){
                setLoading(false)
            }
        })
    },[])
    
    if (loading){
        return null
    }
    
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.adres}</Text>
                        </View>
                    )
                }}
                />
        </View>
    )
}

export default ShopList
    