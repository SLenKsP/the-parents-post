import React from "react";

class SearchFormActivities extends React.Component {

    render() {
        return (
            <div className="search-box">
                <h2 className="search-title">Local Activity Search</h2>
                <label>Zip Code</label>
                <br></br>
                <input
                    onChange={this.props.handleInputChange}
                    name="zip code"
                    type="text"
                >
                </input>
                <br></br>
                <label>Start Date (YYYYMMDD)</label>
                <br></br>
                <input
                    onChange={this.props.handleInputChange}
                    name="startDate"
                    type="text"
                >
                </input>
                <br></br>
                <label>End Date (YYYYMMDD)</label>
                <br></br>
                <input
                    onChange={this.props.handleInputChange}
                    name="endDate"
                    type="text"
                >
                </input>
                <br></br>
                <button
                    className="btn btn-primary"
                    onClick={this.props.handleFormSubmit}
                >Search for Activities
                </button>
            </div>
        )
    }
}

export default SearchFormActivities;