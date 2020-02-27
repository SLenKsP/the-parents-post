import axios from "axios";

// let activity = "art"
// let city = "Olathe"
let activityQueryURL = `https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search?category=event&start_date=2020-02-15..&radius=50&api_key=yc4vjtvmn4wdemn4u76j8aru&query=`
// &near=${city}
let articleQueryURL = `https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search?category=articles&api_key=yc4vjtvmn4wdemn4u76j8aru&query=`
// axios({
//   method: "GET",
//   url: "https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search?query=dance&category=articles&api_key=yc4vjtvmn4wdemn4u76j8aru",
//   headers: {
//       "Access-Control-Allow-Origin": "*"
//   },
// })
export default {
  // Gets all books
  getActivity: function (activity) {
    //Can we get the city?
    return axios.get(activityQueryURL + activity + "&near=Olathe");
    // return axios.get("/api/activities/");
  },
  getArticles: function (activity) {
    //Can we get the city?
    return axios.get(articleQueryURL + activity);
    // return axios.get("/api/activities/");
  },
  saveActivity: function (activityData) {
    return axios.post("/api/activities" + activityData)
  },
  saveArticle: function (articleData) {
    return axios.post("/api/articles" + articleData)
  },
  getSavedArticles: function (articles) {
    return axios.get("/api/articles" + articles)
  },
  getSavedActivities: function (activities) {
    return axios.get("/api/activities" + activities)
  },
  deleteArticle: function (articleId) {
    return axios.delete("/api/articles" + articleId)
  },
  deleteActivity: function (activityId) {
    return axios.delete("/api/activities" + activityId)
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};