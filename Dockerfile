# FROM node:18

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Expose the application port
# EXPOSE 8000

# # Command to run the application
# CMD ["node", "src/app.js"]


# for lambda
FROM public.ecr.aws/lambda/nodejs:22

# Copy the function code
COPY src/app.js package.json ./

# Install dependencies
RUN npm install

EXPOSE 8000

# Command to start the Lambda function
CMD ["app.handler"]
