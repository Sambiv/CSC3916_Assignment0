# Assignment Zero

## Purpose
The purpose of this assignment is to work with Postman, become familiar with HTTP, and REST through Postman's testing framework. Furthermore, to check in your first Node.js program to GitHub.

You will create a Postman collection and REST tests. Automate each test and include the required asserts for each request.

## Requirements
- Sign-up for a free GitHub account: https://github.com/
- Accept GitHub Classroom assignment.
- Download IDE: WebStorm or VSCode.
- Download Desktop version of Postman: https://www.postman.com/downloads/
- Create a REST request:
    - Create an environment variable `book_title` for the query string.
    - URL: `https://www.googleapis.com/books/v1/volumes?q={{book_title}}`
    - Get JSON response of books with "Turing" in the title.
    - Parse result and store `id` in a Postman variable.
    - **Asserts:**
        - Validate books returned have "Turing" in the title (`items[i].title`).
        - Validate response status code is **200**.
- Create a Chained request:
    - URL: `https://www.googleapis.com/books/v1/volumes/{{id}}`
    - Use `id` from the first request.
    - **Asserts:**
        - Validate response contains the `id`.
        - Validate status code **200**.
- Modify `/utils/googlebooks.js` to return:
    ```javascript
    {
        data: response.data, 
        status: response.status, 
        statusText: response.statusText, 
        headers: response.headers,
        requestHeader: response.config.headers
    }
    ```
- Review HTTP Headers in Request and Response – create `headers.txt` and describe each key-value pair. Check it into GitHub.

---

## Submission

### **Postman Collection**

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/41737307-c0a07e55-90b5-4fd9-88c8-9428144b7f3d?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D41737307-c0a07e55-90b5-4fd9-88c8-9428144b7f3d%26entityType%3Dcollection%26workspaceId%3D2eac589d-dbd1-4182-9d9b-127a3ec802d3)

### **Checked-In Files**
- `utils/googlebooks.js`: Modified to return the specified object.
- `headers.txt`: Descriptions of HTTP header key-value pairs.

---

## Rubric
- **-10** homework not uploaded.
- **-2** missing Postman button in `README.md`.
- **-2** missing title check in request 1.
- **-2** missing ID check in request 2.
- **-2** missing change in `utils/googlebooks.js`.
- **-2** missing `headers.txt` with request headers.

---

## Resources
- [Postman](https://www.getpostman.com/)
- [Chaining Requests in Postman](http://blog.getpostman.com/2014/01/27/extracting-data-from-responses-and-chaining-requests/)
