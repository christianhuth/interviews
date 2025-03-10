FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the TypeScript application
RUN npm run build

# Expose the application port (change if necessary)
EXPOSE 3000

# Define the command to run the application
CMD ["node", "dist/main.js"]
