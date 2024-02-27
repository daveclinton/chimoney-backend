# Use the official Node.js image from Docker Hub
FROM node:18.19.0

# Create and set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build TypeScript files
RUN yarn build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["yarn", "start"]
