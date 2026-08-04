import { Component } from "react";
import { ScrollViewComponent } from "./components/ScrollViewComponent";
export class Scrollview extends Component {
    constructor(props) {
        super(props);
        this.cnam = "Scrollview";
        this.log("constructor:begin");
        this.onAutoScroll = this.onAutoScroll.bind(this);
        this.onScrollBottom = this.onScrollBottom.bind(this);
        this.onScrollTop = this.onScrollTop.bind(this);
        this.log("constructor:end");
    }
    log(v) {
        if (!this.props.debugon) return;
        console.info(`${this.cnam}:${v}`);
    }
    componentDidMount() {
        this.log("componentDidMount:beg");
        this.log("componentDidMount:end");
    }
    componentDidUpdate(prvprops, prvstate) {
        this.log("componentDidUpdate:beg");
        this.log("componentDidUpdate:end");
    }
    onAutoScroll() {
        this.log("onAutoScroll:beg");
        if (this.props.onAutoScroll) {
            if (
                this.props.onAutoScroll.canExecute &&
                this.props.onAutoScroll.isAuthorized &&
                !(this.props.onAutoScroll.isExecuting && this.props.onAutoScroll.disabledDuringExecution)
            ) {
                this.props.onAutoScroll.execute();
            }
        }
        this.log("onAutoScroll:end");
    }
    onScrollBottom() {
        this.log("onScrollBottom:beg");
        if (this.props.onScrollBottom) {
            if (
                this.props.onScrollBottom.canExecute &&
                this.props.onScrollBottom.isAuthorized &&
                !(this.props.onScrollBottom.isExecuting && this.props.onScrollBottom.disabledDuringExecution)
            ) {
                this.props.onScrollBottom.execute();
            }
        }
        this.log("onScrollBottom:end");
    }
    onScrollTop() {
        this.log("onScrollTop:beg");
        if (this.props.onScrollTop) {
            if (
                this.props.onScrollTop.canExecute &&
                this.props.onScrollTop.isAuthorized &&
                !(this.props.onScrollTop.isExecuting && this.props.onScrollTop.disabledDuringExecution)
            ) {
                this.props.onScrollTop.execute();
            }
        }
        this.log("onScrollTop:end");
    }

    render() {
        this.log("render:beg");
        this.log("render:end");
        return (
            <ScrollViewComponent
                style={this.props.style}
                basicContent={this.props.basicContent}
                scrollTimeout={this.props.scrollTimeout}
                autoScroll={this.props.autoScroll}
                onAutoScroll={this.onAutoScroll}
                onScrollBottom={this.onScrollBottom}
                onScrollTop={this.onScrollTop}
                scrollRegionThreshold={this.props.scrollRegionThreshold}
                debugon={this.props.debugon}
            />
        );
    }
}
