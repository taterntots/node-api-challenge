1. Mention two parts of Express that you learned about this week.

-Express is a web application framework similar to React, but for the backend.
-It's a Node.js module just like any other module
-Bonus! Express gives us many features to our applications, from routing and convenience helpers to middleware functions.

2. Describe Middleware?

Middleware are functions that execute during the lifecycle of a request to the Express server. They can execute code, make changes to request and response objects, end the request-response cycle, and call the next middleware funcion in the stack. Fun fact - Express itself is comprised entirely of middleware functions! Who knew.

3. Describe a Resource?

A resource is essentially an object sent during our CRUD operations that the database then handles. They have a type, associated data, relationships to other resources, and a set of methods that operate on it. 

4. What can the API return to help clients know if a request was successful?

As devs, we have full control over response codes and messages, whether failed or successful. For example, this week we've been returning status codes like 200 (Ok status code) and 500(unspecified error code) along with messages wrapped in objects explaining the probable issue.

5. How can we partition our application into sub-applications?

Via Express Routers. Splitting our applications into sub-applications this way makes it more modular and easier to maintain/read.