import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirectionL: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    messageText:{
        color:"black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;
