let body = document.querySelector("body");
let content = document.getElementById("content")


let iconSun = document.getElementById("icon-sun");
let iconMoon = document.getElementById("icon-moon");


iconMoon.addEventListener("click", () => {
    iconSun.style.display = "block";
    iconMoon.style.display = "none";

    body.classList.add("dark");
})

iconSun.addEventListener("click", () => {
    iconMoon.style.display = "block";
    iconSun.style.display = "none"

    body.classList.remove("dark")
});

let statusInfo = document.getElementById("statusInfo")

let container = document.getElementById("container");
let profession = document.getElementById("profession");
let locationInfo = document.getElementById("locationInfo");

let invoiceDate = document.getElementById("invoiceDate");
let paymentDue = document.getElementById("paymentDue");
let billTo = document.getElementById("bill");
let sendMail = document.getElementById("sendMail");

let firstNameAmount = document.getElementById("first-name-amount");
let firstPrice = document.getElementById("first-price")

let secondNameAmount = document.getElementById("second-name-amount");
let secondtPrice = document.getElementById("second-price");

let pinkContainer = document.getElementById("pinkContainer")


// Delete Note
let deleteContainer = document.getElementById("deleteContainer")
let deletionNote = document.getElementById("deletionNote")
let deleteBtn = document.getElementById("deleteBtn")
let deleteButton = document.getElementById("Delete-btn")


// Canel Button
let CanelBtn = document.getElementById("Cancel-btn");

// Edit Function
let editBtn = document.getElementById("editBtn")

let invoceId = "XM9141";


async function fetchData() {
    const response = await fetch("data.json");
    const data = await response.json();

    const invoice = data.find(obj => obj.id === invoceId);

    statusInfo.innerHTML += `
        <div class = "dot"></div>
        <p class = "Pending-p">${invoice.status}</p>
    `

    profession.innerHTML += `
    <p class = "invoice-id"><span class = "symbol">#</span>${invoice.id} </p>
    <p class = "profession-p">${invoice.description} </p>    
    `

    locationInfo.innerHTML += `
    <p class = "senderAddress">${invoice.senderAddress.street}
    <br>${invoice.senderAddress.city}
    <br>${invoice.senderAddress.postCode}
    <br>${invoice.senderAddress.country}
    </p>
    `

    invoiceDate.innerHTML += `
    <p class = "createdDate">${invoice.createdAt}</p>
    `

    paymentDue.innerHTML += `
    <p class = "paymentDate">${invoice.paymentDue}</p>
    `

    billTo.innerHTML += `
        <p class = "clientName">${invoice.clientName}</p>
        <p class = "clientAdress">${invoice.clientAddress.street}
        <br>${invoice.clientAddress.city}
        <br>${invoice.clientAddress.postCode}
         <br>${invoice.clientAddress.country}
    `

    sendMail.innerHTML += `
        <p class = "clientEmail">${invoice.clientEmail}</p>
    `

    firstNameAmount.innerHTML += `
    <p class = "firstItemsName">${invoice.items[0].name}</p>
    <p class = "firstItemsQuantity">${invoice.items[0].quantity} x £${invoice.items[0].total}</p>
    `

    firstPrice.innerHTML += `
    <p class = "firstItemsPrice">£${invoice.items[0].price}</p>
    `

    secondNameAmount.innerHTML += `
    <p class = "secondItemsName">${invoice.items[1].name}</p>
    <p class = "secondItemsQuantity">${invoice.items[1].quantity} x £${invoice.items[1].total}</p>
    `

    secondtPrice.innerHTML += `
    <p class = "secondItemsPrice">£${invoice.items[1].price}</p
    `
    pinkContainer.innerHTML += `
        <p class = "invoceTotal">£${invoice.total}</p>
    `

    deletionNote.innerHTML += `
        <p class = "promptDelete-p">Are you sure you want to delete invoice ${invoceId}? This action cannot be undone.</p>
    `
}

fetchData();


function deleteInvoice() {
    deleteBtn.addEventListener("click", () => {
        deleteContainer.style.display = "block"
        content.style.opacity = "0.7";
    })
}

deleteInvoice();

// Cancel Butoon
CanelBtn.addEventListener("click", () => {
    deleteContainer.style.display = "none"
    content.style.opacity = "1";
});

// Delete Button
async function deleteInvoiceData() {
    const response = await fetch("data.json", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json();

}

deleteButton.addEventListener("click", () => {
    deleteInvoiceData();
});




// Edit Button
editBtn.addEventListener("click", () => {

})