# TechShop : e-commerce platform

> e-commerce platform built with the MERN stack & Redux.

Live at https://tech-shop-mern.onrender.com/

- email: a@b.com
- password : 12345678

## Usage

Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV=development
PORT=5000
MONGO_URI="YOUR MONGO URI"
JWT_SECRET="RANDOM TEXT YOU WANT"
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (on 3000) & backend (on 5000)
npm run dev

# Run backend only
npm run server
```

### Seed Database

```
# Import data
npm run import-data

# Destroy data
npm run delete-data
```

## Build & Deploy

```
cd frontend
npm run build
```
