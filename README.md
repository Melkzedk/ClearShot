🧠 ClearShot — AI Image Enhancer

ClearShot is a full-stack web app that helps users enhance or slightly deblur images using AI-powered sharpening via the Cloudinary API.
It’s built with React, Bootstrap, Node.js, and Express.

🚀 Features

Upload a blurred or low-quality image

Automatically enhance sharpness and quality via Cloudinary transformations

Preview Before and After images

Download or view the enhanced image in a new tab

Simple, responsive UI built with React and Bootstrap

🏗️ Project Structure
clearshot/
├── backend/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── EnhanceForm.js
    │   ├── App.js
    │   ├── index.js
    │   └── App.css
    ├── package.json
    └── public/

⚙️ Tech Stack

Frontend:

React

Bootstrap / React-Bootstrap

Axios

Backend:

Node.js

Express.js

Multer (for file upload)

Cloudinary SDK

dotenv (for environment variables)

CORS

🔧 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/yourusername/clearshot.git
cd clearshot

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside the backend folder:

PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


Start the backend server:

npm run dev


Server runs on: http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start


Frontend runs on: http://localhost:3000

🌩️ How It Works

User selects an image from their computer.

The frontend (React) sends the file to the backend using Axios.

The backend uploads it to Cloudinary, applying a sharpen and auto-quality effect.

The enhanced image URL is sent back to the frontend.

The frontend displays the before & after images for comparison.

📁 Environment Variables
Variable	Description
PORT	Backend server port (default 5000)
CLOUDINARY_CLOUD_NAME	Found in Cloudinary Dashboard
CLOUDINARY_API_KEY	Found in Cloudinary Dashboard
CLOUDINARY_API_SECRET	Found in Cloudinary Dashboard
🧠 Future Improvements

Add stronger AI models (e.g., ESRGAN or Real-ESRGAN)

Implement face restoration

Add user authentication

Allow batch uploads

Option to choose “Enhancement strength”

🤝 Contributing

Pull requests are welcome.
For major changes, open an issue first to discuss what you’d like to change.

🛡️ License

This project is licensed under the MIT License — feel free to use and modify it.

👤 Author

Melkzedek Kitalia
ICT Support Professional | Full-Stack Developer in Training
📧 Contact:
]
🌍 Location: Kenya
