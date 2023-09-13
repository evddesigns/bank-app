// ... Existing BankAccount class definition ...

const output = document.getElementById("output");
let account;

function createAccount() {
  const accountHolderName = document.getElementById("accountHolderName").value;
  const accountType = document.getElementById("accountType").value;
  account = new BankAccount(accountHolderName, accountType);
  output.innerHTML = `Account created for ${accountHolderName} (${accountType})`;
}

function performOperation(operation) {
  const amount = parseFloat(document.getElementById("amount").value);
  if (account) {
    try {
      switch (operation) {
        case "deposit":
          const depositResult = account.deposit(amount);
          output.innerHTML = depositResult;
          break;
        case "withdraw":
          const withdrawResult = account.withdraw(amount);
          output.innerHTML = withdrawResult;
          break;
        case "checkBalance":
          const balanceResult = account.checkBalance();
          output.innerHTML = balanceResult;
          break;
        default:
          output.innerHTML = "Invalid operation";
      }
    } catch (error) {
      output.innerHTML = error.message;
    } finally {
      // Optionally, you can include code that runs regardless of whether an exception was caught.
      // For example, you could clear the input fields here.
      document.getElementById("amount").value = "";
    }
  } else {
    output.innerHTML = "Create an account first.";
  }
  
}
