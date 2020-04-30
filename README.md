# QuickChat - client side

Client side of chat room application, communicating via sockets with server side. Shows landing page where you can log in to a chat room. In the chat room it you can chat with other logged in users.

https://user-images.githubusercontent.com/59824446/80713110-3808ac80-8af3-11ea-9476-55e35264b1aa.png

### Features
-Redux states making the app scalable
-React with modern functional components
-Smooth user experience with features such as automatic slide down to new messages, focus on inputs and 'Enter' keypress to send
-Intuitive feedback to user, i.e. when username is wrong length

### Using the app
1. Run 'git clone https://github.com/viktorostlund/chat-app-client.git'.
2. Run 'npm install' to install the project dependencies.
3. Run 'npm start' to start the application.
4. View the application in a browser on 'http://localhost/3000'.
5. For the application to work properly, you need to also install and run the server side of the application, found here: https://github.com/viktorostlund/chat-app-server.git

### Language
-Typescript

### Tech stack
-React
-Redux
-Socket.io

### Commands
-start - starts the app
-test - runs the test suite
-lint - runs eslint
-format - runs prettier

### Coming features
-Add e2e tests and client side socket tests
-Improve error handling
-Show who's currently in the chat room
-Emoji support
