const readline = require('readline-sync');

function validateCreditCard() {
    const cardNumberInput = readline.question("Enter your credit card number: ").trim();
    const validation = validateCreditCardNumber(cardNumberInput);

    if (validation.isValid) {
        console.log(`Your ${validation.cardType} card number is valid.`);
    } else {
        console.log("Invalid card number or card type not recognized.");
    }
}

function validateCreditCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/\D/g, '');

    if (!/^\d{13,19}$/.test(cardNumber)) {
        return { isValid: false, cardType: 'Unknown' }
    }

    const cardRegex = {
        visa: /^4/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/
    }

    let cardType;
    for (const type in cardRegex) {
        if (cardRegex[type].test(cardNumber)) {
            cardType = type;
            break;
        }
    }

    let sum = 0;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if ((cardNumber.length - i) % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    const isValid = sum % 10 === 0;

    return { isValid, cardType: cardType || 'Unknown' }
}

// Call the function to start validation
validateCreditCard();