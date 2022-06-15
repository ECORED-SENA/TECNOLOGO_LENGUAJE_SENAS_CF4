<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lineamientos normativos de interpretación, traducción y discapacidad
    img.mb-5(src="@/assets/curso/tema1/1.png", alt="Texto que describa la imagen")(data-aos="fade-up")
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 1.1 Antecedentes relacionados con la población sorda
    p La historia de los intérpretes de lengua de señas en Colombia puede ser tan antigua como la existencia de los sordos en el continente americano. Al tratarse de una comunidad, en su mayoría ágrafa, no hay documentos escritos que cuenten o respalden sobre sus inicios en este país. Los pocos registros que hay están ligados a la educación de los sordos, por lo que los intérpretes empezaron a jugar desde entonces un papel importante. 
    .row.mt-4(data-aos="fade-up")
      .col-md-6
        img(src="@/assets/curso/tema1/2.png", alt="Texto que describa la imagen")
      .col-md-6.mt-2
        p Según Oviedo (2001), “no se puede descartar que existieran algunos sistemas de señas en el territorio colombiano antes del arribo de los españoles; ni que algunas personas sordas usuarias de una lengua de señas hubieran llegado entre quienes venían a habitar las colonias”. Fue solo hasta 1924 cuando algunas comunidades católicas que llegaron de otros lugares iniciaron procesos educativos en Medellín – Colombia con la I.E. Francisco Luis Hernández Betancur (1943) y en Bogotá con el I. E. de Nuestra Señora de la Sabiduría (1924) con métodos oralistas traídos del congreso de Milán.
        p.mb-0 No fue sino hasta la Ley 324 de 1996, por el cual se crean algunas normas a favor de la población sorda, donde se abrieron múltiples posibilidades, entre ellas el acceso de esta población a la educación, el cual no solo ha permitido su formación, autonomía y progreso como comunidad, sino también ha generado nuevas necesidades en torno a las herramientas y al capital humano que le acompaña en su desarrollo integral en los diferentes entornos de vida. De acuerdo con el Decreto 2369 de 1997 la función principal del intérprete oficial es traducir al idioma castellano o de éste a la lengua de señas colombiana, las
        p comunicaciones que deben efectuar las personas sordas con personas oyentes o la traducción a los sistemas especiales de comunicación utilizados por las personas sordociegas.
    p En este sentido, el intérprete como el mediador comunicativo y basado en su condición de ser biológico, psicológico y social, requiere poseer conocimientos legales que le permitan desempeñar su rol de manera óptima. Con el fin de que estos respondan a las necesidades de los usuarios del servicio de interpretación, es imperativo que estén siempre fundamentados en una normatividad legal establecida por el estado y que a continuación se alista en orden cronológico
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 1.2 Normatividad
    p A continuación, se exponen los principales lineamientos normativos para interpretación, traducción y discapacidad:  
    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-lg-10.back1
        .row.mb-5
          .col-lg-9.mt-2
            a.anexo.mb-4(:href="obtenerLink('/downloads/1.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                h4.text-white Lineamientos normativos para interpretación, traducción y discapacidad
                p.text-white.text-small Anexo. Principales lineamientos normativos para interpretación, traducción y discapacidad.pdf
          .col-lg-2.mt-4
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/1.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      separador         
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 1.3 Inclusión y discapacidad   
    p Según la UNESCO (2005), la inclusión es “un enfoque que responde positivamente a la diversidad de las personas y a las diferencias individuales, entendiendo que la diversidad no es un problema, sino una oportunidad para el enriquecimiento de la sociedad, a través de la activa participación en la vida familiar, en la educación, en el trabajo y en general en todos los procesos sociales, culturales y en las comunidades”. 
    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-lg-10
        p ¿Qué permite la inclusión?
        .row.mt-4.p-4.coss
          .col-sm.mb-12.mb-sm-0
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Disfrutar de un mundo más equitativo y respetuoso frente a las diferencias
              li 
                i.fas.fa-check
                | Beneficiar a todas las personas sin perjuicio de sus características, es decir, sin etiquetar ni excluir
              li 
                i.fas.fa-check
                | Proporcionar un acceso equitativo, revisando procesos constantemente y valorando el aporte de cada persona a la sociedad
    
    separador
    .row
      .col-lg-2.backtitulo
        h4.mt-2.text-center Discapacidad
    p.mt-4 El Art. 1 de la Convención Internacional sobre los Derechos de las Personas con Discapacidad , el cual fue aprobado en 2006 por la Asamblea General de las Naciones Unidas y en Argentina en 2008 a través de la Ley 26.378, aclara que "la discapacidad es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás". 
    p Según la guía de atención a las personas con discapacidad del Ministerio de Salud y Protección Social existen en Colombia 9 categorías o ámbitos en los que se puede presentar una discapacidad:
    .row.mt-5(data-aos="fade-up")
      SlyderF.mb-5.mt-5(columnas="col-lg-2 col-xl-2")
        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico1.svg' alt='AvatarTop')
          h4.text-center.mt-4.mb-0 Movilidad

        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico2.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0  Sensorial auditiva

        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico3.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0  Sensorial visual

        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema1/ico4.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0 Sensorial gusto, olfato, tacto

        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico5.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0  Sistémica
        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico8.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0  Mental cognitiva
        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico9.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0  Mental psicosocial          
        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico6.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0  Voz y habla

        .tarjeta.backtar.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/ico7.svg' alt='AvatarTop')
          h5.text-center.mt-4.mb-0  Piel, pelo y uñas



    p.mt-4 Es fundamental atender al lenguaje que se usa en relación con las personas en situación de discapacidad para no ofender o faltar a la dignidad de estos grupos. A continuación, se exponen las formas actuales y correctas de referirse a las personas con discapacidad de acuerdo con su diagnóstico:
    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-md-10.mt-4
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.text-white Incorrecto
                th.text-white Correcto

            tbody
              tr
                td Discapacitado, minusválido, tullido, lisiado, pobrecito
                td Persona con discapacidad
              tr
                td Defecto de nacimiento
                td Discapacidad congénita

              tr
                td Deforme
                td Persona con discapacidad congénita
              tr
                td El ciego, el cieguito
                td Ciego, invidente, persona con discapacidad visual
              tr
                td Semividente
                td Persona con baja visión
              tr
                td El mudo, el sordomudo
                td Persona sorda o con discapacidad auditiva
              tr
                td Paralítico
                td Persona con discapacidad física, paraplejia o cuadriplejia
              tr
                td Confinado a una silla de ruedas
                td Persona usuaria de silla de ruedas
              tr
                td Mutilado, mocho, manco
                td Persona con amputación
              tr
                td Cojo, mocho
                td Persona con movilidad reducida
              tr
                td Mudo
                td Persona no verbal
              tr
                td Retardado mental, bobo, tonto, mongólico
                td Persona con discapacidad intelectual o cognitiva
              tr
                td Esquizofrénico, psiquiátrico, loco
                td Persona con esquizofrenia
              tr
                td Demente, enfermo mental, psiquiátrico, loco, lunático, desquiciado
                td Persona con discapacidad psicosocial
              tr
                td Epiléptico
                td Persona con epilepsia
              tr
                td Víctima de…
                td Persona que experimentó, en situación de o que tiene…
              tr
                td Aquejado por, padece o sufre de…
                td Persona que tiene…
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 1.4. Modelos de discapacidad
    p El concepto diacrónico de discapacidad ha trascendido en diferentes modelos o normas con visiones y marcos de actuación que han influido en la manera de ver, apoyar y guiar las prácticas que la sociedad ha adoptado sobre la población con discapacidad. A continuación, se describen los principales modelos: 
    TabsA.color-acento-botones.mb-5.mt-5(data-aos="fade-up")

      .tarjeta.color-acento-botones--borde.p-5(titulo="Modelo de la prescindencia")
        h4.mt-4 Modelo de la prescindencia:
        .row.justify-content-center.mt-2

          .col-md-5
            img(src='@/assets/curso/tema1/3.png' alt='AvatarTop')
          .col-md-5
            p Busca terminar la vida de las personas con discapacidad o marginarlas. Tiene bases religiosas por lo que se refieren a este grupo como demonios. La sociedad debe prescindir de las personas a través de la eugenesia (método para mejorar la raza). Señala que las personas con discapacidad no son necesarias porque no contribuyen a la sociedad.



      .tarjeta.color-acento-botones--borde.p-5(titulo="Modelo universal ")
        h4.mt-4 Modelo universal:
        .row.justify-content-center.mt-2

          .col-md-5
            img(src='@/assets/curso/tema1/5.png' alt='AvatarTop')
          .col-md-5
            p La creencia general de que la discapacidad es un castigo divino, la voluntad de Dios o una prueba de este. Incluso se cree que es un castigo por un pecado cometido, por lo que las familias los esconden por vergüenza. Algunas de estas creencias están unidas a algún tipo de práctica religiosa o ritual.

      .tarjeta.color-acento-botones--borde.p-5(titulo="Modelo médico, biológico o patológico  ")
        h4.mt-4 Modelo médico, biológico o patológico:
        .row.justify-content-center.mt-2

          .col-md-5
            img(src='@/assets/curso/tema1/6.png' alt='AvatarTop')
          .col-md-5
            p Este considera que la persona con discapacidad tiene un problema individual centrado en una alteración corporal que requiere cuidados médicos y que la lleva a asumir un papel de paciente. En este caso, el tratamiento es dirigido por el profesional de la salud y hace hincapié en la eliminación, normalización o en una supuesta cura de la discapacidad. El paradigma biológico centra el problema en la persona que tiene deficiencias o limitaciones.

      .tarjeta.color-acento-botones--borde.p-5(titulo="Modelo social ")
        h4.mt-4 Modelo social:
        .row.justify-content-center.mt-2

          .col-md-5
            img(src='@/assets/curso/tema1/7.png' alt='AvatarTop')
          .col-md-5
            p Centra el problema de la discapacidad en la sociedad y no en el individuo. La discapacidad no se entiende en este modelo como un atributo de la persona, sino como un complejo conjunto de condiciones creadas por el entorno. Busca garantizar la participación de las personas con discapacidad en la vida social.
      .tarjeta.color-acento-botones--borde.p-5(titulo="Modelo político activista  ")
        h4.mt-4 Modelo político activista:
        .row.justify-content-center.mt-2

          .col-md-5
            img(src='@/assets/curso/tema1/8.png' alt='AvatarTop')
          .col-md-5
            p Tiene como eje el reconocimiento de los derechos de las personas con discapacidad, promoviendo acciones basadas en lo político y en lo social que han iniciado diferentes organizaciones de grupos que apoyan sus derechos. 
      .tarjeta.color-acento-botones--borde.p-5(titulo="Modelo biopsicosocial  ")
        h4.mt-4 Modelo biopsicosocial:
        .row.justify-content-center.mt-2

          .col-md-5
            img(src='@/assets/curso/tema1/9.png' alt='AvatarTop')
          .col-md-5
            p Plantea la discapacidad como un hecho universal, en la medida en que toda la población está en situación de riesgo de adquirirla, por lo tanto, las iniciativas públicas deben dirigirse a toda la población. La discapacidad no se entiende aquí como un atributo que diferencia a la persona con discapacidad del resto de la población, sino que es una característica inherente a la condición humana.
                        
      .tarjeta.color-acento-botones--borde.p-5(titulo="Modelo tradicional ")
        h4.mt-4 Modelo tradicional:
        .row.justify-content-center.mt-2

          .col-md-5
            img(src='@/assets/curso/tema1/4.png' alt='AvatarTop')
          .col-md-5
            p Considera que es posible establecer un lazo entre los distintos niveles en la vida de un individuo (biológico, personal y social) que sustentan la discapacidad. Clasifica y mide la discapacidad sin estigmatizar.
    .row
      .col-lg-4.backtitulo
        h4.mt-2.text-center Enfoques en la discapacidad
    p.mt-4 El enfoque, orientación o punto de vista que analiza la discapacidad e inclusión social en Colombia ha superado el enfoque de las políticas de asistencia o protección, y ha trascendido hacia una visión de desarrollo humano con un enfoque diferencial y de derechos; dimensionando todos los aspectos de la vida de una persona, incluyendo la relación con su familia, el contexto político, cultural, social y económico, bajo los siguientes enfoques:
    TabsC.color-primario(data-aos="fade-up")
      .py-3.py-md-4(titulo="Enfoque de derechos")
        .row.justify-content-center.bga.mt-4.mb-4
          .col-md-2.mb-2.mb-md-0
            img.imgwia(src='@/assets/curso/tema1/ico10.svg', alt='Texto que describa la imagen')

          .col-md-8.mt-4
            h5 Enfoque de derechos
            p Reconoce que la población con discapacidad es titular de derechos que obligan al Estado a garantizar su ejercicio. Se rompe el paradigma de personas con necesidades que deben ser asistidas, y se pasa a reconocer a las personas con discapacidad como sujetos con derecho a exigir prestaciones y conductas en un marco de deberes y de corresponsabilidad.
      
      .py-3.py-md-4(titulo="Enfoque diferencial. ")
        .row.justify-content-center.bga.mt-4.mb-4
          .col-md-1.mb-2.mb-md-0.mar
            img.imgwia(src='@/assets/curso/tema1/ico11.svg', alt='Texto que describa la imagen')

          .col-md-8.mt-4
            h5 Enfoque diferencial
            p Involucra las condiciones y posiciones de los distintos actores sociales, desde una mirada de género, etnia e identidad cultural, discapacidad o ciclo vital.
      
      .py-3.py-md-4(titulo="Enfoque territorial. ")
        .row.justify-content-center.bga.mt-4.mb-4
          .col-md-2.mb-2.mb-md-0.mar
            img(src='@/assets/curso/tema1/ico12.svg', alt='Texto que describa la imagen')

          .col-md-8.mt-4
            h5 Enfoque territorial
            p Pasa de la formulación de acciones que privilegian una visión fraccionada, a un ejercicio que se centra en el lugar que habita el individuo y privilegia la multidimensionalidad (económica, social, política, ambiental y cultural) del espacio.
      
      .py-3.py-md-4(titulo="Enfoque de desarrollo humano.  ")
        .row.justify-content-center.bga.mt-4.mb-4
          .col-md-2.mb-2.mb-md-0.mar
            img(src='@/assets/curso/tema1/ico13.svg', alt='Texto que describa la imagen')

          .col-md-8.mt-4
            h5 Enfoque de desarrollo humano  
            p Sitúa a las personas en el centro del proceso, como beneficiarias del desarrollo y agentes del progreso y la transformación. 
            p Es importante recordar que frente a las personas con discapacidad no se puede suponer ni generalizar. Es primordial preguntar directamente a la persona con discapacidad acerca de sus necesidades frente al servicio o tarea que se dispone a realizar y sobre los apoyos o facilitadores que requiere para su acceso al mismo. Preguntar si requieren apoyo, se respeta su voluntad y autonomía, y favorece su independencia.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 1.5. Técnicas de búsqueda de información
    .row(data-aos="fade-up")
      .col-md-6.mb-4
        img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')

      .col-md-6
        p Hoy en día, el uso de las nuevas tecnologías, incluyendo el uso de los dispositivos móviles, se ha vuelto algo normal y cotidiano. Los profesionales se valen de las mismas en su práctica diaria y la interpretación no es la excepción. Contar con herramientas tecnológicas a su disposición, técnicas de búsqueda virtuales, recolectar datos y aplicativos para manejo de la información, le puede facilitar considerablemente la labor y ayudarle a obtener resultados mucho más eficientes.
        h4.mt-4 Fuente de información primaria
        p La información primaria es la que se produce directamente por y para una investigación. Se utilizan cualquier tipo de técnicas para investigar. Las fuentes primarias de información son el material de primera mano relativo al objeto investigado. Por ejemplo, un documento creado por alguien con un fin determinado.
        h4.mt-4 Fuente de Información secundaria
        p La información secundaria son los datos recogidos y ya elaborados que existen previamente (información primaria) y son del interés del investigador por lo que han sido producidos con diversos propósitos. Se utilizan 2 técnicas para su recolección: cuantitativas (estadísticas, censos, cálculos matemáticos) y cualitativas (actas, registros, informes, documentos, entre otros).
    .row
      .col-lg-4.backtitulo.mt-4
        h4.mt-2.text-center Tipos de búsqueda de información
    .row.justify-content-center.mt-5
      .col-lg-12
        .row.p-4.coss
          .col-sm.mb-12.mb-sm-0
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | <strong>Búsqueda documentaria: </strong> se refiere a la localización de documentos, copias de documentos y referencias bibliográficas. 

              li 
                i.fas.fa-check
                | <strong>Búsqueda factográfica:</strong> documentar con datos y gráficos para abordar temas de salud.
              li 
                i.fas.fa-check
                | <strong>Búsqueda de actualización o puesta al día:</strong> la que hace el profesional para actualizar sus conocimientos sobre los distintos avances en un tema determinado. 
              li 
                i.fas.fa-check
                | <strong>Búsqueda retrospectiva:</strong> parte de la necesidad de solucionar un problema en particular y cuya consulta puede ser simple o exhaustiva.
    .row.mt-5
      .col-lg-4.backtitulo
        h4.mt-2.text-center Técnicas de recolección de información
    p.mt-4 Para realizar la búsqueda, independientemente de las estrategias que se utilicen se sugieren los siguientes pasos: 
    .row(data-aos="fade-up")
      .col-md-5.mb-4
        img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
      .col-md-7.mt-2
        .row
          .col-sm.mb-12.mb-sm-0
            ul.lista-ul--color
              li 
                i.fas.fa-check
                |  Definir o precisar el tema. Cuál va a ser objeto de su estudio o investigación. 
              li 
                i.fas.fa-check
                |  Debido a la cantidad de información que puede existir cuando se inicia una búsqueda, es necesario fijar unos criterios claros, especificar el tópico, el alcance, etc. 
              li 
                i.fas.fa-check
                |  Elegir los términos de búsqueda utilizando palabras claves y adecuadas en un lenguaje poco técnico. 
              li 
                i.fas.fa-check
                | Seleccionar las fuentes de información. Pueden ser fuentes secundarias como índices, resúmenes, bibliografías, bases de datos, etc. especializadas en el tema. 
              li 
                i.fas.fa-check
                | Ejecutar la búsqueda y ponerla en marcha.  
              li 
                i.fas.fa-check
                | Obtener los documentos que versan sobre el tema solicitándoles, comprándolos, imprimiéndolos, archivándolos, etc. 
    
    .row.mt-5
      .col-lg-4.backtitulo
        h4.mt-2.text-center Búsqueda de información en Internet
    p.mt-4 Existen distintos tipos de buscadores que nos permiten localizar páginas y documentos correctos:
    .row.mb-5.mt-5(data-aos="fade-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/ico14.svg' alt='AvatarTop')
          .tarjeta.backt
            .p-4.mt-4
              h4.text-center Motores de búsqueda
              p.text-center Son potentes programas de búsqueda que actúan automáticamente formando enormes bases de datos. Esta búsqueda se hace introduciendo palabras clave.  Por otra parte, resulta difícil encontrar información debido a la gran cantidad de ruido, es decir, resultados que no son del interés, o de silencios, cuando no se encuentran ningún tipo de resultados. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/ico15.svg' alt='AvatarTop')

          .tarjeta.backt
            .p-4.mt-4
              h4.text-center Índices
              p.text-center La diferencia con los motores es que su base de datos se mantiene manualmente, es decir que la información la incluyen los empleados o por los internautas, por lo que es menos extensa.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/ico16.svg' alt='AvatarTop')

          .tarjeta.backt
            .p-4.mt-4
              h4.text-center Sistemas mixtos
              p.text-center Lo utilizan la mayoría de los buscadores hoy día y permite realizar la búsqueda tanto por palabras clave como por categorías. Algunos ejemplos de los buscadores más utilizados son:  
              p.text-center www.google.com, www.yahoo.es, www.alltheweb.com, www.terra.es, www.msn.es, www.altavista.com, www.lycos.es, www.hispanista.com, entre otros.
    .row  
      .col-lg-4.backtitulo
        h4.mt-2.text-center Herramientas virtuales
    p.mt-4 Las herramientas virtuales como las plataformas de e-learning, campus virtual, <i>Learning Management System (LMS)</i>, aplicaciones, entre otros, son espacios virtuales de aprendizaje orientados a facilitar la experiencia de capacitación a distancia.
    .row.justify-content-center(data-aos="fade-up")
      .col-md-4.mt-4
        img(src='@/assets/curso/tema1/12.png' alt='AvatarTop')
      .col-md-6
        .row.mt-4.p-4.coss
          .col-sm.mb-12.mb-sm-0.mt-4
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Capacitación flexible y económica.
              li 
                i.fas.fa-check
                | Se combina el poder de internet con el de las herramientas tecnológicas.

              li 
                i.fas.fa-check
                | Se anulan las distancias geográficas y temporales.
              li 
                i.fas.fa-check
                | Pueden utilizarse con mínimos conocimientos.
              li 
                i.fas.fa-check
                | Ofrecen libertad en cuanto a tiempo y ritmo de aprendizaje.
    p.mt-5 Existen también otras herramientas útiles para la producción de contenidos educativos desde su diseño, traducción (en LSC), producción y divulgación, además de volverlo accesible. Para lograr este último pero imprescindible paso, es necesario conocer los criterios para la creación de herramientas virtuales accesibles. 
    p Las preferencias de usuario, acceso e interacción de contenidos deben ser fáciles de manejar y flexibles en:
    .row.mb-5(data-aos="fade-up")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/ico17.svg', alt='Texto que describa la imagen')

          h4.text-center.mt-5.mb-5 Tamaño del recurso

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/ico18.svg', alt='Texto que describa la imagen')

          h4.text-center.mt-5.mb-5 Opciones de velocidad

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/ico19.svg', alt='Texto que describa la imagen')

          h4.text-center.mt-4.mb-5 Tipos de conexión para preferencias de usuario

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/ico20.svg', alt='Texto que describa la imagen')

          h4.text-center.mt-4.mb-2 Formatos (Windows Media, Real, <i>Quicktime, Synchronized Multimedia Integration Languaje (SMIL)</i>)
    .row
      .col-md-6.backq.p-2.ma
        h5.maaa Videos Accesibles:
        .row
          .col-md-6.backq2.ma
            .row.justify-content-center.mt-4.marginbot
              .col-md-3.mb-5
                img(src='@/assets/curso/tema1/ico21.svg', alt='Texto que describa la imagen')
              .col-md-1
              .col-md-6.mb-4
                .row
                  .col-sm.mb-12.mb-sm-0
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        |  Transcripción en formato de texto.
                      li 
                        i.fas.fa-check
                        |  Subtitulado

                      li 
                        i.fas.fa-check
                        |  Audio descripción.

                      li 
                        i.fas.fa-check
                        | Interpretación por lenguaje de señas.
      .col-md-6.backq.p-2
        h5.maaa Contenido sonoro:
        .row
          .col-md-6.backq2
            .row.justify-content-center.mt-4.marginbot
              .col-md-2.mb-5
                img(src='@/assets/curso/tema1/ico22.svg', alt='Texto que describa la imagen')
              .col-md-1
              .col-md-8
                .row
                  .col-sm.mb-12.mb-sm-0
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        |  Identificación de los hablantes.
                      li 
                        i.fas.fa-check
                        |  Contenido de los diálogos.

                      li 
                        i.fas.fa-check
                        |  Reconocimiento de eventos sonoros (Música, aplausos, efectos especiales, etc).


                      li 
                        i.fas.fa-check
                        | Todos los eventos sonoros que sean relevantes para la comprensión de los documentos.


    .row.mt-4
      .col-md-6.backq.p-2.ma
        h5.maaa Contenido visual:
        .row(data-aos="fade-up")
          .col-md-6.backq2.ma
            .row.justify-content-center.mt-4.marginbot
              .col-md-3.mb-5
                img(src='@/assets/curso/tema1/ico23.svg', alt='Texto que describa la imagen')

              .col-md-8
                .row
                  .col-sm.mb-12.mb-sm-0
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        |  Descripción de las acciones.
                      li 
                        i.fas.fa-check
                        |  Capturas de pantallas, imágenes, diagramas, etc.

                      li 
                        i.fas.fa-check
                        |  Descripción de expresiones corporales.

                      li 
                        i.fas.fa-check
                        | Descripción de escenarios y localizaciones.
                      li 
                        i.fas.fa-check
                        | Transcripción de los textos que se muestran en pantalla.
                      li 
                        i.fas.fa-check
                        | Todos los eventos visuales que sean relevantes para la comprensión de los documentos.

      .col-md-6.backq.p-2
        h5.maaa Subtitulado:
        .row

          .col-md-6.backq2
            .row.justify-content-center.mt-4.marginbot
              .col-md-2.mb-5.tta
                img(src='@/assets/curso/tema1/ico24.svg', alt='Texto que describa la imagen')
              .col-md-1
              .col-md-8.mb-5
                .row
                  .col-sm.mb-12.mb-sm-0
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        |  Velocidad de 12 caracteres por segundo.
                      li 
                        i.fas.fa-check
                        |  No separar palabras.


                      li 
                        i.fas.fa-check
                        |  Separar frases largas según las conjunciones. Sincronización con el locutor en OFF.



                      li.mb-5
                        i.fas.fa-check.mb-3
                        | Utilizar paréntesis en vez de corchetes.
    .row.mt-5
      .col-lg-5.backtitulo
        h4.mt-2.text-center Herramientas con interpretación en lenguaje de señas:
    .row.justify-content-center(data-aos="fade-up")

      .col-md-6.mt-4
        .row.p-4.coss
          .col-sm.mb-12.mb-sm-0.mt-2
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | La persona que signe debe ser competente en el lenguaje de señas de uso cotidiano.
              li 
                i.fas.fa-check
                | Seguir los códigos deontológicos.

              li 
                i.fas.fa-check
                | Seguir el código de vestuario.
              li 
                i.fas.fa-check
                | Cuadre en plano medio o plano medio largo.
              li 
                i.fas.fa-check
                | Buena iluminación, son sombras en el fondo.
              li 
                i.fas.fa-check
                | Se recomienda una resolución mínima de 352 x 288 píxeles.

      .col-md-4.mt-4
        img(src='@/assets/curso/tema1/13.png' alt='AvatarTop')
    .row.mt-5
      .col-lg-5.backtitulo
        h4.mt-2.text-center Herramientas para la accesibilidad:
    .row.mt-5.justify-content-center
      .col-md-10
        .row.mt-2.bg1(data-aos="fade-up")
          .col-md-1.mt-4
            img(src='@/assets/curso/tema1/ico25.svg' alt='AvatarTop')

          .col-md-11.p-4
            p <strong>SMIL:</strong> desarrollado por W3C. Son presentaciones multimedia compuestas por elementos sonoros, videos, imágenes y textos almacenados separadamente y luego presentados simultáneamente cuando se ejecuta la presentación. Se pueden activar subtítulos y descripciones auditivas. 
        .row.mt-3.bg2(data-aos="fade-up")
          .col-md-1.mt-3
            img(src='@/assets/curso/tema1/ico26.svg' alt='AvatarTop')

          .col-md-11.p-4
            p <strong>SAMI:</strong>  <i>Synchronized Accesible Media Interchange</i> es una especificación de Microsoft que incorpora los subtítulos al dispositivo Windows Media Player. 
        .row.mt-3.bg3(data-aos="fade-up")
          .col-md-1.mt-3
            img(src='@/assets/curso/tema1/ico27.svg' alt='AvatarTop')

          .col-md-11.p-4
            p <strong><i>Dragon naturally speaking:</i></strong>   aplicación de reconocimiento de voz para generar subtítulos sin tener que exportar texto de un editor. 
        .row.mt-3.bg4(data-aos="fade-up")
          .col-md-1.mt-3
            img(src='@/assets/curso/tema1/ico28.svg' alt='AvatarTop')

          .col-md-11.p-4
            p <strong>Universal subtitles:</strong>    herramienta web colaborativa de código abierto para subtitular cualquier video de plataformas como YouTube o Vimeo. Pueden realizarse traducciones de los subtítulos y descargarlos en formato SubRip (.srt). 
        .row.mt-3.bg5(data-aos="fade-up")
          .col-md-1.mt-4
            img(src='@/assets/curso/tema1/ico29.svg' alt='AvatarTop')

          .col-md-11.p-4
            p <strong>Lector inversivo de la herramienta Teams Microsoft:</strong>    herramienta gratuita con técnicas para mejorar la lectura y escritura para pc Windows 10. Ofrece lectura en voz alta, línea focal, diccionario de imágenes, traductor, cambio de color de fondo, cambio del espaciado entre líneas y palabras, resaltar partes del fragmento oído y sílabas; separa sílabas del texto, señala sustantivos, verbos o adjetivos; trabaja con procesadores de texto como PDF, One Note y Word. 
        .row.mt-3.bg6
          .col-md-1.mt-4
            img(src='@/assets/curso/tema1/ico30.svg' alt='AvatarTop')

          .col-md-11.p-4
            p <strong>ELAN:</strong>    es un programa de computación que sirve para hacer transcripciones mientras se escucha el audio. Se puede bajar de Internet y es gratis. Se recomienda que el sonido esté grabado en el formato WAV. “La transcripción de discursos en lengua de señas es una labor ardua para el observador a simple vista. Por tal razón, el software ELAN se vislumbra como una herramienta tecnológica idónea para dicho trabajo. Su arquitectura informática permite en una misma interfaz articular y gestionar archivos de video y de audio de modo que puedan realizarse transcripciones escritas en una línea de tiempo”. Barreto, (2012) 

</template>

<script>
export default {
  name: 'Tema1',

  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
