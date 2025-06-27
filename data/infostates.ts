export interface StateData {
  nombre: string;
  capital: string;
  superficie: string;
  habitantes: string;
  densidad: string;
  model: string;
  demograficos: {
    poblacionTotal: string; // Ej: "17.36M"
    urbana: string; // Ej: "87%"
    rural: string; // Ej: "13%"
    hombres: string; // Ej: "48.6%"
    mujeres: string; // Ej: "51.4%"
  };
  economia: {
    pibEstatal: string; // Ej: "$1,485 MDP"
    industria: string; // Ej: "37%"
    servicios: string; // Ej: "58%"
    agricultura: string; // Ej: "5%"
  };
  cultura: {
    sitiosDestacados: Array<{
      nombre: string;
      descripcion: string;
    }>;
  };
}

export const states = [
  {
    nombre: "México",
    capital: "Ciudad de México",
    superficie: "1,972,550.48 km²",
    habitantes: "126,014,024",
    densidad: "64 hab/km²",
    model: "/models/mapamexico.glb",
    demograficos: {
      poblacionTotal: "126.01M",
      urbana: "80%",
      rural: "20%",
      hombres: "48.6%",
      mujeres: "51.4%",
    },
    economia: {
      pibEstatal: "$1,280 billones MXN",
      industria: "33%",
      servicios: "60%",
      agricultura: "7%",
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Palacio de Bellas Artes",
          descripcion: "Edificio emblemático",
        },
        { nombre: "Centro Histórico CDMX", descripcion: "Patrimonio UNESCO" },
        {
          nombre: "Museo Nacional de Antropología",
          descripcion: "Principal museo de México",
        },
      ],
    },
  },
  {
    nombre: "Ciudad de México",
    capital: "Ciudad de México",
    superficie: "1,485 km²",
    habitantes: "9,209,944",
    densidad: "6,163.3 hab/km²",
    model: "/models/cdmx.glb",
    demograficos: {
      poblacionTotal: "9.21M",
      urbana: "100%", // La CDMX es predominantemente urbana
      rural: "0%",
      hombres: "47.7%",
      mujeres: "52.3%",
    },
    economia: {
      pibEstatal: "$1,970 mil millones MXN", // Ejemplo de PIB para CDMX
      industria: "25%",
      servicios: "70%",
      agricultura: "5%",
    },
    cultura: {
      sitiosDestacados: [
        { nombre: "Zócalo", descripcion: "Plaza principal" },
        { nombre: "Museo Frida Kahlo", descripcion: "La Casa Azul" },
        { nombre: "Castillo de Chapultepec", descripcion: "Museo histórico" },
      ],
    },
  },
  {
    nombre: "Estado de México",
    capital: "Toluca de Lerdo",
    superficie: "22,357 km²",
    habitantes: "16,992,418",
    densidad: "738.62 hab/km²",
    model: "/models/mexico.glb",
    demograficos: {
      poblacionTotal: "17.00M",
      urbana: "87%",
      rural: "13%",
      hombres: "48.6%",
      mujeres: "51.4%",
    },
    economia: {
      pibEstatal: "$1,485 MDP", // Este valor ya lo tenías como ejemplo, lo mantengo.
      industria: "37%",
      servicios: "58%",
      agricultura: "5%",
    },
    cultura: {
      sitiosDestacados: [
        { nombre: "Teotihuacán", descripcion: "Sitio arqueológico" },
        { nombre: "Toluca", descripcion: "Capital cultural" },
        { nombre: "Valle de Bravo", descripcion: "Pueblo Mágico" },
      ],
    },
  },
  {
    nombre: "Chiapas",
    capital: "Tuxtla Gutiérrez",
    superficie: "73,311 km²",
    habitantes: "5,543,828",
    densidad: "76 hab/km²",
    model: "/models/chiapas.glb",
    demograficos: {
      poblacionTotal: "5.54M",
      urbana: "50%",
      rural: "50%",
      hombres: "49.5%",
      mujeres: "50.5%",
    },
    economia: {
      pibEstatal: "$350 mil millones MXN",
      industria: "15%",
      servicios: "60%",
      agricultura: "25%",
    },
    cultura: {
      sitiosDestacados: [
        { nombre: "Palenque", descripcion: "Zona arqueológica Maya" },
        { nombre: "Cañón del Sumidero", descripcion: "Parque Nacional" },
        {
          nombre: "San Cristóbal de las Casas",
          descripcion: "Pueblo Mágico colonial",
        },
      ],
    },
  },
  {
    nombre: "Chihuahua",
    capital: "Chihuahua",
    superficie: "247,087 km²",
    habitantes: "3,741,869",
    densidad: "15.14 hab/km²",
    model: "/models/chihuahua.glb",
    demograficos: {
      poblacionTotal: "3.74M",
      urbana: "80%",
      rural: "20%",
      hombres: "50.1%",
      mujeres: "49.9%",
    },
    economia: {
      pibEstatal: "$800 mil millones MXN",
      industria: "45%",
      servicios: "50%",
      agricultura: "5%",
    },
    cultura: {
      sitiosDestacados: [
        { nombre: "Barrancas del Cobre", descripcion: "Sistema de cañones" },
        {
          nombre: "Museo Casa de Pancho Villa",
          descripcion: "Museo histórico",
        },
        { nombre: "Cascada de Basaseachi", descripcion: "Parque Nacional" },
      ],
    },
  },
  {
    nombre: "Campeche",
    capital: "San Francisco de Campeche",
    superficie: "57,484.9 km²", // Dato más reciente y específico de INEGI. Hay ligeras variaciones entre fuentes, pero este es común.
    habitantes: "928,363", // Censo INEGI 2020
    densidad: "16.02 hab/km²", // Calculado con datos de 2020
    model: "/models/campeche.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "928,363",
      urbana: "75%", // INEGI 2010 dato común, el de 2020 de Data México para el estado es 50.8% mujeres y 49.2% hombres, que se refiere a la población en general, no a urbana/rural. Se usa el 75% urbano de fuentes anteriores.
      rural: "25%",
      hombres: "49.2%",
      mujeres: "50.8%",
    },
    economia: {
      pibEstatal: "USD 77,880 millones (2019)", // PIB por PPA, es un dato de referencia.
      industria: "80.3% (principalmente minería petrolera)", // Destaca la actividad dominante
      servicios: "7.1% (construcción) y 2.1% (comercio)", // Estos son los siguientes sectores estratégicos
      agricultura: "N/D", // No se encontró un porcentaje específico desglosado para Campeche, pero es un sector menos dominante que petróleo. Puedes investigarlo más si es crucial.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Ciudad Histórica Fortificada de Campeche",
          descripcion: "Patrimonio de la Humanidad UNESCO",
        },
        {
          nombre: "Zona Arqueológica de Calakmul",
          descripcion: "Antigua ciudad Maya y Reserva de la Biósfera",
        },
        { nombre: "Edzná", descripcion: "Importante zona arqueológica Maya" },
        {
          nombre: "Ruta Puuc",
          descripcion: "Sitios arqueológicos menores en la ruta",
        },
      ],
    },
  },
  {
    nombre: "Colima",
    capital: "Colima",
    superficie: "5,626 km²",
    habitantes: "731,391", // Censo INEGI 2020
    densidad: "130.01 hab/km²", // Calculado con datos de 2020
    model: "/models/colima.glb",
    demograficos: {
      poblacionTotal: "731,391",
      urbana: "N/D", // Datos específicos urbana/rural para el estado completo no fácilmente disponibles, pero la capital es urbana.
      rural: "N/D",
      hombres: "49.3%",
      mujeres: "50.7%",
    },
    economia: {
      pibEstatal: "MXN 199,817 millones (2023)", // Dato de referencia, puede variar
      industria: "N/D", // Actividades destacadas incluyen minería y manufactura, pero porcentajes exactos de PIB varían por fuente.
      servicios: "N/D", // Comercio, turismo y servicios inmobiliarios son importantes.
      agricultura: "N/D", // Exportación de papaya, limón y plátano son clave.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Volcán de Colima",
          descripcion: "Uno de los volcanes más activos de México.",
        },
        {
          nombre: "Manzanillo",
          descripcion: "Puerto y destino turístico con playas.",
        },
        { nombre: "Comala", descripcion: "Pueblo Mágico." },
        {
          nombre: "Zona Arqueológica La Campana",
          descripcion: "Importante sitio prehispánico.",
        },
      ],
    },
  },
  {
    nombre: "Tlaxcala",
    capital: "Tlaxcala de Xicohténcatl",
    superficie: "3,991 km²",
    habitantes: "1,342,977", // Censo INEGI 2020
    densidad: "336.49 hab/km²", // Calculado con datos de 2020
    model: "/models/tlaxcala.glb",
    demograficos: {
      poblacionTotal: "1,342,977",
      urbana: "80.4%", // INEGI 2020
      rural: "19.6%", // INEGI 2020
      hombres: "48.5%",
      mujeres: "51.5%",
    },
    economia: {
      pibEstatal: "MXN 216,773 millones (2023)", // Dato de referencia
      industria: "N/D", // Manufactura (textil, automotriz, química) es el sector dominante.
      servicios: "N/D", // Comercio y servicios son importantes.
      agricultura: "N/D", // Maíz, alfalfa y cebada son principales cultivos.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Zona Arqueológica de Cacaxtla",
          descripcion: "Famosa por sus murales.",
        },
        {
          nombre: "Basílica de Ocotlán",
          descripcion: "Importante santuario religioso.",
        },
        {
          nombre: "Centro Histórico de Tlaxcala",
          descripcion: "Arquitectura colonial.",
        },
        {
          nombre: "Val'Quirico",
          descripcion: "Pueblo temático de estilo medieval.",
        },
      ],
    },
  },
  {
    nombre: "Veracruz",
    capital: "Xalapa-Enríquez",
    superficie: "71,820 km²",
    habitantes: "8,062,579", // Censo INEGI 2020
    densidad: "112.26 hab/km²", // Calculado con datos de 2020
    model: "/models/veracruz.glb",
    demograficos: {
      poblacionTotal: "8,062,579",
      urbana: "71.6%", // INEGI 2020
      rural: "28.4%", // INEGI 2020
      hombres: "48.2%",
      mujeres: "51.8%",
    },
    economia: {
      pibEstatal: "MXN 1,023,000 millones (2023)", // Dato de referencia, Veracruz es un estado con una economía grande.
      industria: "N/D", // Petróleo, petroquímica, manufactura.
      servicios: "N/D", // Comercio, turismo, servicios portuarios.
      agricultura: "N/D", // Café, caña de azúcar, cítricos.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "San Juan de Ulúa",
          descripcion: "Antigua fortaleza y prisión en el puerto de Veracruz.",
        },
        {
          nombre: "El Tajín",
          descripcion: "Zona arqueológica Totonaca, Patrimonio UNESCO.",
        },
        {
          nombre: "Coatepec",
          descripcion: "Pueblo Mágico, famoso por su café.",
        },
        {
          nombre: "Cascadas de Eyipantla",
          descripcion: "Impresionante caída de agua.",
        },
        {
          nombre: "Pueblos Mágicos de Veracruz",
          descripcion: "Xico, Papantla, Orizaba, Zozocolco.",
        },
      ],
    },
  },
  {
    nombre: "Baja California Sur",
    capital: "La Paz",
    superficie: "73,909 km²",
    habitantes: "798,447", // Censo INEGI 2020
    densidad: "10.80 hab/km²", // Calculado con datos de 2020
    model: "/models/baja_california_sur.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "798,447",
      urbana: "86.1%", // INEGI 2020
      rural: "13.9%", // INEGI 2020
      hombres: "50.5%",
      mujeres: "49.5%",
    },
    economia: {
      pibEstatal: "MXN 263,770 millones (2023)", // Dato de referencia, el turismo es el motor principal.
      industria: "N/D", // La manufactura y la minería existen, pero el sector de servicios es dominante.
      servicios: "N/D", // Principalmente turismo, comercio y servicios inmobiliarios.
      agricultura: "N/D", // Producción de hortalizas, frutas y productos pesqueros.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "El Arco de Cabo San Lucas",
          descripcion: "Emblemática formación rocosa natural.",
        },
        {
          nombre: "La Paz",
          descripcion:
            "Capital con malecón, playas y avistamiento de ballenas.",
        },
        {
          nombre: "Todos Santos",
          descripcion: "Pueblo Mágico, conocido por su ambiente artístico.",
        },
        {
          nombre: "Parque Nacional Bahía de Loreto",
          descripcion: "Área protegida con gran biodiversidad marina.",
        },
        {
          nombre: "Misiones de Baja California",
          descripcion: "Vestigios históricos de la colonización jesuita.",
        },
      ],
    },
  },
  {
    nombre: "Morelos",
    capital: "Cuernavaca",
    superficie: "4,879 km²",
    habitantes: "1,971,520", // Censo INEGI 2020
    densidad: "404.09 hab/km²", // Calculado con datos de 2020
    model: "/models/morelos.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "1,971,520",
      urbana: "87.5%", // INEGI 2020
      rural: "12.5%", // INEGI 2020
      hombres: "47.7%",
      mujeres: "52.3%",
    },
    economia: {
      pibEstatal: "MXN 269,720 millones (2023)", // Dato de referencia, la manufactura y el comercio son importantes.
      industria: "N/D", // Destacan la manufactura de alimentos, bebidas y tabaco, así como la industria química.
      servicios: "N/D", // Comercio, turismo, y servicios inmobiliarios son pilares.
      agricultura: "N/D", // Producción de caña de azúcar, aguacate y flores.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Tepoztlán",
          descripcion: "Pueblo Mágico y sitio arqueológico del Tepozteco.",
        },
        {
          nombre: "Cuernavaca",
          descripcion:
            "La 'Ciudad de la Eterna Primavera' con el Palacio de Cortés.",
        },
        {
          nombre: "Jardines de México",
          descripcion: "Los jardines florales más grandes del mundo.",
        },
        {
          nombre: "Zona Arqueológica de Xochicalco",
          descripcion: "Patrimonio de la Humanidad UNESCO.",
        },
        {
          nombre: "Ex-Haciendas de Morelos",
          descripcion:
            "Antiguas haciendas transformadas en hoteles o centros de eventos.",
        },
      ],
    },
  },
  {
    nombre: "Hidalgo",
    capital: "Pachuca de Soto",
    superficie: "20,813 km²",
    habitantes: "3,082,841", // Censo INEGI 2020
    densidad: "148.12 hab/km²", // Calculado con datos de 2020
    model: "/models/hidalgo.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "3,082,841",
      urbana: "68.6%", // INEGI 2020
      rural: "31.4%", // INEGI 2020
      hombres: "48.2%",
      mujeres: "51.8%",
    },
    economia: {
      pibEstatal: "MXN 355,700 millones (2023)", // Dato de referencia, la manufactura y la minería son importantes.
      industria: "N/D", // Destacan manufactura (cemento, textil), minería (plata, oro), y metalurgia.
      servicios: "N/D", // Comercio, turismo y servicios educativos.
      agricultura: "N/D", // Maíz, cebada, alfalfa, y maguey.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Prismas Basálticos de Santa María Regla",
          descripcion: "Impresionantes columnas de basalto.",
        },
        {
          nombre: "Grutas de Tolantongo",
          descripcion: "Pozas termales y cascadas en un entorno natural único.",
        },
        {
          nombre: "Pueblos Mágicos de Hidalgo",
          descripcion:
            "Huasca de Ocampo, Real del Monte, Mineral del Chico, Huichapan, Tecozautla, Zempoala, Metztitlán.",
        },
        {
          nombre: "Parque Nacional El Chico",
          descripcion: "Ideal para ecoturismo, senderismo y escalada.",
        },
        {
          nombre: "Zona Arqueológica de Tula",
          descripcion: "Antigua capital Tolteca, famosa por los Atlantes.",
        },
      ],
    },
  },
  {
    nombre: "Coahuila de Zaragoza",
    capital: "Saltillo",
    superficie: "151,595 km²",
    habitantes: "3,146,771", // Censo INEGI 2020
    densidad: "20.76 hab/km²", // Calculado con datos de 2020
    model: "/models/coahuila.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "3,146,771",
      urbana: "89.2%", // INEGI 2020
      rural: "10.8%", // INEGI 2020
      hombres: "49.6%",
      mujeres: "50.4%",
    },
    economia: {
      pibEstatal: "MXN 732,499 millones (2023)", // Dato de referencia. Coahuila es un estado industrializado.
      industria: "N/D", // Predominan la industria automotriz, metalmecánica y siderúrgica.
      servicios: "N/D", // Comercio y servicios diversos.
      agricultura: "N/D", // Algodón, forrajes, uva.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Museo del Desierto (Saltillo)",
          descripcion:
            "Famoso por sus exhibiciones de paleontología y ecosistemas desérticos.",
        },
        {
          nombre: "Dunas de Bilbao (Viesca)",
          descripcion: "Impresionantes formaciones de arena.",
        },
        {
          nombre: "Parras de la Fuente",
          descripcion: "Pueblo Mágico, cuna de la vitivinicultura en América.",
        },
        {
          nombre: "Cuatro Ciénegas",
          descripcion:
            "Área Natural Protegida con pozas de agua cristalina y especies endémicas.",
        },
      ],
    },
  },
  {
    nombre: "Durango",
    capital: "Victoria de Durango",
    superficie: "123,364 km²",
    habitantes: "1,832,650", // Censo INEGI 2020
    densidad: "14.85 hab/km²", // Calculado con datos de 2020
    model: "/models/durango.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "1,832,650",
      urbana: "75.7%", // INEGI 2020
      rural: "24.3%", // INEGI 2020
      hombres: "49.1%",
      mujeres: "50.9%",
    },
    economia: {
      pibEstatal: "MXN 286,812 millones (2023)", // Dato de referencia. La minería y la silvicultura son fuertes.
      industria: "N/D", // Minería (oro, plata, plomo, zinc) y manufactura de madera.
      servicios: "N/D", // Comercio, turismo.
      agricultura: "N/D", // Algodón, maíz, frijol.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Sierra Madre Occidental",
          descripcion: "Extensos paisajes montañosos ideales para ecoturismo.",
        },
        {
          nombre: "Zona del Silencio",
          descripcion: "Misteriosa área desértica con fenómenos magnéticos.",
        },
        {
          nombre: "Paseo del Viejo Oeste (Durango)",
          descripcion: "Set cinematográfico convertido en parque temático.",
        },
        {
          nombre: "Pueblos Mineros",
          descripcion: "Como Mapimí y Nombre de Dios, con historia y encanto.",
        },
      ],
    },
  },
  {
    nombre: "Guerrero",
    capital: "Chilpancingo de los Bravo",
    superficie: "63,596 km²",
    habitantes: "3,546,468", // Censo INEGI 2020
    densidad: "55.76 hab/km²", // Calculado con datos de 2020
    model: "/models/guerrero.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "3,546,468",
      urbana: "64.5%", // INEGI 2020
      rural: "35.5%", // INEGI 2020
      hombres: "48.3%",
      mujeres: "51.7%",
    },
    economia: {
      pibEstatal: "MXN 299,650 millones (2023)", // Dato de referencia. El turismo es el principal motor económico.
      industria: "N/D", // Principalmente manufactura de alimentos y bebidas, y minería.
      servicios: "N/D", // Fuerte dependencia del turismo (Acapulco, Ixtapa-Zihuatanejo) y comercio.
      agricultura: "N/D", // Maíz, coco, mango, café.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Acapulco",
          descripcion: "Famoso puerto turístico internacional.",
        },
        {
          nombre: "Taxco de Alarcón",
          descripcion:
            "Pueblo Mágico, conocido por su platería y arquitectura colonial.",
        },
        {
          nombre: "Ixtapa-Zihuatanejo",
          descripcion: "Doble destino de playa.",
        },
        {
          nombre: "Grutas de Cacahuamilpa",
          descripcion: "Impresionantes cuevas con formaciones rocosas.",
        },
        {
          nombre: "Zona Arqueológica de Tehuacalco",
          descripcion:
            "Antiguo centro ceremonial con observatorio astronómico.",
        },
      ],
    },
  },
  {
    nombre: "Baja California",
    capital: "Mexicali",
    superficie: "71,446 km²",
    habitantes: "3,769,020", // Censo INEGI 2020
    densidad: "52.75 hab/km²", // Calculado con datos de 2020
    model: "/models/baja_california.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "3,769,020",
      urbana: "93.4%", // INEGI 2020
      rural: "6.6%", // INEGI 2020
      hombres: "49.9%",
      mujeres: "50.1%",
    },
    economia: {
      pibEstatal: "MXN 835,000 millones (2023)", // Dato de referencia. La manufactura y el comercio exterior son pilares.
      industria: "N/D", // Fuerte sector maquilador (electrónica, automotriz, médica), metalmecánica, aeroespacial.
      servicios: "N/D", // Comercio, turismo médico, logística.
      agricultura: "N/D", // Algodón, trigo, hortalizas, vid (Ensenada).
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Valle de Guadalupe",
          descripcion: "Región vinícola líder en México.",
        },
        {
          nombre: "Tijuana",
          descripcion:
            "Ciudad fronteriza vibrante, reconocida por su gastronomía y cultura urbana.",
        },
        {
          nombre: "Ensenada",
          descripcion:
            "Puerto con 'La Bufadora' (géiser marino) y centro de investigación oceanográfica.",
        },
        {
          nombre: "Mexicali",
          descripcion:
            "Capital del estado, con historia agrícola y comunidades asiáticas.",
        },
        {
          nombre: "Rosarito",
          descripcion: "Playas populares para surf y recreación.",
        },
      ],
    },
  },
  {
    nombre: "Zacatecas",
    capital: "Zacatecas",
    superficie: "75,539 km²",
    habitantes: "1,622,015", // Censo INEGI 2020
    densidad: "21.47 hab/km²", // Calculado con datos de 2020
    model: "/models/zacatecas.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "1,622,015",
      urbana: "76.4%", // INEGI 2020
      rural: "23.6%", // INEGI 2020
      hombres: "48.2%",
      mujeres: "51.8%",
    },
    economia: {
      pibEstatal: "MXN 230,000 millones (2023)", // Dato de referencia. Minería es un pilar.
      industria: "N/D", // Predominan la minería (plata, oro, zinc, plomo) y algunas manufacturas.
      servicios: "N/D", // Comercio, turismo y servicios financieros.
      agricultura: "N/D", // Frijol, chile, durazno, uva.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Centro Histórico de Zacatecas",
          descripcion:
            "Patrimonio de la Humanidad UNESCO, con arquitectura barroca.",
        },
        {
          nombre: "Mina El Edén",
          descripcion: "Antigua mina convertida en museo, con un teleférico.",
        },
        {
          nombre: "Teleférico de Zacatecas",
          descripcion: "Ofrece vistas panorámicas de la ciudad.",
        },
        {
          nombre: "La Quemada (Chicomóztoc)",
          descripcion: "Zona arqueológica prehispánica.",
        },
        { nombre: "Jerez de García Salinas", descripcion: "Pueblo Mágico." },
      ],
    },
  },
  {
    nombre: "Tamaulipas",
    capital: "Ciudad Victoria",
    superficie: "80,249 km²",
    habitantes: "3,527,735", // Censo INEGI 2020
    densidad: "43.96 hab/km²", // Calculado con datos de 2020
    model: "/models/tamaulipas.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "3,527,735",
      urbana: "90.2%", // INEGI 2020
      rural: "9.8%", // INEGI 2020
      hombres: "49.3%",
      mujeres: "50.7%",
    },
    economia: {
      pibEstatal: "MXN 650,000 millones (2023)", // Dato de referencia. La manufactura, energía y comercio exterior son clave.
      industria: "N/D", // Fuerte sector manufacturero (maquiladoras), petroquímica, energía (petróleo y gas).
      servicios: "N/D", // Comercio, servicios portuarios (Altamira, Tampico), turismo.
      agricultura: "N/D", // Sorgo, maíz, cítricos, ganadería.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Playa Miramar (Ciudad Madero)",
          descripcion: "Una de las playas más populares del Golfo de México.",
        },
        {
          nombre: "Reserva de la Biósfera El Cielo",
          descripcion: "Área natural protegida con gran biodiversidad.",
        },
        {
          nombre: "Tampico",
          descripcion:
            "Puerto histórico con arquitectura Art Nouveau y Art Decó.",
        },
        {
          nombre: "Pueblo Mágico de Tula",
          descripcion: "Conocido por sus palmas y la cultura pame.",
        },
        {
          nombre: "La Pesca",
          descripcion: "Destino de pesca deportiva y ecoturismo.",
        },
      ],
    },
  },
  {
    nombre: "Tabasco",
    capital: "Villahermosa",
    superficie: "24,738 km²",
    habitantes: "2,402,598", // Censo INEGI 2020
    densidad: "97.12 hab/km²", // Calculado con datos de 2020
    model: "/models/tabasco.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "2,402,598",
      urbana: "68.2%", // INEGI 2020
      rural: "31.8%", // INEGI 2020
      hombres: "48.9%",
      mujeres: "51.1%",
    },
    economia: {
      pibEstatal: "MXN 450,000 millones (2023)", // Dato de referencia. La actividad petrolera es central.
      industria: "N/D", // Predomina la extracción de petróleo y gas, así como la petroquímica.
      servicios: "N/D", // Comercio, turismo y servicios logísticos.
      agricultura: "N/D", // Cacao, plátano, caña de azúcar, piña.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Parque Museo La Venta (Villahermosa)",
          descripcion: "Famoso por sus cabezas colosales Olmecas.",
        },
        {
          nombre: "Zona Arqueológica de Comalcalco",
          descripcion: "Única ciudad maya construida con ladrillos.",
        },
        {
          nombre: "Pantanos de Centla",
          descripcion:
            "Reserva de la Biósfera y el humedal más extenso de Mesoamérica.",
        },
        {
          nombre: "Museo Regional de Antropología Carlos Pellicer",
          descripcion: "Importante acervo de piezas prehispánicas.",
        },
        {
          nombre: "Ruta del Cacao y el Chocolate",
          descripcion: "Plantaciones y haciendas cacaoteras que ofrecen tours.",
        },
      ],
    },
  },
  {
    nombre: "Yucatán",
    capital: "Mérida",
    superficie: "39,612 km²",
    habitantes: "2,320,898", // Censo INEGI 2020
    densidad: "58.59 hab/km²", // Calculado con datos de 2020
    model: "/models/yucatan.glb", // Asegúrate de tener este modelo
    demograficos: {
      poblacionTotal: "2,320,898",
      urbana: "76.3%", // INEGI 2020
      rural: "23.7%", // INEGI 2020
      hombres: "48.9%",
      mujeres: "51.1%",
    },
    economia: {
      pibEstatal: "MXN 430,000 millones (2023)", // Dato de referencia. El turismo, manufactura y comercio son vitales.
      industria: "N/D", // Destaca la manufactura (especialmente de alimentos y bebidas), y la industria de la construcción.
      servicios: "N/D", // Turismo (hotelería, restaurantes), comercio, servicios inmobiliarios y financieros.
      agricultura: "N/D", // Ganadería (porcina), aves, miel, henequén, cítricos.
    },
    cultura: {
      sitiosDestacados: [
        {
          nombre: "Chichén Itzá",
          descripcion:
            "Imponente ciudad maya y una de las Nuevas Siete Maravillas del Mundo.",
        },
        {
          nombre: "Uxmal",
          descripcion:
            "Zona arqueológica maya, Patrimonio de la Humanidad UNESCO.",
        },
        {
          nombre: "Mérida",
          descripcion:
            "La 'Ciudad Blanca', capital con rica arquitectura colonial y vida cultural.",
        },
        {
          nombre: "Cenotes de Yucatán",
          descripcion:
            "Numerosos pozos de agua dulce subterráneos ideales para nadar.",
        },
        {
          nombre: "Pueblos Mágicos de Yucatán",
          descripcion:
            "Izamal, Valladolid, Maní, Sisal, Tekax, Motul de Carrillo Puerto.",
        },
      ],
    },
  },
];
