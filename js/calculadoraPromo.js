// Lógica para calcular promociones

// Precios de los productos
const precios = {
    'ramen': 12,
    'mochi': 6,
    'bao': 8,
    'bubble-tea': 7,
    'gyozas': 10,
    'bolas-sesamo': 6,
    'brochetas': 10,
    'arroz-pato': 18,
    'sushi': 15,
    'dorayaki': 5,
    'arroz-salmon': 17,
    'takoyaki': 11,
    'udon': 13,
    'maotai': 18,
    'tarta-queso': 8,
    'laksa': 14
};

// Función para cambiar la cantidad de productos
function cambiarCantidad(producto, cambio) {
    const input = document.getElementById(`cantidad-${producto}`);
    if (!input) return;
    
    let cantidad = parseInt(input.value) || 0;
    cantidad += cambio;
    
    if (cantidad < 0) cantidad = 0;
    
    input.value = cantidad;
}

// Función para calcular la promoción 1 (50% en el segundo producto)
function calcularPromo1() {
    let totalSinDescuento = 0;
    let totalConDescuento = 0;
    
    // Productos de la promoción 1
    const productosPromo1 = [
        { id: 'cantidad-ramen', precio: precios.ramen },
        { id: 'cantidad-mochi', precio: precios.mochi }, // Mochi Helado
        { id: 'cantidad-bao', precio: precios.bao },
        { id: 'cantidad-bubble-tea', precio: precios["bubble-tea"] }
    ];
    
    productosPromo1.forEach(producto => {
        const cantidad = parseInt(document.getElementById(producto.id)?.value) || 0;
        totalSinDescuento += cantidad * producto.precio;
        totalConDescuento += calcularPromo1Producto(cantidad, producto.precio);
    });
    
    const descuento = totalSinDescuento - totalConDescuento;
    
    // Mostrar resultados
    mostrarResultadosPromo1(totalSinDescuento, descuento, totalConDescuento);
}

// Función auxiliar para calcular promoción 1 por producto
function calcularPromo1Producto(cantidad, precio) {
    if (cantidad < 2) return cantidad * precio;
    
    const pares = Math.floor(cantidad / 2);
    const individuales = cantidad % 2;
    
    return (pares * (precio + precio * 0.5)) + (individuales * precio);
}

function mostrarResultadosPromo1(totalSin, descuento, totalCon) {
    document.getElementById('total-sin-descuento-promo1').textContent = `$${totalSin}`;
    document.getElementById('descuento-aplicado-promo1').textContent = `$${descuento}`;
    document.getElementById('total-con-descuento-promo1').textContent = `$${totalCon}`;
    document.getElementById('resultado-promo1').style.display = 'block';
}

// Función para calcular la promoción 2 (3x2)
function calcularPromo2() {
    let totalSinDescuento = 0;
    let totalConDescuento = 0;
    
    // Productos de la promoción 2
    const productosPromo2 = [
        { id: 'cantidad-gyozas', precio: precios.gyozas },
        { id: 'cantidad-bolas-sesamo', precio: precios['bolas-sesamo'] }, // Bolas de Sesamo
        { id: 'cantidad-brochetas', precio: precios.brochetas },
        { id: 'cantidad-arroz-pato', precio: precios['arroz-pato'] }
    ];
    
    productosPromo2.forEach(producto => {
        const cantidad = parseInt(document.getElementById(producto.id)?.value) || 0;
        totalSinDescuento += cantidad * producto.precio;
        totalConDescuento += calcularPromo2Producto(cantidad, producto.precio);
    });
    
    const descuento = totalSinDescuento - totalConDescuento;
    
    // Mostrar resultados
    mostrarResultadosPromo2(totalSinDescuento, descuento, totalConDescuento);
}

// Función auxiliar para calcular promoción 2 por producto
function calcularPromo2Producto(cantidad, precio) {
    if (cantidad < 3) return cantidad * precio;
    
    const grupos = Math.floor(cantidad / 3);
    const resto = cantidad % 3;
    
    return (grupos * 2 * precio) + (resto * precio);
}

function mostrarResultadosPromo2(totalSin, descuento, totalCon) {
    document.getElementById('total-sin-descuento-promo2').textContent = `$${totalSin}`;
    document.getElementById('descuento-aplicado-promo2').textContent = `$${descuento}`;
    document.getElementById('total-con-descuento-promo2').textContent = `$${totalCon}`;
    document.getElementById('resultado-promo2').style.display = 'block';
}

// Función para calcular la promoción 3 (10% por compras superiores a $300)
function calcularPromo3() {
    let totalSinDescuento = 0;
    
    // Productos de la promoción 3
    const productosPromo3 = [
        { id: 'cantidad-sushi', precio: precios.sushi },
        { id: 'cantidad-dorayaki', precio: precios.dorayaki },
        { id: 'cantidad-arroz-salmon', precio: precios['arroz-salmon'] },
        { id: 'cantidad-takoyaki', precio: precios.takoyaki },
        { id: 'cantidad-udon', precio: precios.udon },
        { id: 'cantidad-maotai', precio: precios.maotai },
        { id: 'cantidad-tarta-queso', precio: precios['tarta-queso'] },
        { id: 'cantidad-laksa', precio: precios.laksa }
    ];
    
    productosPromo3.forEach(producto => {
        const cantidad = parseInt(document.getElementById(producto.id)?.value) || 0;
        totalSinDescuento += cantidad * producto.precio;
    });
    
    let totalConDescuento = totalSinDescuento;
    let descuento = 0;
    
    // Aplicar descuento del 10% si el total es mayor a $300
    if (totalSinDescuento > 300) {
        descuento = totalSinDescuento * 0.1;
        totalConDescuento = totalSinDescuento - descuento;
    }
    
    // Mostrar resultados
    mostrarResultadosPromo3(totalSinDescuento, descuento, totalConDescuento);
}

function mostrarResultadosPromo3(totalSin, descuento, totalCon) {
    document.getElementById('total-sin-descuento-promo3').textContent = `$${totalSin.toFixed(2)}`;
    document.getElementById('descuento-aplicado-promo3').textContent = `$${descuento.toFixed(2)}`;
    document.getElementById('total-con-descuento-promo3').textContent = `$${totalCon.toFixed(2)}`;
    document.getElementById('resultado-promo3').style.display = 'block';
}

// Función para calcular el Combo Familiar
function calcularComboFamiliar() {
    const precioIndividual = 55; // 10 + 24 + 11 + 10 (2 bebidas)
    const descuento = precioIndividual * 0.25;
    const precioFinal = precioIndividual - descuento;
    
    // Mostrar resultados
    document.getElementById('precio-individual-combo').textContent = `$${precioIndividual}`;
    document.getElementById('descuento-combo').textContent = `$${descuento.toFixed(2)}`;
    document.getElementById('precio-final-combo').textContent = `$${precioFinal.toFixed(2)}`;
    document.getElementById('resultado-combo-familiar').style.display = 'block';
}

// Función para agregar el combo al carrito
function agregarComboAlCarrito() {
    // Aquí iría la lógica para agregar todos los productos del combo al carrito
    const comboItems = [
        { nombre: 'Gyozas (4 unidades)', precio: 10, cantidad: 1 },
        { nombre: 'Ramen', precio: 12, cantidad: 2 },
        { nombre: 'Arroz Kung Pao', precio: 11, cantidad: 1 },
        { nombre: 'Bebida', precio: 5, cantidad: 2 }
    ];
    
    // Simulación de agregar al carrito
    alert('¡Combo Familiar agregado al carrito! \n\nIncluye:\n- 4 Gyozas\n- 2 Ramen\n- 1 Arroz Kung Pao\n- 2 Bebidas\n\nTotal: $41.25 (25% de descuento aplicado)');
    
    // En una implementación real, aquí agregarías los items al carrito
    console.log('Combo agregado:', comboItems);
}

