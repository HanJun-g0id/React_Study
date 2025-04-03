import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message:"안녕하세요, 오늘 일정을 알려드릴게요.",
    },
    {
        message:"점심식사 시간입니다",
    },
    {
        message:"이제 곧 교수님과 미팅이 시작됩니다..",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state = { //세부분석 1
            notifications: [],
        };
    }

    componentDidMount() { //세부분석 2
        const {notifications} = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }else {
                clearInterval(timer);
            }
        },1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification message={notification.message}/>
                })}
            </div>
        );
    }
}
export default NotificationList;
