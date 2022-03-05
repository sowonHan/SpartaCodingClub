import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AboutPage({navigation}) {
    
    useEffect(()=>{
        navigation.setOptions({
            title: "소개 페이지",
            headerStyle: {
                backgroundColor: '#323164',
                shadowColor: "#323164",
            },
            headerTintColor: "#fff",
        })
    },[])

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.main_title}>HI! 스파르타코딩 앱개발반에 오신 것을 환영합니다</Text>
            
            <View style={styles.middle_container}>
                <Image style={styles.about_image} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}} resizeMode='cover' />
                <Text style={styles.middle_text}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.desc}>
                    꼭 완주하셔서 꼭 여러분 것으로 만들어가시길 바랍니다            
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}>여러분의 인스타계정</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#323164',
        alignItems: 'center'
    },
    main_title: {
        color: '#fff',
        fontSize: 27,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 18
    },
    middle_container: {
        width: 320,
        height: 550,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 40
    },
    about_image: {
        width: 150,
        height: 150,
        borderRadius: 40,
        marginTop: 50
    },
    middle_text: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10
    },
    desc: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 25,
        fontWeight: '700'
    },
    button: {
        backgroundColor: '#FFCC66',
        marginTop: 30,
        padding: 25,
        borderRadius: 20
    },
    button_text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15
    }


}

)

