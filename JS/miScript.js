class ConvertidorDivisas {
    constructor() {
        // Tasas de conversión (ejemplo: basadas en 1 USD = 1.00)
        this.tasas = {
            'USD': 1.00, 
            'EUR': 0.86, 
            'MXN': 18.45, 
            'GBP': 1.32, 
        };
        // Símbolos para formato
        this.simbolos = {
            'USD': '$',
            'EUR': '€',
            'MXN': '$',
            'GBP': '£',
        };
    }

    //realizamos aqui el calculo de la conversion 
    convertir(cantidad, origen, destino) {
        if (!this.tasas[origen] || !this.tasas[destino]) {
            throw new Error('Moneda no soportada.');
        }
        // Conversión a USD y luego a la moneda elegida
        const cantidadEnBase = cantidad / this.tasas[origen];
        return cantidadEnBase * this.tasas[destino];
    }

    formatearResultado(monto, moneda) {
        const simbolo = this.simbolos[moneda] || '';
        return `${simbolo}${monto.toFixed(2)} ${moneda}`;
    }
}

const conversor = new ConvertidorDivisas();
const btnConvertir = document.getElementById('btn-convertir');

btnConvertir.addEventListener('click', () => {
        const cantidad = parseFloat(document.getElementById('cantidad').value);
        const origen = document.getElementById('moneda-origen').value;
        const destino = document.getElementById('moneda-destino').value;
        const divResultado = document.getElementById('resultado-divisas');
        
        // Uso del método de la Clase
        const montoConvertido = conversor.convertir(cantidad, origen, destino);

        // Mostrar el resultado en el DOM
        divResultado.innerHTML = `
            ${conversor.formatearResultado(cantidad, origen)} equivale a:<br>
            ${conversor.formatearResultado(montoConvertido, destino)}
        `;

});