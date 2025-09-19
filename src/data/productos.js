const productos = [
    {
        nombre: "Proyecto de Robots de Asistencia Médica",
        precio: null,
        imagen: "Proyecto1",
        categoria_id: 1,
        id: 1
      },
      {
        nombre: "Café Frio con Chocolate Grande",
        precio: 49.9,
        imagen: "cafe_02",
        categoria_id: 1,
        id: 2
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_03",
        categoria_id: 1,
        id: 3
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_04",
        categoria_id: 1,
        id: 4
      },
      {
        nombre: "Malteada Fria con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_05",
        categoria_id: 1,
        id: 5
      },
      {
        nombre: "Café Mocha Caliente Chico",
        precio: 39.9,
        imagen: "cafe_06",
        categoria_id: 1,
        id: 6
      },
      {
        nombre: "Café Mocha Caliente Grande con Chocolate",
        precio: 59.9,
        imagen: "cafe_07",
        categoria_id: 1,
        id: 7
      },
      {
        nombre: "Proyecto de Robots para Rescate en Desastres Naturales",
        precio: 39.9,
        imagen: "donas_01",
        categoria_id: 4,
        id: 15
      },
      {
        nombre: "Proyecto de Impresión 3D de Viviendas Sustentables",
        precio: 39.9,
        imagen: "donas_02",
        categoria_id: 4,
        id: 16
      },
      {
        nombre: "Proyecto de Sensores Inteligentes para Control Ambiental",
        precio: 19.9,
        imagen: "donas_03",
        categoria_id: 4,
        id: 17
      },
      {
        nombre: "Proyecto de Plataforma de Comercio con Realidad Aumentada",
        precio: 19.9,
        imagen: "donas_04",
        categoria_id: 4,
        id: 18
      },
      {
        nombre: "Proyecto de Red de Microdrones para Vigilancia Ambiental",
        precio: 19.9,
        imagen: "donas_05",
        categoria_id: 4,
        id: 19
      },
      {
        nombre: "Proyecto de Software para Optimizar Consumo Energético",
        precio: 19.9,
        imagen: "donas_06",
        categoria_id: 4,
        id: 20
      },
      {
        nombre: "Proyecto de Vehículos Submarinos Autónomos",
        precio: 19.9,
        imagen: "donas_07",
        categoria_id: 4,
        id: 21
      },
      {
        nombre: "Proyecto de Sistemas Inteligentes de Gestión de Tráfico",
        precio: 29.9,
        imagen: "galletas_01",
        categoria_id: 6,
        id: 29
      },
      {
        nombre: "Proyecto de Robots Educativos para Niños",
        precio: 39.9,
        imagen: "galletas_02",
        categoria_id: 6,
        id: 30
      },
      {
        nombre: "Proyecto de Asistentes de Voz Multilingües",
        precio: 39.9,
        imagen: "galletas_03",
        categoria_id: 6,
        id: 31
      },
      {
        nombre: "Proyecto de Energía Eólica Urbana Inteligente",
        precio: 24.9,
        imagen: "galletas_04",
        categoria_id: 6,
        id: 32
      },
      {
        nombre: "Proyecto de Detección Temprana de Incendios Forestales",
        precio: 39.9,
        imagen: "galletas_05",
        categoria_id: 6,
        id: 33
      },
      {
        nombre: "Proyecto de Plataforma de Aprendizaje Automático en la Nube",
        precio: 39.9,
        imagen: "galletas_06",
        categoria_id: 6,
        id: 34
      },
      {
        nombre: "Hamburguesa Sencilla",
        precio: 59.9,
        imagen: "hamburguesas_01",
        categoria_id: 2,
        id: 35
      },
      {
        nombre: "Hamburguesa de Pollo",
        precio: 59.9,
        imagen: "hamburguesas_02",
        categoria_id: 2,
        id: 36
      },
      {
        nombre: "Hamburguesa de Pollo y Chili",
        precio: 59.9,
        imagen: "hamburguesas_03",
        categoria_id: 2,
        id: 37
      },
      {
        nombre: "Hamburguesa Queso y  Pepinos",
        precio: 59.9,
        imagen: "hamburguesas_04",
        categoria_id: 2,
        id: 38
      },
      {
        nombre: "Hamburguesa Cuarto de Libra",
        precio: 59.9,
        imagen: "hamburguesas_05",
        categoria_id: 2,
        id: 39
      },
      {
        nombre: "Hamburguesa Doble Queso",
        precio: 69.9,
        imagen: "hamburguesas_06",
        categoria_id: 2,
        id: 40
      },
      {
        nombre: "Hot Dog Especial",
        precio: 49.9,
        imagen: "hamburguesas_07",
        categoria_id: 2,
        id: 41
      },
      {
        nombre: "Proyecto de Automatización del Reciclaje con Robots",
        precio: 69.9,
        imagen: "pastel_01",
        categoria_id: 5,
        id: 43
      },
      {
        nombre: "Proyecto de IA para Prevención de Fraudes Financieros",
        precio: 49.9,
        imagen: "pastel_02",
        categoria_id: 5,
        id: 44
      },
      {
        nombre: "Proyecto de Cultivos Hidropónicos Automatizados",
        precio: 39.9,
        imagen: "pastel_03",
        categoria_id: 5,
        id: 45
      },
      {
        nombre: "Proyecto de Análisis Predictivo para Desastres Naturales",
        precio: 19.9,
        imagen: "pastel_04",
        categoria_id: 5,
        id: 46
      },
      {
        nombre: "Proyecto de Logística Autónoma con Vehículos Eléctricos",
        precio: 29.9,
        imagen: "pastel_05",
        categoria_id: 5,
        id: 47
      },
      {
        nombre: "Proyecto de Robots Asistentes para Personas Mayores",
        precio: 29.9,
        imagen: "pastel_06",
        categoria_id: 5,
        id: 48
      },
      {
        nombre: "Pizza Spicy con Doble Queso",
        precio: 69.9,
        imagen: "pizzas_01",
        categoria_id: 3,
        id: 49
      },
      {
        nombre: "Pizza Jamón y Queso",
        precio: 69.9,
        imagen: "pizzas_02",
        categoria_id: 3,
        id: 50
      },
      {
        nombre: "Pizza Doble Queso",
        precio: 69.9,
        imagen: "pizzas_03",
        categoria_id: 3,
        id: 51
      },
      {
        nombre: "Pizza Especial de la Casa",
        precio: 69.9,
        imagen: "pizzas_04",
        categoria_id: 3,
        id: 52
      },
      {
        nombre: "Pizza Chorizo",
        precio: 69.9,
        imagen: "pizzas_05",
        categoria_id: 3,
        id: 53
      },
      {
        nombre: "Pizza Hawaiana",
        precio: 69.9,
        imagen: "pizzas_06",
        categoria_id: 3,
        id: 54
      },
      {
        nombre: "Pizza Tocino",
        precio: 69.9,
        imagen: "pizzas_07",
        categoria_id: 3,
        id: 55
      }
]

export {
    productos 
}