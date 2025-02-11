import { Window } from 'happy-dom'

describe('happy-dom test parse variable', () => {
  it('should parse a JavaScript variable from a script tag', () => {
    // Create a new Window instance
    const window = new Window()
    const document = window.document

    // Set up the HTML content with a script tag containing a JavaScript variable
    document.body.innerHTML = `
      <script id="js-data">
        window.user = {
          name: "John Doe",
          age: 30,
          isEmployed: true
        };
      </script>
    `

    // Get the script tag by its ID
    const scriptTag = document.getElementById('js-data')

    // Extract the text content of the script tag
    const scriptContent = scriptTag.textContent

    // Evaluate the script content in the window context
    window.eval(scriptContent)

    // Access the variable from the window context
    const user = window.user

    // Assertions or further processing
    console.log(user) // { name: 'John Doe', age: 30, isEmployed: true }

    // // Example assertion using a testing library like Jest
    expect(user.name).toBe('John Doe')
    expect(user.age).toBe(30)
    expect(user.isEmployed).toBe(true)
  })
})

describe('happy-dom test', () => {
  it('should test happy-dom', () => {})
  it('should test happy-dom to parse application/json', () => {
    // Create a new Window instance
    const window = new Window()
    const document = window.document
    // Set up the HTML content with a script tag containing JSON
    document.body.innerHTML = `
      <script id="json-data" type="application/json">
        {
          "name": "John Doe",
          "age": 30,
          "isEmployed": true
        }
      </script>
    `
    // Get the script tag by its ID
    const scriptTag = document.getElementById('json-data')

    // Extract the text content of the script tag
    const jsonString = scriptTag.textContent

    // Parse the JSON string into an object
    const jsonData = JSON.parse(jsonString)

    // Assertions or further processing
    console.log(jsonData) // { name: 'John Doe', age: 30, isEmployed: true }

    // Example assertion using a testing library like Jest
    expect(jsonData.name).toBe('John Doe')
    expect(jsonData.age).toBe(30)
    expect(jsonData.isEmployed).toBe(true)
  })
})
