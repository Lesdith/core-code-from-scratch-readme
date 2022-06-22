
## BACK
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2010%20React-Node/Week%2010.md">WEEK 10</a>

# Exercise 1
# Age Prediction API 👶-👴:
Create a simple REST API that tries to predict an age based on a name.

## API Requeriments:
  <ul>
  <li> Use Express.JS to build the API.</li>
   <li> The API should be capable to response to any name.</li>
    <li> The API should use route parameters to get the name:.</li>
</ul>



```javascript
 # Request example
    # Here samsepiol is the name the API should try to
    # predict the age.
    http://localhost:3000/api/age/samsepiol
```
  <ul>
  <li>The age should be a random number that satisfies the condition: age > 0 && age < 100</li>
   <li> The response should include the age in days.</li>
   <li> The response should look similar to this one:</li>
</ul>

```javascript
{
  "name": "samsepiol",
  "age": "62",
  "days": "19366"
}
```

  <ul>
  <li>If no name is provided in the request, the API should return an error message
prompting you to use the correct parameters:</li>
</ul>

```javascript
{
  "error": "Missing parameter 'name' was expected."
}
```

## EXAMPLE

```javascript


```


 
 
 # Exercise 2
 # Secrets Box API Challenge
Create a simple REST API that receives a request containing a number that represents a delay
in milliseconds. The API should respond to the request after the delay specified in the request has expired.


### Motivation
If you've made it this far, you've already written a few REST APIs and you're probably comfortable using Node.JS and its ecosystem, congratulations!

Part of being a programmer is knowing how to write and read code, most of the time we will read more than we write and that is why this challenge is based on your understanding of code and Node.JS as a whole.

Remember, this challenge is based on the question why? and not in what?


### Challenge Description

<a href="https://github.com/NSA-CORE-CODE/secrets-box-api" >This </a> simple REST API was created by the <a href="https://www.nsa.gov/" >NSA </a> . The API is able to respond to a request with the NSA github account user and password. The NSA considers that its API is the safest that exists so they invite you to try to hack it.


### How the API works?

The API is able to respond with the username and password of the NSA github account only if a parameter called role is inside the body of the request and if this parameter contains the correct role.

So basically you just have to pass a correct role param inside the body of the request to the API and the credentials as well as the account are yours, piece of cake right?

At the end of the challenge you should be able to get a JSON containing the username and password of the account.


### Setup Instructions
  <ul>
  <li> Clone the API code repository</li>
   <li> Install all project dependencies</li>
   <li> Start the application with: npm run start</li>
   <li> Start hacking :^)</li>
</ul>


### API Test Instructions
 <ul>
  <li> You should use Postman to test the API</li>
   <li> Your request should look like this one:</li>
</ul>



 ### Days of week
 <ul>
  <li>
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Week%20challenges%20(Tuesday).md"> Week challenges (Tuesday) 💻 </a>
 </li>
 </ul>







