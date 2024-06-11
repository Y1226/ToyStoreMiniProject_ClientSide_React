# Game Store Project

## Overview
This project was created as part of a school assignment to learn full stack development. The primary objective was to develop a game store with both customer and administrator interfaces, focusing on the correct handling of data between the database, backend, and frontend.

## Requirements

### General Requirements
- **Neat and clear code**
- **Use of Bootstrap for design**

### Project Structure
- **Front-end:** React
- **Redux Setup:**
  - `Reducers` folder with parallel controllers
  - `Actions` folder with actions corresponding to each controller
  - `Axios` folder with functions for each controller
  - `store.js` file

### Interfaces
#### Client Side
1. **Customer Interface (User)**
2. **Manager Interface (Administrator)**

### Pages and Features
1. **Home Page**
   - Displays a list of games.
   - Menu includes admin login for added capabilities.

2. **Admin Interface**
   - **Game List:** Options to add, update, and delete games.
   - **Category List:** Options to add, update, and delete categories.

3. **In-Store Customer Interface**
   - **View Games:** 
     - "Add to Basket" button
     - "More Details" button (partial information shown; full details on route)
   - **Shopping Cart:** 
     - Variables: Game code, game name, quantity (initially 1), unit price, final price
     - Actions to add and remove items, adjust quantity
     - Final purchase sent to server upon completion

4. **Additional Features**
   - **View Shopping Cart:** Display items with options to adjust quantity.
   - **Complete Purchase:** 
     - Simulate final payment
     - User registration if not existing
     - Customer information validation
     - Display final amount
     - Save purchase on the server
   - **Registration:** If customer does not exist, they are prompted to register.

### Component Mapping
- **Main Menu**
  - **Home**
    - **View Game Details**
  - **Games List (Administrator)**
    - **Add/Edit Game**
  - **Categories List**
    - **Add/Edit Category**
  - **Cart**
  - **Identification**
    - **Name and Password Reception**
    - **Enrollment**
    - **Receive Payment Information**

## Navigation Menu
- Home
- Register (Includes all details)
- Connect
- Games List (Principal)
- Admin Categories List
- Cart

## Project Focus
The project emphasized the correct transmission of data from the database to the backend and then displaying it in the frontend, ensuring the full cycle operates properly. Design and aesthetics were secondary to functional correctness.

## Outcome
The project was submitted and received a high mark, reflecting the correctness and efficiency of the implemented features.
