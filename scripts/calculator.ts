

document.addEventListener('DOMContentLoaded', () => {
    const curr1 = document.getElementById('curr1') as HTMLInputElement;
    const curr2 = document.getElementById("curr2") as HTMLInputElement;
    const exchange_rate = document.getElementById("exchange_rate") as HTMLInputElement;
    const table = document.getElementById("currency_table") as HTMLTableElement;

    document.getElementById("swap_currency_button").addEventListener('click', () => {
        const temp = curr1.value;

        curr1.value = curr2.value;
        curr2.value = temp;
        exchange_rate.value = String(1 / +exchange_rate.value);

        document.getElementById('exchange_rate_label').textContent = 'Exchange rate ' + curr1.value + ' / ' + curr2.value + ' = ' + (+exchange_rate.value).toFixed(4);
        buildTable(table, curr1, curr2, exchange_rate);
    });

    document.getElementById("calculate_table").addEventListener('click', () => {
        buildTable(table, curr1, curr2, exchange_rate);
    });
});

function buildTable(table: HTMLTableElement, curr1, curr2, exchange_rate) {
    table.innerHTML = "";
    changeHead(table, curr1.value, curr2.value);
    for(let i = 1; i <= 10; i++) {
        addRow(table, i, (i*+exchange_rate.value).toFixed(2), "upto10");
    }
    for(let i = 20; i <= 100; i+= 10) {
        addRow(table, i, (i*+exchange_rate.value).toFixed(2), "upto100");
    }
    for(let i = 200; i <= 1000; i+= 100) {
        addRow(table, i, (i*+exchange_rate.value).toFixed(2), "upto1000");
    }
}

function addRow(t: HTMLTableElement, a, b, id) {
    const row = t.insertRow(-1);
    row.id = id;
    const from = row.insertCell(0);
    const to = row.insertCell(1);
    from.appendChild(document.createTextNode(a));
    to.appendChild(document.createTextNode(b));
}

function changeHead(t: HTMLTableElement, a, b) {
    const row = t.insertRow(0);
    row.appendChild(document.createElement("th")).appendChild(document.createTextNode(a));
    row.appendChild(document.createElement("th")).appendChild(document.createTextNode(b));
}