<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    img(src="@/assets/curso/1.png", alt="Texto que describa la imagen")(data-aos="fade-up")
    p.mb-5.mt-4 Preparar el servicio de acuerdo con el contexto y los usuarios, es una responsabilidad del prestador de servicio de interpretación. Esto se debe a que cada usuario responde a especificaciones particulares debido a su nivel cultural y su contexto. Además, teniendo en cuenta los nuevos escenarios tecnológicos en que se puede realizar un servicio de interpretación, también se requiere una previa preparación del servicio bajo los términos de estos contextos.
    p.mt-5 Así que, este componente formativo se enfoca en aspectos relacionados con:


    .row.mb-5(data-aos="fade-up")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/ico1.svg', alt='Texto que describa la imagen')

          h4.text-center Fundamentación teórica y normativa sobre comunidad y cultura y sus enfoques

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/ico2.svg', alt='Texto que describa la imagen')

          h4.text-center Desarrollo de habilidades técnicas de búsquedas virtuales

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/ico3.svg', alt='Texto que describa la imagen')

          h4.text-center Definición de los requerimientos del intérprete de apoyo, turnos y relevos

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-4.mt-3
            .col-4
              figure
                img(src='@/assets/curso/ico4.svg', alt='Texto que describa la imagen')

          h4.text-center.mb-4 Gestión de los protocolos de etiqueta


    p.mt-5 Al finalizar, el aprendiz estará en capacidad de reconocer lo referente a la etiqueta y protocolo del servicio; aplicar los conceptos generales sobre la comunidad, cultura y normatividad que regula la prestación del servicio. Tendrá las herramientas para utilizar las técnicas de búsqueda virtuales para el manejo de la información según los contenidos desarrollados y sabrá utilizar las modalidades de interpretación, etiqueta y protocolo de los usuarios en los distintos escenarios físicos. 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
