import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import ArticleList from "../components/ArticleList";
import { List } from "../components/List";
import ActivityList from "../components/ActivityList";
import Footer from "../components/Footer";
import API from "../utils/API";
import Carousel from "../components/Carousel";

function Detail(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {
    API.getBook(props.match.params.id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Carousel>
            {/* <h1>
              {book.title} by {book.author}
            </h1> */}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <ArticleList results={[{
            "assetTopics": [
              {
                "sequence": 1,
                "topic": {
                  "topicId": 43,
                  "topicName": "Arts and crafts",
                  "topicTaxonomy": "Recreation/Arts and crafts"
                }
              }
            ],
            "salesEndDate": "2020-06-06T23:59:00",
            "regReqGenderCd": "F",
            "registrationUrlAdr": "http://www.active.com/kansas-city-mo/running/track-field-classes/art-workshop-camp-2020",
            "retryDate": "2020-02-06T16:19:23",
            "evergreenAssets": [],
            "assetSeoUrls": [
              {
                "seoSystemName": "as3",
                "statusCode": true,
                "urlAdr": "http://www.active.com/kansas-city-mo/running/track-field-classes/art-workshop-camp-2020?cmp=39-35-sagarpatel16"
              }
            ],
            "publishDate": null,
            "assetChannels": [
              {
                "sequence": 1,
                "channel": {
                  "channelDsc": "Education",
                  "channelName": "Education",
                  "channelId": 1008
                }
              },
              {
                "sequence": 2,
                "channel": {
                  "channelDsc": "Volleyball",
                  "channelName": "Volleyball",
                  "channelId": 1028
                }
              },
              {
                "sequence": 3,
                "channel": {
                  "channelDsc": "Soccer",
                  "channelName": "Soccer",
                  "channelId": 1022
                }
              },
              {
                "sequence": 4,
                "channel": {
                  "channelDsc": "Running",
                  "channelName": "Running",
                  "channelId": 1020
                }
              },
              {
                "sequence": 5,
                "channel": {
                  "channelDsc": "Basketball",
                  "channelName": "Basketball",
                  "channelId": 1003
                }
              },
              {
                "sequence": 6,
                "channel": {
                  "channelDsc": "Lacrosse",
                  "channelName": "Lacrosse",
                  "channelId": 1014
                }
              },
              {
                "sequence": 7,
                "channel": {
                  "channelDsc": "Softball",
                  "channelName": "Softball",
                  "channelId": 1023
                }
              },
              {
                "sequence": 8,
                "channel": {
                  "channelDsc": "Miscellaneous",
                  "channelName": "Miscellaneous",
                  "channelId": 1015
                }
              },
              {
                "sequence": 9,
                "channel": {
                  "channelDsc": "Golf",
                  "channelName": "Golf",
                  "channelId": 1011
                }
              }
            ],
            "sorCreateDtm": "2020-01-10T20:18:31",
            "sponsoredContent": {},
            "dynamicPriceIncluded": false,
            "localeCd": "en_US",
            "activityRecurrences": [
              {
                "frequencyInterval": null,
                "activityStartDate": "2020-06-08T09:00:00",
                "activityExclusions": [],
                "monthWeekInterval": null,
                "activityEndDate": "2020-06-12T11:30:00",
                "days": "Monday, Tuesday, Wednesday, Thursday, Friday",
                "startTime": "09:00:00",
                "endTime": "11:30:00",
                "frequency": {
                  "frequencyName": "Weekly"
                }
              }
            ],
            "assetLegacyData": {
              "maxTeamNb": "",
              "assetTypeId": "",
              "costAmt": null,
              "typeName": "",
              "uploadSearchUrlAdr": "",
              "avgUserRatingTxt": "",
              "trackbackUrl": "",
              "seoUrl": "",
              "eventCategories": "",
              "estParticipantNb": "",
              "participationCriteriaTxt": "",
              "priceExtensionTxt": "",
              "isSearchable": false,
              "onlineMembership": null,
              "minGuaranteedGameNb": "",
              "searchWeight": "",
              "userCommentTxt": "",
              "substitutionUrl": "",
              "onlineDonation": null,
              "genderRequirementTxt": "",
              "createdDate": "2020-02-06T16:09:20",
              "onlineMembershipCostAmt": null,
              "authorName": "",
              "onlineRegistration": true,
              "modifiedDate": "2020-02-06T16:09:20",
              "multipleStartDate": null
            },
            "activityEndDate": "2020-06-12T11:30:00",
            "assetDeals": [],
            "assetServiceHostName": "prod-asset-01w",
            "childIndex": null,
            "assetDescriptions": [
              {
                "descriptionType": {
                  "descriptionTypeName": "Standard",
                  "descriptionTypeId": 6
                },
                "description": "In Art Workshop, girls will use a variety of materials and techniques to explore their creative sides. Students will complete projects in clay, silk painting, and fabric dyeing. The workshop will take place in the Donnelly building room D010."
              }
            ],
            "componentInUrlAdr": {},
            "activityStartDate": "2020-06-08T09:00:00",
            "volumePriceIncluded": false,
            "contactName": "",
            "sorCreateUserId": "",
            "localTimeZoneId": "",
            "socialMedia": [],
            "donationUrlAdr": "",
            "activenetTopGraphic": {},
            "assetReferences": [],
            "market": {
              "marketName": "camps-any",
              "marketId": 1
            },
            "assetAttributes": [
              {
                "attribute": {
                  "tagId": 58744,
                  "attributeValue": "Day",
                  "attributeType": "Camp type"
                }
              },
              {
                "attribute": {
                  "tagId": 58736,
                  "attributeValue": "Female",
                  "attributeType": "Gender"
                }
              }
            ],
            "timezoneAbb": "",
            "assetMediaTypes": [
              {
                "sequence": 1,
                "mediaType": {
                  "mediaTypeName": "Camp",
                  "mediaTypeDsc": "",
                  "mediaTypeId": 1
                }
              }
            ],
            "evergreenAssetFlag": "false",
            "authorName": "",
            "registrantSearchUrlAdr": "",
            "modifiedDate": "2020-02-06T16:09:25",
            "timezoneName": "",
            "showContact": "false",
            "assetParentAsset": {},
            "assetStatus": {
              "assetStatusId": "2",
              "assetStatusName": "VISIBLE"
            },
            "regReqMaxAge": null,
            "currencyCd": "USD",
            "resultsUrlAdr": "",
            "assetImages": [],
            "assetRegistrableStatus": "reg-open",
            "sourceSystem": {
              "sourceSystemName": "AW Camps 3.0",
              "legacyGuid": "89208dba-f535-4950-880a-34a6888a184c",
              "id": "98",
              "affiliate": "false"
            },
            "assetGuid": "b1c67cc2-84b8-43c3-a129-b57248b4d4fb",
            "timezone": "US/Central",
            "evergreenParentAsset": {},
            "assetTags": [
              {
                "tag": {
                  "tagId": 32308,
                  "tagName": "true",
                  "tagDescription": "activeadvantage"
                }
              },
              {
                "tag": {
                  "tagId": 58736,
                  "tagName": "Female",
                  "tagDescription": "Gender"
                }
              },
              {
                "tag": {
                  "tagId": 58744,
                  "tagName": "Day",
                  "tagDescription": "Camp type"
                }
              },
              {
                "tag": {
                  "tagId": 13003887,
                  "tagName": "http://www.activekids.com/kansas-city-mo/running/track-field-classes/art-workshop-camp-2020",
                  "tagDescription": "canonicalurl"
                }
              }
            ],
            "assetRootAsset": {},
            "preferredUrlAdr": "",
            "logoUrlAdr": "",
            "assetPrices": [
              {
                "effectiveFromVolume": 0,
                "priceAmt": 125.0,
                "priceType": "",
                "maxPriceAmt": null,
                "effectiveUntilDate": null,
                "minPriceAmt": null,
                "effectiveToVolume": 0,
                "dynamicPricing": false,
                "volumePricing": false
              }
            ],
            "detailPageTemplateId": "",
            "assetComponents": [
              {
                "sequence": 1,
                "activityStartDate": "2020-06-08T09:00:00",
                "assetSeoUrls": [],
                "assetGuid": "0b0ffcbf-9557-4f5b-8947-51be5ad5fe96",
                "activityEndDate": "2020-06-12T11:30:00",
                "assetName": "Price"
              }
            ],
            "teamUrlAdr": "",
            "sorId": "",
            "place": {
              "placeDsc": "",
              "placeUrlAdr": "",
              "showPlaceName": true,
              "timezone": "America/Chicago",
              "postalCode": "64113",
              "latitude": "39.025547",
              "directionsTxt": "",
              "addressLine2Txt": "",
              "geoPoint": {
                "lon": "-94.587855",
                "lat": "39.025547"
              },
              "addressLine1Txt": "5600 Main St",
              "stateProvinceCode": "MO",
              "localityName": "",
              "cityName": "Kansas City",
              "timezoneOffset": -6,
              "timezoneDST": 1,
              "countryCode": "USA",
              "dma": {
                "dmaId": 616,
                "dmaName": "Kansas City"
              },
              "countryName": "United States",
              "placeGuid": "2a914e6a-7278-46eb-9967-8fc75467d4b6",
              "placeName": "Donnelly Building",
              "longitude": "-94.587855"
            },
            "overrideSeourlFlag": false,
            "assetCategories": [
              {
                "sequence": 1,
                "category": {
                  "categoryName": "Workshops",
                  "categoryId": 26,
                  "categoryTaxonomy": "Event/Workshops"
                }
              }
            ],
            "urlAdr": "http://www.active.com/kansas-city-mo/running/track-field-classes/art-workshop-camp-2020?cmp=39-35-sagarpatel16",
            "retryCounter": 2,
            "assetInterests": [],
            "assetDsc": "",
            "contactTxt": "",
            "alternateName": "",
            "regReqMinAge": null,
            "createdDate": "2020-02-06T16:09:20",
            "assetMetaInterests": [
              {
                "sequence": 1,
                "metaInterest": {
                  "metaInterestId": 4,
                  "metaInterestTaxonomy": "Kids",
                  "metaInterestName": "Kids"
                }
              }
            ],
            "salesStartDate": "2020-02-14T00:00:00",
            "homePageUrlAdr": "https://stteresasacademy.org/",
            "assetQuantity": {
              "waitlistCnt": "",
              "soldCnt": "0",
              "createdDate": "2020-02-06T16:09:20",
              "availableCnt": "",
              "modifiedDate": "2020-02-06T16:09:20",
              "capacityNb": "25",
              "waitlistCapacityNb": ""
            },
            "organization": {
              "primaryContactName": "",
              "organizationName": "St. Teresa's Academy",
              "addressPostalCd": "64113-1225",
              "sourceSystemId": 11,
              "imageUrlAdr": "",
              "addressCityName": "Kansas City",
              "eventCount": 63,
              "organizationGuid": "b4a44a4b-2a65-452b-af7d-69caee8c1333",
              "primaryContactPhone": "816-501-0011 x147",
              "addressLine2Txt": "",
              "shortDsc": "",
              "addressLine1Txt": "5600 MAIN ST",
              "addressLocalityName": "",
              "organizationDsc": "<div style=\"color: rgb(50, 109, 229); font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal; text-align: center; font-size: 16pt;\"><strong>St.&nbsp;Teresa&#39;s&nbsp;Academy<br /> Summer&nbsp;Camps </strong></div>  <div style=\"color: rgb(50, 109, 229); font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal; text-align: center;\">&nbsp; <div><span style=\"font-size: 12pt;\">STA&nbsp;Summer&nbsp;Camps&nbsp;include&nbsp;sports,&nbsp;technology,<br /> art, science, math, engineering and&nbsp;courses for credit. Summer camps are&nbsp;designed to be fun and exciting, while also&nbsp;developing skills and&nbsp;knowledge.</span></div> &nbsp;  <div><span style=\"font-size: 12pt;\">To find out more about the programs offered at St. Teresa&#39;s Academy this summer, please visit our website at</span></div>  <div><span style=\"font-size: 12pt;\"><a alt=\"http://www.stteresasacademy.org/summercamps\" href=\"http://r20.rs6.net/tn.jsp?e=001IkrNMr0MscJextUqXbaGYMP_tUHGRWlnuxg1fWev1ytbRQmzj7TbKC0CyzuhrBNOI62_nMQKolHvZwjnGr_Q1w8PW_GmOoDFx9hiOiY7lzQe1oxKWPVENJRswaPnmUH5yxfTv1Hw4Rc=\" shape=\"rect\" style=\"color: blue; text-decoration: underline;\" target=\"_blank\">www.stteresasacademy.org/<wbr />summercamps</a></span></div> &nbsp;  <div><span style=\"font-size: 12pt;\">We look forward to seeing you&nbsp;at&nbsp;camp&nbsp;this&nbsp;summer!</span></div> </div> ",
              "organizationUrlAdr": "",
              "hideOrganizationContact": false,
              "isDeleted": false,
              "a3EventCount": 139,
              "addressStateProvinceCode": "MO",
              "sourceSystemGuid": "2b22b4e6-5aa4-44d7-bf06-f7a71f9fa8a6",
              "addressCountryCd": "USA",
              "showOrganizationName": true,
              "fax": ""
            },
            "assetName": "Art Workshop Camp",
            "contactPhone": "816-501-0011 x147",
            "searchScore": 188.56271,
            "assetVersion": 8,
            "salesStatus": "registration-open"
          }]}>

          </ArticleList>
        </Col>
        <Col size="md-6">
          {/* <activity> */}
          <h1>Activities Near You</h1>
          <p>

          </p>
          {/* </activity> */}
        </Col>
      </Row>
      {/* <Row>
        <Col size="md-2">
          <Link to="/">← Back to Authors</Link>
        </Col>
      </Row> */}
      <Footer />
    </Container>
  );
}


export default Detail;
