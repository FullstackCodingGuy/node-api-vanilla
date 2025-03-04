# node-api-vanilla

A boilerplate API project for Node.js, Express, and a few more batteries.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/FullstackCodingGuy/node-api-vanilla.git
    ```
2. Navigate to the project directory:
    ```sh
    cd node-api-vanilla
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the API

Start the server:
```sh
npm start


The server will be running at http://localhost:8000.

API Endpoints
GET /hello_world - Returns "Hello World"
GET /health - Returns "I'm Good!"
```


## Run using Docker

1. Clone the repository:

   ```
   git clone https://github.com/FullstackCodingGuy/node-api-vanilla.git
   cd node-api-vanilla
   ```

2. Build the Docker image:

   ```
   docker-compose build
   ```

3. Run the application:

   ```
   docker-compose up
   ```

4. Access the application:

   Open your web browser and navigate to `http://localhost:8000` (or the port specified in your `docker-compose.yml`).


License
This project is licensed under the MIT License - see the LICENSE file for details.