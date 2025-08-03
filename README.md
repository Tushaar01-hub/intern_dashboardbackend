for Backend i used vs code 
imported some dependencies :
"dependencies": {
        "axios": "^1.11.0",
        "body-parser": "^2.2.0",
        "cors": "^2.8.5",
        "express": "^5.1.0",
        "pg": "^8.16.3"
      }
axios is to show(to frontend) or retrieve(from frontend) the data .
cors to connect frontend and backend or else it will thrown an error.
imported express and pg tho we r dealing with static data no need for pg .
before importing we need to run some intructions like,
npm init -y
npm i axios cors express

then we defined const app=express(); and const port =3000; at which it will run

introduced some dummy data:

declared app.post ,app.get and assigned them routes and retrieve the data from form i.e. username and password for post and sent dummy data of leaderboard through get
