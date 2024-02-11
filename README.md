# RegEx
 *Functionality:

The validateCreditCard() function prompts the user to enter a credit card number and then validates it.
The validateCreditCardNumber() function takes a credit card number as input, performs validation using the Luhn algorithm, and identifies the card type.
*Code Structure:

The code is organized into two functions: validateCreditCard() and validateCreditCardNumber(). This separation of concerns makes the code easier to understand and maintain.
The main function validateCreditCard() orchestrates the validation process, while the helper function validateCreditCardNumber() performs the actual validation.
*Input Handling:

The user input is handled using readline-sync module, which is appropriate for taking input in a terminal environment. It waits for the user to enter input before proceeding.
The input is trimmed to remove any leading or trailing whitespace, ensuring consistency in processing.
*Validation Logic:

The Luhn algorithm is used to validate the credit card number. It checks for the correct number of digits and applies the algorithm to determine if the number is valid.
Regular expressions are employed to identify the card type based on specific patterns in the card number.
*Output:

The result of the validation (whether the card is valid or not) along with the identified card type is displayed in the console.
