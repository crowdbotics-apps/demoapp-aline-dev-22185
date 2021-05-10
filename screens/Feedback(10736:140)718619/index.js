import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10736_141}>
        <View style={styles.View_10736_142}>
          <Text style={styles.Text_10736_142}>Feedback</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48b9/14fc/67d92fae97364ba4e4fae9869bf73db1"
          }}
          style={styles.ImageBackground_10736_143}
        />
      </View>
      <View style={styles.View_10736_144}>
        <View style={styles.View_10736_145}>
          <Text style={styles.Text_10736_145}>
            Please share your feedback with us to improve your user experience!
          </Text>
        </View>
        <View style={styles.View_10736_146}>
          <Text style={styles.Text_10736_146}>👏 Made with Bravo</Text>
        </View>
        <View style={styles.View_10736_147} />
        <View style={styles.View_10736_148}>
          <Text style={styles.Text_10736_148}>Name</Text>
        </View>
        <View style={styles.View_10736_149} />
        <View style={styles.View_10736_150}>
          <Text style={styles.Text_10736_150}>Last Name</Text>
        </View>
        <View style={styles.View_10736_151} />
        <View style={styles.View_10736_152}>
          <Text style={styles.Text_10736_152}>Email Address</Text>
        </View>
        <View style={styles.View_10736_153}>
          <Text style={styles.Text_10736_153}>Overall rating from 1-5</Text>
        </View>
        <View style={styles.View_10736_154}>
          <Text style={styles.Text_10736_154}>1😤 horrible / 5 😍 Loved</Text>
        </View>
        <View style={styles.View_10736_155} />
        <View style={styles.View_10736_156}>
          <Text style={styles.Text_10736_156}>⭐️ Rating </Text>
        </View>
        <View style={styles.View_10736_157} />
        <View style={styles.View_10736_158}>
          <Text style={styles.Text_10736_158}>Submit</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10736_141: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.62841530054645%"),
    minHeight: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10736_142: {
    width: wp("66.13333333333333%"),
    minWidth: wp("66.13333333333333%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("11.202185792349727%")
  },
  Text_10736_142: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10736_143: {
    width: wp("5.936092631022135%"),
    minWidth: wp("5.936092631022135%"),
    height: hp("3.0410310609744546%"),
    minHeight: hp("3.0410310609744546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.202376302083334%"),
    top: hp("4.527199333482753%")
  },
  View_10736_144: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90.30054644808743%"),
    minHeight: hp("90.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.62841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_145: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("3.961748633879779%")
  },
  Text_10736_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_146: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("81.28415300546447%")
  },
  Text_10736_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_147: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("13.79781420765027%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10736_148: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("15.16393442622951%")
  },
  Text_10736_148: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_149: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("21.994535519125677%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10736_150: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("23.360655737704917%")
  },
  Text_10736_150: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_151: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("30.601092896174855%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10736_152: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("31.967213114754095%")
  },
  Text_10736_152: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_153: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("41.939890710382514%")
  },
  Text_10736_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_154: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("56.01092896174863%")
  },
  Text_10736_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_155: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("47.81420765027323%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10736_156: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("49.18032786885246%")
  },
  Text_10736_156: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_157: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("64.34426229508198%"),
    backgroundColor: "rgba(149, 191, 71, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10736_158: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("66.25683060109289%")
  },
  Text_10736_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
