# Tic Tac Toe Game

A simple and interactive **Tic Tac Toe** game developed using **HTML, CSS, and JavaScript**. This project allows two players to play the classic game in a web browser with winner and draw detection.

## Features

* 🎮 Two-player gameplay (Player X and Player O)
* ✅ Automatic winner detection
* 🤝 Draw detection
* 🔄 Restart Game button
* 💻 Responsive and user-friendly interface
* ⚡ Fast and lightweight

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Project Structure

```text
Tic-Tac-Toe-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html` or open it in any modern web browser.
4. Start playing Tic Tac Toe!

## Learning Outcomes

* HTML page structure
* CSS Grid and Flexbox
* JavaScript DOM manipulation
* Event handling
* Arrays and functions
* Game logic implementation

# 🐳 Docker Deployment

Follow the steps below to run the Tic Tac Toe game using Docker.

## Prerequisites

- Docker Desktop installed
- Docker Engine running

Verify Docker installation:

bash
docker --version
docker info


---

## Step 1: Clone the Repository

bash
git clone https://github.com/vaish-sv22/Tic-Tac-Toe-Game.git
cd Tic-Tac-Toe-Game


---

## Step 2: Create a Dockerfile

Create a file named **Dockerfile** in the project root and add:

dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80


---

## Step 3: Create a `.dockerignore` File

text
.git
.gitignore
README.md


---

## Step 4: Build the Docker Image

bash
docker build -t tic-tac-toe .


Expected Output:

text
Successfully built xxxxxxxxx
Successfully tagged tic-tac-toe:latest


---

## Step 5: Run the Docker Container

bash
docker run -d -p 8080:80 --name ticgame tic-tac-toe


Expected Output:

text
<Container_ID>


---

## Step 6: Verify the Running Container

bash
docker ps


Example Output:

text
CONTAINER ID   IMAGE         STATUS         PORTS
1e31a16ed129   tic-tac-toe   Up 25 seconds  0.0.0.0:8080->80/tcp


---

## Step 7: Access the Application

Open your browser and visit:


http://localhost:8080


The Tic Tac Toe game will be available in your browser.

---

# Docker Commands

### 1.Build Image

bash
docker build -t tic-tac-toe .


### 2.Run Container

bash
docker run -d -p 8080:80 --name ticgame tic-tac-toe


### 3.View Running Containers

bash
docker ps


### 4.Stop Container

bash
docker stop ticgame


### 5.Start Container

bash
docker start ticgame


### 6.Remove Container

bash
docker rm -f ticgame


### 7.Remove Docker Image

bash
docker rmi tic-tac-toe

---

## Final Deployment 

- Docker image build (`docker build`)
- Docker container running (`docker ps`)
- Browser showing `http://localhost:8080`
