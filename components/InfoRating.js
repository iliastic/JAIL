import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';


const InfoRating = () => {

    return (
        <View style={styles.infoTitle}>
            <Text> Info Rating</Text>
            <ScrollView style={styles.scrollcontainer}>

                <Text style={styles.ratingTitle}>
                    I.  Rating System. {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    The entire project is built around SDG 12: responsible consumption and production. The app aims to impact the way people make decisions in their (coffee) consuming behavior. {"\n"}
                    The rating system of the coffee shops is based on 7 categories that, when seen together, make sure all aspects of sustainability as they are included in the Sustainable Development Goals are taken into account. {"\n"}
                    Since some of the SDGs are however clearly addressed towards governments, we took in that case the corresponding Sustainable Lifestyle Goals, also known as the Good Life Goals2, into account. {"\n"}
                    These goals focus more on the public and how they can individually take action and support the Sustainable Development Goals. Considering both frameworks, we were able to include all 17 goals in the following 7 categories.  {"\n"}
                    The questions that were asked in relation to the categories will be indicated. One can find the full questionnaire at the end of this document in the appendix. We used an all-or-nothing approach to marking the coffee bars on the 7 categories. Either they got the full mark or they received no mark. Eventually a coffee bar ends up with a score out of 7.  {"\n"}
                    For the first category the decision of giving the mark was decided by the fact whether the coffee beans are supported by a label and what value that label has. For categories 2-7, a 50% rule was used. {"\n"}
                    This means that a coffee bar got the full mark for the category if they answered positively to 50% or more of the sub questions. Situations in which the question was Not Applicable (NA) or non-answers were disregarded in respect to the 50% rule.{"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingSubTitle}>
                    1.  Coffee Beans. {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    We consider these 5 labels below as they are the 5 labels recognized in research conducted by the Sustainable Commodity Initiative3, which is a joint venture of the United Nations Conference on Trade and Development and IISD. {"\n"}
                    This research analyzes the labels on their ability to address the sustainability challenges surrounding the coffee value chain. Having this research at hand made it so that we were able to more objectively decide upon a rating in this category. {"\n"}
                    It was important for us to use the UN approved framework and certificated, because the rest of this project is also based on an UN initiative: the SDGs. {"\n"}
                    <Image source={require('../assets/12RespConsProd.png')} />
                    <Image source={require('../assets/UTZCert.png')} />
                    <Image source={require('../assets/RainforestAll.png')} />
                    <Image source={require('../assets/FairTrade.png')} />
                    <Image source={require('../assets/BioOrganic.png')} />
                    <Image source={require('../assets/BirdFriendSmith.png')} /> {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingSubTitle}>
                    2.  Alternative Food Options. {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -   Vegan/Veggie Options (Q3a) {"\n"}
                    -   Organic Milk Options (Q10) {"\n"}
                    <Image source={require('../assets/2EatBetter.png')} />
                    <Image source={require('../assets/12RespConsProd.png')} /> {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingSubTitle}>
                    3.  Packaging {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Takeaway Material (Q2) {"\n"}
                    -  Milk/Sugar/Cookie (Q3b) {"\n"}
                    -  Extra Efforts (Q13) {"\n"}
                    <Image source={require('../assets/12RespConsProd.png')} /> {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingSubTitle}>
                    4.  Waste Management {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Coffee and food waste (Q14) {"\n"}
                    -  Energy (Q8) and water (Q9) {"\n"}
                    <Image source={require('../assets/11SustCitiesCommunities.png')} /> {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingSubTitle}>
                    5.  Local Economy {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Local economy support (Q11) {"\n"}
                    -  Loyalty card (Q12) {"\n"}
                    <Image source={require('../assets/11LoveWhereYouLive.png')} /> {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingSubTitle}>
                    6.  Social Impact {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Gender equality (Q6) {"\n"}
                    -  No discrimination on the basis of nationality (Q6) {"\n"}
                    <Image source={require('../assets/5TreatEveryoneEqually.png')} /> {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingSubTitle}>
                    7.  Sustainability Awareness {"\n"}
                </Text>
                <View
                    style={styles.titleBorder}
                />
                <Text style={styles.alinea}>
                    -  Value in business from sustainability efforts (Q4) {"\n"}
                    -  Objectives or targets towards sustainability (Q5) {"\n"}
                    -  Sustainability high on the agenda (Q7) {"\n"}
                    <Image style={styles.images} source={require('../assets/8DoGoodWork.png')} /> {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.ratingTitle}>
                    III.  Flaws in the rating system. {"\n"}
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
                    {"\n"}
                    {"\n"}
                    {"\n"}
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: normalize(20),
        marginBottom: '15%'
    },
    scrollcontainer: {
        padding: normalize(8),
        paddingTop: normalize(30),
        backgroundColor: '#ffffff',
        marginTop: '5%'
    },
    infoTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    header: {
        alignSelf: 'center',
        marginBottom: -15,
        zIndex: 1000,
    },
    alinea: {
        fontSize: 16,
        lineHeight: normalize(25),
        letterSpacing: 0.03,
    },
    team: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    members: {
        fontSize: 16,
        lineHeight: normalize(25),
        textAlign: 'center',
        paddingBottom: normalize(30)
    },
    close: {
        alignSelf: 'flex-end',
        padding: normalize(20),
    },
    ratingTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ratingSubTitle: {
        fontSize: 18,
    },
    titleBorder: {
        borderBottomColor: '#BFB9B9',
        borderBottomWidth: 1,
        marginBottom: normalize(15),
        marginTop: normalize(-10),
    },
    ratingButton: {
        margin: normalize(35),
    },
})

export default InfoRating;
