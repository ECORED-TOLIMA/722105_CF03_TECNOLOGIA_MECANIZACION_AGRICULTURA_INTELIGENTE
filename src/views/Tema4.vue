<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Proyección y cálculo de los costos de operación

    .bloque-texto-g.tema4-bloque-apertura.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 La proyección permite anticipar los recursos y valores necesarios para desarrollar las actividades agrícolas mecanizadas previstas en el programa de producción. Por su parte, el cálculo permite determinar los costos asociados a cada operación, expresados por hora, hectárea, labor o contrato. Para obtener resultados confiables, es necesario seleccionar métodos apropiados, diferenciar los costos de propiedad de los costos de operación y utilizar información técnica y económica actualizada.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Métodos de determinación de costos

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-1.mb-4.mb-md-0.d-none.d-lg-block
        img.tema4-icono(
          src="@/assets/curso/temas/t4/img2.svg"
          alt=""
        )
      .col-lg-11
        .tema4-nota.p-3
          p.mb-0 Los métodos de determinación de costos son procedimientos que permiten estimar o establecer el valor de los recursos utilizados en una actividad. Su elección depende de la información disponible, las características de la operación y el propósito del cálculo.

    p.mb-4 Entre los métodos utilizados se encuentran el histórico o real, el estimado o de ingeniería, el estándar y el comparativo. La siguiente tabla presenta sus fuentes de información, aplicaciones y principales limitaciones:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 11.
      span Métodos para la determinación de costos
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Método
            th(scope="col") Fuente de información
            th(scope="col") Aplicación y limitación
        tbody
          tr
            td Histórico o real
            td Registros de costos, horas, consumo y producción.
            td Permite evaluar lo ocurrido, pero depende de la existencia de registros completos y confiables.
          tr
            td Estimado o de ingeniería
            td Datos técnicos, precios vigentes y supuestos de operación.
            td Sirve para elaborar presupuestos y proyectar costos, pero requiere validar los supuestos utilizados.
          tr
            td Estándar
            td Parámetros o metas de consumo, tiempo y costo.
            td Facilita la comparación del desempeño, aunque sus valores deben actualizarse según las condiciones de operación.
          tr
            td Comparativo
            td Tarifas y referencias de servicios similares.
            td Orienta la revisión comercial, pero no reemplaza el cálculo de los costos propios de la empresa.

    p.mb-4 Una empresa puede combinar estos métodos durante la planeación y ejecución de sus actividades. Por ejemplo, antes de iniciar una temporada agrícola puede estimar el costo de una labor utilizando datos técnicos y precios previstos. Durante su ejecución registra los consumos y tiempos reales; al finalizar, compara los resultados con los valores proyectados y revisa las tarifas frente a las referencias del mercado.

    .cajon.color-secundario.p-4.mb-0
      p.mb-0 La diferencia entre el costo proyectado y el costo real permite identificar variaciones, reconocer posibles errores en los supuestos iniciales y establecer ajustes para futuras operaciones.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Costos de propiedad y costos de operación de la maquinaria

    p.mb-4 Los costos asociados a la maquinaria agrícola se clasifican en costos de propiedad y costos de operación. Esta distinción permite identificar los recursos económicos relacionados con la tenencia del equipo y aquellos que se generan durante su utilización.

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Los costos de propiedad se originan por disponer del equipo y mantenerlo disponible para el trabajo, incluso cuando no está en funcionamiento. Entre ellos se encuentran la depreciación, los intereses o el costo de oportunidad del capital, los seguros, los impuestos aplicables y los gastos de resguardo.
        p.mb-4 Por su parte, los costos de operación dependen principalmente del uso de la maquinaria e incluyen combustible, lubricantes, filtros, reparaciones, mantenimiento y mano de obra del operador.
        p.mb-0 La siguiente tabla presenta los principales componentes de cada grupo y la forma general de estimarlos:
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-panel__imagen(
          src="@/assets/curso/temas/t4/img3.png"
          alt=""
        )

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 12.
      span Componentes de los costos de propiedad y operación de la maquinaria agrícola
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Grupo
            th(scope="col") Componente
            th(scope="col") Forma general de estimación
        tbody
          tr
            td Propiedad
            td Depreciación
            td Valor depreciable distribuido entre los años u horas de vida útil.
          tr
            td Propiedad
            td Interés o costo del capital
            td Inversión promedio multiplicada por la tasa anual y distribuida entre las horas de uso.
          tr
            td Propiedad
            td Seguros, impuestos y resguardo
            td Valor anual atribuible al equipo dividido entre las horas anuales de utilización.
          tr
            td Operación
            td Combustible
            td Consumo por hora multiplicado por el precio unitario.
          tr
            td Operación
            td Lubricantes
            td Consumo real o estimación técnica sustentada.
          tr
            td Operación
            td Reparaciones y mantenimiento
            td Costos registrados por hora o estimaciones técnicas.
          tr
            td Operación
            td Mano de obra del operador
            td Costo laboral total distribuido entre las horas efectivas de trabajo.

    p.mb-0 La distinción entre estos grupos permite comprender cómo influye la utilización anual de la maquinaria en el costo por hora. Cuando un equipo trabaja pocas horas al año, los costos de propiedad se distribuyen entre menos horas de utilización, lo que incrementa su participación en el costo horario. En cambio, cuando aumenta el tiempo de uso, estos costos se distribuyen entre una mayor cantidad de horas, siempre que la utilización adicional no genere gastos extraordinarios ni un desgaste desproporcionado del equipo.

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Cálculo del costo horario de la maquinaria

    .row.align-items-stretch.mb-4
      .col-lg-6.mb-4.mb-lg-0
        img.tema4-panel__imagen(
          src="@/assets/curso/temas/t4/img4.png"
          alt=""
        )
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El costo horario corresponde al valor de los recursos económicos necesarios para disponer y operar una máquina durante una hora de trabajo. Para determinarlo se suman los costos de propiedad y los costos de operación atribuibles al equipo.
        p.mb-0 Su cálculo requiere información sobre el precio de adquisición y la vida útil de la maquinaria, el valor residual, las horas de utilización anual, el consumo de combustible, los precios de los insumos, los costos de mantenimiento y reparación, y el costo laboral del operador.

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-formula.p-3
          p.mb-3 La fórmula general para determinarlo es:
          .tema4-calculo.p-3
            h4.tema4-calculo__operacion.mb-0 Costo horario = Costos de propiedad por hora + Costos de operación por hora

    p.mb-4 Cada componente se estima mediante procedimientos específicos. Por ejemplo, la depreciación horaria se obtiene al dividir el valor depreciable entre las horas estimadas de vida útil; el interés se calcula sobre la inversión promedio y se distribuye entre las horas anuales previstas; y el combustible se determina multiplicando el consumo por hora por su precio unitario. Los lubricantes, las reparaciones y el mantenimiento se estiman a partir de registros propios o parámetros técnicos sustentados.

    p.mb-4 A continuación, se presentan las fórmulas orientadoras para calcular los principales componentes del costo horario:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 13.
      span Componentes y fórmulas para el cálculo del costo horario
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Componente
            th(scope="col") Fórmula orientadora
            th(scope="col") Unidad
        tbody
          tr
            td Depreciación
            td (Costo del activo − Valor residual) ÷ vida útil en horas
            td $/h
          tr
            td Interés
            td (Inversión promedio × tasa anual) ÷ horas anuales
            td $/h
          tr
            td Seguros y resguardo
            td Costo anual atribuible ÷ horas anuales
            td $/h
          tr
            td Combustible
            td Consumo por hora × precio unitario
            td $/h
          tr
            td Lubricantes
            td Consumo por hora × precio unitario o estimación sustentada
            td $/h
          tr
            td Reparaciones
            td Costo acumulado de reparaciones ÷ horas acumuladas
            td $/h
          tr
            td Mano de obra del operador
            td Costo laboral total ÷ horas efectivas, según el criterio de asignación definido
            td $/h

    .tema4-ejemplo.p-4.mb-4
      .row.align-items-stretch.justify-content-center.mb-4
        .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
          h4.tema4-ejemplo__titulo.p-3 Ejemplo resuelto
          p Una empresa necesita determinar el costo horario de un tractor utilizado en labores agrícolas. Los costos de propiedad se estiman en $58.000 por hora. Además, se dispone de la siguiente información sobre sus costos de operación:
          .tema4-calculo.p-3
            ul.lista-ul--color.tema4-lista.mb-0
              li
                i.fas.fa-seedling
                | Consumo de combustible: 4,2 galones por hora.
              li
                i.fas.fa-seedling
                | Precio del combustible: $11.000 por galón.
              li
                i.fas.fa-seedling
                | Lubricantes: estimados en el 15 % del costo del combustible.
              li
                i.fas.fa-seedling
                | Reparaciones: $14.000 por hora.
              li.mb-0
                i.fas.fa-seedling
                | Mano de obra del operador: $16.000 por hora.
        .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          img.tema4-ejemplo__imagen(
            src="@/assets/curso/temas/t4/img5.svg"
            alt=""
          )
      .row.align-items-stretch.justify-content-center
        .col-lg-5.col-8.mb-4.mb-lg-0
          img.tema4-ejemplo__imagen(
            src="@/assets/curso/temas/t4/img6.png"
            alt=""
          )
        .col-lg-7
          .tema4-formula.p-3.mb-3
            p.mb-3 Primero, se calcula el costo del combustible:
            .tema4-calculo.p-3
              h4.tema4-calculo__operacion.mb-0 4,2 × $11.000 = $46.200 por hora
          .tema4-formula.p-3.mb-3
            p.mb-3 Luego, se determina el costo estimado de los lubricantes:
            .tema4-calculo.p-3
              h4.tema4-calculo__operacion.mb-0 $46.200 × 0,15 = $6.930 por hora
          .tema4-formula.p-3.mb-3
            p.mb-3 Con estos valores se obtiene el costo horario del tractor:
            .tema4-calculo.p-3
              h4.tema4-calculo__operacion.mb-0 $58.000 + $46.200 + $6.930 + $14.000 + $16.000 = $141.130 por hora
          p.mb-0 Por tanto, el costo horario del tractor es de $141.130.

    .tema4-ejemplo.tema4-ejemplo--verde.p-4.mb-0
      p
        strong Cálculo del costo por hectárea:
        |  cuando la maquinaria trabaja con un implemento, como una sembradora, es necesario incorporar también el costo horario de este equipo para determinar el costo del conjunto.
      .row.align-items-stretch.justify-content-center
        .col-lg-8.order-2.order-lg-1
          .tema4-formula.p-3.mb-4
            p.mb-3 Si la sembradora presenta un costo horario estimado de $40.000, el costo de operación del conjunto tractor-sembradora será:
            .tema4-calculo.p-3
              h4.tema4-calculo__operacion.mb-0 $141.130 + $40.000 = $181.130 por hora
          p Para convertir este valor en costo por hectárea se debe conocer la capacidad efectiva de trabajo, es decir, la cantidad de hectáreas que el conjunto puede atender durante una hora de operación.
          .tema4-formula.p-3.mb-4
            p.mb-3 Si la capacidad efectiva es de 2 hectáreas por hora, el cálculo es:
            .tema4-calculo.p-3.mb-2
              h4.tema4-calculo__operacion.mb-0 Costo por hectárea = Costo horario del conjunto ÷ Capacidad efectiva de trabajo
            .tema4-calculo.p-3
              h4.tema4-calculo__operacion.mb-0 $181.130 ÷ 2 = $90.565 por hectárea
          p.mb-0 En este caso, el costo de la labor de siembra es de $90.565 por hectárea. El cálculo corresponde al uso del tractor y la sembradora; no incluye semillas ni fertilizantes, porque no hacen parte de los costos considerados para este servicio mecanizado.
        .col-lg-4.col-8.mt-4.mt-lg-0.mb-4.mb-lg-0.order-1.order-lg-2
          img.tema4-ejemplo__imagen(
            src="@/assets/curso/temas/t4/img7.png"
            alt=""
          )

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4 Costos de mano de obra

    .tema4-mano-obra.mb-4
      .row.g-0.align-items-stretch
        .col-lg-5
          img.tema4-mano-obra__imagen(
            src="@/assets/curso/temas/t4/img8.png"
            alt=""
          )
        .col-lg-7.p-4
          p La mano de obra constituye uno de los recursos necesarios para desarrollar las actividades agrícolas mecanizadas. Su costo debe considerarse en la determinación del valor de cada labor, teniendo en cuenta el tiempo dedicado por el operador y los conceptos laborales que correspondan según el tipo de vinculación y la normativa vigente.
          .row
            .col-md-auto.mb-3.mb-md-0.d-none.d-lg-block
              img.tema4-icono(
                src="@/assets/curso/temas/t4/img9.svg"
                alt=""
              )
            .col-md
              p.mb-0 Para calcular el costo de mano de obra por hora, se debe establecer el valor total atribuible al trabajador y dividirlo entre las horas definidas como base de cálculo. Es importante distinguir entre las horas contratadas y las horas efectivamente dedicadas a la operación, de acuerdo con el criterio de costeo establecido por la empresa.

    .row.justify-content-center.mb-4
      .col-lg-9
        .tema4-formula.p-3
          p.mb-3 La fórmula orientadora es:
          .tema4-calculo.p-3
            h4.tema4-calculo__operacion.mb-0 Costo de mano de obra por hora = Costo laboral total ÷ Horas utilizadas como base de cálculo

    .tema4-ejemplo.p-4.mb-4
      .row.align-items-stretch
        .col-lg-6.mb-4.mb-lg-0
          h4.tema4-ejemplo__titulo.p-3 Ejemplo resuelto
          p El costo laboral mensual total de un operador se estima en $3.040.000 y durante el periodo registra 150 horas efectivas de operación. Para determinar el costo de mano de obra por hora efectiva se realiza el siguiente cálculo:
          .tema4-calculo.p-3.mb-4
            h4.tema4-calculo__operacion.mb-0 $3.040.000 ÷ 150 = $20.266,67
          p.mb-0 Por tanto, el costo de mano de obra del operador es aproximadamente de $20.267 por hora efectiva de operación.
        .col-lg-6
          img.tema4-ejemplo__imagen(
            src="@/assets/curso/temas/t4/img10.svg"
            alt=""
          )

    .row.align-items-center.justify-content-center.mb-4
      .col-md-auto.mb-3.mb-md-0.d-none.d-lg-block
        img.tema4-icono(
          src="@/assets/curso/temas/t4/img11.svg"
          alt=""
        )
      .col-md
        .tema4-nota.p-3
          p.mb-0 El valor laboral utilizado debe incluir los conceptos aplicables según las condiciones de vinculación del trabajador. Para establecerlo, es necesario verificar las disposiciones laborales vigentes y evitar el uso de porcentajes o multiplicadores genéricos sin sustento.

    p.mb-0 La identificación de este costo permite asignar adecuadamente el trabajo del operador a las actividades mecanizadas y obtener una estimación más completa de los recursos necesarios para prestar cada servicio.

    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.5 Costos de traslado y tiempos improductivos

    p.mb-4 La ejecución de una actividad agrícola mecanizada no se limita al tiempo durante el cual la maquinaria realiza una labor en el terreno. También pueden generarse costos por el desplazamiento entre predios, la preparación de los equipos y las interrupciones durante la operación. Estos factores consumen recursos, afectan la disponibilidad de la maquinaria y pueden incrementar el costo de los servicios, por lo que deben identificarse y registrarse durante la planeación y ejecución de los trabajos.

    TabsC.color-acento-botones.mb-4
      .tema4-tabs.py-4.py-md-5.px-4(titulo="Costos de traslado")
        .row
          .col-lg-4.mb-4.mb-lg-0
            img.tema4-panel__imagen(
              src="@/assets/curso/temas/t4/img12.png"
              alt=""
            )
          .col-lg-8
            p Los costos de traslado se generan cuando la maquinaria debe desplazarse entre predios o frentes de trabajo. Pueden incluir el combustible consumido, el tiempo del operador, el desgaste del equipo, los peajes y otros recursos atribuibles al desplazamiento.
            p Su determinación depende de la distancia recorrida, el medio de transporte utilizado, las condiciones de las vías y las características de la maquinaria. Cuando el equipo se transporta en una cama baja o plataforma, también deben considerarse los valores asociados a este servicio.
            p.mb-0 La empresa puede asignar estos costos a cada contrato según la distancia, el tiempo empleado o el valor del transporte contratado. El criterio seleccionado debe permitir identificar los recursos consumidos y evitar que el traslado quede por fuera del costo total del servicio.
      .tema4-tabs.py-4.py-md-5.px-4(titulo="Tiempos improductivos")
        .row
          .col-lg-4.mb-4.mb-lg-0
            img.tema4-panel__imagen(
              src="@/assets/curso/temas/t4/img13.png"
              alt=""
            )
          .col-lg-8
            p Los tiempos improductivos corresponden a los periodos en los que la maquinaria no desarrolla la labor prevista debido a interrupciones o condiciones que impiden continuar con la operación. Pueden originarse por factores climáticos, dificultades logísticas, falta de insumos, fallas mecánicas o demoras en la preparación del terreno.
            p.mb-0 Aunque durante estos periodos no se registre avance en hectáreas, pueden mantenerse costos relacionados con la disponibilidad del equipo, la mano de obra y, en algunos casos, el consumo de combustible.

    p.mb-4 La siguiente tabla presenta situaciones frecuentes y su efecto en los costos de las actividades mecanizadas:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 14.
      span Situaciones que generan costos de traslado y tiempos improductivos
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Situación
            th(scope="col") Efecto económico
            th(scope="col") Tratamiento posible
        tbody
          tr
            td Traslado entre fincas
            td Consumo de combustible, tiempo y desgaste del equipo.
            td Asignar un costo según la distancia o el tiempo empleado.
          tr
            td Espera por lluvia
            td Tiempo del operador y disponibilidad de la maquinaria.
            td Registrar la causa y considerar el costo según la política de costeo.
          tr
            td Espera de camiones
            td Tiempo de inactividad de la maquinaria durante la cosecha.
            td Registrar las horas de espera y revisar la coordinación logística.
          tr
            td Alistamiento
            td Tiempo necesario para preparar el equipo antes de operar.
            td Incorporarlo en el tiempo requerido para ejecutar la labor.
          tr
            td Reparación en campo
            td Tiempo de parada y materiales utilizados en la reparación.
            td Registrar el mantenimiento y el tiempo de inactividad.

    p.mb-4 La empresa debe establecer si los costos asociados a estos tiempos se incorporan al costo de la labor mediante los factores de eficiencia de campo o si se registran y cobran por separado, de acuerdo con las condiciones del contrato. Es importante evitar que un mismo recurso se contabilice dos veces.

    p.mb-0 El registro de las causas de inactividad facilita identificar oportunidades de mejora, como optimizar los desplazamientos, coordinar la disponibilidad de transporte, anticipar el suministro de insumos y programar el mantenimiento de la maquinaria.

    Separador
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.6 Cálculo del costo por actividad mecanizada

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El costo de una actividad mecanizada se determina a partir de los recursos necesarios para ejecutarla, considerando el costo horario del conjunto de máquinas, la capacidad efectiva de trabajo y los costos adicionales atribuibles al servicio, como los desplazamientos entre predios. Este cálculo permite establecer cuánto cuesta realizar una labor por hectárea o por otra unidad de producción.
        p.mb-0 La capacidad efectiva de trabajo corresponde a la cantidad de superficie que puede atender la maquinaria durante una hora, considerando las condiciones reales de operación. Su valor depende del ancho de trabajo del implemento, la velocidad de avance, la eficiencia de campo, la forma del lote, las condiciones del suelo, las maniobras y los tiempos de interrupción.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-panel__imagen(
          src="@/assets/curso/temas/t4/img14.svg"
          alt=""
        )

    .row.justify-content-center.mb-4
      .col-lg-9
        .tema4-formula.p-3.px-4
          p.mb-2 Para determinar el costo mecanizado por hectárea se utiliza la siguiente fórmula:
          .tema4-calculo.p-3
            h4.tema4-calculo__operacion.mb-0 Costo mecanizado por hectárea = Costo horario del conjunto ÷ Capacidad efectiva de trabajo (ha/h)

    .tema4-ejemplo.tema4-ejemplo--verde.p-4.mb-4
      p
        strong Ejemplo resuelto:
        |  una empresa presta un servicio de preparación de suelo con un conjunto tractor-rastra cuyo costo horario es de $165.000. De acuerdo con las condiciones del lote, la capacidad efectiva de trabajo se estima en 1,5 hectáreas por hora. El costo mecanizado por hectárea se calcula así:
      .row.align-items-stretch.justify-content-center
        .col-lg-4.col-8.mb-4.mb-lg-0
          img.tema4-ejemplo__imagen(
            src="@/assets/curso/temas/t4/img15.png"
            alt=""
          )
        .col-lg-8
          .tema4-formula.p-3.mb-4
            .tema4-calculo.p-2
              h4.tema4-calculo__operacion.mb-0 $165.000 ÷ 1,5 = $110.000 por hectárea
          p El contrato comprende 30 hectáreas y requiere un traslado cuyo costo total atribuible es de $150.000. Para distribuir este valor entre la superficie contratada, se realiza el siguiente cálculo:
          .tema4-formula.p-3.mb-3
            .tema4-calculo.p-2
              h4.tema4-calculo__operacion.mb-0 $150.000 ÷ 30 = $5.000 por hectárea
          .tema4-formula.p-3
            p.mb-2 Por tanto, el costo estimado de la actividad por hectárea, incluido el traslado, es:
            .tema4-calculo.p-2
              h4.tema4-calculo__operacion.mb-0 $110.000 + $5.000 = $115.000 por hectárea

    p.mb-4 A continuación, se resumen los datos utilizados y los resultados obtenidos en el ejemplo:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 15.
      span Cálculo del costo por hectárea de una actividad mecanizada
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Concepto
            th(scope="col") Valor
            th(scope="col") Cálculo o base
        tbody
          tr
            td Costo horario del conjunto
            td $165.000/h
            td Tractor más rastra.
          tr
            td Capacidad efectiva
            td 1,5 ha/h
            td Dato técnico estimado para las condiciones del lote.
          tr
            td Costo mecanizado por hectárea
            td $110.000/ha
            td $165.000 ÷ 1,5.
          tr
            td Traslado del contrato
            td $150.000
            td Costo total del desplazamiento.
          tr
            td Traslado por hectárea
            td $5.000/ha
            td $150.000 ÷ 30 ha.
          tr
            td Costo estimado por hectárea
            td $115.000/ha
            td $110.000 + $5.000.

    p.mb-4 El costo de una actividad no debe confundirse con la tarifa cobrada al cliente. El primero representa los recursos económicos necesarios para ejecutar el servicio, mientras que la segunda corresponde al valor que la empresa establece para su prestación.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Para determinar la tarifa, la empresa debe considerar el costo completo de la actividad, los gastos que necesita cubrir, el margen esperado, los impuestos aplicables, las condiciones del mercado y los términos del contrato.

    p.mb-0 Las cifras del ejemplo son ilustrativas y deben reemplazarse por datos reales de cada operación.
</template>

<script>
export default {
  name: 'Tema4',
}
</script>
