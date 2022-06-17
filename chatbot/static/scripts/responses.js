function getBotResponse(input) {
    // example responses
    if (input == "I want to travel this summer") {
        return "Where to?";
    } else if (input == "Is Mykonos a good idea?") {
        return "Is that even a question?";
    } else if (input == "Let's book then") {
        return "Single, couple or group of friends?";
    } else if (input=="Group"){
        return "Can you leave us your contact?";
    } else if (input=="0682819888"){
        return "Perfect";
    } else if (input=="Thank you"){
        return "Thank you for booking";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "Goodbye") {
        return "Talk to you later";
    } else {
        return "Try asking something else!";
    }
}