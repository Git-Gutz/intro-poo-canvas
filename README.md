# 🎨 Canvas 2D Pro - Objetos 2D mediante OOP

Un proyecto interactivo que demuestra la aplicación de la **Programación Orientada a Objetos (OOP)** para el renderizado de gráficos 2D utilizando la API de HTML5 Canvas. Este laboratorio es fundamental para entender la lógica detrás de la creación de interfaces dinámicas y motores gráficos.



## 🚀 Descripción del Proyecto

La aplicación web presenta una interfaz moderna y responsiva donde se explican tres conceptos clave de la manipulación del DOM y el renderizado en Canvas, evolucionando desde la instanciación básica hasta la generación procedural de múltiples entidades.

### ✨ Características Principales

1. **Objeto 2D (Instancia Única):** Renderizado de un círculo estático instanciando la clase base `Circle` con propiedades predefinidas de posición, radio, colores (borde y fondo) y texto.
2. **Objeto con Random (Generación Dinámica):** Cálculo algorítmico para generar un objeto con radio y posición aleatoria (`Math.random()`). Incluye lógica de contención espacial para asegurar que la geometría de la figura no sobrepase los límites del lienzo.
3. **Múltiples Objetos (Arrays e Iteración):** Generación procedural de una colección de objetos almacenados en un arreglo (`arrayCircle`). Implementa colores vibrantes dinámicos usando el modelo de color **HSL** y bucles de renderizado.

## 🛠️ Tecnologías y Herramientas

* **Frontend:** HTML5, CSS3 (Variables Customizadas, transiciones fluidas).
* **Framework:** Bootstrap 5 (Sistema Grid para responsividad).
* **Lógica Core:** Vanilla JavaScript (ES6+).
* **Renderizado:** HTML5 `<canvas>` API (`CanvasRenderingContext2D`).

## 📂 Estructura del Código Core

El corazón del renderizado se basa en la clase `Circle`, la cual encapsula el estado y comportamiento de cada partícula u objeto en la pantalla:

```javascript
class Circle {
  constructor(x, y, radius, color, text, backcolor, textColor) { ... }
  draw(context) { ... } // Método de renderizado usando arc() y fill()
}