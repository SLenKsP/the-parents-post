import React from "react";
import API from "../../utils/API";


class SavedActivityCard extends React.Component {

    //move this function to the Saved Component when the API routes work
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('removing card');
        API.removeActivity(this.props.id)
            .then(results => {
                console.log(results);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="saved-activity-card">
                <h2>{this.props.title}</h2>
                <a href={this.props.url}>To Article</a>
                {/* <p>Published: {this.props.date}</p> */}
                <button
                    type="submit"
                    className="btn btn-danger"
                    value={this.props.id}
                    onClick={this.handleFormSubmit}
                >Delete Activity from Saved</button>
            </div>

        )
    }
};

export default SavedActivityCard;