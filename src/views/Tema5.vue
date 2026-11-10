<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistematización de los costos de operación

    .bloque-texto-g.tema5-bloque-apertura.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 La sistematización de los costos de operación permite organizar, procesar y consultar la información económica y técnica de las actividades agrícolas mecanizadas. Mediante el uso de registros estructurados y herramientas informáticas, las empresas pueden consolidar los datos de consumo, tiempos de trabajo, mantenimiento y otros recursos utilizados en la prestación de los servicios. Esta información facilita el cálculo de costos, el seguimiento de las operaciones y la comparación de resultados para apoyar la toma de decisiones.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Registro y organización de la información de costos

    p.mb-4 La sistematización de los costos requiere organizar los datos obtenidos durante la ejecución de las actividades agrícolas mecanizadas para facilitar su consulta, procesamiento y análisis. Esta información debe relacionarse con cada labor, equipo, predio, contrato y periodo de operación, de manera que sea posible identificar los recursos utilizados y determinar los costos asociados.

    p.mb-4 Para lograr una organización adecuada, la empresa debe establecer criterios de clasificación y consolidación de los registros. Entre los principales aspectos que se deben considerar se encuentran:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.w-100(
          src="@/assets/curso/temas/t5/img2.png"
          alt=""
        )
      .col-lg-6
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Identificación de la actividad")
            .col-12
              p.mb-0 Registrar el tipo de labor realizada, el cliente, el predio, el área intervenida y la fecha de ejecución. Esto permite reconocer el servicio al que corresponde cada costo.
          .row(numero="2" titulo="Identificación de la maquinaria")
            .col-12
              p.mb-0 Relacionar los registros con el equipo utilizado, su identificación, las horas de funcionamiento y el operador responsable.
          .row(numero="3" titulo="Clasificación de los costos")
            .col-12
              p.mb-0 Organizar los valores según su naturaleza, como costos de propiedad, combustible, lubricantes, mantenimiento, mano de obra y traslados.
          .row(numero="4" titulo="Registro de cantidades y valores")
            .col-12
              p.mb-0 Consignar las unidades consumidas, las cantidades, los precios unitarios y los valores totales, utilizando unidades de medida uniformes.
          .row(numero="5" titulo="Consolidación de la información")
            .col-12
              p.mb-0 Reunir los datos de las diferentes actividades para obtener costos por hora, hectárea, labor o contrato.
          .row(numero="6" titulo="Actualización y verificación")
            .col-12
              p.mb-0 Revisar periódicamente los registros, corregir inconsistencias documentadas y comprobar que los valores coincidan con sus respectivos soportes.

    .tema5-panel.mb-0
      .row.g-0.align-items-stretch
        .col-lg-7.p-4
          p Por ejemplo, una empresa que presta servicios de preparación de suelo puede organizar la información de cada contrato mediante registros que relacionen el cliente, el predio, las hectáreas trabajadas, el tractor utilizado, las horas de operación, el consumo de combustible, la mano de obra, el mantenimiento y los costos de traslado. Al consolidar estos datos, puede determinar cuánto costó la labor y comparar ese resultado con el de otros contratos.
          .row
            .col-md-auto.mb-3.mb-md-0.d-none.d-lg-block
              img.tema5-icono(
                src="@/assets/curso/temas/t5/img3.svg"
                alt=""
              )
            .col-md
              p.mb-0 La información organizada también facilita la elaboración de informes y la identificación de diferencias entre los costos de actividades similares. Para mantener su utilidad, los registros deben conservar criterios uniformes de clasificación, unidades de medida, periodos de consulta y responsables de actualización. De esta manera, la empresa dispone de una base de información confiable para controlar sus operaciones y apoyar las decisiones relacionadas con el uso de la maquinaria.
        .col-lg-5
          img.tema5-panel__imagen(
            src="@/assets/curso/temas/t5/img4.png"
            alt=""
          )

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Herramientas informáticas para el cálculo y control

    p.mb-4 Las herramientas informáticas facilitan el procesamiento y análisis de la información relacionada con los costos de operación de las actividades agrícolas mecanizadas. Su utilización permite automatizar cálculos, organizar registros, actualizar valores y generar informes que apoyan el seguimiento de los recursos utilizados y la evaluación económica de los servicios.

    p.mb-4 Entre las herramientas que pueden utilizarse se encuentran:

    .row.g-0.tema5-conectadas.mb-4
      .col-md-6.col-xl-3
        .tema5-conectadas__tarjeta.tema5-conectadas__tarjeta--verde.p-4
          img.tema5-conectadas__imagen.mb-3.pt-3(
            src="@/assets/curso/temas/t5/img5.svg"
            alt=""
          )
          h5.text-center Hojas de cálculo
          p.mb-5 Programas como Microsoft Excel o Google Sheets permiten organizar datos, aplicar fórmulas, calcular costos por hora y hectárea, consolidar registros y elaborar gráficos para comparar resultados.
      .col-md-6.col-xl-3
        .tema5-conectadas__tarjeta.tema5-conectadas__tarjeta--beige.p-4
          img.tema5-conectadas__imagen.mb-3.pt-3(
            src="@/assets/curso/temas/t5/img6.svg"
            alt=""
          )
          h5.text-center Sistemas de gestión empresarial
          p.mb-5 Permiten integrar información contable, administrativa, financiera y operativa, facilitando el seguimiento de los costos y los recursos de la empresa.
      .col-md-6.col-xl-3
        .tema5-conectadas__tarjeta.tema5-conectadas__tarjeta--naranja.p-4
          img.tema5-conectadas__imagen.mb-3.pt-3(
            src="@/assets/curso/temas/t5/img7.svg"
            alt=""
          )
          h5.text-center Aplicaciones de gestión de maquinaria
          p.mb-5 Algunas soluciones digitales permiten registrar horas de funcionamiento, consumo de combustible, mantenimiento, ubicación y rendimiento de los equipos.
      .col-md-6.col-xl-3
        .tema5-conectadas__tarjeta.tema5-conectadas__tarjeta--salmon.p-4
          img.tema5-conectadas__imagen.mb-3.pt-3(
            src="@/assets/curso/temas/t5/img8.svg"
            alt=""
          )
          h5.text-center Herramientas de análisis y visualización de datos
          p.mb-5 Facilitan la elaboración de indicadores, gráficos e informes para identificar tendencias, comparar resultados y apoyar las decisiones.

    p.mb-4 La selección de una herramienta depende del tamaño de la empresa, la cantidad de información que administra, los recursos tecnológicos disponibles y las necesidades de control. A continuación, se relacionan algunas aplicaciones con su utilidad en los servicios agrícolas mecanizados:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 16.
      span Aplicación de herramientas informáticas en la gestión de costos
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Herramienta
            th(scope="col") Aplicación
            th(scope="col") Ejemplo en mecanización agrícola
        tbody
          tr
            td Hojas de cálculo
            td Registro, organización y cálculo de costos.
            td Calcular el costo horario de un tractor y el costo por hectárea de una labor.
          tr
            td Sistemas de gestión empresarial
            td Integración de información administrativa, contable y operativa.
            td Consultar los costos asociados a contratos, compras y mantenimiento.
          tr
            td Aplicaciones de gestión de maquinaria
            td Seguimiento de la utilización y el estado de los equipos.
            td Registrar horas de funcionamiento, consumo de combustible y necesidades de mantenimiento.
          tr
            td Herramientas de análisis de datos
            td Elaboración de indicadores e informes.
            td Comparar los costos de preparación de suelo entre diferentes predios o periodos.

    .tema5-reflexion.mb-4
      .row.g-0.align-items-stretch
        .col-lg-6.p-4
          p.mb-0 Por ejemplo, una empresa de servicios agrícolas mecanizados utiliza una hoja de cálculo para registrar las horas de trabajo de sus tractores, el consumo de combustible, los gastos de mantenimiento y las hectáreas atendidas. Mediante fórmulas, consolida los valores y calcula el costo por hora y por hectárea de cada labor. Posteriormente, utiliza gráficos para comparar los resultados entre contratos e identificar cuáles presentan mayores costos de operación.
        .col-lg-6
          img.tema5-reflexion__imagen(
            src="@/assets/curso/temas/t5/img9.svg"
            alt=""
          )

    p.mb-0 Para obtener resultados confiables, las herramientas deben alimentarse con información completa, actualizada y verificada. También es necesario establecer responsables de registro, proteger los archivos, conservar copias de seguridad y revisar periódicamente las fórmulas utilizadas. La automatización facilita el procesamiento de los datos, pero no reemplaza la revisión de la información ni el análisis de los resultados.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Estándares de costos y análisis por actividad

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img.tema5-panel__imagen(
          src="@/assets/curso/temas/t5/img10.svg"
          alt=""
        )
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p Los estándares de costos son valores de referencia establecidos para estimar los recursos, tiempos y costos necesarios para ejecutar una actividad agrícola mecanizada bajo determinadas condiciones de operación. Se utilizan como base para planificar los servicios, elaborar presupuestos y comparar los resultados reales con los valores previstos.
        p.mb-0 Para establecer estos estándares se pueden considerar los registros históricos de la empresa, las especificaciones técnicas de la maquinaria, los rendimientos esperados, los precios de los insumos y las condiciones de trabajo. Es importante actualizarlos cuando cambian los precios, los equipos, las características de los terrenos o los procedimientos de operación.

    .row.justify-content-center.mb-4
      .col-auto
        .tema5-pastilla.p-2.px-4
          p.mb-0 Entre los principales estándares que pueden utilizarse en los servicios agrícolas mecanizados se encuentran:

    .row.justify-content-center.mb-4
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.h-100.p-4.p-lg-5
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center Estándar de consumo
          p.text-center.mb-0 Establece la cantidad esperada de recursos por unidad de trabajo, como los galones de combustible por hectárea.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.h-100.p-4.p-lg-5
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center Estándar de tiempo
          p.text-center.mb-0 Determina el tiempo previsto para ejecutar una actividad, por ejemplo, las horas necesarias para preparar una hectárea.
      .col-md-6.col-xl-3.mb-4.mb-md-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-4.p-lg-5
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center Estándar de rendimiento
          p.text-center.mb-0 Establece la capacidad de trabajo esperada de la maquinaria, expresada en hectáreas por hora.
      .col-md-6.col-xl-3
        .tarjeta-numerada.tema5-numerada--salmon.h-100.p-4.p-lg-5
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center Estándar de costo
          p.text-center.mb-0 Define el valor de referencia por hora, hectárea o labor, considerando los recursos necesarios para su ejecución.

    p.mb-4 El análisis por actividad consiste en examinar los costos asociados a cada labor mecanizada para identificar su comportamiento, reconocer diferencias frente a los valores de referencia y determinar posibles oportunidades de mejora. La comparación puede considerar aspectos como el consumo de combustible, las horas de operación, el rendimiento de la maquinaria, los costos de mantenimiento y los desplazamientos.

    .tema5-reflexion.p-4.mb-4
      .row.align-items-stretch
        .col-lg-7.mb-4.mb-lg-0
          h4.tema5-reflexion__titulo.p-3 Ejemplo práctico
          p Una empresa establece como estándar un consumo de combustible de 8 galones por hectárea para una labor de preparación de suelo. Durante la ejecución de un contrato, registra un consumo real de 9,5 galones por hectárea.
          p La diferencia entre ambos valores es:
          .tema5-calculo.p-3.mb-3
            h4.mb-0 9,5 − 8 = 1,5 galones por hectárea
          p.mb-0 Esto significa que el consumo real superó el estándar en 1,5 galones por hectárea. Esta variación puede estar relacionada con las condiciones del terreno, la humedad del suelo, la profundidad de trabajo, el estado de la maquinaria o la forma de operación. Por tanto, antes de establecer una acción correctiva, es necesario identificar la causa de la diferencia.
        .col-lg-5
          img.tema5-reflexion__imagen(
            src="@/assets/curso/temas/t5/img11.svg"
            alt=""
          )

    p.mb-0 La comparación de los estándares con los resultados reales permite evaluar el desempeño de cada actividad.
    p.mb-4 La siguiente tabla presenta algunos criterios que pueden utilizarse para este análisis:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 17.
      span Criterios para el análisis de costos por actividad mecanizada
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Criterio
            th(scope="col") Información que se compara
            th(scope="col") Utilidad del análisis
        tbody
          tr
            td Consumo de combustible
            td Galones previstos y consumidos por hectárea.
            td Identificar variaciones en el consumo.
          tr
            td Tiempo de operación
            td Horas estimadas y horas reales por labor.
            td Reconocer demoras o diferencias en los tiempos de ejecución.
          tr
            td Rendimiento de maquinaria
            td Capacidad efectiva prevista y obtenida.
            td Evaluar el aprovechamiento de los equipos.
          tr
            td Mantenimiento
            td Costos presupuestados y costos registrados.
            td Identificar incrementos en los gastos de mantenimiento.
          tr
            td Costo por hectárea
            td Costo proyectado y costo real de la actividad.
            td Evaluar las diferencias económicas entre lo previsto y lo ejecutado.

    p.mb-4 Los resultados del análisis permiten reconocer actividades con costos superiores a los esperados, identificar las causas de las variaciones y establecer medidas para mejorar el uso de los recursos. Entre las acciones posibles se encuentran ajustar la programación de las labores, optimizar los recorridos, revisar las condiciones de operación y fortalecer el mantenimiento preventivo.

    .row.align-items-center.justify-content-center.mb-0
      .col-md-auto.mb-3.mb-md-0.d-none.d-lg-block
        img.tema5-icono(
          src="@/assets/curso/temas/t5/img12.svg"
          alt=""
        )
      .col-lg-9
        .tema5-nota.p-3
          p.mb-0 Los estándares deben utilizarse como referencias para orientar el análisis y no como valores invariables. Su pertinencia depende de las condiciones técnicas, económicas y operativas en las que se desarrolla cada actividad mecanizada.
</template>

<script>
export default {
  name: 'Tema5',
}
</script>
