const productos = [
    {
        nombre: "Proyecto de Robots de Asistencia Médica",
        descripcionCorta:"Prueba descripcion",
        descripcionLarga:"Prueba Descripcion Larga",
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
        descripcionLarga: "Nuestro proyecto desarrolla una red de sensores IoT capaces de monitorear diferentes aspectos de la ciudad, como tráfico, calidad del aire, consumo energético y seguridad. Los datos recopilados permiten optimizar recursos, tomar decisiones informadas y ofrecer soluciones más eficientes para la vida urbana. Este proyecto es impulsado por recién egresados apasionados por la tecnología y la innovación, con el objetivo de transformar las ciudades en espacios más inteligentes, seguros y sostenibles mediante soluciones tecnológicas avanzadas.",
        descripcionCorta: "Proyecto de sensores IoT para ciudades inteligentes, que busca recopilar y analizar datos urbanos para mejorar la eficiencia, seguridad y sostenibilidad.",
        razonDonar:"Apóyanos para que jóvenes talentos tecnológicos puedan llevar este proyecto a la realidad. Tu donación permitirá mejorar la infraestructura urbana mediante tecnología innovadora, promoviendo ciudades más seguras, eficientes y sostenibles, y fomentando el desarrollo de soluciones que beneficien a toda la comunidad.",
        categoria_id: 1,
        id: 5
    },
    {
    nombre: "Proyecto de Realidad Aumentada para Educación Interactiva",
    precio: 39.9,
    imagen: "Proyecto6",
    descripcionCorta: "Aprendizaje inmersivo con realidad aumentada.",
    descripcionLarga: "Plataforma educativa innovadora que integra realidad aumentada para transformar el proceso de enseñanza-aprendizaje. Permite a estudiantes y docentes interactuar con modelos 3D y entornos virtuales, facilitando la comprensión de conceptos complejos en áreas como ciencia, historia, matemáticas y arte. Esta tecnología promueve un aprendizaje más participativo, visual e intuitivo, mejorando la retención del conocimiento y el interés de los estudiantes. Además, puede adaptarse a diferentes niveles educativos y contextos, ofreciendo recursos dinámicos y accesibles que enriquecen la educación tradicional.",
    razonDonar: "Al donar a este proyecto, contribuyes a democratizar el acceso a experiencias educativas avanzadas y a reducir la brecha tecnológica en instituciones con recursos limitados. Estás apoyando la creación de herramientas innovadoras que fomentan la curiosidad, el pensamiento crítico y el aprendizaje profundo en los estudiantes. También ayudas a que más escuelas y comunidades puedan implementar métodos educativos interactivos que preparen mejor a los jóvenes para los desafíos del futuro.",
    categoria_id: 1,
    id: 6
    },

    {
    nombre: "Proyecto de Blockchain para Trazabilidad de Alimentos",
    precio: 59.9,
    imagen: "Proyecto7",
    descripcionCorta: "Seguimiento seguro de alimentos con blockchain.",
    descripcionLarga: "Este innovador sistema utiliza tecnología blockchain para registrar de manera inmutable cada etapa de la cadena de suministro de alimentos, desde la producción, transporte, almacenamiento hasta la venta final al consumidor. Cada transacción y movimiento es verificado y asegurado, garantizando total transparencia, seguridad, autenticidad y trazabilidad en tiempo real. Con ello, se reduce el riesgo de fraudes, contaminación o adulteración de productos, ofreciendo confianza total a productores, distribuidores y consumidores.",
    razonDonar: "Al apoyar este proyecto, contribuyes a fortalecer la seguridad alimentaria a nivel global, disminuyendo fraudes y desperdicios, y fomentando un consumo más consciente y seguro. Tu donación ayuda a implementar tecnología de vanguardia que protege la salud de millones de personas y promueve la transparencia en la industria alimentaria.",
    categoria_id: 1,
    id: 7
  },
  {
    nombre: "Proyecto de Robots para Rescate en Desastres Naturales",
    precio: 39.9,
    imagen: "Proyecto22",
    descripcionCorta: "Robots autónomos para rescate en emergencias.",
    descripcionLarga: "Este proyecto desarrolla robots altamente avanzados capaces de operar de manera autónoma en zonas afectadas por desastres naturales como terremotos, inundaciones o incendios. Equipados con sensores de última generación y sistemas de navegación inteligente, los robots pueden localizar víctimas, mapear áreas peligrosas, transportar suministros esenciales y colaborar con equipos humanos de rescate, aumentando la eficiencia y seguridad durante las operaciones de emergencia.",
    razonDonar: "Donar a este proyecto significa contribuir directamente a salvar vidas humanas y a mejorar la respuesta ante desastres naturales. Tu apoyo permite acelerar el desarrollo y despliegue de tecnologías robóticas que pueden llegar a lugares inaccesibles, reducir riesgos para los rescatistas y brindar asistencia inmediata a las personas más vulnerables en situaciones críticas.",
    categoria_id: 4,
    id: 15
  },
  {
    nombre: "Proyecto de Impresión 3D de Viviendas Sustentables",
    precio: 39.9,
    imagen: "Proyecto23",
    descripcionCorta: "Construcción de casas ecológicas con impresión 3D.",
    descripcionLarga: "Este proyecto utiliza tecnología de impresión 3D para construir viviendas sostenibles, económicas y de rápida implementación. Empleando materiales reciclados y técnicas de bajo impacto ambiental, se busca crear hogares duraderos que reduzcan la huella ecológica. Cada vivienda está diseñada para ser energéticamente eficiente, adaptada a diferentes climas y accesible para comunidades con recursos limitados, contribuyendo a un desarrollo urbano sostenible y responsable.",
    razonDonar: "Tu donación apoya la creación de soluciones habitacionales innovadoras y ecológicas que mejoran la calidad de vida de comunidades enteras. Al financiar este proyecto, fomentas la construcción sostenible, la inclusión social y la protección del medio ambiente, ayudando a construir un futuro más justo y verde.",
    categoria_id: 4,
    id: 16
  },
  {
    nombre: "Proyecto de Sensores Inteligentes para Control Ambiental",
    precio: 19.9,
    imagen: "Proyecto24",
    descripcionCorta: "Monitoreo ambiental con sensores inteligentes.",
    descripcionLarga: "Este proyecto implementa una red de sensores inteligentes conectados a la nube para monitorear parámetros críticos del medio ambiente como calidad del aire, agua, temperatura y niveles de contaminación en tiempo real. Los datos obtenidos permiten tomar decisiones informadas para la gestión ambiental, la prevención de riesgos y la protección de ecosistemas. Además, los sensores pueden integrarse en ciudades inteligentes para promover un desarrollo urbano sostenible y consciente.",
    razonDonar: "Con tu apoyo, este proyecto ayuda a proteger el planeta mediante la tecnología, proporcionando información precisa y en tiempo real que permite acciones inmediatas para mejorar la salud ambiental. Donar significa fomentar un futuro más limpio, seguro y sostenible para las generaciones presentes y futuras, promoviendo la responsabilidad ecológica mediante innovación tecnológica.",
    categoria_id: 4,
    id: 17
    },
   {
    nombre: "Proyecto de Plataforma de Comercio con Realidad Aumentada",
    precio: 19.9,
    imagen: "Proyecto25",
    descripcionCorta: "E-commerce con productos en realidad aumentada.",
    descripcionLarga: "Plataforma de comercio electrónico que integra realidad aumentada para que los usuarios puedan visualizar productos en 3D dentro de su propio entorno antes de comprarlos. Esto permite tomar decisiones de compra más informadas, mejora la experiencia del usuario y reduce devoluciones. La tecnología también abre oportunidades para negocios innovadores y experiencias de venta inmersivas.",
    razonDonar: "Apoyar este proyecto fomenta la adopción de nuevas tecnologías en el comercio electrónico, mejora la experiencia de compra de los usuarios y ayuda a pequeñas y medianas empresas a destacarse mediante soluciones digitales avanzadas.",
    categoria_id: 4,
    id: 18
 },
 {
    nombre: "Proyecto de Red de Microdrones para Vigilancia Ambiental",
    precio: 19.9,
    imagen: "Proyecto26",
    descripcionCorta: "Microdrones para monitoreo ecológico.",
    descripcionLarga: "Desarrollo de una red de microdrones capaces de monitorear ecosistemas en tiempo real, detectando deforestación, contaminación, cambios en biodiversidad y riesgos ambientales. Los drones recopilan datos precisos y actualizados que permiten a científicos y autoridades tomar decisiones informadas y acciones preventivas, ayudando a conservar hábitats vulnerables y especies en peligro.",
    razonDonar: "Con tu apoyo, este proyecto impulsa la protección ambiental mediante tecnología avanzada, fortaleciendo la conservación de la naturaleza y permitiendo una gestión sostenible de los recursos naturales.",
    categoria_id: 4,
    id: 19
 },
 {
    nombre: "Proyecto de Software para Optimizar Consumo Energético",
    precio: 19.9,
    imagen: "Proyecto27",
    descripcionCorta: "Software para reducir consumo energético.",
    descripcionLarga: "Aplicación que analiza patrones de consumo energético en hogares y empresas, identificando oportunidades para optimizar el uso de electricidad, agua y gas. Ofrece recomendaciones personalizadas para reducir costos y emisiones de carbono, fomentando hábitos sostenibles y un mayor control sobre el consumo energético diario.",
    razonDonar: "Apoyar este proyecto promueve un uso eficiente de la energía, contribuye a la reducción de emisiones contaminantes y ayuda a crear un futuro más sostenible y responsable con el medio ambiente.",
    categoria_id: 4,
    id: 20
},
{
    nombre: "Proyecto de Vehículos Submarinos Autónomos",
    precio: 19.9,
    imagen: "Proyecto28",
    descripcionCorta: "Exploración submarina con vehículos autónomos.",
    descripcionLarga: "Desarrollo de vehículos submarinos autónomos capaces de explorar océanos y ecosistemas marinos profundos, recopilar datos científicos y monitorear la salud de los arrecifes, especies y corrientes oceánicas. Equipados con sensores avanzados y cámaras de alta resolución, estos vehículos permiten estudios más seguros, precisos y continuos en ambientes difíciles de acceder por humanos.",
    razonDonar: "Apoyar este proyecto impulsa la investigación científica marina y la conservación de ecosistemas submarinos, permitiendo tomar decisiones informadas sobre la protección del océano y la biodiversidad.",
    categoria_id: 4,
    id: 21
},
{
    nombre: "Proyecto de Sistemas Inteligentes de Gestión de Tráfico",
    precio: 29.9,
    imagen: "Proyecto29",
    descripcionCorta: "Optimización de tráfico urbano con IA.",
    descripcionLarga: "Sistema inteligente de gestión de tráfico que utiliza algoritmos de inteligencia artificial para controlar semáforos, monitorear flujos vehiculares y optimizar rutas en tiempo real. Permite reducir congestión, mejorar la movilidad urbana y disminuir los tiempos de traslado, generando ciudades más eficientes y sostenibles.",
    razonDonar: "Donar a este proyecto contribuye a mejorar la calidad de vida en las ciudades, disminuyendo el estrés, las emisiones contaminantes y fomentando el desarrollo de transporte inteligente mediante tecnología avanzada.",
    categoria_id: 6,
    id: 29
},
{
    nombre: "Proyecto de Robots Educativos para Niños",
    precio: 39.9,
    imagen: "Proyecto30",
    descripcionCorta: "Robots que enseñan a los niños jugando.",
    descripcionLarga: "Desarrollo de robots interactivos diseñados para el aprendizaje infantil, combinando juegos, actividades prácticas y contenidos educativos STEM. Los robots fomentan habilidades de lógica, creatividad y resolución de problemas, haciendo que el aprendizaje sea divertido y efectivo desde temprana edad.",
    razonDonar: "Apoyar este proyecto promueve la educación de calidad y el interés por la ciencia y la tecnología en niños, ayudando a formar nuevas generaciones con habilidades esenciales para el futuro.",
    categoria_id: 6,
    id: 30
},
{
    nombre: "Proyecto de Asistentes de Voz Multilingües",
    precio: 39.9,
    imagen: "Proyecto31",
    descripcionCorta: "Asistentes de voz que hablan varios idiomas.",
    descripcionLarga: "Plataforma de asistentes de voz que puede interactuar en múltiples idiomas, proporcionando soporte a usuarios de distintas regiones y mejorando la accesibilidad tecnológica. Integran inteligencia artificial para comprender contextos, aprender de interacciones previas y ofrecer respuestas precisas y personalizadas.",
    razonDonar: "Con tu apoyo, este proyecto facilita la comunicación global, ayuda a personas con barreras lingüísticas y potencia la inclusión digital mediante tecnología avanzada de reconocimiento de voz.",
    categoria_id: 6,
    id: 31
},
{
    nombre: "Proyecto de Energía Eólica Urbana Inteligente",
    precio: 24.9,
    imagen: "Proyecto32",
    descripcionCorta: "Turbinas urbanas para energía eólica eficiente.",
    descripcionLarga: "Instalación de microturbinas eólicas en entornos urbanos para generar energía limpia y optimizar el consumo eléctrico en edificios y hogares. Los sistemas integran sensores inteligentes que ajustan automáticamente la producción de energía según la demanda y las condiciones climáticas, aumentando eficiencia y sostenibilidad.",
    razonDonar: "Apoyar este proyecto impulsa el uso de energías renovables en ciudades, contribuye a la reducción de emisiones y promueve un desarrollo urbano más verde y responsable.",
    categoria_id: 6,
    id: 32
},
{
    nombre: "Proyecto de Detección Temprana de Incendios Forestales",
    precio: 39.9,
    imagen: "Proyecto33",
    descripcionCorta: "Sistema de alerta para incendios forestales.",
    descripcionLarga: "Sistema integral que combina sensores ambientales, cámaras y algoritmos predictivos para detectar incendios forestales en sus primeras etapas. La plataforma alerta rápidamente a las autoridades y a las comunidades cercanas, permitiendo una respuesta más eficiente y oportuna para proteger bosques, fauna y personas.",
    razonDonar: "Donar a este proyecto ayuda a proteger ecosistemas críticos, reducir pérdidas económicas y salvar vidas, mediante tecnología avanzada de prevención y monitoreo ambiental.",
    categoria_id: 6,
    id: 33
},
{
    nombre: "Proyecto de Plataforma de Aprendizaje Automático en la Nube",
    precio: 39.9,
    imagen: "Proyecto34",
    descripcionCorta: "Entrenamiento de modelos de IA en la nube.",
    descripcionLarga: "Plataforma que permite desarrollar, entrenar y desplegar modelos de inteligencia artificial y aprendizaje automático utilizando recursos en la nube, ofreciendo escalabilidad, colaboración y experimentación rápida. Facilita el acceso a herramientas de IA avanzadas para empresas, investigadores y desarrolladores sin necesidad de infraestructura propia.",
    razonDonar: "Apoyar este proyecto impulsa la innovación tecnológica, democratiza el acceso a la inteligencia artificial y potencia la formación de talento en áreas de ciencia de datos y desarrollo de IA.",
    categoria_id: 6,
    id: 34
 },
 {
    nombre: "Proyecto de Energía Solar Inteligente para Hogares",
    precio: 59.9,
    imagen: "Proyecto8",
    descripcionCorta: "Paneles solares con gestión inteligente.",
    descripcionLarga: "Sistema de energía solar para hogares que integra monitoreo en tiempo real y optimización automática del consumo eléctrico. Permite generar energía limpia, reducir la dependencia de la red eléctrica y minimizar la huella de carbono de cada hogar, promoviendo sostenibilidad y ahorro económico.",
    razonDonar: "Donar a este proyecto permite que más hogares accedan a energía renovable y contribuye al cuidado del planeta, fomentando prácticas sostenibles y responsables con el medio ambiente.",
    categoria_id: 2,
    id: 35
 },
 {
    nombre: "Proyecto de Exoesqueletos para Rehabilitación Física",
    precio: 59.9,
    imagen: "Proyecto9",
    descripcionCorta: "Exoesqueletos que ayudan en rehabilitación.",
    descripcionLarga: "Desarrollo de exoesqueletos robóticos que asisten en terapias físicas, facilitando la recuperación de pacientes con movilidad reducida. Estos dispositivos fortalecen músculos, mejoran la coordinación y aceleran procesos de rehabilitación, integrando tecnología avanzada con cuidado humano.",
    razonDonar: "Apoyar este proyecto contribuye a mejorar la calidad de vida de personas en recuperación, brinda herramientas innovadoras para la rehabilitación y promueve la salud mediante tecnología de vanguardia.",
    categoria_id: 2,
    id: 36
  },
{
    nombre: "Proyecto de Asistentes Virtuales para Atención al Cliente",
    precio: 59.9,
    imagen: "Proyecto10",
    descripcionCorta: "Atención al cliente automatizada y eficiente.",
    descripcionLarga: "Desarrollo de asistentes virtuales inteligentes capaces de gestionar consultas de clientes de manera autónoma, proporcionando respuestas rápidas, personalizadas y precisas. Estos sistemas optimizan tiempos de respuesta, reducen la carga de trabajo de los equipos de soporte y mejoran la satisfacción del cliente al ofrecer atención 24/7 de manera eficiente.",
    razonDonar: "Apoyar este proyecto permite mejorar la experiencia de usuario en servicios digitales, impulsar la innovación en atención al cliente y ayudar a empresas a ofrecer soporte de alta calidad mediante tecnología avanzada.",
    categoria_id: 2,
    id: 37
},
{
    nombre: "Proyecto de Robots Limpia-Océanos",
    precio: 59.9,
    imagen: "Proyecto11",
    descripcionCorta: "Robots que limpian residuos del mar.",
    descripcionLarga: "Robots autónomos diseñados para recolectar residuos plásticos y otros desechos en océanos, ríos y lagos, contribuyendo a la conservación marina. Equipados con sensores y sistemas de navegación inteligentes, estos robots permiten limpiar áreas extensas de manera eficiente y segura, reduciendo el impacto ambiental y protegiendo la biodiversidad acuática.",
    razonDonar: "Al apoyar este proyecto, contribuyes a la protección de la fauna y flora marina, fomentas la limpieza de los océanos y respaldas soluciones tecnológicas innovadoras para enfrentar la contaminación ambiental.",
    categoria_id: 2,
    id: 38
},
{
    nombre: "Proyecto de Wearables para Monitoreo de Salud",
    precio: 59.9,
    imagen: "Proyecto12",
    descripcionCorta: "Dispositivos que monitorean la salud en tiempo real.",
    descripcionLarga: "Desarrollo de wearables capaces de registrar signos vitales, actividad física y patrones de sueño, generando análisis personalizados y alertas tempranas para mejorar hábitos de salud y prevenir posibles problemas médicos. Los dispositivos se integran con aplicaciones móviles para ofrecer seguimiento continuo y recomendaciones basadas en datos precisos.",
    razonDonar: "Apoyar este proyecto promueve la salud preventiva, permite a las personas controlar su bienestar de manera efectiva y facilita la detección temprana de posibles riesgos médicos mediante tecnología avanzada.",
    categoria_id: 2,
    id: 39
},
{
    nombre: "Proyecto de Red 5G para Áreas Rurales",
    precio: 69.9,
    imagen: "Proyecto13",
    descripcionCorta: "Conectividad 5G para zonas alejadas.",
    descripcionLarga: "Implementación de infraestructura 5G en áreas rurales para garantizar acceso a internet de alta velocidad y reducir la brecha digital. Esta conectividad permite educación remota de calidad, servicios de telemedicina, comercio digital y comunicación eficiente, fortaleciendo el desarrollo económico y social de comunidades alejadas.",
    razonDonar: "Al donar a este proyecto, contribuyes a mejorar la educación, la comunicación y el crecimiento económico de comunidades rurales, acercando oportunidades tecnológicas a quienes más las necesitan.",
    categoria_id: 2,
    id: 40
},
{
    nombre: "Proyecto de Algoritmos Predictivos para Agricultura",
    precio: 49.9,
    imagen: "Proyecto14",
    descripcionCorta: "Optimización agrícola con predicciones inteligentes.",
    descripcionLarga: "Sistema avanzado que utiliza datos climáticos, del suelo y del cultivo para predecir rendimientos, optimizar tiempos de siembra y cosecha, y reducir pérdidas por factores ambientales o plagas. Integra inteligencia artificial para ofrecer recomendaciones precisas a agricultores, promoviendo eficiencia y sostenibilidad en la producción de alimentos.",
    razonDonar: "Apoyar este proyecto impulsa la innovación en agricultura, fortalece la seguridad alimentaria y ayuda a los agricultores a producir más y mejor mediante el uso de tecnología inteligente.",
    categoria_id: 2,
    id: 41
},
{
    nombre: "Proyecto de Automatización del Reciclaje con Robots",
    precio: 69.9,
    imagen: "Proyecto35",
    descripcionCorta: "Robots que clasifican y gestionan residuos automáticamente.",
    descripcionLarga: "Desarrollo de robots inteligentes que separan, clasifican y gestionan residuos reciclables de manera eficiente, optimizando procesos de reciclaje y reduciendo la contaminación ambiental. Los sistemas utilizan visión artificial y algoritmos de aprendizaje automático para mejorar la precisión y la velocidad de clasificación.",
    razonDonar: "Apoyar este proyecto contribuye a la sostenibilidad, fomenta ciudades más limpias y reduce el impacto ambiental mediante soluciones tecnológicas avanzadas en gestión de residuos.",
    categoria_id: 5,
    id: 43
},
{
    nombre: "Proyecto de IA para Prevención de Fraudes Financieros",
    precio: 49.9,
    imagen: "Proyecto36",
    descripcionCorta: "Detección de fraudes mediante inteligencia artificial.",
    descripcionLarga: "Plataforma que analiza transacciones financieras en tiempo real utilizando algoritmos de inteligencia artificial para detectar patrones sospechosos, prevenir fraudes y reducir riesgos económicos. Integra aprendizaje automático para mejorar continuamente su precisión y adaptarse a nuevas amenazas.",
    razonDonar: "Apoyar este proyecto fortalece la seguridad financiera, protege los activos de individuos y empresas, y promueve la confianza en los sistemas de pago mediante tecnología avanzada.",
    categoria_id: 5,
    id: 44
},
{
    nombre: "Proyecto de Cultivos Hidropónicos Automatizados",
    precio: 39.9,
    imagen: "Proyecto37",
    descripcionCorta: "Cultivos sin suelo con control automático.",
    descripcionLarga: "Sistema de hidroponía completamente automatizado que regula agua, nutrientes, iluminación y temperatura para optimizar el crecimiento de plantas en entornos urbanos o interiores. Permite producir alimentos frescos de manera eficiente, sostenible y con menor uso de recursos naturales, promoviendo la agricultura urbana.",
    razonDonar: "Al apoyar este proyecto, contribuyes a la innovación agrícola, fomentas producción sostenible de alimentos y ayudas a garantizar acceso a productos frescos y saludables.",
    categoria_id: 5,
    id: 45
},
{
    nombre: "Proyecto de Análisis Predictivo para Desastres Naturales",
    precio: 19.9,
    imagen: "Proyecto38",
    descripcionCorta: "Predicción de desastres naturales con datos avanzados.",
    descripcionLarga: "Plataforma que combina modelos de análisis predictivo y grandes volúmenes de datos para anticipar terremotos, inundaciones y otros desastres naturales. Permite planificar medidas preventivas, evacuar comunidades de manera segura y reducir pérdidas humanas y materiales.",
    razonDonar: "Apoyar este proyecto significa salvar vidas y proteger comunidades mediante el uso de tecnología predictiva avanzada y sistemas de alerta temprana.",
    categoria_id: 5,
    id: 46
},
{
    nombre: "Proyecto de Logística Autónoma con Vehículos Eléctricos",
    precio: 29.9,
    imagen: "Proyecto39",
    descripcionCorta: "Transporte y entrega de manera autónoma y eléctrica.",
    descripcionLarga: "Sistema de logística que utiliza vehículos eléctricos autónomos para la distribución de mercancías, optimizando rutas, reduciendo costos operativos y disminuyendo la huella de carbono. La plataforma integra control en tiempo real y planificación inteligente para aumentar eficiencia y sostenibilidad en el transporte urbano.",
    razonDonar: "Apoyar este proyecto impulsa un transporte más sostenible, reduce emisiones contaminantes y promueve la innovación en la distribución de bienes mediante tecnología avanzada.",
    categoria_id: 5,
    id: 47
},
{
    nombre: "Proyecto de Robots Asistentes para Personas Mayores",
    precio: 29.9,
    imagen: "Proyecto40",
    descripcionCorta: "Robots que ayudan en el cuidado de adultos mayores.",
    descripcionLarga: "Robots diseñados para asistir a personas mayores en actividades diarias, recordatorios de medicación, seguimiento de salud y compañía. Integran inteligencia artificial para adaptarse a las necesidades individuales, mejorando autonomía y calidad de vida de los adultos mayores.",
    razonDonar: "Al apoyar este proyecto, contribuyes al bienestar y seguridad de los adultos mayores, promoviendo soluciones tecnológicas que facilitan su vida diaria y fortalecen la atención en el hogar.",
    categoria_id: 5,
    id: 48
},
{
    nombre: "Proyecto de Automatización Industrial con IA",
    precio: 69.9,
    imagen: "Proyecto15",
    descripcionCorta: "Optimización de procesos industriales con inteligencia artificial.",
    descripcionLarga: "Implementación de sistemas de inteligencia artificial para controlar, supervisar y optimizar líneas de producción en fábricas. Permite reducir errores, aumentar eficiencia, disminuir costos operativos y mejorar la calidad del producto final, transformando la industria hacia la automatización inteligente.",
    razonDonar: "Apoyar este proyecto fomenta la innovación industrial, aumenta la competitividad empresarial y promueve la eficiencia mediante tecnologías avanzadas de automatización.",
    categoria_id: 3,
    id: 49
},
{
    nombre: "Proyecto de Dispositivos Médicos Inteligentes",
    precio: 69.9,
    imagen: "Proyecto16",
    descripcionCorta: "Tecnología médica avanzada para diagnóstico y monitoreo.",
    descripcionLarga: "Desarrollo de dispositivos médicos inteligentes capaces de monitorear la salud de pacientes en tiempo real, detectar anomalías y facilitar diagnósticos tempranos. Integran análisis de datos y comunicación con profesionales de la salud para mejorar la atención médica y la toma de decisiones clínicas.",
    razonDonar: "Apoyar este proyecto impulsa la innovación en salud, mejora la atención médica y permite un seguimiento más eficiente del bienestar de los pacientes mediante tecnología avanzada.",
    categoria_id: 3,
    id: 50
},
{
    nombre: "Proyecto de Aulas Virtuales con Realidad Mixta",
    precio: 69.9,
    imagen: "Proyecto17",
    descripcionCorta: "Educación inmersiva con realidad mixta.",
    descripcionLarga: "Desarrollo de aulas virtuales que combinan realidad aumentada y virtual para crear entornos de aprendizaje interactivos, inmersivos y colaborativos. Permiten a estudiantes explorar conceptos complejos de manera práctica y atractiva, mejorando la comprensión y motivación.",
    razonDonar: "Apoyar este proyecto impulsa la educación innovadora, fortalece habilidades digitales y ofrece experiencias de aprendizaje únicas que preparan a los estudiantes para el futuro.",
    categoria_id: 3,
    id: 51
},
{
    nombre: "Proyecto de Ciberseguridad Basada en IA",
    precio: 69.9,
    imagen: "Proyecto18",
    descripcionCorta: "Protección digital inteligente con IA.",
    descripcionLarga: "Sistemas de ciberseguridad que utilizan inteligencia artificial para detectar, prevenir y neutralizar amenazas digitales en tiempo real. Permiten proteger datos sensibles, infraestructuras críticas y garantizar la seguridad de usuarios y empresas frente a ataques avanzados.",
    razonDonar: "Apoyar este proyecto contribuye a proteger información vital, fortalecer la seguridad digital y reducir riesgos de ataques cibernéticos mediante soluciones tecnológicas avanzadas.",
    categoria_id: 3,
    id: 52
},
{
    nombre: "Proyecto de Vehículos Eléctricos de Bajo Costo",
    precio: 69.9,
    imagen: "Proyecto19",
    descripcionCorta: "Transporte sostenible y asequible.",
    descripcionLarga: "Desarrollo de vehículos eléctricos económicos que permiten movilidad sostenible a un mayor número de personas, reduciendo la dependencia de combustibles fósiles y disminuyendo emisiones contaminantes. Los vehículos están diseñados para ser accesibles, eficientes y confiables, fomentando una transición hacia transporte más limpio.",
    razonDonar: "Apoyar este proyecto ayuda a impulsar la movilidad eléctrica asequible, reduce la huella de carbono del transporte y promueve soluciones sostenibles para la movilidad urbana y rural.",
    categoria_id: 3,
    id: 53
},
{
    nombre: "Proyecto de Plataforma de Telemedicina Global",
    precio: 69.9,
    imagen: "Proyecto20",
    descripcionCorta: "Atención médica remota y accesible.",
    descripcionLarga: "Plataforma de telemedicina que permite consultas médicas online, seguimiento de pacientes y acceso a especialistas de manera remota a nivel global. Facilita atención médica en tiempo real, reduciendo barreras geográficas y mejorando la cobertura sanitaria en zonas con acceso limitado a servicios de salud.",
    razonDonar: "Apoyar este proyecto fortalece la atención médica a distancia, mejora la calidad de vida de personas en comunidades vulnerables y promueve la salud inclusiva mediante tecnología.",
    categoria_id: 3,
    id: 54
},
{
    nombre: "Proyecto de Robots para Rescate en Desastres Naturales",
    precio: 69.9,
    imagen: "Proyecto21",
    descripcionCorta: "Robots avanzados para emergencias y rescates.",
    descripcionLarga: "Robots autónomos diseñados para intervenir en desastres naturales, localizar víctimas y asistir en operaciones de rescate con seguridad y rapidez. Equipados con sensores, cámaras y navegación inteligente, permiten realizar tareas peligrosas que serían riesgosas para los rescatistas humanos.",
    razonDonar: "Apoyar este proyecto contribuye a salvar vidas, mejorar la eficiencia en emergencias y promover la innovación tecnológica en la gestión de desastres naturales.",
    categoria_id: 3,
    id: 55
}

]

export {
    productos 
}
