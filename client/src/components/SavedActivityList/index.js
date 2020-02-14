import React from "react";
import SavedActivityCard from "../SavedActivityCard";
import API from "../../utils/API";

class SavedActivityList extends React.Component {

    state = {
        results: []
    }

    componentDidMount() {
        console.log("Component mounted");
        this.getSavedActivities();
    }

    getSavedActivities() {
        API.getSaved()
            .then(res => {
                console.log("'Saved Response");
                console.log(res);
                this.setState({
                    results: res.data
                });
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                {this.state.results.map(activity => (
                    <SavedActivityCard
                        getSavedActivities={this.getSavedActivities}
                        title={activity.title}
                        url={activity.url}
                        // date={article.date}
                        key={activity._id}
                        id={activity._id}
                    />
                )
                )}
            </div>
        )
    }
}

export default SavedActivityList;