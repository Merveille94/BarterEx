<div style="display: flex; justify-content: center;"><img src="./public/ALX%20BARTERX.png" alt="banner"></div>

# Team members: Merveille & King

# BarterEx

## 1. Project Overview

**Project Name:** BarterEx  
**Team Member(s):** King Kyei Boakye, Emanuele Merveille Guehi  
**Objective:**  
BarterEx is a digital platform designed to facilitate barter trading among individuals and small businesses in Ghana. The platform aims to overcome traditional barter trade limitations by providing a user-friendly interface for listing, searching, and trading goods and services without money.

## 2. Architecture

**Architecture Overview:**  
The BarterEx architecture consists of a React-based frontend interacting with a Node.js backend server via RESTful APIs. The backend server uses MongoDB for data storage, and the application will be deployed on cloud platforms (Heroku for the backend and Netlify for the frontend).

**Components:**  
- **Frontend:** React, React Router, Axios  
- **Backend:** Express.js, Mongoose, bcryptjs, jsonwebtoken  
- **Database:** MongoDB  
- **Deployment:** Heroku (Backend), Netlify (Frontend)

**Architecture Diagram:**  
*To be added*

## 3. APIs and Methods

**API Endpoints:**

- **User Authentication**
  - **POST /API/auth/register:** Registers a new user with username, email, and password.
  - **POST /API/auth/login:** Authenticates a user and returns a JWT token.
  - **GET /API/auth/me:** Retrieves the authenticated user's details using the JWT token.

- **Item Listings**
  - **GET /API/items:** Retrieves a list of all available items for trade.
  - **POST /API/items:** Adds a new item to the user's trade list.
  - **GET /API/items/:id:** Retrieves details of a specific item.
  - **DELETE /API/items/:id:** Deletes an item from the user's trade list.

- **User Profiles**
  - **GET /API/users/:id:** Retrieves a user's profile and their listed items.
  - **PUT /API/users/:id:** Updates the user's profile information.

- **Messaging System**
  - **POST /API/messages:** Sends a message between users regarding a trade.
  - **GET /API/messages:** Retrieves the user's message history.

- **3rd Party APIs:**
  - **Google Maps API:** For location-based search and filtering.

**API Endpoint Diagram:**  
*To be added*

## 4. Data Model

**Data Model Diagram:**

- **User:**
  - `_id: ObjectId`
  - `username: String`
  - `email: String`
  - `password: String`
  - `items: [ObjectId]` (References to Item)
  - `messages: [ObjectId]` (References to Message)

- **Item:**
  - `_id: ObjectId`
  - `name: String`
  - `description: String`
  - `category: String`
  - `image: String`
  - `userId: ObjectId` (Reference to User)
  - `createdAt: Date`

- **Message:**
  - `_id: ObjectId`
  - `Sender Id: ObjectId` (Reference to User)
  - `Receiver Id: ObjectId` (Reference to User)
  - `content: String`
  - `timestamp: Date`

**Data Model Diagram:**  
*To be added*

## 5. User Stories

- As a user, I want to register and create a profile to list items I want to trade.
- As a user, I want to search for items by category and location so that I can find items of interest near me.
- As a user, I want to view detailed information about an item, including images and descriptions, so that I can decide if I want to trade for it.
- As a user, I want to send and receive messages with other users to negotiate trades.
- As a user, I want to manage my listed items, including adding new items, editing details, and deleting items I no longer wish to trade.

## 6. Mockups

**Login Page:**
- **Fields:** Email, Password
- **Buttons:** Login, Sign Up

**User Dashboard:**
- **Sections:** My Items, Messages, Account Settings

**Item Listing Page:**
- **Features:** Item Image, Name, Description, Trade Button

**Messaging Interface:**
- **Features:** List of Messages, Conversation View, Reply Box

**Tools:**  
- Figma/Illustrator for mock-up design  
- Adobe XD for UI/UX design

## 7. Testing

**Testing Strategy:**

- **Unit Testing:**
  - **Tools:** Jest, Mocha
  - **Focus:** API endpoints, user authentication, and data validation.

- **Integration Testing:**
  - **Tools:** Postman
  - **Focus:** API integration, and database interactions.

- **End-to-End Testing:**
  - **Tools:** Cypress
  - **Focus:** User flows like registration, item listing, and trading.

**Continuous Integration:**
- **Tools:** GitHub Actions
- Automate testing and deployment processes with CI/CD pipelines.

## 8. Deployment Strategy

**Branching and Merging:**

- **GitHub Flow:**
  - Feature branches for each new feature or fix.
  - Pull requests for code review and merging into the main branch.

**Deployment:**

- **Staging Environment:**
  - Deploy to a staging environment for testing before production.

- **Production Deployment:**
  - Use Heroku and Netlify to deploy the backend and frontend seamlessly.

**Rollback Plan:**
- Implement a rollback strategy to revert to the last stable version in case of deployment failure.

## 9. Post-Launch Plan

**Post-Launch Activities:**

- **User Feedback:** Gather and analyze user feedback for continuous improvement.
- **Regular Updates:** Fix bugs, add features, and improve performance based on user feedback and testing.
- **Marketing Strategy:** Promote the app through social media, influencers, and local partnerships.

## 10. Team Members

- **Current Team:** King Kyei Boakye  
- **Current Team:** Emanuele Merveille Guehi  
- **Future Plans:** Aim to expand the team with an additional developer and designer.

## 11. Status and Progress

- Creation of wireframing and the various pages starting with the Sign-in / sign-up.
- Creation of the GitHub repo.
- Initialization of the React and Tailwind development environment.
- **Progress Rating:** 6/10  
  This MVP specification outlines the necessary steps to develop, test, and deploy BarterEx, ensuring a strong foundation for future growth and iterations.

