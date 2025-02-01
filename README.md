<h1>Multilingual FAQ Management System</h1>

<h2>Overview</h2>
<p>This project is a <strong>Multilingual FAQ Management System</strong> that supports adding, viewing, and managing frequently asked questions (FAQs) in multiple languages.</p>
<p>The system uses a <em>MERN (MongoDB, Express, React, Node.js)</em> stack along with Redis for caching to improve performance. It also integrates <strong>Google Translate API</strong> for automated translations of FAQs.</p>

<h2>Features</h2>
<ul>
  <li><strong>Multilingual Support:</strong> Store and retrieve FAQs in multiple languages.</li>
  <li><strong>WYSIWYG Editor:</strong> Format answers using React Quill.</li>
  <li><strong>Caching:</strong> Uses Redis to cache FAQ responses for performance optimization.</li>
  <li><strong>REST API:</strong> Provides endpoints to manage FAQs.</li>
  <li><strong>Google Translate Integration:</strong> Automatically translates FAQ content.</li>
</ul>

<h2>Installation</h2>

<h3>Clone the Repository</h3>
<pre>
<code>
git clone &lt;repository_url&gt; custom_folder_name
cd custom_folder_name
</code>
</pre>

<h3>Backend Setup</h3>
<ul>
  <li>Node.js</li>
  <li>MongoDB</li>
  <li>Redis</li>
</ul>

<h3>Steps</h3>
<pre>
<code>
cd backend
npm install
</code>
</pre>

<h3>Setup Environment Variables</h3>
<pre>
<code>
MONGO_URI= Your_MongoDB_URI
PORT= Your_PORT_NUMBER (Default: 4000)
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
</code>
</pre>

<h3>Run the Backend Server</h3>
<p>The backend will be running at <a href="http://localhost:4000">http://localhost:4000</a></p>

<h3>Frontend Setup</h3>
<ul>
  <li>Node.js</li>
</ul>

<h3>Steps</h3>
<pre>
<code>
cd frontend
npm install
npm start
</code>
</pre>
<p>The frontend will be running at <a href="http://localhost:3000">http://localhost:3000</a></p>

<h2>API Usage</h2>

<h3>1. Fetch FAQs by Language</h3>
<pre>
<code>
GET /api/faqs?lang={language}
Example: GET "http://localhost:4000/api/faqs?lang=en"
</code>
</pre>

<h3>Response</h3>
<pre>
<code>
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
</code>
</pre>

<h3>2. Add a New FAQ</h3>
<pre>
<code>
POST /api/faqs
Example: POST "http://localhost:4000/api/faqs"
</code>
</pre>

<h3>Request</h3>
<pre>
<code>
{
  "question": "What is this system?",
  "answer": "This system allows managing FAQs in multiple languages."
}
</code>
</pre>

<h3>Response</h3>
<pre>
<code>
{
  "_id": "12345",
  "question": "What is the system?",
  "answer": "This is a multilingual FAQ management system.",
  "translations": {
    "question_hi": "यह सिस्टम क्या है?",
    "question_bn": "এই সিস্টেম কী?",
    "answer_hi": "यह एक बहुभाषी FAQ प्रबंधन प्रणाली है।",
    "answer_bn": "এটি একটি বহু ভাষিক FAQ ব্যবস্থাপনা সিস্টেম।"
  }
}
</code>
</pre>

<h2>Redis Cache</h2>

<h3>1. Check Redis Logs</h3>
<pre>
<code>
redis-cli monitor
</code>
</pre>
<p>This will show live Redis interactions.</p>
<ul>
  <li>If a request is cached, you’ll see: <code>GET faq:lang:en</code></li>
  <li>If the cache is missed, and the server queries MongoDB, you'll see a new <code>SET</code> command:</li>
</ul>
<pre>
<code>
SET faq:lang:en "cached data"
</code>
</pre>

<h3>2. Clear Redis Cache</h3>
<pre>
<code>
redis-cli FLUSHALL
</code>
</pre>

<h3>3. Cache Expiration Time</h3>
<p><strong>3600 seconds (1 hour)</strong></p>

<h2>Contribution Guidelines</h2>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch: <code>git checkout -b feature/your-feature-name</code></li>
  <li>Make changes and commit: <code>git commit -m "Your commit message"</code></li>
  <li>Push your changes: <code>git push origin feature/your-feature-name</code></li>
  <li>Open a Pull Request.</li>
</ol>

<p>🚀 Thank you for contributing!</p>
