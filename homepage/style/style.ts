import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { backgroundColor: 'white', height: '100%', paddingTop: 30, paddingLeft: 20, paddingRight: 20, paddingBottom: 20 },
    title: { fontSize: 24, fontWeight: '700',marginBottom:20 },
    input: {
        backgroundColor: '#888',
        color: 'white',
        height: 42,
        borderRadius: 25,
        paddingLeft: 15,
        textAlign: 'center',
        width: '85%'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    itemViewContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#999',
        borderRadius:15,
        padding:15,
        alignItems: 'center',
    },
    subItems: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow:1,
        alignItems: 'center',
    },
    itemCircle: {
        width:20,
        height:20,
        borderRadius:10,
        borderWidth: 3,
        borderColor: 'blue'
    },
    itemSquare: {
        width:24,
        height:24,
        borderRadius:4,
        backgroundColor:'blue',
        marginRight:10
    }

})