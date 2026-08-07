# Cars Dealership Capstone Project

## 📂 Repository Name
cars-dealership-capstone

## 🚗 Project Name
Cars Dealership Web Application

---

## 📖 Project Overview
This project is the Full‑stack Development Capstone for the Cars Dealership, a national car retailer in the U.S.  
The application allows users to:
- View dealership branches
- Submit and read reviews
- Analyze review sentiment

---

## 🛠️ Tech Stack
- **Frontend**: React (Vite)
- **Backend**: Django + Flask microservice
- **Database**: MongoDB, SQLite
- **Deployment**: Docker, Kubernetes, IBM Cloud Code Engine
- **CI/CD**: GitHub Actions

---

## ✨ Features
- Responsive UI design
- Dealer listing and filtering by state
- User authentication (login/register/logout)
- Review submission with sentiment analysis
- Microservices architecture
- Automated CI/CD pipeline

---

## 🚀 Getting Started
### Prerequisites
- Node.js & npm
- Python 3.10+
- Docker

### Installation
```bash
# Clone repository
git clone https://github.com/your-username/cars-dealership-capstone.git
cd cars-dealership-capstone

# Backend setup
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend setup
cd ../frontend
npm install
npm run dev
