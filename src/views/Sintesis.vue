<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo aborda los fundamentos necesarios para proyectar, calcular, evaluar y controlar los costos de operación de las actividades agrícolas mecanizadas. Para ello, desarrolla aspectos relacionados con la empresa y la prestación de servicios mecanizados, los elementos y sistemas de costeo, la recolección y organización de información, la gestión de inventarios y la depreciación de maquinaria. Asimismo, comprende los métodos de cálculo de costos, la determinación del costo horario y por actividad, el uso de herramientas informáticas, la aplicación de indicadores y el análisis de resultados. Finalmente, aborda la identificación de novedades e inconsistencias, la implementación de ajustes y acciones correctivas, y la verificación de su efectividad, con el propósito de fortalecer la gestión económica, optimizar los recursos y apoyar la toma de decisiones en las actividades agrícolas mecanizadas.

    .row.justify-content-center
      .col-lg-12.mb-4
        figure
          img(
            src="@/assets/curso/sintesis.svg"
            alt="En la síntesis se presentan los costos de operación de las actividades agrícolas mecanizadas, organizado en siete temas: empresa y producción, fundamentos de costos, información para su determinación, proyección y cálculo, sistematización, evaluación y análisis, y gestión de novedades, inconsistencias y ajustes."
          )
      .col-auto
        a.anexo.mb-0(
          :href="obtenerLink('/downloads/Sintesis.pdf')"
          target="_blank"
          rel="noopener noreferrer"
        )
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p.mb-0 Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
