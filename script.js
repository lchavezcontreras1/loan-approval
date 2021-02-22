$(document).ready(
    function () {
        $("button").click(calculateLoan);
    });

function calculateLoan(e) {
    e.preventDefault();
    let salary = parseFloat($("input#salary").val());
    let credit = parseFloat($("input#credit").val());
    let months = parseFloat($("input#months").val());
    if (salary >= 40000) {
        if (credit >= 600) {
            $("div#output").text("Loan Approved!");
        } else if (months > 12) {
            $("div#output").text("Loan Approved!");
        } else {
            $("div#output").text("Loan Denied!");
        }
    } else if (credit >= 600) {
        if (months > 12) {
            $("div#output").text("Loan Approved!");
        } else {
            $("div#output").text("Loan Denied!");
        }
    } else {
        $("div#output").text("Loan Denied!");

    }
}