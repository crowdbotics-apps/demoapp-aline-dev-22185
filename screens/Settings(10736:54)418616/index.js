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
      <View style={styles.View_10736_63}>
        <View style={styles.View_10736_64}>
          <Text style={styles.Text_10736_64}>🗒 Terms &amp; conditions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_10736_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_10736_66}
        />
      </View>
      <View style={styles.View_10736_67}>
        <View style={styles.View_10736_68}>
          <Text style={styles.Text_10736_68}>📖 Privacy policy</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_10736_69}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_10736_70}
        />
      </View>
      <View style={styles.View_10736_71}>
        <View style={styles.View_10736_72}>
          <Text style={styles.Text_10736_72}>💬 Feedback</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_10736_73}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_10736_74}
        />
      </View>
      <View style={styles.View_10736_75}>
        <View style={styles.View_10736_76}>
          <Text style={styles.Text_10736_76}>🌍 Form Web view</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_10736_77}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_10736_78}
        />
      </View>
      <View style={styles.View_10736_79}>
        <View style={styles.View_10736_80}>
          <Text style={styles.Text_10736_80}>Settings</Text>
        </View>
        <View style={styles.View_10736_81}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d1d/4417/ed3954c1871fb4681740eee30a3d5f97"
            }}
            style={styles.ImageBackground_10736_82}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8372/69c2/3e9212c93cba0fcc9a349b58f6edd07e"
            }}
            style={styles.ImageBackground_10736_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3dd/976a/3fa365da71131385d09db3df1bdc0bbd"
            }}
            style={styles.ImageBackground_10736_84}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c15/ac8c/97f639ced06a564aa119f9857a8ac54f"
            }}
            style={styles.ImageBackground_10736_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f45b/71b1/8c552e477cf55eb830be190fa81d23e8"
            }}
            style={styles.ImageBackground_10736_86}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb45/53a8/2b1324d4a107750daa79f1efe9a94c19"
            }}
            style={styles.ImageBackground_10736_87}
          />
          <View style={styles.View_10736_88}>
            <View style={styles.View_10736_89} />
          </View>
          <View style={styles.View_10736_90}>
            <View style={styles.View_10736_91} />
          </View>
          <View style={styles.View_10736_92}>
            <View style={styles.View_10736_93} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d02/c9b7/e7985b7f832ac96cebf63fb36eebb78a"
            }}
            style={styles.ImageBackground_10736_94}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d3d/b6ed/87ec3b5f3d69e85f565319d3a2908e24"
            }}
            style={styles.ImageBackground_10736_98}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dd9/a3d1/f2a33bdcd1910e37c8e06a4ba8bfb4ea"
            }}
            style={styles.ImageBackground_10736_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ad/6609/cb583669e9a77dfaf300b148c443ba7a"
            }}
            style={styles.ImageBackground_10736_102}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a40/77be/045db734191b04cbb4bc8c0eefe6a3b9"
            }}
            style={styles.ImageBackground_10736_103}
          />
        </View>
      </View>
      <View style={styles.View_10736_106}>
        <View style={styles.View_10736_107}>
          <Text style={styles.Text_10736_107}>👏 Made with Bravo</Text>
        </View>
        <View style={styles.View_10736_108}>
          <View style={styles.View_10736_109}>
            <Text style={styles.Text_10736_109}>👏 Made with Bravo</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
            }}
            style={styles.ImageBackground_10736_110}
          />
          <View style={styles.View_10736_111}>
            <View style={styles.View_10736_112} />
            <View style={styles.View_10736_113}>
              <Text style={styles.Text_10736_113}>Bravorize</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10736_63: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_64: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.3224043715846996%")
  },
  Text_10736_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10736_65: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.274987392738218%")
  },
  ImageBackground_10736_66: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.20218579234973%")
  },
  View_10736_67: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.51366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_68: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_10736_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10736_69: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.001763349022376%")
  },
  ImageBackground_10736_70: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.20218579234973%")
  },
  View_10736_71: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.26229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_72: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_10736_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10736_73: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.001763349022369%")
  },
  ImageBackground_10736_74: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.202185792349724%")
  },
  View_10736_75: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.01092896174863%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_76: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_10736_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10736_77: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.001763349022369%")
  },
  ImageBackground_10736_78: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.202185792349724%")
  },
  View_10736_79: {
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
  View_10736_80: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("11.748633879781421%")
  },
  Text_10736_80: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_81: {
    width: wp("22.66667683919271%"),
    height: hp("3.2489453508554265%"),
    top: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%")
  },
  ImageBackground_10736_82: {
    width: wp("1.7428788503011068%"),
    height: hp("1.269940860935899%"),
    top: hp("1.9790065744535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5860677083333385%")
  },
  ImageBackground_10736_83: {
    width: wp("1.7545761108398437%"),
    height: hp("0.9624776944436663%"),
    top: hp("1.4444153165556695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.71634114583334%")
  },
  ImageBackground_10736_84: {
    width: wp("2.010682169596354%"),
    height: hp("0.938109100842085%"),
    top: hp("0.9381236925802594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.589664713541673%")
  },
  ImageBackground_10736_85: {
    width: wp("1.7432403564453125%"),
    height: hp("1.269940860935899%"),
    top: hp("1.9790065744535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.99466145833334%")
  },
  ImageBackground_10736_86: {
    width: wp("1.7548871358235678%"),
    height: hp("0.9624776944436663%"),
    top: hp("1.4444153165556695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1264485677083371%")
  },
  ImageBackground_10736_87: {
    width: wp("2.010665766398112%"),
    height: hp("0.938109100842085%"),
    top: hp("0.9381236925802594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10736_88: {
    width: wp("0.7014673233032226%"),
    height: hp("0.4671869707889244%"),
    top: hp("0.03575392759562801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9673828125000057%")
  },
  View_10736_89: {
    width: wp("0.7014671961466472%"),
    height: hp("0.46718700335976854%"),
    top: hp("-0.000008338136099350635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 206, 31, 1)"
  },
  View_10736_90: {
    width: wp("0.49171791076660154%"),
    height: hp("0.44852583134760626%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5410970052083357%")
  },
  View_10736_91: {
    width: wp("0.49171791076660154%"),
    height: hp("0.4485257010642296%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000016276041669982533%"),
    backgroundColor: "rgba(255, 206, 31, 1)"
  },
  View_10736_92: {
    width: wp("0.8024742762247721%"),
    height: hp("0.4098998067157516%"),
    top: hp("0.2957370111851092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5768066406250014%")
  },
  View_10736_93: {
    width: wp("0.8024743398030599%"),
    height: hp("0.40989957871984267%"),
    top: hp("-0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000016276041669982533%"),
    backgroundColor: "rgba(255, 206, 31, 1)"
  },
  ImageBackground_10736_94: {
    width: wp("2.9040377298990885%"),
    height: hp("2.089223965921037%"),
    top: hp("0.8578941470286883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.785384114583337%")
  },
  ImageBackground_10736_98: {
    width: wp("1.8449293772379558%"),
    height: hp("1.4743298129305813%"),
    top: hp("1.4727983318391389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.031608072916669%")
  },
  ImageBackground_10736_99: {
    width: wp("2.5337295532226562%"),
    height: hp("1.5289537242201507%"),
    top: hp("1.4611999845244195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.989371744791669%")
  },
  ImageBackground_10736_102: {
    width: wp("2.9776039123535156%"),
    height: hp("1.4423933185514857%"),
    top: hp("1.5076434025998968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.635351562500006%")
  },
  ImageBackground_10736_103: {
    width: wp("2.9837369283040363%"),
    height: hp("1.526918437311558%"),
    top: hp("1.4727983318391389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.68294270833333%")
  },
  View_10736_106: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("43.30601092896175%"),
    minHeight: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_107: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("30.054644808743177%")
  },
  Text_10736_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_108: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_109: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.322404371584696%")
  },
  Text_10736_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10736_110: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.20218579234971%")
  },
  View_10736_111: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("2.322404371584696%")
  },
  View_10736_112: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(149, 191, 71, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10736_113: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10736_113: {
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
