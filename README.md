# TMDb

A simple web app for The Movie DB written in React-native (Andriod)

# The Mission

The 3 main user features that are currently included in this app are the ability to:

- View a list of popular movies
- Search for movies
- See basic details of a movie

# How to run this app locally

# Setting up react native env

Please follow the react native guide to help setup your enviornment:

https://reactnative.dev/docs/environment-setup

```
React Native Cli QuickStart
```

## Step 1 - Setting up your own repository

Clone the repo:

```
git clone https://github.com/manloeng/MobileApp
```

Once you have cloned the repo, you should have the repo on your system.

You will need to install the required modules to run the app successfully.

## Step 2 - Installation

On your terminal you will want to run:

```
npm install
```

or

```
yarn
```

This will install all the modules that are listed in the package.json

## Step 3 - Update the secret.example.json

You will need to add your own API Key in order to access this app.
You can get this from signing up to The Movie DB:

https://www.themoviedb.org/settings/api

Once you have signed up, please rename the `secret.example.json` file to `secret.json` and change the api key

example:

```
"api_key": "1234abcd"
```

# Step 4 - Running on an Environment

Once you have the modules installed, you will need to connect a device so that you can run the app.
Once connected you can start the app via:

```
npx react-native start

```

Once metro has been started you can run:

```
npx react-native run-android
```

# Step 4 - Using the App

Once you have started the app, you will be taken straight to the app.

** Currently Only the discover route is available **

# Todo List

- Improve tests using jest and enzyme - after initial test bugs
- Refactoring of code - Use Context to pass information around (ex - from discover to search bar component)
- Potential to add state management to cache data - Redux
- Improve performance - properly resize images
- Add other movie lists
