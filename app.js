if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function sayHello() {
    document.getElementById('hello').innerText = 'Hello world';
}

<div class="calculator">
        <h1>Kalkulačka</h1>
        <form id="calcForm">
            <input type="number" id="operand1" placeholder="První číslo" required="">
            <select id="operation">
                <option value="add">Sčítání (+)</option>
                <option value="subtract">Odčítání (-)</option>
                <option value="multiply">Násobení (×)</option>
                <option value="divide">Dělení (÷)</option>
            </select>
            <input type="number" id="operand2" placeholder="Druhé číslo" required="">
            <button type="button" onclick="calculate()">Spočítat</button>
        </form>
        <div id="result">Výsledek</div>
    </div>
