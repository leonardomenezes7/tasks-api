# Tasks API✅

![Client](https://github.com/leonardomenezes7/tasks-api/assets/145611761/f8dacbda-c505-40ff-ba6d-071acd22f9c9)

## Project📁
This task management API was developed using pure Node.js, without any external dependencies. The API provides a simple and efficient solution for managing tasks, allowing you to create, read, update, and delete (CRUD) tasks. Additionally, users can upload tasks via streams using CSV files, enabling bulk task imports seamlessly.

## Features⚙️
- Create a Task: Allows users to create a new task.
- List All Tasks: Retrieves a list of all tasks.
- Update a Task by ID: Updates the details of an existing task by its ID.
- Delete a Task by ID: Removes a task by its ID.
- Mark a Task as Complete by ID: Marks a specific task as complete using its ID.
- Bulk Import Tasks via CSV: Enables mass import of tasks from a CSV file using streams.

## Routes and Business Rules↔️

- `id` - Unique identifier for each task
- `title` - Title of the task
- `description` - Detailed description of the task
- `completed_at` - Date when the task was completed. Initially set to null
- `created_at` - Date when the task was created
- `updated_at` - Should always be updated to the date when the task was last modified

Routes:
- `POST /tasks` Create a task in the database, sending the title and description fields through the request body.
When creating a task, the fields `id`, `created_at`, `updated_at`, and `completed_at` will be automatically populated.

- `GET /tasks` List all tasks saved in the database.
Also perform a search, filtering tasks by `title` and `description`.

- `PUT /tasks/:id` It is possible to update a task by its `id`.
In the request `body`, it should receive only `title` and/or `description` fields to be updated.
If only `title` is sent, it means that `description` cannot be updated, and vice versa.
Before performing the update, a validation is done to check if the `id` belongs to a task saved in the database.

- `PATCH /tasks/:id/completed` It is possible to mark the task as complete or incomplete.
Before making the change, a validation is performed to check if the `id` belongs to a task saved in the database.

- `DELETE /tasks/:id` It is possible to remove a task by its `id`.
Before performing the removal, a validation is done to check if the `id` belongs to a task saved in the database.

CSV Import:
The CSV import performs a file reading stream and uses a POST method on the `/tasks` route to save the tasks from the CSV file into the JSON database.

## Technologies used🛠️
- Node.js
- csv-parse

## How to run🚀
```bash
# Clone the project to the desired location on your computer.
$ git clone https://github.com/leonardomenezes7/rocketmovies_frontend.git

# Navigate to the directory
$ cd foodexplorer_frontend

# Install necessary dependencies
$ npm install

# Run
$ npm run dev

```





