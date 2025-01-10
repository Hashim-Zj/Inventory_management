
# INVONTARY MANAGEMENT SYSTEM

## Technologies Used
- **Backend**: Django, Django REST Framework
- **Frontend**: React.js, Axios, React Bootstrap,
- **Database**: MySQL

---

## Setting Up the Project

### Step 1: Create a Virtual Environment
#### For Linux:
```bash
python3 -m venv env
source env/bin/activate
```
#### For Windows:
```bash
python -m venv env
env\Scripts\activate
```

### Step 2: Install Required Dependencies
```bash
pip install django djangorestframework python-decouple mysqlclient django-cors-headers
```

---

## MySQL Database Setup

### Step 3: Configure MySQL
#### Start MySQL:
```bash
sudo mysql -u root -p
```
#### Create a New User:
```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```
#### Create the Database:
```sql
CREATE DATABASE invontary;
```
#### Grant Privileges to the User:
```sql
GRANT ALL PRIVILEGES ON invontary.* TO 'username'@'localhost';
```
#### Verify Privileges:
```sql
SHOW GRANTS FOR 'username'@'localhost';
```

### Step 4: Create an Environment File
In the main folder, create a `.env` file with the following format:
```
DB_NAME=invontary
DB_USER=username
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=3306
```

---

## Backend Setup

### Step 5: Migrate and Run the Backend Server
Navigate to the backend directory:
```bash
cd invontary/
```
Run the following commands:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

---

## Frontend Setup

### Step 6: Install Dependencies and Run
Navigate to the frontend directory:
```bash
cd frontend/
```
Install dependencies:
```bash
npm install axios react-datepicker react-router-dom react-bootstrap react-toastify
```
Run the frontend server:
```bash
npm start
```

---

## API Endpoints for Testing

### 1- ITEM MASTER

### Get All ITEMS
**Method**: GET  
**URL**: `http://localhost:8000/item_master/`

### Get a Specific Item
**Method**: GET  
**URL**: `http://localhost:8000/item_master/<id>/`  
Replace `<id>` with the ID of the todo item.

### Add a New Item
**Method**: POST  
**URL**: `http://localhost:8000/item_master/`
**Body**:
```json
{
  "item_name": "Veg Burgur",
  "description": "A fress Veg Burger"
}
```

### Edit a Item
**Method**: PUT  
**URL**: `http://localhost:8000/item_master/<id>/`  
Replace `<id>` with the ID of the todo item.
**Body**:
```json
{
  "item_name": "Veg Burgur",
  "description": "A fress Veg Burger with expery date"
}
```

### Delete a Item
**Method**: DELETE  
**URL**: `http://localhost:8000/item_master/<id>/`  
Replace `<id>` with the ID of the todo item.

### ____________________________

### 2- STOCK INVONTORY

### Get All Stocks
**Method**: GET  
**URL**: `http://localhost:8000/goodsin/`

### Get a Specific stock
**Method**: GET  
**URL**: `http://localhost:8000/goodsin/<id>/`  
Replace `<id>` with the ID of the todo item.

### Add a New stock
**Method**: POST  
**URL**: `http://localhost:8000/item_master/<id>/add_GoodsIn/`
Replace `<id>` with the ID of the todo item.
**Body**:
```json
{
  "quantity": 5,
  "expiry_date": "2025-01-10",
  "entry_number":02
}
```

### Edit a stock
**Method**: PUT  
**URL**: `http://localhost:8000/goodsin/<id>/`  
Replace `<id>` with the ID of the todo item.
**Body**:
```json
{
  "quantity": 10,
  "expiry_date": "2025-01-10",
  "entry_number":02
}
```

### Delete a stock
**Method**: DELETE  
**URL**: `http://localhost:8000/goodsin/<id>/`  
Replace `<id>` with the ID of the todo item.



### ____________________________

### 2- PURCHASE INVONTORY

### Get All Purchase
**Method**: GET  
**URL**: `http://localhost:8000/goodsout/`

### Get a Specific Purchase
**Method**: GET  
**URL**: `http://localhost:8000/goodsout/<id>/`  
Replace `<id>` with the ID of the todo item.

### Add a New Purchase
**Method**: POST  
**URL**: `http://localhost:8000/item_master/<id>/add_goodsout/`
Replace `<id>` with the ID of the todo item.
**Body**:
```json
{
  "quantity": 5
}
```

### Edit a Purchase
**Method**: PUT  
**URL**: `http://localhost:8000/goodsout/<id>/`  
Replace `<id>` with the ID of the todo item.
**Body**:
```json
{
  "quantity": 10
}
```

### Delete a Purchase
**Method**: DELETE  
**URL**: `http://localhost:8000/goodsout/<id>/`  
Replace `<id>` with the ID of the todo item.

---

