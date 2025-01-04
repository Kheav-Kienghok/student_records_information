# Student Records Information

## Project Description

**Student Records Information** is a web application designed to manage student records. Using this application, users can:

- Insert new student records.
- Update existing records.
- Delete records as needed.

This project uses **React** for the frontend and `db.json` as a mock database.

---

## Features

- **Create Records**: Add new student data to the database.
- **Edit Records**: Modify existing student information.
- **Delete Records**: Remove student data from the database.
- **Simple Database Integration**: Uses `db.json` as the backend database for simplicity and ease of use.

---


## Setup and Installation

1. Clone the repository:
   ```bash
   git clone student_records_information
   cd student_records_information
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON Server:
   ```bash
   npx json-server --watch db.json --port 8000
   ```

4. Start the React application:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:3000/`.

---


## Usage

1. Navigate to the main interface.
2. Use the form to add new student records.
3. Click the edit button to modify an existing record.
4. Use the delete button to remove unwanted records.