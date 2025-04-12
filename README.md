# Netflix Clone

A Full-Stack Netflix Clone built with **React.js, Tailwind CSS, Express.js, and MongoDB**.

## Demo

[Netflix Clone Preview]

Live Demo: [Netflix Clone](https://thecloneflix.netlify.app/)

## Features

- User Authentication
- Browse movies & TV shows
- Responsive UI with Tailwind CSS
- Secure API with Express.js & MongoDB

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Express.js
- MongoDB with Mongoose

## Installation

### Prerequisites
- Node.js & npm installed
- MongoDB installed & running locally or on a cloud service

### Steps to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

2. **Install dependencies**

   **Frontend:**
   ```bash
   cd client
   npm install
   ```

   **Backend:**
   ```bash
   cd server
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the server directory
   - Add the following:
     ```env
     MONGO_URI=your-mongodb-connection-string
     
     ```

4. **Start the development server**

   **Backend:**
   ```bash
   cd server
   npm start
   ```

   **Frontend:**
   ```bash
   cd client
   npm run dev
   ```

5. **Visit the app in your browser**
   ```
   http://localhost:5173
   ```

## Folder Structure
```
netflix-clone/
│-- client/ (React Frontend)
│   ├── src/
│   ├── public/
│   ├── package.json
│
│-- server/ (Express Backend)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── server.js
│   ├── package.json
│
│-- README.md
```

## API Routes

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user` - Get user data

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie by ID
- `POST /api/movies` - Add a new movie

### Watchlist
- `POST /api/watchlist` - Add movie to watchlist
- `GET /api/watchlist` - Get user watchlist
- `DELETE /api/watchlist/:id` - Remove from watchlist

## Contributions
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

---

### 📌 Connect with Me
[LinkedIn](https://linkedin.com/in/your-profile) | [GitHub](https://github.com/your-username)
