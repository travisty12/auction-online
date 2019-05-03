# Auction Online - Planning Phase

### Created by **Travis Toal**, 5/2/19

## Description (current)
* _The purpose of this app is to simulate an online auction, allowing many users to simultaneously view the application and make 'bids' on items. The minimum viable product includes a time-dependent auction process, which updates in real-time to show the highest bid and bidder, and a live-chat functionality. This project will use Redux to keep domain data and application state, which will be fed to / pulled from Firebase._
* _The stretch goals include refactoring the application for mobile use in React Native, and the inclusion of a Payment Gateway API such as Stripe to make the auctions functional._

## Planning

##### Users
* Unknown / Pageload
  * _On the initial visit, users will be greeted with the option to register an event, or enter a key to join an existing event, leading to the Creator or Participant views._
* Auction Creators
  * _Auction Creators should be able to initialize an event, creating a key of some sort stored in persistent state that will be the index of all auction items for that event._
  * _Auction Creators should be able to input as many items as they wish, which will be stored in persistent state underneath their specific key._
  * _Auction Creators can determine the time and length of the auctions, as well as any minimum bids required, and control access to the auction with the distribution of their key._
* Auction Participants
  * _Auction Participants will be able to use that key to enter the 'auction room' at the allotted time._

#### 8-9AM
* _Read the 'Thinking In React' article on planning, mocking, creating static pages._
* _Begin planning the user experience based on their role in the auction process._

# Development Notes

### Setup/Installation Requirements

## Known Bugs
_No known bugs as of 5/3/19_


## List of Technologies Used

### License

_This software is licensed under the ISC license_

Copyright (c) 2019
**_Travis Toal_**  
