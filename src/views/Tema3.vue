<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Información para la determinación de costos

    .tema3-apertura.mb-0
      img.tema3-apertura__imagen(
        src="@/assets/curso/temas/t3/img1.png"
        alt=""
      )
      .tema3-apertura__destacado.p-4
        p.mb-0 La calidad del cálculo depende de la confiabilidad de los datos que lo sustentan. Los registros incompletos, desactualizados o sin soportes pueden generar costos subestimados o duplicados. Por ello, la empresa debe definir qué información necesita, de dónde se obtiene, quién es responsable de registrarla y cómo se conserva para facilitar su consulta y verificación.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Fuentes y técnicas de recolección de información

    .bloque-texto-g.tema3-bloque-fuentes.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 Las fuentes de información pueden ser internas o externas. Las internas se generan en la propia empresa e incluyen órdenes de trabajo, registros de horómetros, controles de combustible, facturas, nómina, inventarios, órdenes de mantenimiento y reportes de producción. Las externas provienen de proveedores, entidades oficiales, manuales técnicos, tarifas de referencia, entidades financieras y publicaciones especializadas.

    p.mb-4 Cada fuente proporciona datos que permiten identificar y cuantificar los recursos utilizados en las actividades mecanizadas. La siguiente tabla presenta algunas de las principales fuentes y su aplicación en la determinación de costos:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 7.
      span Fuentes de información para la determinación de costos
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Fuente
            th(scope="col") Información que aporta
            th(scope="col") Uso en el cálculo
        tbody
          tr
            td Registros de operación
            td Horas de máquina, hectáreas trabajadas, tiempos de parada y rendimiento.
            td Calcular el costo por hora y por unidad de trabajo.
          tr
            td Facturas y comprobantes
            td Precios de combustible, lubricantes, repuestos y servicios.
            td Valorar los recursos adquiridos y consumidos.
          tr
            td Registros laborales
            td Salarios, prestaciones, aportes y horas efectivas de trabajo.
            td Determinar el costo de la mano de obra.
          tr
            td Inventarios y kárdex
            td Entradas, salidas, existencias y valor de los insumos.
            td Determinar el costo de los materiales consumidos.
          tr
            td Manuales y fichas técnicas
            td Potencia, consumo, capacidad, mantenimiento y vida útil de los equipos.
            td Proyectar costos cuando no existe información histórica suficiente.
          tr
            td Referencias externas
            td Precios, tasas, factores técnicos y valores de mercado.
            td Contrastar supuestos y actualizar estimaciones.

    .row.justify-content-center.mb-4
      .col-lg-6
        .tema3-subtitulo-pastilla.p-2
          p.mb-0 Entre las técnicas de recolección se encuentran:

    SlyderF.mb-4(columnas="col-md-6 col-xl-4")
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t3/img3.svg" alt="")
        h5.text-center Observación directa
        p.mb-0.text-center Permite identificar y registrar las condiciones en que se ejecutan las labores, los tiempos de operación, las paradas y los recorridos.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t3/img4.svg" alt="")
        h5.text-center Revisión documental
        p.mb-0.text-center Consiste en consultar facturas, órdenes de trabajo, registros de mantenimiento, nóminas e inventarios para obtener datos verificables.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t3/img5.svg" alt="")
        h5.text-center Entrevistas
        p.mb-0.text-center Permiten recopilar información de operadores, responsables de mantenimiento y personal administrativo sobre el funcionamiento de los equipos y los recursos utilizados.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t3/img6.svg" alt="")
        h5.text-center Registro automático de equipos
        p.mb-0.text-center Utiliza dispositivos o sistemas que recopilan datos de operación, como horas de funcionamiento, consumo de combustible, ubicación y rendimiento.
      .tarjeta.BGTARG.p-5.h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src="@/assets/curso/temas/t3/img7.svg" alt="")
        h5.text-center Consulta de fuentes secundarias
        p.mb-0.text-center Comprende la revisión de manuales técnicos, publicaciones especializadas, tarifas de referencia y documentos de entidades oficiales.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-primario.p-3.mb-4
          p.mb-0 La técnica seleccionada depende del dato que se requiere obtener. Por ejemplo, para conocer el consumo real de combustible se pueden relacionar los registros de abastecimiento con las lecturas del horómetro. Para estimar los tiempos de traslado es necesario observar los recorridos y registrar las distancias y su duración.

    p.mb-0 Antes de utilizar los datos, es necesario comprobar que cuenten con fecha, unidad de medida, responsable, equipo asociado y soporte documental, cuando corresponda. También se deben identificar valores atípicos, registros duplicados y diferencias entre unidades de medida, como galones y litros o hectáreas y acres, para evitar errores en los cálculos.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Registro y documentación de los costos

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-1.mb-4.mb-md-0.d-none.d-lg-block
        img.tema3-icono(
          src="@/assets/curso/temas/t3/img8.svg"
          alt=""
        )
      .col-lg-11
        .tema3-nota.p-2.px-4
          p.mb-0 El registro de costos consiste en consignar de manera ordenada los recursos consumidos y los valores asociados a cada operación. La documentación reúne los soportes que permiten comprobar el origen y la validez de los datos. Por esta razón, documentos como una orden de trabajo, una factura, un comprobante de salida de almacén o una planilla de horas deben relacionarse con la actividad, el equipo y el periodo correspondiente.

    p.mb-4 Los principales documentos y registros utilizados para controlar los costos en una empresa de servicios agrícolas mecanizados se presentan a continuación:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 8.
      span Documentos y registros para el control de costos
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Documento o registro
            th(scope="col") Datos mínimos
            th(scope="col") Finalidad
        tbody
          tr
            td Orden de trabajo
            td Cliente, predio, labor, fecha, equipo, operador y área.
            td Identificar el objeto de costo.
          tr
            td Parte diario de máquina
            td Horómetro inicial y final, horas efectivas, paradas y observaciones.
            td Controlar el uso del equipo.
          tr
            td Registro de combustible
            td Fecha, máquina, cantidad, precio y responsable.
            td Calcular el consumo y el costo del combustible.
          tr
            td Orden de mantenimiento
            td Falla, repuestos, mano de obra, tiempo y valor.
            td Documentar y asignar los costos de mantenimiento.
          tr
            td Comprobante de almacén
            td Artículo, cantidad, valor, fecha y destino.
            td Controlar la salida y el consumo de inventarios.
          tr
            td Soporte laboral
            td Tiempo trabajado y conceptos de costo aplicables.
            td Determinar el costo de la mano de obra.

    p.mb-4 Un registro confiable debe ser oportuno, legible, completo, consistente y verificable. Las correcciones deben conservar la trazabilidad de la información; por tanto, no se recomienda eliminar el dato original sin dejar constancia del ajuste, su motivo, fecha y responsable.

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-1.mb-4.mb-md-0.d-none.d-lg-block
        img.tema3-icono(
          src="@/assets/curso/temas/t3/img9.svg"
          alt=""
        )
      .col-lg-9
        .tema3-nota.p-2.px-4
          p.mb-0 Los documentos pueden conservarse en formato físico o digital, de acuerdo con los procedimientos de la empresa y las disposiciones aplicables. Su organización facilita la consulta de los soportes, la verificación de los valores registrados y el seguimiento de los costos asociados a cada actividad mecanizada.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Gestión y valoración de inventarios

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El inventario reúne los materiales, insumos, repuestos y piezas disponibles para la operación y el mantenimiento de la maquinaria agrícola. En una empresa de servicios mecanizados puede incluir ACPM, aceites, filtros, grasa, correas, rodamientos, discos, cuchillas y herramientas. Una gestión adecuada permite mantener la disponibilidad de los recursos, evitar excesos de existencias y reducir las interrupciones por falta de materiales.
        p Los inventarios pueden agruparse según el uso que tienen en las actividades de mecanización, como se presenta en la tabla:
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-inventario-imagen(
          src="@/assets/curso/temas/t3/img10.png"
          alt=""
        )

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 9.
      span Tipos de inventario en los servicios agrícolas mecanizados
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Tipo de inventario
            th(scope="col") Ejemplos
            th(scope="col") Tratamiento en los costos
        tbody
          tr
            td Insumos de operación
            td ACPM, aceite, grasa y refrigerante.
            td Se asignan al equipo o labor que los consume.
          tr
            td Repuestos
            td Filtros, correas, rodamientos y mangueras.
            td Se asignan a las actividades de mantenimiento o reparación, según su utilización.
          tr
            td Piezas de desgaste
            td Discos, cuchillas, puntas y cinceles.
            td Se asignan según el consumo y el criterio de uso establecido.
          tr
            td Herramientas
            td Llaves, gatos, engrasadoras y equipos de taller.
            td Se controlan como recursos de apoyo, de acuerdo con su naturaleza contable.

    p.mb-5 La #[b valoración] consiste en asignar un valor monetario a las existencias y determinar el costo de los materiales que salen del inventario. Entre los métodos utilizados se encuentran el promedio ponderado y primeras entradas, primeras salidas (PEPS).

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t3/img11.svg" alt="")
          .tarjeta.tema1-apertura__destacado2
            .p-4
              h4 Promedio ponderado
              p.mb-0 Calcula un costo unitario promedio a partir del valor total y la cantidad de unidades disponibles. Este valor se utiliza para determinar el costo de las salidas.
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t3/img12.svg" alt="")
          .tarjeta.tema1-apertura__destacado2
            .p-4
              h4 Primeras entradas, primeras salidas (PEPS)
              p.mb-0 Considera que los primeros materiales que ingresan al inventario son los primeros en salir. Por tanto, las salidas se valoran con los costos de las unidades más antiguas disponibles.

    p.mb-4 La empresa debe aplicar el método que corresponda según el marco de información financiera que le resulte aplicable y mantener consistencia en su utilización.

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema3-formula-titulo.p-4.py-3.mb-3
          p.mb-2 Para calcular el costo promedio unitario se utiliza la siguiente fórmula:
          .tema3-calculo.p-3
            h4.tema3-calculo__operacion.mb-0 Costo promedio unitario = Valor total de existencias disponibles ÷ Cantidad disponible

    .tema3-ejemplo-inventario.p-4.mb-4
      .row.align-items-stretch.justify-content-center
        .col-lg-4.col-8.mb-4.mb-lg-0
          img.tema3-ejemplo-inventario__imagen(
            src="@/assets/curso/temas/t3/img13.png"
            alt=""
          )
        .col-lg-8
          p Por ejemplo: una bodega tiene 500 galones de ACPM valorados en $5.400.000 y recibe 1.000 galones adicionales por $11.200.000. El total disponible corresponde a 1.500 galones, con un valor de $16.600.000.
          .tema3-formula-titulo.p-4.py-3.mb-3
            p.mb-2 El costo promedio unitario se determina así:
            .tema3-calculo.p-3
              h4.tema3-calculo__operacion.mb-0 $16.600.000 ÷ 1.500 = $11.066,67 por galón
          .tema3-formula-titulo.p-4.py-3.mb-3
            p.mb-2 Si se entregan 320 galones para una labor agrícola mecanizada, el costo asignado será:
            .tema3-calculo.p-3
              h4.tema3-calculo__operacion.mb-0 320 × $11.066,67 = $3.541.334,40
          p.mb-0 Después de esta salida, el saldo del inventario será de 1.180 galones. Su valor se determina restando el costo de la salida al valor total disponible.

    p.mb-4 La toma física de inventarios consiste en contar o medir los materiales disponibles y comparar las cantidades encontradas con los registros. Las diferencias pueden deberse a errores de medición, salidas no registradas, pérdidas, daños o errores de digitación. Antes de realizar un ajuste es necesario investigar la causa y documentar la decisión.

    .cajon.color-secundario.p-4.mb-0
      p.mb-0 La gestión de inventarios también requiere establecer responsables, condiciones adecuadas de almacenamiento, niveles mínimos y máximos de existencias y puntos de reposición. Estas medidas permiten anticipar las necesidades de materiales y garantizar su disponibilidad para las actividades de operación y mantenimiento.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Depreciación de la maquinaria agrícola

    .tema3-depreciacion-apertura.mb-4
      .row.g-0.align-items-stretch
        .col-lg-7.p-4
          p La depreciación es la distribución sistemática del valor depreciable de un activo durante su vida útil. En la maquinaria agrícola permite reconocer el consumo de su capacidad de servicio debido al uso, el desgaste, el paso del tiempo y la obsolescencia. Aunque no representa necesariamente una salida de efectivo en cada periodo, debe considerarse en el análisis de los costos, ya que permite reconocer el consumo económico del equipo y planear su reposición.
          .row
            .col-auto.mb-3.mb-md-0.d-none.d-lg-block
              img.tema3-icono(
                src="@/assets/curso/temas/t3/img14.svg"
                alt=""
              )
            .col-md
              p.mb-0 Para calcular la depreciación se requiere conocer el costo del activo, el valor residual o de salvamento, la vida útil y el método de depreciación. El costo del activo puede incluir el precio de adquisición y los desembolsos directamente atribuibles para dejarlo en condiciones de funcionamiento, de acuerdo con el marco contable aplicable. El valor residual corresponde a la estimación del importe que podría obtenerse al final de la vida útil, una vez descontados los costos de disposición.
        .col-lg-5
          img.tema3-depreciacion-apertura__imagen(
            src="@/assets/curso/temas/t3/img15.png"
            alt=""
          )

    p.mb-4 A continuación, se presentan los datos básicos necesarios para determinar el valor depreciable de una máquina agrícola, mediante un ejemplo:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 10.
      span Datos para el cálculo de la depreciación de maquinaria agrícola
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Dato
            th(scope="col") Descripción
            th(scope="col") Ejemplo
        tbody
          tr
            td Costo del activo
            td Valor reconocido de adquisición y puesta en funcionamiento.
            td $250.000.000
          tr
            td Valor residual
            td Valor estimado al final de la vida útil.
            td $75.000.000
          tr
            td Vida útil
            td Periodo o unidades de producción esperadas.
            td 10 años o 10.000 horas
          tr
            td Valor depreciable
            td Costo del activo menos valor residual.
            td $175.000.000

    .row.justify-content-center.mb-5
      .col-lg-7
        .tema3-subtitulo-pastilla.p-2
          p.mb-0 Entre los métodos utilizados para calcular la depreciación se encuentran:

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t3/img16.svg" alt="")
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center Línea recta
              p.mb-0 Distribuye el valor depreciable en partes iguales durante los años de vida útil del activo.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t3/img17.svg" alt="")
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center Unidades de producción
              p.mb-0 Asigna la depreciación de acuerdo con el uso real del equipo, por ejemplo, las horas registradas en el horómetro.
      .col-lg-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t3/img17.svg" alt="")
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center Métodos acelerados
              p.mb-0 Distribuyen una mayor proporción de la depreciación en los primeros periodos. Su aplicación depende del patrón de consumo del activo y de las disposiciones contables correspondientes.

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema3-formula-titulo.p-3
          p.mb-3 Para los métodos de línea recta y unidades de producción se utilizan las siguientes fórmulas:
          .tema3-calculo.p-3.mb-2
            h4.tema3-calculo__operacion.mb-0 Depreciación anual por línea recta = (Costo del activo − Valor residual) ÷ Vida útil en años
          .tema3-calculo.p-3
            h4.tema3-calculo__operacion.mb-0 Depreciación por hora = (Costo del activo − Valor residual) ÷ Horas estimadas de vida útil

    .tema3-ejemplo-depreciacion.p-4.mb-4
      .row.align-items-stretch.justify-content-center
        .col-lg-4.col-8.mb-4.mb-lg-0
          img.tema3-ejemplo-depreciacion__imagen(
            src="@/assets/curso/temas/t3/img19.png"
            alt=""
          )
        .col-lg-8
          p Por ejemplo: una empresa adquiere un tractor por $250.000.000, con un valor residual estimado de $75.000.000 y una vida útil de 10 años o 10.000 horas de funcionamiento.
          .tema3-formula-titulo.p-3.mb-3
            p.mb-3 Primero, se determina el valor depreciable:
            .tema3-calculo.p-3
              h4.tema3-calculo__operacion.mb-0 $250.000.000 − $75.000.000 = $175.000.000
          .tema3-formula-titulo.p-3.mb-3
            p.mb-3 Por el método de línea recta, la depreciación anual es:
            .tema3-calculo.p-3
              h4.tema3-calculo__operacion.mb-0 $175.000.000 ÷ 10 = $17.500.000
          .tema3-formula-titulo.p-3.mb-3
            p.mb-3 Por el método de unidades de producción, la depreciación por hora es:
            .tema3-calculo.p-3
              h4.tema3-calculo__operacion.mb-0 $175.000.000 ÷ 10.000 = $17.500 por hora
          .tema3-formula-titulo.p-3
            p.mb-3 Si durante un año el tractor trabaja 1.200 horas, la depreciación correspondiente a ese uso será:
            .tema3-calculo.p-3
              h4.tema3-calculo__operacion.mb-0 1.200 × $17.500 = $21.000.000

    p.mb-4 Los resultados demuestran que el método de línea recta distribuye el valor depreciable de manera uniforme por año, mientras que el método de unidades de producción relaciona la depreciación con las horas efectivas de funcionamiento.

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-1.mb-4.mb-md-0.d-none.d-lg-block
        img.tema3-icono(
          src="@/assets/curso/temas/t3/img20.svg"
          alt=""
        )
      .col-lg-11
        .tema3-nota.p-3.px-4
          p.mb-0 La vida útil, el valor residual y el método de depreciación deben sustentarse en las condiciones del activo, el patrón esperado de consumo de sus beneficios económicos y las políticas contables aplicables. Las cifras del ejemplo son didácticas y no constituyen parámetros universales.
</template>

<script>
export default {
  name: 'Tema3',
}
</script>
