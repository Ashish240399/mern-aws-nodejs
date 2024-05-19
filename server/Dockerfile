FROM node:alpine3.18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application files to the working directory
COPY src/ ./src/

# Make port 8901 available to the outside of the Docker container
EXPOSE 8901

# Define the command to run the application
CMD [ "node", "src/index.js" ]