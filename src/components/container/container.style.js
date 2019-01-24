import {Platform, StyleSheet} from "react-native";

import StyleDefault from '../../config/style';

var Style = StyleSheet.create({
    container: {
        flex: 1,
        height: Platform.OS === "ios" ? StyleDefault.deviceHeight : StyleDefault.deviceHeight - 20,
        backgroundColor: StyleDefault.container.bgColor
    }
})

export default Style;