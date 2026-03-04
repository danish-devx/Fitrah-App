function fitrahcalculate() {

    let amountWheat = Number(document.getElementById("amountWheat").value) || 0;
    let personsWheat = Number(document.getElementById("personsWheat").value) || 0;
    let totalWheat = document.getElementById("totalWheat");
    let cal = amountWheat * personsWheat;
    totalWheat.innerText = cal + " PKR";


    let amountBarley = Number(document.getElementById("amountBarley").value) || 0;
    let personsBarley = Number(document.getElementById("personsBarley").value) || 0;
    let totalBarley = document.getElementById("totalBarley");
    let cal2 = amountBarley * personsBarley;
    totalBarley.innerText = cal2 + " PKR";


    let amountDates = Number(document.getElementById("amountDates").value) || 0;
    let personsDates = Number(document.getElementById("personsDates").value) || 0;
    let totalDates = document.getElementById("totalDates");
    let cal3 = amountDates * personsDates;
    totalDates.innerText = cal3 + " PKR";


    let amountAjwa = Number(document.getElementById("amountAjwa").value) || 0;
    let personsAjwa = Number(document.getElementById("personsAjwa").value) || 0;
    let totalAjwa = document.getElementById("totalAjwa");
    let cal4 = amountAjwa * personsAjwa;
    totalAjwa.innerText = cal4 + " PKR";


    let amountRaisin = Number(document.getElementById("amountRaisin").value) || 0;
    let personsRaisin = Number(document.getElementById("personsRaisin").value) || 0;
    let totalRaisin = document.getElementById("totalRaisin");
    let cal5 = amountRaisin * personsRaisin;
    totalRaisin.innerText = cal5 + " PKR";


    let grandTotal = document.getElementById("grandTotal");
    let allTotal = cal + cal2 + cal3 + cal4 + cal5;
    grandTotal.innerText = allTotal.toLocaleString();
}


document.getElementById("main-container").addEventListener("input" , fitrahcalculate) ;

fitrahcalculate() ;

