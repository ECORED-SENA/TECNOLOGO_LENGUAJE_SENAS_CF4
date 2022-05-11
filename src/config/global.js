export default {
  global: {
    componenteFormativo:
      'Lineamientos normativos de interpretación, traducción y discapacidad.',
    descripcionCurso:
      'Los procesos de inclusión, participación social y educativa de diferentes grupos poblacionales, han permitido el acceso a nuevas posibilidades, generando con ello un mejoramiento de la calidad de vida y un reconocimiento de sus potencialidades en diferentes contextos. Para el caso de la población Sorda, en Colombia desde la Constitución Política de 1991 se regularon las leyes que promueven sus derechos y garantías, además del apoyo en la investigación, enseñanza y difusión de la Lengua de Señas Colombiana LSC. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Lineamientos normativos de interpretación, traducción y discapacidad ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Antecedentes relacionados con la población sorda',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normatividad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Inclusión y discapacidad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modelos de discapacidad',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Técnicas de búsqueda de información',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentación conceptual de comunidad y cultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Grupos minoritarios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Comunidad y cultura de las personas sordas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Características de las personas sordas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Logística y protocolos de etiqueta ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Intérpretes de apoyo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Turnos y relevos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Etiqueta y protocolo en el servicio de interpretación',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ACNUR, U. (2020). Agencia de la ONU para los refugiados. Grupos minoritarios. ',
      link: 'https://www.acnur.org/grupos-minoritarios.html ',
    },
    {
      referencia:
        'Barreto, A., y Heredia, S. (2012). El uso del software de transcripción lingüística ELAN en el análisis de la interpretación de lengua de señas colombiana en el contexto universitario. Mutatis Mutandis: Revista Latinoamericana de Traducción, 5(2), 295-319.',
    },
    {
      referencia:
        'Capotorti, F. (1977). Estudio sobre los derechos de las personas pertenecientes a minorías étnicas, religiosas o lingüísticas. Informe para la Subcomisión de Prevención de Discriminaciones y Protección a las Minorías.',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2013). Documento CONPES Social 166. ',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const.]. Art. 1 y 2. 7 de julio de 1991.',
    },
    {
      referencia:
        'Constitucional, C. (2014). Sentencia T-483 de julio 9. MP Calle Correa, M.',
    },
    {
      referencia:
        'Constitucional, C. (2014). Sentencia C-767 de 2014. Bogotá: Imprenta Nacional.',
    },
    {
      referencia:
        'Decreto 2369 de 1997. Por medio del cual se reglamenta parcialmente la Ley 324 de 1996. Septiembre 22 de 1996. D.O. 43137.',
    },
    {
      referencia:
        'García, D. (2014). Minorías lingüísticas en Colombia. Acercamiento desde las políticas públicas y los derechos humanos. Cuadernos de Lingüística Hispánica. ',
    },
    {
      referencia:
        'Ley 115 de 1994. Por la cual se expide la Ley General de Educación. Febrero 8 de 1994. D.O. 41.214.',
    },
    {
      referencia:
        'Ley 324 de 1996. Por la cual se crean algunas normas a favor de la población sorda. Octubre 11 de 1996. D.O. 42899.',
    },
    {
      referencia:
        'Ley 361 de 1997. Por la cual se establecen mecanismos de integración social de las personas con limitación en situación de discapacidad y se dictan otras disposiciones. 7 de febrero de 1997. D.O. 42.978.',
    },
    {
      referencia:
        'Ley 762 de 2002. Por medio de la cual se aprueba la "Convención Interamericana para la Eliminación de todas las Formas de Discriminación contra las Personas con Discapacidad", suscrita en la ciudad de Guatemala, Guatemala, el siete (7) de junio de mil novecientos noventa y nueve (1999). 5 de agosto de 2002. D.O. 44.889',
    },
    {
      referencia:
        'Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas y se dictan otras disposiciones. 9 de agosto de 2005. D.O. 45.995',
    },
    {
      referencia:
        'Ley 1145 de 2007. Por medio de la cual se organiza el Sistema Nacional de Discapacidad, la Convención sobre los Derechos de las Personas con Discapacidad de Naciones Unidas, ratificada por Colombia mediante la Ley 1346 de 2009. 10 de julio de 2007. D.O. 46685',
    },
    {
      referencia:
        'Ley 1346 de 2009. Por medio de la cual se aprueba la “Convención sobre los Derechos de las Personas con Discapacidad”, adoptada por la Asamblea General de las Naciones Unidas el 13 de diciembre de 2006. 31 de julio de 2009. D.O. 47427',
    },
    {
      referencia:
        'Ley 1381 de 2010. Por la cual se desarrollan los artículos 7°, 8°, 10 y 70 de la Constitución Política, y los artículos 4°, 5° y 28 de la Ley 21 de 1991 (que aprueba el Convenio 169 de la OIT sobre pueblos indígenas y tribales), y se dictan normas sobre reconocimiento, fomento, protección, uso, preservación y fortalecimiento de las lenguas de los grupos étnicos de Colombia y sobre sus derechos lingüísticos y los de sus hablantes. 25 de enero de 2010. ',
    },
    {
      referencia:
        'Ley 1680 de 2013. Por la cual se garantiza a las personas ciegas y con baja visión, el acceso a la información, a las comunicaciones, al conocimiento y a las tecnologías de la información y de las comunicaciones. 20 de noviembre de 2013. D.O. 48980',
    },
    {
      referencia:
        'Ley 1712 de 2014. Por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones. 6 de marzo de 2014. D.O. 49.084',
    },
    {
      referencia:
        'Ley 1752 de 2015. Por medio de la cual se modifica la Ley 1482 de 2011, para sancionar penalmente la discriminación contra las personas con discapacidad. 3 de junio de 2015. D.O. 49.531',
    },
    {
      referencia:
        'Ley Estatutaria 1618 de 2013. Por medio de la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad. febrero 27 de 2013. D.O. 48717',
    },
    {
      referencia:
        'Méndez, R. (2010).  Figura del intérprete de lengua de signos en educación. Revista digital para profesionales de la enseñanza. ',
    },
    {
      referencia:
        'Oviedo, A. (2001). Sobre lingüística, lengua de señas, y este libro. Universidad del Valle – INSOR.',
    },
    {
      referencia:
        'Pérez de la Fuente, O. (2016). Las personas sordas como minoría cultural y lingüística.',
    },
    {
      referencia:
        'Resolución 496 de 2018. Por la cual se reglamenta el artículo 7° de la Ley 972 de 2005 y se implementa la evaluación Nacional de intérpretes de Lengua de Señas Colombiana –ENILSCE- y el Registro Nacional de Lengua de Señas Colombiana -Español y guías intérpretes (RENI).',
    },
    {
      referencia:
        'Resolución 10185 de 2018. Por la cual se reglamenta el proceso de reconocimiento de intérpretes oficiales de la lengua de señas colombiana - español y se deroga la Resolución 5274 de 2017. 22 de junio de 2018. D.O. 50636',
    },
    {
      referencia:
        'Rodríguez, M. & Velásquez, R. (2000). Historia y gramática de la lengua de señas. ',
    },
    {
      referencia:
        'UNESCO (1996). Declaración Universal de Derechos Lingüísticos. París.',
    },
    {
      referencia:
        'UNESCO (2005). Directrices para la inclusión: garantizar el acceso a la educación para todos. París. ',
    },
    {
      referencia:
        'Unidad para la atención de las víctimas, Ministerio de justicia. Ministerio de Salud. (2016). Guía de atención a las personas con discapacidad en el acceso a la justicia.',
    },
  ],
  glosario: [
    {
      termino: 'Cultura',
      significado:
        'Es el conjunto de conocimientos, ideas, tradiciones y costumbres de un pueblo o grupo de personas.',
    },
    {
      termino: 'Discapacidad',
      significado:
        'La discapacidad es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás. ',
    },
    {
      termino: 'Pirognóstico',
      significado:
        'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
    },
    {
      termino: 'Grupos minoritarios',
      significado:
        '“Una minoría es un grupo étnico, religioso o lingüístico, en menor número que el resto de la población. Los pueblos indígenas poseían tierras antes de ser invadidas y colonizadas”. ACNUR, Agencia de la ONU para los refugiados (2020)',
    },
    {
      termino: 'Inclusión',
      significado:
        'Enfoque que responde positivamente a la diversidad de las personas y a las diferencias individuales, entendiendo que la diversidad no es un problema, sino una oportunidad para el enriquecimiento de la sociedad, a través de la activa participación en la vida familiar, en la educación, en el trabajo y en general en todos los procesos sociales, culturales y en las comunidades”. ',
    },
    {
      termino: 'Diseña',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: 'Minoría',
      significado:
        '“Una minoría es un grupo étnico, religioso o lingüístico, en menor número que el resto de la población. Los pueblos indígenas poseían tierras antes de ser invadidas y colonizadas”. ACNUR (2020).',
    },
    {
      termino: 'Persona sorda',
      significado:
        'Es la persona que tiene dificultades para oír. Puede ser que oiga un poquito o puede que no oiga ningún sonido. Las personas sordas tienen las mismas capacidades que los oyentes. Algunos sordos se comunican con lengua de señas y otros con lengua oral que en Colombia es el castellano o español. ',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 2369 de 1997. [Presidencia de la República de Colombia]. Por el cual se reglamenta parcialmente la Ley 324 de 1996. Septiembre 22 de 1997. D.O. 43137',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 1 Art. 5 Decreto-2369-de-1997 Intérprete de lengua manual.pdf',
    },
    {
      texto:
        'Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas y se dictan otras disposiciones. 2 de agosto de 2005. D.O. 45995',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 2 LEY-982-DE-2005 Equiparación de oportunidades para las personas sordas (1).pdf',
    },
    {
      texto:
        'Ley Estatutaria 1618 de 2013. Por medio de la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad. febrero 27 de 2013. D.O. 48.717.',
      tipo: 'Artículo',
      descarga: '/downloads/Anexo  3 Ley Estatutaria 1618 de 2013.pdf',
    },

    {
      texto:
        'Resolución 496 de 2018. Por la cual se reglamenta el artículo 7° de la Ley 972 de 2005 y se implementa la evaluación Nacional de intérpretes de Lengua de Señas Colombiana –ENILSCE- y el Registro Nacional de Lengua de Señas Colombiana -Español y guías intérpretes (RENI).',
      tipo: 'Artículo',
      descarga: [
        '/downloads/Anexo  4 Resolucion 496 2018 Evaluación ENILSCE.pdf',
      ],
    },
    {
      texto:
        'Unidad para la atención de las víctimas, Ministerio de justicia. Ministerio de Salud. (2016). Guía de atención a las personas con discapacidad en el acceso a la justicia. ',
      tipo: 'Artículo',
      descarga: [
        '/downloads/Anexo 5 Guía de atención a las personas con discapacidad en el acceso a la justicia.pdf',
      ],
    },
    {
      texto:
        'Barreto, A., y Heredia, S. (2012). El uso del software de transcripción lingüística ELAN en el análisis de la interpretación de lengua de señas colombiana en el contexto universitario. Mutatis Mutandis: Revista Latinoamericana de Traducción, 5(2), 295-319.',
      tipo: 'Artículo',
      descarga: [
        '/downloads/Anexo  6 El uso del software de transcripción lingüística ELAN (1).pdf',
      ],
    },
    {
      texto:
        'Ley 1381 de 2010. Por la cual se desarrollan los artículos 7°, 8°, 10 y 70 de la Constitución Política, y los artículos 4°, 5° y 28 de la Ley 21 de 1991 (que aprueba el Convenio 169 de la OIT sobre pueblos indígenas y tribales), y se dictan normas sobre reconocimiento, fomento, protección, uso, preservación y fortalecimiento de las lenguas de los grupos étnicos de Colombia y sobre sus derechos lingüísticos y los de sus hablantes. Enero 25 de 2010. D.O. 47603',
      tipo: 'Artículo',
      descarga: ['/downloads/Anexo  7 Ley 1381 de 2010.pdf'],
    },
    {
      texto:
        'Pérez de la Fuente, O. (2016). Las personas sordas como minoría cultural y lingüística.',
      tipo: 'Artículo',
      descarga: [
        '/downloads/Anexo 8 LasPersonasSordas ComoMinoriaCulturalYLinguistica.pdf',
      ],
    },
    {
      texto:
        'Méndez, R. (2010).  Figura del intérprete de lengua de signos en educación. Revista digital para profesionales de la enseñanza. ',
      tipo: 'Artículo',
      descarga: ['/downloads/Anexo  9 Figura del intérprete.pdf'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'CENTRO DE COMERCIO Y SERVICIOS -Regional Tolima',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo: 'Instructora',
        centro: 'Centro de Servicios de Salud Regional Antioquia.',
      },
      {
        nombre: 'Manuel Alejandro Garzón',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud Regional Antioquia.',
      },
      {
        nombre: 'German Albeiro Saldarriga',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud Regional Antioquia.',
      },
      {
        nombre: 'Adriana María Bustamante',
        cargo: 'Profesional Diseño Curricular',
        centro: 'Centro de Servicios de Salud Regional Antioquia.',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñador Instruccional ',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital.',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'Juan Daniel Polanco Muñoz',
          'Lady Adriana Ariza Luque',
          'Oleg Litvin ',
          'Victor Raúl Cárdenas Cáceres',
          'Wilson Andres Arenales Cáceres',
          'Yuly Andrea Rey Quiñonez ',
        ],
        cargo: 'Diseño Web & Producción Audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
