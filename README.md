# ACL_auth
## Steps to implement the code
Step 1 : Run the server.js file to make sure the server is running
step 2 : send a POST request http://localhost:5000/register link with raw JSON body of
        {
  "name": "Test User",
  "email": "testuser@example.com",
  "password": "password123"
}

Step 3 : To login the API
send a POST request with link http://localhost:5000/login
and raw JSON file 
  {
  "email": "testuser@example.com",
  "password": "password123"
}


step 4 : to get the users
send a GET request with link http://localhost:5000/protected
and header as 
key : x-auth-token
Value : <token value>

step 5 :  test forget password API
send a POST request with link http://localhost:5000/forgot-password
and a raw JSON body with email address included

step 6 : to reset the password send a POST request with link http://localhost:5000/reset-password/<generated token>
with raw JSON body of new password
