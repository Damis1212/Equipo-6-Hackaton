const productos = [
    {
        nombre: "Proyecto de Robots de Asistencia Médica",
        precio: null,
        imagen: "Proyecto1",
        descripcionLarga: "El proyecto de Robots de Asistencia Médica busca crear soluciones tecnológicas innovadoras que ayuden a optimizar la atención en entornos de salud. Nuestro objetivo es diseñar y desarrollar robots capaces de realizar tareas de apoyo a profesionales médicos, como transportar suministros, monitorear signos vitales de pacientes, entregar medicación y asistir en procedimientos básicos. Este proyecto está dirigido a mejorar la eficiencia de los hospitales y clínicas, reducir el riesgo de errores humanos y brindar una atención más rápida y segura a los pacientes. Somos recién egresados de carreras tecnológicas y estamos en busca de apoyo y donaciones para llevar esta idea a la realidad, transformando la forma en que se brinda la atención médica con tecnología de vanguardia.",
        descripcionCorta: "Nuestro proyecto consiste en desarrollar robots de asistencia médica diseñados para apoyar a profesionales de la salud en tareas rutinarias, mejorando la eficiencia en hospitales y clínicas, y ofreciendo atención más rápida y segura a los pacientes.",
        razonDonar:"Al donar a nuestro proyecto de Robots de Asistencia Médica, estarás apoyando la creación de tecnología que puede salvar vidas y mejorar la atención médica. Tu contribución nos permitirá desarrollar prototipos funcionales, adquirir materiales, implementar software avanzado y llevar nuestra idea del papel a la realidad. Como equipo de recién egresados, cada donación representa una oportunidad de demostrar que la innovación tecnológica puede tener un impacto directo en hospitales y pacientes, haciendo la atención médica más segura, rápida y eficiente. Además, al apoyarnos, te conviertes en parte de un proyecto que busca transformar el futuro de la salud mediante la tecnología.",
        categoria_id: 1,
        id: 1
    },
    {
        nombre: "Proyecto de Drones para Entregas Autónomas",
        precio: 49.9,
        imagen: "Proyecto2",
        descripcionLarga: "Nuestro proyecto busca desarrollar un sistema de drones autónomos capaces de realizar entregas de productos en zonas urbanas y rurales, reduciendo los tiempos de envío y los costos operativos. Utilizamos sensores avanzados, inteligencia artificial y algoritmos de navegación para garantizar entregas seguras y precisas. Este proyecto está diseñado por recién egresados apasionados por la tecnología y la innovación, con la visión de transformar la logística y contribuir a un futuro más sostenible y eficiente.",
        descripcionCorta: "Proyecto de drones autónomos para entregar productos de manera rápida, segura y eficiente, optimizando la logística urbana con tecnología de vanguardia.",
        razonDonar:"Apóyanos para que podamos llevar esta innovación a la realidad. Tu donación permitirá que jóvenes talentos tecnológicos desarrollen soluciones concretas que mejoren la logística, fomenten la innovación y generen un impacto positivo en la comunidad. Con tu ayuda, los drones no solo entregarán productos, sino también oportunidades.",
        categoria_id: 1,
        id: 2
    },
    {
        nombre: "Proyecto de Inteligencia Artificial para Diagnóstico Temprano",
        precio: 54.9,
        imagen: "Proyecto3",
        descripcionLarga: "Nuestro proyecto desarrolla un sistema basado en Inteligencia Artificial capaz de analizar datos médicos y patrones de salud para identificar enfermedades en etapas tempranas. Con algoritmos de aprendizaje automático y análisis predictivo, buscamos brindar diagnósticos más precisos y oportunos, facilitando la intervención temprana y mejorando la calidad de vida de los pacientes. Este proyecto es impulsado por recién egresados apasionados por la tecnología y la innovación, con el objetivo de transformar el cuidado de la salud mediante soluciones inteligentes y accesibles.",
        descripcionCorta: "Proyecto de Inteligencia Artificial que ayuda a detectar enfermedades de manera temprana, mejorando el diagnóstico y la atención médica con tecnología avanzada.",
        razonDonar:"Tu donación nos ayudará a convertir esta innovación en una herramienta real que pueda salvar vidas. Apoyando a jóvenes talentos tecnológicos, fomentas la investigación, la innovación y el desarrollo de soluciones que beneficien a toda la comunidad. Con tu ayuda, podemos hacer que la tecnología trabaje para la salud de todos.",
        categoria_id: 1,
        id: 3
    },
    {
        nombre: "Proyecto de Vehículos Autónomos para Transporte Urbano",
        precio: 54.9,
        imagen: "Proyecto4",
        descripcionLarga: "Nuestro proyecto desarrolla vehículos autónomos diseñados para mejorar el transporte urbano, reduciendo accidentes, optimizando rutas y disminuyendo la congestión vehicular. Utilizamos sensores inteligentes, algoritmos de navegación y sistemas de control automatizado para crear soluciones de movilidad seguras y eficientes. Este proyecto está impulsado por recién egresados apasionados por la tecnología y la innovación, con la meta de transformar la manera en que nos movemos en las ciudades y construir un futuro más sostenible.",
        descripcionCorta: "Proyecto de vehículos autónomos para transporte urbano, que busca ofrecer movilidad segura, eficiente y sostenible mediante tecnología avanzada",
        razonDonar:"Tu apoyo permitirá que jóvenes talentos tecnológicos conviertan este proyecto en una realidad tangible que mejore la movilidad urbana. Con tu donación, fomentas la innovación, la investigación y la creación de soluciones tecnológicas que beneficien a la sociedad y promuevan un transporte más seguro y eficiente.",
        categoria_id: 1,
        id: 4
    },
    {
        nombre: "Proyecto de Sensores IoT para Ciudades Inteligentes",
        precio: 54.9,
        imagen: "Proyecto5",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 1,
        id: 5
    },
    {
        nombre: "Proyecto de Realidad Aumentada para Educación Interactiva",
        precio: 39.9,
        imagen: "Proyecto6",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 1,
        id: 6
    },
    {
        nombre: "Proyecto de Blockchain para Trazabilidad de Alimentos",
        precio: 59.9,
        imagen: "Proyecto7",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 1,
        id: 7
    },
    {
        nombre: "Proyecto de Robots para Rescate en Desastres Naturales",
        precio: 39.9,
        imagen: "Proyecto22",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 4,
        id: 15
    },
    {
        nombre: "Proyecto de Impresión 3D de Viviendas Sustentables",
        precio: 39.9,
        imagen: "Proyecto23",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 4,
        id: 16
    },
    {
        nombre: "Proyecto de Sensores Inteligentes para Control Ambiental",
        precio: 19.9,
        imagen: "Proyecto24",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 4,
        id: 17
    },
    {
        nombre: "Proyecto de Plataforma de Comercio con Realidad Aumentada",
        precio: 19.9,
        imagen: "Proyecto25",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 4,
        id: 18
    },
    {
        nombre: "Proyecto de Red de Microdrones para Vigilancia Ambiental",
        precio: 19.9,
        imagen: "Proyecto26",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 4,
        id: 19
    },
    {
        nombre: "Proyecto de Software para Optimizar Consumo Energético",
        precio: 19.9,
        imagen: "Proyecto27",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 4,
        id: 20
    },
    {
        nombre: "Proyecto de Vehículos Submarinos Autónomos",
        precio: 19.9,
        imagen: "Proyecto28",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 4,
        id: 21
    },
    {
        nombre: "Proyecto de Sistemas Inteligentes de Gestión de Tráfico",
        precio: 29.9,
        imagen: "Proyecto29",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 6,
        id: 29
    },
    {
        nombre: "Proyecto de Robots Educativos para Niños",
        precio: 39.9,
        imagen: "Proyecto30",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 6,
        id: 30
    },
    {
        nombre: "Proyecto de Asistentes de Voz Multilingües",
        precio: 39.9,
        imagen: "Proyecto31",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 6,
        id: 31
    },
    {
        nombre: "Proyecto de Energía Eólica Urbana Inteligente",
        precio: 24.9,
        imagen: "Proyecto32",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 6,
        id: 32
    },
    {
        nombre: "Proyecto de Detección Temprana de Incendios Forestales",
        precio: 39.9,
        imagen: "Proyecto33",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 6,
        id: 33
    },
    {
        nombre: "Proyecto de Plataforma de Aprendizaje Automático en la Nube",
        precio: 39.9,
        imagen: "Proyecto34",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 6,
        id: 34
    },
    {
        nombre: "Proyecto de Energía Solar Inteligente para Hogares",
        precio: 59.9,
        imagen: "Proyecto8",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 2,
        id: 35
    },
    {
        nombre: "Proyecto de Exoesqueletos para Rehabilitación Física",
        precio: 59.9,
        imagen: "Proyecto9",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 2,
        id: 36
    },
    {
        nombre: "Proyecto de Asistentes Virtuales para Atención al Cliente",
        precio: 59.9,
        imagen: "Proyecto10",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 2,
        id: 37
    },
    {
        nombre: "Proyecto de Robots Limpia-Océanos",
        precio: 59.9,
        imagen: "Proyecto11",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 2,
        id: 38
    },
    {
       nombre: "Proyecto de Wearables para Monitoreo de Salud",
        precio: 59.9,
        imagen: "Proyecto12",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 2,
        id: 39
    },
    {
        nombre: "Proyecto de Red 5G para Áreas Rurales",
        precio: 69.9,
        imagen: "Proyecto13",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 2,
        id: 40
    },
    {
        nombre: "Proyecto de Algoritmos Predictivos para Agricultura",
        precio: 49.9,
        imagen: "Proyecto14",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 2,
        id: 41
    },
    {
        nombre: "Proyecto de Automatización del Reciclaje con Robots",
        precio: 69.9,
        imagen: "Proyecto35",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 5,
        id: 43
    },
    {
        nombre: "Proyecto de IA para Prevención de Fraudes Financieros",
        precio: 49.9,
        imagen: "Proyecto36",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 5,
        id: 44
    },
    {
        nombre: "Proyecto de Cultivos Hidropónicos Automatizados",
        precio: 39.9,
        imagen: "Proyecto37",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 5,
        id: 45
    },
    {
        nombre: "Proyecto de Análisis Predictivo para Desastres Naturales",
        precio: 19.9,
        imagen: "Proyecto38",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 5,
        id: 46
    },
    {
        nombre: "Proyecto de Logística Autónoma con Vehículos Eléctricos",
        precio: 29.9,
        imagen: "Proyecto39",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 5,
        id: 47
    },
    {
        nombre: "Proyecto de Robots Asistentes para Personas Mayores",
        precio: 29.9,
        imagen: "Proyecto40",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 5,
        id: 48
    },
    {
        nombre: "Proyecto de Automatización Industrial con IA",
        precio: 69.9,
        imagen: "Proyecto15",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 3,
        id: 49
    },
    {
        nombre: "Proyecto de Dispositivos Médicos Inteligentes",
        precio: 69.9,
        imagen: "Proyecto16",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 3,
        id: 50
    },
    {
        nombre: "Proyecto de Aulas Virtuales con Realidad Mixta",
        precio: 69.9,
        imagen: "Proyecto17",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 3,
        id: 51
    },
    {
        nombre: "Proyecto de Ciberseguridad Basada en IA",
        precio: 69.9,
        imagen: "Proyecto18",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 3,
        id: 52
    },
    {
        nombre: "Proyecto de Vehículos Eléctricos de Bajo Costo",
        precio: 69.9,
        imagen: "Proyecto19",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 3,
        id: 53
    },
    {
        nombre: "Proyecto de Plataforma de Telemedicina Global",
        precio: 69.9,
        imagen: "Proyecto20",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 3,
        id: 54
    },
    {
        nombre: "Proyecto de Robots para Rescate en Desastres Naturales",
        precio: 69.9,
        imagen: "Proyecto21",
        descripcionLarga: "",
        descripcionCorta: "",
        categoria_id: 3,
        id: 55
    }
]

export {
    productos 
}
