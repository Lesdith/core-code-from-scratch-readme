### Questions :question:   
<table>   
  <tr>
    <td>What is HTTP?</td>    
    <td>:pushpin:Hypertext Transfer Protocol (HTTP) is the life of the web.</br>
  It is used every time a document is transferred or an AJAX request is made.</br>
  But HTTP is surprisingly a relative unknown among some web developers.</td>
  </tr> 
  <tr>
    <td>What is JSON?</td>
    <td>JSON, whose name corresponds to the acronym JavaScript Object Notation or JavaScript Object Notation, is a lightweight data exchange format that is easy for programmers to read and write and simple for machines to interpret and generate.</br>
        JSON is a completely language independent text format. These properties make JSON an ideal data exchange format for use with REST or AJAX APIs. It is often used instead of XML, due to its lightweight and compact structure.</td>
  </tr>    
  <tr>
    <td> Is JSON the same as a plain Javascript object?</td> 
    <td>:pushpin:The acronym JSON stands for JavaScript Object Notation or JavaScript Object Notation. 
      From the name of the thing, it seems so... It seems but it is not. 
      A JSON is a data transfer format often used in AJAX calls between the browser and a server. You care about data, only data </tr>    
  <tr>
    <td>What is REST?</td>
    <td>:pushpin:REST is an interface to connect several systems based on the HTTP protocol (one of the oldest protocols) and it helps us to obtain and generate data and operations, returning that data in very specific formats, such as XML and JSON.
        The most used format today is the JSON format, since it is lighter and more readable compared to the XML format. Choosing one will be a matter of the logic and needs of each project.
        REST is supported by HTTP, the verbs it uses are exactly the same, with them you can do GET, POST, PUT and DELETE. From here arises an alternative to SOAP. </tr>   
  <tr>
    <td> Is REST a programming language, framework, technology, or architecture pattern?/td>
    <td>:pushpin:REST es un estilo arquitectónico para diseñar aplicaciones web. Nuestra idea es que en lugar de usar mecanismos para hacer complejos como CORBA, RPC o SOAP para conectar máquinas, usemos HTTP simple para llamadas entre máquinas.
    </td>
  </tr>  
  <tr>
   <td>What is a Resource in REST?</td>
  <td>
    :pushpin: What is a Resource? . A resource refers to an important concept of our business (Invoices, Courses, Purchases etc). It is what is usually called a business object. This style allows a first level of organization allowing access to each of the resources independently, favoring reuse, increasing flexibility and addressing operations of insertion, deletion, search, etc.  </td>
  </tr>
  <tr> 
  <td>
    Is an API just another program or a standard?
  </td>
  <td>
    :pushpin: It is considered a type of web development architecture that is fully supported by the HTTP standard. Therefore it is not a protocol or a standard but rather a set of architectural limits.
  </td> 
  </tr>
  <tr>
  <td>
   What is a resource identifier?
  </td>
  <td>
    :pushpin: The resources in a REST web application have a persistent identifier, that is, it does not change over time. Usually this identifier is a URI, for example: http://codigofacilito.com/cursos/javascript-profesional identifies the JavaScript course.
  </td>
  </tr>
  <tr>
  <td>
    What is an HTTP method?
  </td>  
  <td> :pushpin:
  REST proposes that the resources be manipulated using the standard verbs that are part of the HTTP protocol, the ones used are the following: GET, POST, PUT, PATCH and DELETE.
  GET, on the other hand, must be used to read resources, and it must be idempotent, which means that if you perform the same action many times, the result is the same.
  The important thing about the previous paragraph is to understand that GET does not modify, create or alter the resources that are stored in the web server, since it would break the idempotence property.
</td> 
  </tr>
  <tr>
  <td>
    What HTTP methods does REST use within its architecture rules?
  </td>
  <td>
  HTTP verbs are used in the following way:</br>
  :ballot_box_with_check:POST: Used to create new resources, for example POST /courses creates a new course in the course collection.</br>
  :ballot_box_with_check:GET: Used to read resources, for example GET /courses reads the collection of courses.</br>
  :ballot_box_with_check: PUT: It is used to update resources, for example PUT /cursos/javascript-professional would update the Professional JavaScript course with the indicated data.</br>
  :ballot_box_with_check: DELETE: Used to delete resources, for example DELETE /courses/javascript-professional would delete the indicated resource.</br>
  </td>
  </tr>
  <tr>
  <td>
    Why do we use HTTP methods in REST and how do they relate to resources?
  </td>
  <td>
     :pushpin: This basic set of methods can be referred to as CRUD. Each method works the same way across all CA SDM resources. An HTTP client library is required and is available with most programming languages. Use the HTML client library to perform the following tasks:
      Access and modify associated (or related) resources using a multilevel URI path.Send an HTTP request to the server for the resource you want to manipulate.
      Control the object attributes that should be returned using HTTP headers.
  </td>
  </tr>
  
</table>
