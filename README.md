# Social Network API for Parents

This project is a backend API designed to create a social network for parents, allowing them to connect with each other based on their children's school, class, and optional society (residential community). Parents are auto-joined to relevant "social circles" based on their child's school and class information, with optional circles for society or community.

## Features

- **Auto-join Social Circles**: Parents are automatically added to relevant circles based on school, grade, section, and society.
- **Post and Reply System**: Parents can post and reply within circles they belong to.
- **Slack-Style Threading**: Supports one level of reply threads within posts.
- **Discoverability of Circles**: Parents can discover additional circles relevant to their child’s school or society.

## Project Structure

- **MongoDB Collections**:
  - **Circle**: Contains information about each social circle.
  - **Parent**: Stores parent details, including associated circles.
  - **School**: Stores school details.
  - **Post**: Contains posts made within circles.
  - **Reply**: Contains replies to posts, with support for a one-level threaded structure.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/)
- [MongoDB](https://www.mongodb.com/) 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pedestrian110/social_network_api.git
2. Navigate into the project directory:
   ```bash
   cd social_network_api
3. Install dependencies:
   ```bash
   npm install   
### Configuration
Create a .env file in the root directory and add your MongoDB connection string:
MONGO_URI=your_mongodb_connection_string
PORT=5000
### Run the Server
npm start

## API Endpoints

### Registration and Circle Creation
- Circle Creation: POST /api/circles
  Creates social circles if they do not already exist based on the parent’s details (school, grade, section, society).
- Auto-join Circles:Automatically assigns parents to relevant circles upon registration.

### Posts and Replies
- Create a Post: POST /api/circles/:circleId/posts
- Reply to a Post: POST /api/posts/:postId/replies
- Vote on Post/Reply: POST /api/posts/:postId/vote and POST /api/replies/:replyId/vote
### Discover Circles
- Retrieve Available Circles: GET /api/circles/discover
  Lists circles a parent can join, based on their school, grade, and optional society.
## Future Enhancements
- Parent-Initiated Circles: Parents can create sub-circles (e.g., "Brigade Society Bus No. 92").
- Schema Adaptability: The schema supports seamless updates as children progress through grades.
## Contributing
- Feel free to open issues or submit pull requests for feature suggestions, bug reports, or other contributions.
## Contact
- For further questions or feedback, reach out to Mahesh Pandey.

---

"maheshpandey21112002@gmail.com"

 
