

document.addEventListener('DOMContentLoaded', (event) => {
    const curr1 = document.getElementById('curr1') as HTMLInputElement;
    const curr2 = document.getElementById("curr2") as HTMLInputElement;
    const exchrate = document.getElementById("rate") as HTMLInputElement;
    const table = document.getElementById("table") as HTMLTableElement;

    document.getElementById("swapcurr").addEventListener('click', (event) => {
        const temp = curr1.value;

        curr1.value = curr2.value;
        curr2.value = temp;
        exchrate.value = String(1 / +exchrate.value);

        document.getElementById('exchangerate').textContent = 'Exchange rate ' + curr1.value + ' / ' + curr2.value + ' = ' + exchrate.value;
    });

    document.getElementById("calctable").addEventListener('click', (event) => {
        for(let i = 1; i < 10; i++) {
            let row = table.insertRow(i);
            row.insertCell(0).innerHTML = String(i);
            row.insertCell(1).innerHTML = "test2";
        }
    });
});