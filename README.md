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

   Open your web browser and navigate to `http://localhost:8000` (or the port specified in your `docker-compose.yml`).


# Deploy to AWS EC2

Here’s a CloudFormation template to deploy a Node.js container on an EC2 instance using AWS ECS (Elastic Container Service) with EC2 launch type.


- ✅ Creates a VPC, Security Group, ECS Cluster, and EC2 instance
- ✅ Deploys a Node.js app container from ECR or DockerHub
- ✅ Uses Auto Scaling Group for high availability
- ✅ Sets up IAM Roles for EC2 and ECS


Execute Commands in Sequence
> npm run dc-build 
> npm run dc-run
> npm run dc-stop
> npm run ecrlogin
> npm run tagimage
> npm run pushimage
> npm run verifyimage
> npm run aws-create-stack | aws-update-stack

```
If there are no errors in the process, it will create the stackid

### Example

{
    "StackId": "arn:aws:cloudformation:us-east-1:344883437139:stack/NodeApiVanilla/bde38350-f8c3-11ef-bd34-0ef5edef2bf9"
}

Wait for few minutes, check the console in CloudFormation Stack page for latest status.

```

🚀 What This Command Does

- ✔ Deploys a VPC, Subnet, Security Group
- ✔ Launches an EC2 instance with Docker & ECS Agent
- ✔ Pulls a Node.js app from ECR/DockerHub
- ✔ Runs the app on port 3000 (mapped to 80)
- ✔ Creates ECS Cluster, Task Definition, and Service

License
This project is licensed under the MIT License - see the LICENSE file for details.