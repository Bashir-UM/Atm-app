// Bank Account Object
function BankAccount(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
}

// Sample Accounts
const accounts = [
    new BankAccount("001", "Bashir", 5000),
    new BankAccount("002", "Chile", 3000),
    new BankAccount("003", "Vivian", 7000),
    new BankAccount("004", "Sule", 1000)
];

// Function to find an account by its number
function findAccount(accountNumber) {
    return accounts.find(account => account.accountNumber === accountNumber);
}

// Function to check balance
function checkBalance(account) {
    alert(`Account Balance for ${account.accountHolder}: ₦${account.balance}`);
}

// Function to withdraw money
function withdraw(account, amount) {
    if (amount <= account.balance) {
        account.balance -= amount;
        alert(`Withdrawal successful. New Balance: ₦${account.balance}`);
    } else {
        alert("Insufficient balance.");
    }
}

// Function to transfer money between accounts
function transfer(fromAccount, toAccount, amount) {
    if (amount <= fromAccount.balance) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        alert(`Transfer successful. New Balance: ₦${fromAccount.balance}`);
    } else {
        alert("Insufficient balance for transfer.");
    }
}

// Main ATM Functionality
function atmOperation() {
    let fromAccountNumber = prompt("Enter your account number:");
    let fromAccount = findAccount(fromAccountNumber);

    if (!fromAccount) {
        alert("Account not found!");
        return;
    }

    let operation = prompt("Choose operation: 1-Check Balance 2-Withdraw 3-Transfer");

    switch (operation) {
        case "1":
            checkBalance(fromAccount);
            break;
        case "2":
            let withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
            withdraw(fromAccount, withdrawalAmount);
            break;
        case "3":
            let toAccountNumber = prompt("Enter recipient's account number:");
            let toAccount = findAccount(toAccountNumber);

            if (!toAccount) {
                alert("Recipient account not found!");
                return;
            }

            let transferAmount = parseFloat(prompt("Enter amount to transfer:"));
            transfer(fromAccount, toAccount, transferAmount);
            break;
        default:
            alert("Invalid operation.");
    }

    let anotherTransaction = confirm("Do you want to perform another transaction?");
    if (anotherTransaction) {
        atmOperation();
    } else {
        alert("Thank you for using our ATM!");
    }
}
