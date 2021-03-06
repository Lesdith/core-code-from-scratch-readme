## BACK
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Week%2011.md">WEEK 11</a>

# Example 1
# Forrest Gump Ping-Pong API 🏓:
Create a simple REST API with which you can play ping-pong.

## API Requeriments:
  <ul>
  <li>Use Express JS to build the API.</li>
   <li>Use any port you want for the API.</li>
    <li>The API has to be able to respond to the "ping" request with the "pong" message.</li>
   <li>Use /api/buba-gump as the root route for the API.</li>
    <li>Make sure your API responds to the request using JSON e.g.:</li>
</ul>



```javascript
{
  "message": "pong"
}
```
  <ul>
  <li>Use Postman to test your API.</li>
   <li>Optional but desirable, make your API capable of responding to any player move:</li>
  <ul>
    <li>If the user makes the "ping" move, your API should respond with "pong".</li>
     <li>If the user makes the "pong" move, your API should respond with "ping".</li>
  </ul>
</ul>

## SOLUTION

<img src="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Imagen1.png" width="750"> 


 # Example 2
 # Delayed Response API ⏳:
Create a simple REST API that receives a request containing a number that represents a delay
in milliseconds. The API should respond to the request after the delay specified in the request has expired.

x

## API Requeriments:
  <ul>
  <li>Use Express JS to build the API.</li>
   <li>Use any port you want for the API.</li>
    <li>The API should use route parameters to get the desired delay:</li>
</ul>

```javascript
 # Request example
  # Here 3000 indicates a delay of 3000 milliseconds
  http://localhost:3000/api/delay/3000
```
<ul>
  <li>Your API should have just one request handler.</li>
   <li>You can send any response you want after the delay has expired.</li>
    <li>If no delay is provided in the request, the API should use 1000 as default.</li>
</ul>

## Example

```express
const express = require('express')
const api = express()

api.get("/api/delay/:delay", function(request, response){
    const delay = request.params.delay;
     setTimeout(function(){response.send("Hello World!")}, delay)
})

api.listen(3000, function() {
    console.log("Server running on http://localhost:3000/api/delay/3000")
});
```


 ### Days of week
 <ul>
  <li>
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2011%20%20Node-Databases/Week%20challenges%20(Tuesday).md"> Week challenges (Tuesday) 💻 </a>
 </li>
 </ul>
