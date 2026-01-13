const {
    inicio,
    suma,
    resta,
    multiplicar,
    dividir,
    calcular,
    main,
} = require("./calculadora");

// Es como un H1 de HTML
describe("Primeros pasos con Jest", () => {

    test("Suma un número positivo y uno negativo", () => {
        // Test de la suma de 10 + (-3)
        expect(suma(10, -3)).toBe(7);
    });

    test("Restamos un número positivo con uno negativo y el resultado da un número negativo", () => {
        // Test de la resta de 
        expect(resta(10, -3)).toBe(13);
    });

});

// Ejercicio de test de Fernando

//Función inicio

describe("Uso de la función inicio", () => {

    test("Convierte Strings a números enteros correctamente", () => {

        expect(inicio("5", "10")).toEqual({num1: 5, num2: 10});
    });

    test("Convierte Strings a números decimales correctamente", () => {

        expect(inicio("5.5", "10.2")).toEqual({num1: 5.5, num2: 10.2});
    });
    
    test("Maneja números negativos", () => {

        expect(inicio("-5", "-10")).toEqual({num1: -5, num2: -10});
    });

    test("Retorna NaN para los valores no numéricos", () => {

        const resultado = inicio("abc", "-10");

        expect(resultado.num1).toBeNaN();
        expect(resultado.num2).toBe(-10);
    });
});

// Función suma

describe("Uso de la función suma", () => {

    test("Suma dos números positivos", () => {

        expect(suma(5, 3)).toBe(8);
    });

    test("Suma dos números negativos", () => {

        expect(suma(-5, -3)).toBe(-8);
    });

    test("Suma un número positivo y uno negativo", () => {

        expect(suma(10, -3)).toBe(7);
    });

    test("Suma con 0", () => {

        expect(suma(5, 0)).toBe(5);
        expect(suma(0, 5)).toBe(5);
    });

    test("Suma de números decimales", () => {

        expect(suma(5.5, 3.2)).toBeCloseTo(8.7);
    });
});

//Función resta

describe("Uso de la dunción resta", () => {

    test("Resta dos números positivos", () => {

        expect(resta(10, 3)).toBe(7);
    });

    test("Resta con resultado negativo", () => {

        expect(resta(3, 10)).toBe(-7);
    });

    test("Resta con números negativos", () => {

        expect(resta(-5, -3)).toBe(-2);
    });
});
