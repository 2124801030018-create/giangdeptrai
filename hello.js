// Simple Hello World program
console.log("Hello, World!");
console.log("👋 Hello from Vũ Minh Giang!");

// Function to greet someone
function greetUser(name = "World") {
    return `Hello, ${name}! Welcome to my GitHub profile! 🚀`;
}

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { greetUser };
}

// Example usage
console.log(greetUser());
console.log(greetUser("Visitor"));