import { Component, createElement } from "react";
//import { Text, View } from "react-native";
import { ScrollView } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
	container: {},
	label: {
		color: "#F6BB42"
	}
};

export class ScrollViewComponent extends Component {
	styles = mergeNativeStyles(defaultStyle, this.props.style);
		/*
	render() {
		return (
			<View style={this.styles.container}>
				<Text style={this.styles.label}>test</Text>
			</View>
		);
	}
	*/
	render() {
		return (
			<ScrollView
				ref="scrollView"
				style={this.styles.container}
				ref={this.scrollViewRef}
				onContentSizeChange={()=>{
					//this.scrollViewRef.current?.scrollToEnd({animated:true});
					try{
						this.refs.scrollViewRef?.scrollToEnd({animated:true});
					}catch(e){
						console.error(e.toString());
					}
				}}

			>
				{this.props.basicContent}
			</ScrollView>
		);
	}
}
