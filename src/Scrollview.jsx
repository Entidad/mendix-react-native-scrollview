import{Component,createElement}from"react";
import{ScrollViewComponent}from"./components/ScrollViewComponent";
export class Scrollview extends Component{
	render(){
		return <ScrollViewComponent
			basicContent={this.props.basicContent}
			scrollTimeout={this.props.scrollTimeout}
			style={this.props.style}
		/>;
	}
}
