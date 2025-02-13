// GET REQUEST - method 1
function getTodos() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
    params: {
      _limit: 5 //equivalent to appending the url with a ?_limit=5
    }
  })
    .then(res => showOutput(res))
    .catch(e => console.error(e))

  // GET REQUEST - method 2 for params
  // axios
  // .get("https://jsonplaceholder.typicode.com/todos", { params: { _limit: 5 } })
  // OR
  // .get("https://jsonplaceholder.typicode.com/todos?_limit:5")
  // .then(res => showOutput(res))
  // .catch(e => console.error(e))
}

// POST REQUEST
function addTodo() {
  axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      title: "New todo",
      completed: false
    }
  })
    .then(res => showOutput(res))
    .catch(e => console.error(e))

  // POST REQUEST - method 2
  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts", {
  //     title: "New todo",
  //     completed: false
  //   })
  //   .then(res => showOutput(res))
  //   .catch(e => console.error(e))
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log("PUT/PATCH Request")
}

// DELETE REQUEST
function removeTodo() {
  console.log("DELETE Request")
}

// SIMULTANEOUS DATA
function getData() {
  console.log("Simultaneous Request")
}

// CUSTOM HEADERS
function customHeaders() {
  console.log("Custom Headers")
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response")
}

// ERROR HANDLING
function errorHandling() {
  console.log("Error Handling")
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token")
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos)
document.getElementById("post").addEventListener("click", addTodo)
document.getElementById("update").addEventListener("click", updateTodo)
document.getElementById("delete").addEventListener("click", removeTodo)
document.getElementById("sim").addEventListener("click", getData)
document.getElementById("headers").addEventListener("click", customHeaders)
document.getElementById("transform").addEventListener("click", transformResponse)
document.getElementById("error").addEventListener("click", errorHandling)
document.getElementById("cancel").addEventListener("click", cancelToken)
