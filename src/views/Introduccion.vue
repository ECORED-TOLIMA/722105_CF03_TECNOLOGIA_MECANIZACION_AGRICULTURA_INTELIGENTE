<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 Cada actividad agrícola mecanizada implica el uso de recursos que tienen un valor económico. La preparación del suelo, la siembra, la fertilización y la cosecha requieren maquinaria, combustible, lubricantes, mantenimiento, mano de obra y tiempo de operación. Aunque estos recursos hacen posible la ejecución de las labores, no siempre se identifican y calculan todos los costos asociados, lo que puede generar dificultades para establecer tarifas, controlar los gastos y determinar la rentabilidad de los servicios.

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-lg-4.mb-4.mb-md-0
        figure.mb-0
          img.w-100(
            src="@/assets/curso/temas/intro/img1.png"
            alt=""
          )
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En una empresa de servicios agrícolas mecanizados, conocer cuánto cuesta operar un tractor o ejecutar una labor por hectárea permite planificar los recursos, proyectar presupuestos y tomar decisiones sobre el uso, mantenimiento y adquisición de maquinaria. Para lograrlo, es necesario identificar los elementos que conforman los costos, recopilar información confiable, considerar la depreciación de los equipos y aplicar métodos de cálculo acordes con las características de cada actividad.
        p.mb-0 Este proceso también requiere organizar y sistematizar los registros, analizar los resultados mediante indicadores y reconocer las diferencias entre los costos proyectados y los realmente generados. Cuando se presentan variaciones o inconsistencias, su identificación facilita establecer ajustes y acciones correctivas que contribuyan al mejoramiento de las operaciones.

    .cajon.color-primario.p-4.mb-4
      p.mb-0 A lo largo del componente se abordan los fundamentos del costeo, la información necesaria para determinar los costos, los métodos de proyección y cálculo, las herramientas para su sistematización y los procedimientos para evaluar los resultados. Estos conocimientos permiten comprender la importancia de una adecuada gestión de los costos y fortalecer la toma de decisiones en los servicios agrícolas mecanizados, de acuerdo con las condiciones de producción y los requerimientos de cada empresa.

    p.mb-4 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.

    .row.justify-content-center
      .col-lg-12
        .video
          iframe(width="1331" height="749" src="https://www.youtube.com/embed/ryjeovnoOCY" title="Operating Costs of Mechanized Agricultural Activities" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
}
</script>
