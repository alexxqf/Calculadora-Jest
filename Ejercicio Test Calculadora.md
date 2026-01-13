# Guía de Tests - Calculadora con Jest

## 📚 Introducción

Esta guía contiene todos los casos de prueba que debes implementar para la calculadora. Cada test está descrito con su objetivo y lo que debe verificar.

---

## 🧪 Estructura de Tests

### 1. Función `inicio` - Conversión de argumentos

Objetivo: Verificar que la función convierte correctamente los strings a números.

#### Tests a implementar:

1. **"convierte strings a números enteros correctamente"**
   - Entrada: `'5'`, `'10'`
   - Debe retornar: `{ num1: 5, num2: 10 }`

2. **"convierte strings a números decimales correctamente"**
   - Entrada: `'5.5'`, `'10.2'`
   - Debe retornar: `{ num1: 5.5, num2: 10.2 }`

3. **"maneja números negativos"**
   - Entrada: `'-5'`, `'-10'`
   - Debe retornar: `{ num1: -5, num2: -10 }`

4. **"retorna NaN para valores no numéricos"**
   - Entrada: `'abc'`, `'10'`
   - Debe retornar: `num1` como NaN y `num2` como 10

5. **"retorna NaN para strings vacíos"**
   - Entrada: `''`, `''`
   - Ambos valores deben ser NaN
{}
---

### 2. Operación: Suma

Objetivo: Verificar que la suma funciona correctamente en todos los escenarios.

#### Tests a implementar:

1. **"suma dos números positivos"**
   - `suma(5, 3)` debe retornar `8`

2. **"suma dos números negativos"**
   - `suma(-5, -3)` debe retornar `-8`

3. **"suma un número positivo y uno negativo"**
   - `suma(10, -3)` debe retornar `7`

4. **"suma con cero"**
   - `suma(5, 0)` debe retornar `5`
   - `suma(0, 5)` debe retornar `5`

5. **"suma números decimales"**
   - `suma(5.5, 3.2)` debe retornar aproximadamente `8.7`

6. **"suma números muy grandes"**
   - `suma(1000000, 2000000)` debe retornar `3000000`

---

### 3. Operación: Resta

Objetivo: Verificar que la resta funciona correctamente en todos los escenarios.

#### Tests a implementar:

1. **"resta dos números positivos"**
   - `resta(10, 3)` debe retornar `7`

2. **"resta con resultado negativo"**
   - `resta(3, 10)` debe retornar `-7`

3. **"resta números negativos"**
   - `resta(-5, -3)` debe retornar `-2`

4. **"resta con cero"**
   - `resta(5, 0)` debe retornar `5`
   - `resta(0, 5)` debe retornar `-5`

5. **"resta números decimales"**
   - `resta(10.5, 3.2)` debe retornar aproximadamente `7.3`

6. **"resta de un número consigo mismo"**
   - `resta(5, 5)` debe retornar `0`

---

### 4. Operación: Multiplicación

Objetivo: Verificar que la multiplicación funciona correctamente en todos los escenarios.

#### Tests a implementar:

1. **"multiplica dos números positivos"**
   - `multiplicar(5, 3)` debe retornar `15`

2. **"multiplica dos números negativos"**
   - `multiplicar(-5, -3)` debe retornar `15`

3. **"multiplica un número positivo y uno negativo"**
   - `multiplicar(5, -3)` debe retornar `-15`

4. **"multiplica por cero"**
   - `multiplicar(5, 0)` debe retornar `0`
   - `multiplicar(0, 5)` debe retornar `0`

5. **"multiplica por uno (elemento neutro)"**
   - `multiplicar(5, 1)` debe retornar `5`
   - `multiplicar(1, 5)` debe retornar `5`

6. **"multiplica números decimales"**
   - `multiplicar(2.5, 4)` debe retornar `10`

7. **"multiplica números decimales con resultado decimal"**
   - `multiplicar(2.5, 3.2)` debe retornar aproximadamente `8.0`

---

### 5. Operación: División

Objetivo: Verificar que la división funciona correctamente, incluyendo el manejo de errores.

#### Tests a implementar:

1. **"divide dos números enteros"**
   - `dividir(10, 2)` debe retornar `5`

2. **"divide con resultado decimal"**
   - `dividir(10, 3)` debe retornar aproximadamente `3.333`

3. **"divide números negativos"**
   - `dividir(-10, 2)` debe retornar `-5`
   - `dividir(10, -2)` debe retornar `-5`
   - `dividir(-10, -2)` debe retornar `5`

4. **"divide por uno"**
   - `dividir(5, 1)` debe retornar `5`

5. **"divide cero entre un número"**
   - `dividir(0, 5)` debe retornar `0`

6. **"divide números decimales"**
   - `dividir(7.5, 2.5)` debe retornar `3`

7. **"lanza error al dividir por cero"**
   - `dividir(10, 0)` debe lanzar un error con el mensaje `'División por cero no permitida'`

8. **"lanza error al dividir por cero negativo"**
   - `dividir(10, -0)` debe lanzar un error con el mensaje `'División por cero no permitida'`

---

### 6. Función `calcular` - Integración completa

Objetivo: Verificar que la función principal integra correctamente todas las operaciones y maneja errores.

#### 6.1. Operaciones válidas

1. **"calcula suma correctamente"**
   - `calcular('5', '+', '3')` debe retornar `8`

2. **"calcula resta correctamente"**
   - `calcular('10', '-', '3')` debe retornar `7`

3. **"calcula multiplicación con símbolo *"**
   - `calcular('5', '*', '3')` debe retornar `15`

4. **"calcula multiplicación con letra x minúscula"**
   - `calcular('5', 'x', '3')` debe retornar `15`

5. **"calcula multiplicación con letra X mayúscula"**
   - `calcular('5', 'X', '3')` debe retornar `15`

6. **"calcula división correctamente"**
   - `calcular('10', '/', '2')` debe retornar `5`

7. **"maneja números decimales en strings"**
   - `calcular('5.5', '+', '2.3')` debe retornar aproximadamente `7.8`

8. **"maneja números negativos en strings"**
   - `calcular('-5', '+', '3')` debe retornar `-2`

#### 6.2. Manejo de errores

1. **"lanza error con operación inválida"**
   - `calcular('5', '%', '3')` debe lanzar error `'Operación no válida'`

2. **"lanza error con operador desconocido"**
   - `calcular('5', '&', '3')` debe lanzar error `'Operación no válida'`

3. **"lanza error cuando el primer argumento no es numérico"**
   - `calcular('abc', '+', '3')` debe lanzar error `'Ambos argumentos deben ser números válidos'`

4. **"lanza error cuando el segundo argumento no es numérico"**
   - `calcular('5', '+', 'xyz')` debe lanzar error `'Ambos argumentos deben ser números válidos'`

5. **"lanza error cuando ambos argumentos no son numéricos"**
   - `calcular('abc', '+', 'xyz')` debe lanzar error `'Ambos argumentos deben ser números válidos'`

6. **"lanza error al dividir por cero"**
   - `calcular('10', '/', '0')` debe lanzar error `'División por cero no permitida'`

7. **"lanza error con strings vacíos"**
   - `calcular('', '+', '')` debe lanzar error `'Ambos argumentos deben ser números válidos'`

#### 6.3. Casos especiales

1. **"maneja operaciones con cero"**
   - `calcular('0', '+', '5')` debe retornar `5`
   - `calcular('5', '*', '0')` debe retornar `0`
   - `calcular('0', '-', '5')` debe retornar `-5`

2. **"maneja números muy grandes"**
   - `calcular('1000000', '+', '2000000')` debe retornar `3000000`

3. **"maneja números muy pequeños (decimales)"**
   - `calcular('0.1', '+', '0.2')` debe retornar aproximadamente `0.3`

---

## 💡 Consejos para escribir los tests

### Estructura básica de un test:
```javascript
test('descripción del test', () => {
    // Arrange: preparar datos
    // Act: ejecutar la función
    // Assert: verificar el resultado
    expect(resultado).toBe(valorEsperado);
});
```

### Matchers útiles de Jest:
- `toBe(valor)` - Para comparación exacta
- `toEqual(objeto)` - Para comparar objetos
- `toBeCloseTo(numero, decimales)` - Para números decimales
- `toBeNaN()` - Para verificar NaN
- `toThrow(mensaje)` - Para verificar que se lanza un error

### Ejemplo de test con error:
```javascript
test('lanza error al dividir por cero', () => {
    expect(() => dividir(10, 0)).toThrow('División por cero no permitida');
});
```

---

## 🎯 Ejercicio

1. Copia la estructura del archivo de tests
2. Implementa cada test siguiendo las descripciones de esta guía
3. Ejecuta `npm test` para verificar que todos los tests pasen
4. Intenta alcanzar el 100% de cobertura de código

¡Buena suerte! 🚀