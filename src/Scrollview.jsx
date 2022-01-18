import { Component, createElement } from "react";
import { ScrollViewComponent } from "./components/ScrollViewComponent";
export class Scrollview extends Component {
    render() {
        return <ScrollViewComponent basicContent={this.props.basicContent} style={this.props.style} />;
    }
}
/*
			ref={this.scrollViewRef}
		onContentSizeChange={() => {
			this.scrollViewRef.current?.scrollToEnd({ animated: true });
		}}
*/

/*
 *
            <ScrollView
                ref={this.scrollViewRef}
                style={this.styles.container}
                onContentSizeChange={() => {
                    this.scrollViewRef.current?.scrollToEnd({ animated: true });
                }}
            >
                {basicContent}
                {contentType === "list" ? this.renderDatasourceItems() : null}
                {contentType === "section" ? this.renderSections() : null}
            </ScrollView>
 */

