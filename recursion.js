// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function checkYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If it's divisible by 100, it should also be divisible by 400 to be a leap year
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}
// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20


function ticket_price(){
    var age=prompt("give me your age: ")
    var price=0
    if (age <= 12) {
        return 10+""+"$"
    } 
    else if (age>=13 && age<=17) {
        
        return 15+""+"$"
    }
    else {
        
    return 20 +""+"$"
    }
}
console.log(ticket_price())


// Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.

function weather_adviser(temperature){
    function weather_adviser(temperature){
        if (temperature<=10){
        return "wear a jacket"
        }
        if (temperature<=20) {
            return "wear a hoodie"
        }
        if (temperature<=30) {
            return "wear a t-shirt"
            
        }
        if (temperature>=30) {
            return "wear a t-shirt"
            
        }
        
        }
}
console.log(weather_adviser((2)))

//Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fib(n){
    if n ==0 || n==1{
        return 1
    }
    return fib(n-1)+ fib (n-2)

}
console.log(fib(6)) 

// Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
function palindrome(str){
    if(str.lenght==0 ||str.length==1){
        return true
    }
    else if(str[0]==str[str.lenght-1]){
        palindrome(str.slice(1,str.lenght-1))
    }
    else{
        return false
    }
}
// Power Function: Write a recursive function to calculate the result of raising a number to a given power.


function power(x,n){
    if (n==1){
        return x
    }
    return x*power(x,n-1)
}
console.log(power(2,3))


