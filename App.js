import React from 'react';
import { Animated, StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
//import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	cc: "",
    	fadeAnim: new Animated.Value(85),  // Initial value for opacity: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Expo.Font.loadAsync({
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
  }

  handleChangePhoneNumber=(event)=>{
  	console.log(event)
  }
  handleFocus=()=>{
  	console.log("done");
  }
  handlePress=()=>{
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 500              	  // Make it take a while
      }
    ).start();
    console.log("pressed")         
  }
  handleChange(event){
  	this.setState({
  		cc: event.target.value
  	})
  }
  render() {
  	console.log(this.state.cc);
  	let bg = require('./assets/img/bg.png');
  	let lang = require('./assets/img/uz.png');
  	const interpolateColor = this.state.fadeAnim.interpolate({
  		inputRange: [0, 85],
  		outputRange: ['0%', '85%']
  	});
  	const animatedStyle = {
  		top: interpolateColor
  	}
    return (
      <View style={styles.container}>
		  <ImageBackground source={bg} style={{flex: 1}}>
		  		<View style={{flex: 1}}>
			  		<Animated.View style={[styles.unAnimated, animatedStyle]}>
				  		<View style={{flexDirection: "column"}}>
					  		<View style={{flexDirection: "row"}}>
					  			<Text>Get started with Delivera</Text>
					  		</View>
					  		<View style={{flexDirection: "row"}}>
					  			<View style={{flex: 3, alignSelf: "stretch", justifyContent: "center", backgroundColor: "#f5f5f5"}}>
					  				<Text style={{fontFamily: "monospace", textAlign: "center"}}>+998</Text>
					  			</View>
						  		<View style={{flex: 17}}>
								    <Input
								        inputContainerStyle={{borderBottomColor: 'rgba(255, 255, 255, 0)'}}
								        containerStyle={{width: "105%", marginLeft: -10}}
								        inputStyle={styles.phoneInput}
										placeholder='93 329 99 39'
										value={this.state.cc}
										onFocus={this.handlePress}
										keyboardType={'phone-pad'}
										keyboardAppearance="dark"
										onChangeText={(cc) => this.setState({cc: cc})}
									/>	
						  		</View>
						  	</View>
				  		</View>
			    	</Animated.View>
		    	</View>
		  </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
  unAnimated: {
  	position: "absolute",
    height: "100%", 
    width: "100%", 
    backgroundColor: "white",
    padding: 20
  },
  phoneInput: {
  	borderColor: "#e1e1e1",
  	borderWidth: 1,
  	backgroundColor: "#f5f5f5",
  	paddingLeft: 10,
  	fontFamily: "monospace",
  	borderRadius: 10,
  	paddingRight: 10
  }
});
