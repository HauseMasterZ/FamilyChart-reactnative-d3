import { StyleSheet } from 'react-native';

const myStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#3a5561',
        justifyContent: 'center',
        alignItems: 'center',
    },
    zoomable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
    ,
    card: {
        height: 140,
        width: 300,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 6,

    },
    avatar: {
        height: 100,
        width: 100,
        left: 10,
    },
    naming: {
        color: '#3a5561',
        fontSize: 20,
        left: 125,
        position: 'absolute',
        top: 40
    },
    dob: {
        position: "absolute",
        color: "#3a5561",
        fontSize: 20,
        left: 125,
        top: 70
    },
    editBtn: {
        height: 20,
        width: 20,
        position: 'absolute',
        left: 220,
        top: 110
    },
    plusBtn: {
        height: 24,
        width: 24,
        position: 'absolute',
        top: 108,
        left: 260,
    },
    upper: {
        height: '60%',
        backgroundColor: '#DDD',
        opacity: 0.5
    },
    lower: {
        flex: 1,
        backgroundColor: 'white'
    },
    gender: {
        position: 'absolute',
        left: '25%'
    },
    vline: {
        backgroundColor: '#a8b5b9',
        width: 2,
        height: 100,
        left: 150
    },
    veline: {
        backgroundColor: '#a8b5b9',
        width: 2,
        height: 100,
        right: 48
    },
    hline: {
        backgroundColor: '#a8b5b9',
        width: 200,
        height: 2,
        right: 48,
    },
    generation: {
        height: '40%',
    }
});

export default myStyles;