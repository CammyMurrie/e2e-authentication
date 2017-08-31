#Information
This is a simple implementation of an end-to-end authentication based application.

The app makes use of React for a GUI, node for the API server and MongoDB for the database.

#Usage

###Database
* Install mongodb from https://docs.mongodb.com/manual/administration/install-community/
* Install a mongodb GUI if you so choose : I prefer https://robomongo.org/
* In the server directory create sub directory /data/db (it may already exist if it was pushed to the repo).
* use command mongod (if its in PATH variable) in the server directory to get db up and running.
* user command mongo to view the database in the command line (if you arent going to use a GUI).

###API
* npm install inside server directory
* npm run dev to start up api server

server methods:-

route = '/'
@get
headers = {
  content-type: application/json,
  authorization: jwt-token from route /signin or /signup
}

route = '/signin'
@post
headers = {
  content-type: application/json
}
body = {
  "email": "email",
  "password": "password"
}
response = {
  "token": jwt-token
}

route = '/signup'
@post
headers = {
  content-type: application/json  
}
body = {
  "email": "email",
  "password": "password"
}
response = {
  "token": jwt-token
}
responds with error if email address already exists

###Front End
* npm install inside client directory
* npm start to start webpack build
* view on localhost:8080
