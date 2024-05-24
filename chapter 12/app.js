function addEntry() {
    var income = parseFloat(document.getElementById("income").value);
    var expense = parseFloat(document.getElementById("expense").value);
    var description = document.getElementById("description").value;

    var totalAmount = income - expense;

    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + description + "</td><td>" + income.toFixed(2) + "</td><td>" + expense.toFixed(2) + "</td><td>" + totalAmount.toFixed(2) + "</td>";

    document.getElementById("entryTable").appendChild(newRow);
    
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    
    document.getElementById("income").value = "";
    document.getElementById("expense").value = "";
    document.getElementById("description").value = "";
}