import { calcFont, SCREEN_WIDTH } from "../../constants/sizes";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants";
const styles = StyleSheet.create({
    // Screen Styles
    addBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.ATLANTIS,
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'center', alignItems: 'center'
    },

    //   MovieItem Styles
    listItemContainer: {
        paddingHorizontal: calcFont(10),
        paddingVertical: calcFont(15),
        marginTop: calcFont(20),
        marginHorizontal: calcFont(20),
        borderColor: Colors.MAINCOLOR,
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 2,
    },

    nameText: {
        fontSize: calcFont(14),
        color: Colors.SECONDARYCOLOR,
    },
    descriptionText: {
        color: Colors.GRAYCOAL,
        fontSize: calcFont(11),
        marginTop: 7
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icnsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    editIcn: {
        marginEnd: calcFont(10)
    },
    ratingContainer: { alignItems: 'flex-start', marginBottom: 4, marginTop: 2 },
    // Modal Styles
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container:
    {
        paddingVertical: calcFont(20),
        paddingHorizontal: calcFont(20),
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    input: {
        height: calcFont(50),
        borderWidth: .5,
        borderColor: "gray",
        paddingHorizontal: calcFont(10),
        marginBottom: calcFont(15)

    },
    inputTitle: {
        marginBottom: calcFont(7)
    },
    editor: {
        height: calcFont(150),
        borderWidth: .5,
        borderColor: "gray",
        paddingHorizontal: calcFont(10),
        marginBottom: calcFont(15),
        justifyContent:'flex-start',
    },
    saveBtn: {
        alignSelf: 'center',
        backgroundColor: Colors.SECONDARYCOLOR,
        width: SCREEN_WIDTH / 2,
        height: calcFont(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: calcFont(7),
        marginTop: calcFont(20)

    },
    btnsText: {
        color: '#fff',
    },
    deleteHintTxt: {
        fontSize: calcFont(20),
        alignSelf: 'center',
        textAlign: 'center'
    },
    deleteBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    deleteBtn: {
        alignSelf: 'center',
        backgroundColor: Colors.RED,
        width: '40%',
        height: calcFont(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: calcFont(7),
        marginTop: calcFont(20)

    },
    cancelDeleteBtn: {
        alignSelf: 'center',
        backgroundColor: Colors.GRAY,
        width: '40%',
        height: calcFont(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: calcFont(7),
        marginTop: calcFont(20)
    }

})
export default styles;