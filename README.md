MODELS:
the models folder contains 3 models each for USER , ASSET and PERFORMANCE METRICES which are required for building for our backend application.
The performance metrices model has an attribute of asset_id which acts as a foreign key for this mdel and helps us to map data from asset to its performance . so the ASSET model has its primary key asset_id which is the custom key given to it when the user posts the data regarding the object.
The USER model is created for authorization and authentication purpose and therefore an encrypted api is in used where a user can view all the asset present into it only when a correct id is being provided in the parameter. So it is very important that a correct mongoDB userId for the user is being provided here.

ROUTES:
this folder contains all the routes used for the models and and mounting is done for the router is done in the server.js file . the abilities of express.Router() has been taken advantage of for the routing section.

An important note route("/:userid/alldata") this router used here takes the userid as the parameter for validating whether the user was already present in our database or not . If not then it throws the response that the user was not present in ousr database.

CONTROLLERS:
This folder contains all the function which are needed to run when there is the correct api being provided .The router are mapped with the functions which are exported by this file and used in the router folder. This way we manage different folders and perform different activities in it maintaining a relation between all of them.

finally in server file we have made the server using express and also made the mongoDB connection using mongoDB compass .

the packages used are :
express:
mongoDB: for making connection with the database
CORS: for making the cross web connection more easier it is used as middleware.
express.json() : is used as a middleware and which allows us to get the json data from the body of the request.

Routes:
GET http://localhost:3000/api/v1/assets/65e71a9df588fbcfeccdc591/alldata : this is the api used when we have to look for all the data and there is also a userID provided here which tells us whether the given user is present in our database or not.If the user is present then it shows all the data to the user .

POST http://localhost:3000/api/v1/assets : this is the api used for when the user wants to post data to the database .

GET http://localhost:3000/api/v1/assets/:id : this is used to get the details for the particular asset in our database.
