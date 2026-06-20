# Fullstack Menu Tree

Technical Test Submission - Fullstack Menu Tree System

## Overview

This project is a fullstack web application for managing hierarchical menu structures (tree menus).

Features include:

- Menu Tree Visualization
- Create Menu
- Edit Menu
- Delete Menu
- Search Menu
- Swagger API Documentation

---

## Tech Stack

### Backend

- Golang
- Gin Framework
- GORM
- PostgreSQL
- Swagger

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

---

## Project Structure

```text
backend/
frontend/
```

---

## Backend Setup

### 1. Navigate to backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
go mod tidy
```

### 3. Configure database

Update PostgreSQL connection settings in:

```text
backend/config/database.go
```

### 4. Run application

```bash
go run ./cmd/main.go
```

Backend will run on:

```text
http://localhost:8080
```

Swagger documentation:

```text
http://localhost:8080/swagger/index.html
```

---

## Frontend Setup

### 1. Navigate to frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run application

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/menus     | Get menu tree  |
| GET    | /api/menus/:id | Get menu by ID |
| POST   | /api/menus     | Create menu    |
| PUT    | /api/menus/:id | Update menu    |
| DELETE | /api/menus/:id | Delete menu    |

---

## Features Implemented

### Backend

- REST API
- PostgreSQL Integration
- Menu Tree Builder
- CRUD Operations
- Swagger Documentation

### Frontend

- Recursive Menu Tree
- Search Functionality
- Create Menu
- Update Menu
- Delete Menu
- Loading State

---

## Author

Technical Test Submission
