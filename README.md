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


The server will be running at http://localhost:80.

API Endpoints
GET / - Returns "Hello, World!"
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

   Open your web browser and navigate to `http://localhost:80` (or the port specified in your `docker-compose.yml`).


# Deploy to AWS Fargate

Here's a CloudFormation template to deploy a containerized application on AWS Fargate using Amazon ECS. This template:

✅ Creates an ECS Cluster

✅ Defines a Task Definition with Fargate

✅ Deploys a Service using an Application Load Balancer

✅ Uses an AWS VPC, Security Groups, IAM Roles for networking & permissions

Execute Commands in Sequence

> npm run dc-build 

> npm run dc-run

> npm run dc-stop

> npm run ecrlogin

> npm run tagimage

> npm run pushimage

> npm run verifyimage

> npm run aws-create-stack | aws-update-stack

- Wait for deployment (~5-10 minutes), check the console in CloudFormation Stack page for latest status.
- Verify the ECS Service & Logs in AWS ECS Console
- 
```

License

This project is licensed under the MIT License - see the LICENSE file for details.