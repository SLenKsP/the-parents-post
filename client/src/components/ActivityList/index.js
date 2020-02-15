import React from "react";
import ActivityCard from "../ActivityCard";

class ActivityList extends React.Component {

    render() {

        return (
            <div className="activity-list-container">
                <h2 className="activity-list-title">Articles</h2>
                {this.props.results.map(article => (
                    <ActivityCard
                        title={article.headline.main}
                        url={article.web_url}
                        // date={article.pub_date}
                        key={article._id}
                        id={article._id}
                    />
                )
                )}
            </div>
        )
    }
};

export default ActivityList;