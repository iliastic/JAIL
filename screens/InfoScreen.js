import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import normalize from 'react-native-normalize';


const InfoScreen = () => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <View style={styles.infoImage} >
                    <Image source={require('../assets/info-icon.png')} />
                </View>
                <View>
                    <Text style={styles.infoTitle}>
                        Info rating
                    </Text>
                </View>
            </View>

            <Image style={styles.backgroundImage} source={require('../assets/InfoRatingBG.png')} style={styles.backgroundImage} />
            <ScrollView style={styles.scrollcontainer}>

                <Text style={styles.ratingTitle}>
                    I.  Rating System {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    The entire project is built around SDG 12: responsible consumption and production. The app aims to impact the way people make decisions in their (coffee) consuming behavior.
                    The rating system of the coffee shops is based on 7 categories that, when seen together, make sure all aspects of sustainability as they are included in the Sustainable Development Goals are taken into account.
                    Since some of the SDGs are however clearly addressed towards governments, we took in that case the corresponding Sustainable Lifestyle Goals, also known as the Good Life Goals2, into account.
                    These goals focus more on the public and how they can individually take action and support the Sustainable Development Goals. Considering both frameworks, we were able to include all 17 goals in the following 7 categories.
                    The questions that were asked in relation to the categories will be indicated. One can find the full questionnaire at the end of this document in the appendix. We used an all-or-nothing approach to marking the coffee bars on the 7 categories. Either they got the full mark or they received no mark. Eventually a coffee bar ends up with a score out of 7.
                    For the first category the decision of giving the mark was decided by the fact whether the coffee beans are supported by a label and what value that label has. For categories 2-7, a 50% rule was used.
                    This means that a coffee bar got the full mark for the category if they answered positively to 50% or more of the sub questions. Situations in which the question was Not Applicable (NA) or non-answers were disregarded in respect to the 50% rule.
                        </Text>
                <Text style={styles.ratingSubTitle}>
                    1.  Coffee Beans {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    We consider these 5 labels below as they are the 5 labels recognized in research conducted by the Sustainable Commodity Initiative3, which is a joint venture of the United Nations Conference on Trade and Development and IISD. {"\n"}
                    This research analyzes the labels on their ability to address the sustainability challenges surrounding the coffee value chain. Having this research at hand made it so that we were able to more objectively decide upon a rating in this category. {"\n"}
                    It was important for us to use the UN approved framework and certificated, because the rest of this project is also based on an UN initiative: the SDGs. {"\n"}
                </Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image source={require('../assets/12RespConsProd.png')} />
                    </View>
                    <View style={styles.imagePosition}>
                        <Image style={styles.images} source={require('../assets/UTZCert.png')} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View >
                        <Text style={styles.textQ1_UTZ}>
                            Q1
                    </Text>
                    </View>
                    <View >
                        <Text style={styles.textQ1_UTZ} >
                            UTZ
                    </Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image style={styles.images} source={require('../assets/RainforestAll.png')} />
                    </View>
                    <View style={styles.imagePosition}>
                        <Image style={styles.images} source={require('../assets/FairTrade.png')} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View >
                        <Text style={styles.textRain}>
                            Rainforest Alliance
                    </Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image style={styles.images} source={require('../assets/BioOrganic.png')} />
                    </View>
                    <View style={styles.imagePosition}>
                        <Image style={styles.images} source={require('../assets/BirdFriendSmith.png')} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ marginBottom: '10%' }}>
                        <Text style={styles.textBio_Smith}>
                            Bio/Organic
                    </Text>
                    </View>
                </View>

                <Text style={styles.ratingSubTitle}>
                    2.  Alternative Food Options {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -   Vegan/Veggie Options (Q3a) {"\n"}
                    -   Organic Milk Options (Q10)
                </Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image source={require('../assets/2EatBetter.png')} />
                    </View>
                    <View style={styles.imagePosition}>
                        <Image source={require('../assets/12RespConsProd.png')} />
                    </View>
                </View>
                <Text style={styles.ratingSubTitle}>
                    3.  Packaging {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Takeaway Material (Q2) {"\n"}
                    -  Milk/Sugar/Cookie (Q3b) {"\n"}
                    -  Extra Efforts (Q13)
                </Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image source={require('../assets/12RespConsProd.png')} />
                    </View>
                </View>
                <Text style={styles.ratingSubTitle}>
                    4.  Waste Management {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Coffee and food waste (Q14) {"\n"}
                    -  Energy (Q8) and water (Q9)
                </Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image source={require('../assets/11SustCitiesCommunities.png')} />
                    </View>
                </View>
                <Text style={styles.ratingSubTitle}>
                    5.  Local Economy {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Local economy support (Q11) {"\n"}
                    -  Loyalty card (Q12)
                </Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image source={require('../assets/11LoveWhereYouLive.png')} />
                    </View>
                </View>
                <Text style={styles.ratingSubTitle}>
                    6.  Social Impact {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Gender equality (Q6) {"\n"}
                    -  No discrimination on the basis of nationality (Q6)
                </Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image source={require('../assets/5TreatEveryoneEqually.png')} />
                    </View>
                    <View style={styles.imagePosition} >
                        <Image source={require('../assets/10ReduceInequalities.png')} />
                    </View>
                </View>
                <Text style={styles.ratingSubTitle}>
                    7.  Sustainability Awareness {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Value in business from sustainability efforts (Q4) {"\n"}
                    -  Objectives or targets towards sustainability (Q5) {"\n"}
                    -  Sustainability high on the agenda (Q7)
                </Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePosition} >
                        <Image style={styles.images} source={require('../assets/8DoGoodWork.png')} />
                    </View>
                </View>
                <Text style={styles.ratingTitle}>
                    II.  Flaws in the rating system {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    • System is out of 7 which can be confusing for people assuming it’s out of 5 {"\n"}
                    • Limited amount of coffee bars {"\n"}
                    • Based on what shop owners says and own observation, at this point we are not able to check everything objectively {"\n"}
                    • Only coffee no tea or other beverages included {"\n"}
                    • 50% is a pass → WHY? Positive mindset, reward for options, giving zero would mean there’s no effort being made which is not true {"\n"}
                    • FLIPSIDE: By applying the 50% rule we can’t differentiate between coffee bars that are really advanced and coffee shops who are just starting to make an effort. {"\n"}
                    • If no specific example or too vague or not verifiable then FAIL and no mark {"\n"}
                    • Not rewarded for doing what is legally obligated: FAIL  {"\n"}
                    • Coffee beans that have no labels (eg. bars that use their own coffee blend) cannot be scored on Q1 {"\n"}
                </Text>
                <Text style={styles.ratingTitle}>
                    III.  Appendix {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    Q1. What is the brand of coffee that you use? What kind of coffee beans are you using? What labels do the coffee beans have (certified)? {"\n"}
                    Q2. What material is used for take away coffee? (Cups, straws, lids) {"\n"}
                    Q3. What are you already doing toward sustainability foodwise? (vegan, sup mlplies) a. Vegan foods/snacks? b. Separate (plastic) packaging for cookies, sugar, milk? {"\n"}
                    Q4. Have you seen value in your business from your sustainability efforts? {"\n"}
                    Q5. Do you have any objectives and/or targets toward sustainability efforts? {"\n"}
                    Q6. How are you addressing social equality (gender, age, looks, international)? {"\n"}
                    Q7. Is sustainability high on your agenda? {"\n"}
                    Q8. Are you tracking, reporting and reducing your energy use? {"\n"}
                    Q9. Are you tracking, reporting, and reducing your water use? {"\n"}
                    Q10. What kind of dairy products, sugars, and other ingredients do you use? {"\n"}
                    Q11. How do you support the local economy? {"\n"}
                    Q12. Are you part of a community with a loyalty card? (you can use the card at more than your store) {"\n"}
                    Q13. Do you work with promotions towards customers that bring their own cup? Q14. What do you do with the coffee and food waste (remainder of the coffee beans, take away materials, transport materials, products ingredients in general, eg. toogoodtogo)? {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <View style={styles.footnoteMargin}>
                    <Text style={styles.footnoteText} onPress={() => Linking.openURL('https://www.un.org/sustainabledevelopment/sustainable-development-goals/')}>
                        https://www.un.org/sustainabledevelopment/sustainable-development-goals/  {"\n"}
                    </Text>
                    <Text style={styles.footnoteText} onPress={() => Linking.openURL('https://www.wbcsd.org/Programs/People/Sustainable-Lifestyles/News/Personal-actions-that-everyone-can-take-to-support-the-SDGs')}>
                        https://www.wbcsd.org/Programs/People/Sustainable-Lifestyles/News/Personal-actions-that-everyone-can-take-to-support-the-SDGs {"\n"}
                    </Text>
                    <Text style={styles.footnoteText} onPress={() => Linking.openURL('http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.453.2341&rep=rep1&type=pdf')}>
                        http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.453.2341&rep=rep1&type=pdf {"\n"}
                    </Text>
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        margin: normalize(20),
    },
    scrollcontainer: {
        padding: '7%',
        paddingTop: normalize(30),
        backgroundColor: '#ffffff',
        borderRadius: normalize(30),
    },
    infoTitle: {
        alignSelf: 'center',
        marginLeft: '15%',
        marginTop: '25%',
        marginBottom: '10%',
        color: '#784D4D',
        fontSize: 40,
    },
    infoImage: {
        marginTop: '18%',
        marginBottom: '10%',
    },
    header: {
        alignSelf: 'center',
        marginBottom: -15,
        zIndex: 1000,
    },
    alinea: {
        fontSize: 16,
        lineHeight: 25,
        letterSpacing: 0.03,
        marginBottom: 24,
    },
    team: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    members: {
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
        paddingBottom: normalize(30)
    },
    close: {
        alignSelf: 'flex-end',
        padding: normalize(20),
    },
    ratingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    ratingSubTitle: {
        fontSize: 18,
    },
    titleBorder: {
        borderBottomColor: '#BFB9B9',
        borderBottomWidth: 1,
        marginBottom: normalize(15),
        marginTop: -10,
    },
    ratingButton: {
        margin: normalize(35),
    },
    backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    footnoteMargin: {
        marginBottom: normalize(295),
        marginTop: normalize(10),
    },
    footnoteText: {
        fontSize: 10,
        color: 'blue',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    imagePosition: {
        padding: '5%',
        marginBottom: '5%',
    },
    textContainer: {
        flexDirection: 'row',
    },
    textQ1_UTZ: {
        alignSelf: "center",
        marginLeft: '27%',
        marginRight: '12%',
        marginBottom: '5%',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 30,
    },
    textBio_Smith: {
        flex: 1,
        alignSelf: "center",
        marginLeft: '20%',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 30,
    },
    textRain: {
        alignSelf: "center",
        marginLeft: '10%',
        marginBottom: '5%',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 30,
    },
    titleContainer: {
        flexDirection: 'row',
        alignSelf: "center",
        margin: 20
    }
})

export default InfoScreen
