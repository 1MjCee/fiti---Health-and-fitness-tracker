# Health and Fitness Tracker

## Overview

This project is a mobile health and fitness tracker built using React Native for the frontend, React Redux for state management, Django for the backend with PostgreSQL as the database. It aims to provide users with tools to track their health metrics, activities, and overall fitness progress.

## Features

- User Authentication: Sign in, sign up, and manage accounts.
- Activity Tracking: Log workouts, steps, calories burned, etc.
- Health Metrics: Monitor heart rate, sleep quality, weight, etc.
- Data Visualization: Daily, weekly, and monthly charts for insights.
- Notifications: Alerts for reminders or achievements.
- Sync with Wearables: Integration with fitness devices (placeholder for future implementation).

## Technologies Used

**Frontend:**

- React Native - for mobile app development.
- Redux - for state management.
- React Navigation - for handling navigation between screens.

**Backend:**

- Django - Python web framework.
- Django REST Framework - for building RESTful APIs.
- PostgreSQL - Database system.

**Tools:**

- Expo - for easier React Native development and deployment.
- Git - Version control.
- Docker - backend deployment

## Installation

### Prerequisites\*\*

- Node.js (for React Native)
- Python 3.x
- PostgreSQL

**Setting Up the Development Environment: Frontend**

- Frontend (React Native)
- bash

**Clone the repository**

```
git clone https://github.com/1MjCee/fiti---Health-and-fitness-tracker

```

**Navigate to the frontend directory\***

```
cd fiti-app
```

# Install dependencies

```
npm install
```

# Start the development server (using Expo)

```
npm start
```

**Setting Up the Development Environment: Frontend**

- Backend (Django)
- bash

**Navigate to the backend directory**

```
cd backend
```

**Create a virtual environment**

```
python -m venv venv
```

**Activate the virtual environment**

- On Linux or Mac:

```
source venv/bin/activate
```

- On Windows use:

```
venv\Scripts\activate
```

**Install dependencies**

```
pip install -r requirements.txt
```

**Set up the database**

```
python manage.py migrate
```

**Run the server**

```
python manage.py runserver
```

**Configuration**
Environment Variables: Create .env files in both frontend and backend directories to store sensitive information like API keys or database credentials.

### Database Setup:

- Ensure PostgreSQL is running and accessible.
- Update DATABASES settings in backend/settings.py with your local database credentials.

**Usage**

- Development: Use the commands above to run the app in development mode.
- User Interface: Once running, navigate through the app using the provided UI to log in, track fitness activities, and view health metrics.

**Contributing**

- Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

**Fork the Project**

- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

**License**

- Distributed under the MIT License. See LICENSE for more information.

**Contact**

- Project Link: [Insert Project URL]
- Email: your-email@example.com (mailto:your-email@example.com)

**Acknowledgements**

- React Native Awesome List
- Django Girls Tutorial
- Icons from Flaticon
