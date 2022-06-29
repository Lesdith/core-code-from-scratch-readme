## BACK
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Week%2011.md
">WEEK 11</a>
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

<img src="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Imagen1.png" width="750"> 



### Recommendations
 <ul>
  <li> Read, Play and Analyze the code.</li>
   <li> If you feel stuck, read the suggested resources, ask the team for help, or search it on Google.</li>
</ul>

### What to deliver

If you managed to hack the API and get the github account, congratulations!

Now you need to create a new issue in the repository of the hacked API. The issue name must follow the following structure:

pentest-report/<your-hacker-name/your-team-name/>

The issue description must contain an explanation of how you managed to hack the API and, if you wish, a recommendation on how to fix it.

### Challenge Rules
 <ul>
  <li> If you feel stuck you can ask the team for help, but the explanation and submission of your github issue is personal.
</li>
   <li> In this challenge you can work alone, or with as many people as you want. If you want to organize the whole team to solve it, you can do it, this challenge is free and you can work with whoever you wan</li>
</ul>

### Challenge resources
Here you have a list of useful resources that can help you with the challenge:

# EXAMPLE
<img src="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Captura.PNG" width="750"> 

 <ul>
  <li> <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes" >Object Prototypes </a></li>
 <li> <a href="https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/" >  Javascript Type Coercion</a></li>
 <li> <a href="https://en.wikipedia.org/wiki/Base64" >Base64</a></li>
 <li> <a href="https://attacomsian.com/blog/nodejs-base64-encode-decode" > Node.JS Base 64 Encoding - Decoding</a></li>
</ul>



 ### Days of week
 <ul>
  <li>
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Week%20challenges%20(Thursday).md"> Week challenges (Thursday) 💻 </a>
 </li>
 </ul>







