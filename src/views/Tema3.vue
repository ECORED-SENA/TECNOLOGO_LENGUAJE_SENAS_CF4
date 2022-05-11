<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3 
      h1 Logística y protocolos de etiqueta
    img.mb-5(src="@/assets/curso/tema3/1.png", alt="Texto que describa la imagen")(data-aos="fade-up")
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 3.1 Conceptos
    p Entender y esquematizar los conceptos relacionados con la organización de un evento en el que se presta un servicio de interpretación, aportará mayor claridad al desarrollo de este respecto a los roles que cumplen los participantes, en los que se incluyen: el coordinador, los intérpretes activos y los intérpretes de apoyo. Para esto se requiere una adecuada programación logística que permita alcanzar el objetivo de servicio. 
    
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 3.2 Intérpretes de apoyo 
    .row.justify-content-center(data-aos="fade-up")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center

              .col-lg-10
                  p Más que un momento de descanso, se convierte en un intérprete pasivo que sirve de apoyo al compañero que presta activamente el servicio. El intérprete de apoyo está atento a los datos que exigen atención más detallada de lo normal como las fechas, los números, nombres con apellidos; cuando el intérprete activo no recuerda una seña o no la sabe; o cuando el intérprete activo tiene necesidad de finalizar antes de tiempo su intervención. 
                  p Este intérprete de apoyo es también, en la mayoría de los casos, el intérprete de relevo; y lo que hace que esté en completa conexión con la información que se está interpretando, pues debe darle continuidad al tema atinadamente con el hilo conductor de la información, sin perder la idea del menaje.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 3.3 Turnos y relevos
    .row(data-aos="fade-up")
      .col-lg-5
        img(src="@/assets/curso/tema3/2.png", alt="Texto que describa la imagen")

      .col-lg-7   
        p Todo evento en el que se solicite interpretación de lengua de señas y que dure más de una hora, requiere como mínimo un intérprete de relevo para hacer los respectivos cambios cada veinte minutos. Los intérpretes establecerán previamente aspectos organizacionales como la metodología que se utilizará en la interpretación, el uso de medios visuales y una ubicación estratégica del intérprete pasivo que permita la visualización eficaz de este para proporcionar al intérprete activo los datos que se puedan pasar por alto. 
        p Pasados veinte minutos, el intérprete de relevo se colocará detrás del intérprete activo evitando ser un distractor y hará un corto y sutil toque en el hombro, para que este finalice la idea que está transmitiendo y así cambiar el rol, o podrían aprovechar el cambio si el expositor hace una pausa.
    .row.mt-5(data-aos="fade-up")
      .col-lg-5.backtitulo
        h4.mt-2 Etiqueta y protocolo en el servicio de interpretación
    p.mt-5 Cuando se habla de etiqueta y protocolo es necesario mencionar el Código Deontológico, “es decir, un conjunto de pautas o deberes que los profesionales tienen que seguir en el desarrollo de su actividad” Méndez, (2010). De acuerdo con lo anterior, se tendrán en cuenta diversos tipos de características como: las personales, intelectuales, éticas, entre otras. También debe considerarse el atuendo adecuado, la apariencia, la ubicación espacial, la preparación de los temas a interpretar, etc.


</template>

<script>
export default {
  name: 'Tema3',
  components: {},
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
