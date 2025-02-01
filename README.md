# Overview 
This project is a Multilingual FAQ Management System that supports adding, viewing, and managing frequently asked questions (FAQs) in multiple languages. The system uses a MERN (MongoDB, Express, React, Node.js) stack along with Redis for caching to improve performance. It also integrates Google Translate API for automated translations of FAQs.

# Features
Multilingual Support: Allows FAQ questions and answers to be stored and retrieved in       multiple languages.
WYSIWYG Editor: Used to format answers using React Quill.
Caching: Redis is used to cache FAQ responses to improve performance.
REST API: Exposes APIs to manage FAQs and retrieve them based on language preferences.
Google Translate Integration: Automatically translates FAQ content to supported languages.

# Installation =>

# Clone the Repository
First, clone the repository to your local machine: 
    git clone <repository_url> custom_folder_name
    cd custom_folder_name

# Backend Setup
Node.js
MongoDB
Redis

# Steps
1. Install backend dependencies:
    cd backend
    npm install
2. Setup environment variables
    MONGO_URI=<Your MongoDB URI>
    PORT = <Your PORT_NUMBER> (Running on PORT = 4000 by default)
    REDIS_HOST=127.0.0.1
    REDIS_PORT=6379
3. Run the backend server

The backend will be running at http://localhost:4000

# Frontend Setup
Node.js

# Steps

1. Install frontend dependencies
    cd frontend
    npm install

2. Start the frontend server
    npm start

The frontend will be running at http://localhost:3000

# API Usage

1. Fetch FAQs by Language => 
    GET /api/faqs?lang={language}
    example => GET "http://localhost:4000/api/faqs?lang=en"
    # Response 
    [
        {
            "question": "What is the system?",
            "answer": "This is a multilingual FAQ management system."
        },
        {
            "question": "How to use the system?",
            "answer": "You can add and view FAQs in multiple languages."
        }   
    ]


2. Add a New FAQ => Translations will be generated dynamically.
    POST /api/faqs
    example => POST "http://localhost:4000/api/faqs
    # Request 
    {
    "question": "What is this system?",
    "answer": "This system allows managing FAQs in multiple languages."
    }

    # Response
    {
    "_id": "12345",
    "question": "What is the system?",
    "answer": "This is a multilingual FAQ management system.",
    "translations": {
        "question_hi": "यह सिस्टम क्या है?",
        "question_bn": "এই সিস্টেম কী?",
        "answer_hi": "यह एक बहुभाषी FAQ प्रबंधन प्रणाली है।",
        "answer_bn": "এটি একটি বহু ভাষিক FAQ ব্যবস্থাপনা সিস্টেম।",
        }
    }

3. # Redis Cache

1. Check Redis Logs

    Run the following command in your terminal: redis-cli monitor
    This will show live Redis interactions.

    If a request is cached, you’ll see: GET faq:lang:en

    If the cache is missed, and the server queries MongoDB, you'll see a new SET command:
        SET faq:lang:en "cached data"

2. If you want to clear Redis Cache you can use the following command :-
        redis-cli FLUSHALL

3. Cache Expiration Time => 3600 seconds (1 hour)

# CONTRIBUTION GUIDELINES

1. Fork the repository.

2. Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name

3. Make changes and commit them: git commit -m "Your commit message"

4. Push your changes: git push origin feature/your-feature-name

5. Open a Pull Request.
























