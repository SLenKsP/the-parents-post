import React from "react";
import ActivityCard from "../ActivityCard";

class ActivityList extends React.Component {

    render() {

        return (
            <div className="activity-list-container">
                <h2 className="activity-list-title">Activities</h2>
                {
                    // console.log(Object.values(this.props.results))
                    Object.values(this.props.results).filter(element => element.registrationUrlAdr != "" ? true : false).map(article => (
                        <ActivityCard
                            title={article.assetName}
                            url={article.urlAdr}
                            summary={article.assetDescriptions[0].description || ""}
                        //         // date={article.pub_date}
                        //         key={article._id}
                        //         id={article._id}
                        />
                    ))
                }
            </div>
        )
    }
};

export default ActivityList;
