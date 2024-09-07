// JSON string
const jsonString = '{"name": "Alice", "age": 30, "email": "alice@example.com", "isMember": true, "hobbies": ["reading", "cycling", "hiking"]}';

// Parse JSON string into JavaScript object
const user = JSON.parse(jsonString);

console.log(user.name);  // Outputs: Alice
console.log(user.hobbies[1]);  // Outputs: cycling
