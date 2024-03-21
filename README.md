This project is a web application created by me Kornilia, that allows a user to search for images and save their favorite ones. It can be useful if one needs a simple and convenient method to organize and access their favorite images.

To get started with the project, you need to first create and configure accounts for the following external services:

Auth0
1. Go to the [Auth0 website](https://auth0.com/) and create an account if you don't already have one.
2. Create a new application and configure it according to your needs.
3. Note the client ID and client secret provided by Auth0.
4. Follow the instructions provided.

Google Custom Search Engine
1. Go to [Google Custom Search Engine](https://programmablesearchengine.google.com/about/) and log in with your Google account.
2. Create a new custom search engine and obtain your API key.
3. Configure the search engine according to your preferences and note the unique search engine ID generated.

Once you have created and configured your accounts and API keys, follow the steps below to get started with the project:
1. Clone the project to your local machine.
2. Install all necessary dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project and add your environment variables.
4. Start the server by running `nodemon server` if you have nodemon installed.
5. Start the React application by running `npm run dev`.
6. Open your browser and navigate to the provided URL to begin using the application.

- Auth0: Used for authentication and user data management. To use the project, users need to create an account with Auth0 and configure the client ID and client secret as instructed in the project documentation.
- Google Custom Search Engine: Used for image searching. To use the search functionality, users need to create and configure their own custom search engine with Google Custom Search Engine and provide the API key and search engine ID for the project configuration.

These external services are crucial for the functionality of the project and form an integral part of its architecture and user experience.
