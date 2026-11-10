<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Novedades, inconsistencias y ajustes de costos

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 Durante la ejecución de las actividades agrícolas mecanizadas pueden presentarse situaciones que modifican los costos inicialmente proyectados, como variaciones en el consumo de combustible, fallas de la maquinaria, cambios en los precios de los insumos, tiempos improductivos o diferencias en los registros. Estas situaciones deben identificarse y documentarse para determinar su incidencia en los resultados económicos de la operación.
        .cajon.color-secundario.p-3
          p.mb-0 La revisión de la información permite reconocer inconsistencias, establecer sus posibles causas y definir los ajustes necesarios para mantener la confiabilidad de los costos. Asimismo, facilita implementar acciones correctivas y verificar su efectividad, contribuyendo al control de los recursos y al mejoramiento de la gestión de los servicios agrícolas mecanizados.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100(src="@/assets/curso/temas/t7/img1.png" alt="")

    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Identificación y clasificación de novedades

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.w-100(src="@/assets/curso/temas/t7/img2.png" alt="")
      .col-lg-8
        p.mb-4 Durante la ejecución de las actividades agrícolas mecanizadas pueden presentarse novedades que afectan las condiciones inicialmente previstas para la prestación del servicio y generan cambios en los recursos utilizados o en los costos proyectados. Estas situaciones pueden estar relacionadas con las condiciones del terreno, el funcionamiento de la maquinaria, la disponibilidad de insumos, los tiempos de trabajo o las variaciones económicas.
        .cajon.color-primario.p-3
          p.mb-0 La identificación oportuna de las novedades permite reconocer qué ocurrió, cuándo se presentó, qué actividad o equipo resultó afectado y cuáles fueron sus posibles efectos económicos. Para ello, es necesario revisar los registros de operación, los reportes del personal, las órdenes de mantenimiento, los comprobantes de consumo y los demás soportes relacionados con la actividad.

    p.mb-4 Las novedades pueden clasificarse de acuerdo con su origen:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 20.
      span Clasificación de las novedades en las actividades agrícolas mecanizadas
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Tipo de novedad
            th(scope="col") Características
            th(scope="col") Ejemplos en actividades agrícolas mecanizadas
        tbody
          tr
            td Operativas
            td Situaciones que modifican el desarrollo o las condiciones de ejecución de una labor.
            td Cambios en el área programada, aumento de recorridos dentro del lote o interrupciones por condiciones climáticas.
          tr
            td Técnicas
            td Eventos relacionados con el funcionamiento, estado o desempeño de la maquinaria y los implementos.
            td Averías, desgaste prematuro de piezas, fallas mecánicas o necesidad de mantenimiento no programado.
          tr
            td Económicas
            td Cambios en los valores de los recursos necesarios para realizar la actividad.
            td Incremento en el precio del combustible, lubricantes, repuestos o servicios de reparación.
          tr
            td Logísticas
            td Situaciones que afectan la disponibilidad, el traslado o el suministro de recursos.
            td Retrasos en la entrega de insumos, dificultades para transportar la maquinaria o falta de disponibilidad de repuestos.
          tr
            td Administrativas
            td Cambios relacionados con la programación, los acuerdos o las condiciones de prestación del servicio.
            td Modificaciones en el alcance del contrato, cambios en las fechas de ejecución o ajustes en las condiciones acordadas con el cliente.

    p.mb-4 La clasificación facilita establecer el origen de cada novedad y orientar su seguimiento. Sin embargo, no todas las situaciones generan necesariamente un incremento en los costos; algunas pueden reducirlos o modificar su distribución entre actividades, equipos o periodos.

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema6-pastilla.p-2.px-4
          p.mb-0 Para documentar una novedad se recomienda registrar, como mínimo:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure.mb-0
            img.tema2-disponibilidad-slider__imagen(
              src="@/assets/curso/temas/t7/img3.png"
              alt=""
            )
        .col-lg-8.p-4.p-lg-0
          SlyderF(columnas="col-md-6")
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img4.svg" alt="")
              p.mb-0.text-center Fecha y actividad en la que se presentó.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img5.svg" alt="")
              p.mb-0.text-center Maquinaria, implemento o recurso involucrado.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img6.svg" alt="")
              p.mb-0.text-center Descripción de la situación y su causa, cuando sea posible determinarla.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img7.svg" alt="")
              p.mb-0.text-center Tiempo de afectación o cantidad de recursos comprometidos.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img8.svg" alt="")
              p.mb-0.text-center Posible incidencia en los costos de operación.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img9.svg" alt="")
              p.mb-0.text-center Responsable del reporte y soportes disponibles.

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Por ejemplo, durante una labor de preparación del suelo puede presentarse una falla en el sistema hidráulico del tractor que obligue a detener la operación y realizar una reparación. Esta novedad debe registrarse indicando el equipo afectado, el tiempo de inactividad, los repuestos utilizados y el valor de la intervención. La información permitirá establecer su incidencia en el costo de la actividad y facilitará su posterior revisión.
        p.mb-0 La identificación y documentación de las novedades proporciona información para el control de los costos y permite diferenciar los cambios propios de las condiciones de operación de los errores que puedan presentarse en los registros o cálculos.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100(src="@/assets/curso/temas/t7/img10.png" alt="")

    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.2 Inconsistencias frecuentes en los costos de operación

    .row.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img.tema4-icono(src="@/assets/curso/temas/t7/img11.svg" alt="")
      .col-lg-11
        p.mb-0 La determinación de los costos de operación requiere información completa, actualizada y coherente con las actividades agrícolas mecanizadas. Sin embargo, durante el registro, la organización y el cálculo pueden presentarse inconsistencias que afectan la confiabilidad de los resultados y conducen a estimaciones superiores o inferiores a los costos reales.

    p.mb-4 Estas inconsistencias pueden originarse en errores de registro, omisiones de información, aplicación incorrecta de criterios de asignación o fallas en los procedimientos de cálculo. Entre las más frecuentes se encuentran:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 21.
      span Inconsistencias frecuentes en los costos de operación de actividades agrícolas mecanizadas
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Tipo de inconsistencia
            th(scope="col") Descripción
            th(scope="col") Posible efecto en los costos
        tbody
          tr
            td Registros incompletos
            td Ausencia de datos sobre horas de operación, consumo de combustible, mantenimiento o área trabajada.
            td Subestimación de los costos o dificultad para determinar el valor real de la actividad.
          tr
            td Duplicidad de información
            td Registro de un mismo consumo, servicio o concepto de costo en más de una ocasión.
            td Incremento artificial del costo total.
          tr
            td Errores en las unidades de medida
            td Uso incorrecto o mezcla de unidades, como galones y litros, horas y minutos o hectáreas y metros cuadrados.
            td Cálculos incorrectos y resultados que no corresponden a las cantidades utilizadas.
          tr
            td Valores desactualizados
            td Utilización de precios antiguos de combustible, lubricantes, repuestos o servicios de mantenimiento.
            td Diferencias entre los costos calculados y los valores económicos vigentes.
          tr
            td Asignación incorrecta de costos
            td Distribución de costos entre actividades o equipos sin un criterio adecuado.
            td Distorsión del costo por hora, hectárea o actividad mecanizada.
          tr
            td Errores de cálculo
            td Aplicación incorrecta de fórmulas, referencias o datos en hojas de cálculo.
            td Resultados inexactos que afectan la proyección y evaluación de los costos.
          tr
            td Omisión de conceptos
            td Exclusión de costos asociados a la operación, como traslados, mano de obra, mantenimiento o depreciación, cuando corresponda incluirlos.
            td Subestimación del costo de prestación del servicio.

    p.mb-4 La identificación de estas inconsistencias requiere contrastar los valores calculados con los documentos de soporte, los registros de operación y las condiciones reales de ejecución de las actividades. Por ejemplo, si el consumo de combustible registrado para un tractor no corresponde con las cantidades reportadas en los comprobantes de suministro, es necesario revisar las fechas, las unidades de medida, el equipo al que se asignó el combustible y las horas de operación.

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-5.col-8.mb-4.mb-lg-0
        img.w-100(src="@/assets/curso/temas/t7/img12.png" alt="")
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 También es importante verificar que los costos no se contabilicen más de una vez. Si el mantenimiento de un equipo ya se encuentra incluido en el costo horario, no debe sumarse nuevamente al calcular el costo de la actividad, salvo que corresponda a un concepto adicional que no haya sido contemplado previamente.
        p.mb-0 La revisión de estas situaciones permite reconocer las causas de las diferencias, corregir la información y establecer controles para evitar que los errores se repitan. De esta manera, se fortalece la confiabilidad de los costos y la calidad de la información utilizada para la toma de decisiones.

    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.3 Ajustes y acciones correctivas

    p.mb-4 Cuando se identifican inconsistencias en los costos de operación, es necesario establecer acciones que permitan corregir la información, solucionar las causas que originaron el problema y prevenir su repetición. Los ajustes corresponden a las modificaciones realizadas en los registros o cálculos para reflejar correctamente los costos, mientras que las acciones correctivas se orientan a eliminar las causas de las inconsistencias identificadas.

    p.mb-4 Para establecer una acción correctiva se recomienda seguir el siguiente procedimiento:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Paso 1. Identificar la inconsistencia")
            .col-12
              p.mb-0 Describir el error o la diferencia encontrada, indicando el registro, cálculo, equipo o actividad involucrada. Es importante precisar qué información presenta el problema y en qué momento se detectó.
          .row(titulo="Paso 2. Analizar la causa")
            .col-12
              p.mb-0 Revisar los registros, soportes y procedimientos relacionados para determinar por qué ocurrió la inconsistencia. Entre las posibles causas se encuentran errores de digitación, falta de actualización de precios, omisión de datos o aplicación incorrecta de fórmulas.
          .row(titulo="Paso 3. Determinar el ajuste necesario")
            .col-12
              p.mb-0 Establecer qué información debe corregirse y cuáles son los valores que deben actualizarse. El ajuste debe estar respaldado por documentos verificables y conservar la trazabilidad de la modificación.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100(src="@/assets/curso/temas/t7/img13.png" alt="")

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.order-2.order-lg-1
        img.w-100(src="@/assets/curso/temas/t7/img14.png" alt="")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Paso 4. Definir la acción correctiva")
            .col-12
              p.mb-0 Establecer una medida dirigida a eliminar la causa identificada. La acción debe ser concreta, viable y relacionada directamente con el problema encontrado.
          .row(titulo="Paso 5. Asignar responsables y plazos")
            .col-12
              p.mb-0 Determinar quién ejecutará la acción y en qué fecha debe realizarse. Esto facilita el seguimiento y evita que las medidas propuestas queden sin aplicación.
          .row(titulo="Paso 6. Establecer los resultados esperados")
            .col-12
              p.mb-0 Definir qué cambio permitirá comprobar que la acción se ejecutó, por ejemplo, la actualización de un registro, la corrección de una fórmula o la implementación de un control adicional.

    p.mb-4 La aplicación de este procedimiento permite abordar las inconsistencias de manera organizada, desde la identificación del problema hasta la definición de medidas para evitar su repetición. A continuación, se presentan dos situaciones relacionadas con los costos de operación de la maquinaria agrícola, en las que se desarrolla este proceso para reconocer la causa, establecer el ajuste correspondiente y definir la acción correctiva.

    .tema6-ejemplo.p-4.mb-4
      .titulo-pastilla
        img(src="@/assets/curso/icon.svg" alt="")
        span Ejemplo 1. Error en el registro del consumo de combustible
      p.mb-4 Durante la revisión de los costos de una labor de preparación del suelo, se identifica que el consumo de combustible registrado para un tractor es inferior al reportado en los comprobantes de suministro.
      .row.justify-content-center
        .col-lg-10
          .tema6-ejemplo__datos.p-4
            ul.lista-ul--color.tema6-lista.mb-0
              li
                i.fas.fa-seedling
                | Inconsistencia: diferencia entre el consumo registrado y el soportado documentalmente.
              li
                i.fas.fa-seedling
                | Causa identificada: omisión de un suministro de combustible en el registro de operación.
              li
                i.fas.fa-seedling
                | Ajuste: actualizar la cantidad de combustible consumida con base en los soportes disponibles.
              li
                i.fas.fa-seedling
                | Acción correctiva: establecer una verificación diaria entre los comprobantes de suministro y los registros de consumo.
              li
                i.fas.fa-seedling
                | Responsable: encargado del control de maquinaria.
              li.mb-0
                i.fas.fa-seedling
                | Resultado esperado: correspondencia entre los registros de consumo y los documentos de soporte.

    .tema6-ejemplo.p-4.mb-4
      .titulo-pastilla
        img(src="@/assets/curso/icon.svg" alt="")
        span Ejemplo 2. Error en el cálculo del costo por hectárea
      p.mb-4 Al revisar una hoja de cálculo, se encuentra que el costo por hectárea de una labor mecanizada es inferior al valor real porque la fórmula utilizada no incluye los costos de mantenimiento.
      .row.justify-content-center
        .col-lg-10
          .tema6-ejemplo__datos.p-4
            ul.lista-ul--color.tema6-lista.mb-0
              li
                i.fas.fa-seedling
                | Inconsistencia: omisión de un componente del costo en el cálculo.
              li
                i.fas.fa-seedling
                | Causa identificada: fórmula incompleta en la hoja de cálculo.
              li
                i.fas.fa-seedling
                | Ajuste: incorporar los costos de mantenimiento correspondientes y recalcular el costo por hectárea.
              li
                i.fas.fa-seedling
                | Acción correctiva: revisar y validar las fórmulas de la herramienta antes de utilizarla en nuevos cálculos.
              li
                i.fas.fa-seedling
                | Responsable: encargado de la gestión de costos.
              li.mb-0
                i.fas.fa-seedling
                | Resultado esperado: cálculo completo y consistente con los conceptos de costo definidos.

    p.mb-4 Para facilitar la documentación y el control de las acciones correctivas, se puede utilizar un formato que reúna la información de la inconsistencia identificada, su causa, el ajuste realizado y las medidas establecidas para evitar que vuelva a presentarse, como se presenta a continuación:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 22.
      span Formato para el registro y seguimiento de acciones correctivas en los costos de operación
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Campo
            th(scope="col") Información que se debe registrar
        tbody
          tr
            td Fecha de identificación
            td Día en que se detectó la inconsistencia.
          tr
            td Actividad o equipo involucrado
            td Labor mecanizada, maquinaria o proceso afectado.
          tr
            td Descripción de la inconsistencia
            td Situación encontrada y datos comprometidos.
          tr
            td Causa identificada
            td Razón que originó el problema.
          tr
            td Ajuste realizado
            td Corrección aplicada a los registros o cálculos.
          tr
            td Acción correctiva
            td Medida establecida para eliminar la causa.
          tr
            td Responsable
            td Persona encargada de ejecutar la acción.
          tr
            td Fecha de cumplimiento
            td Plazo establecido para su ejecución.
          tr
            td Resultado esperado
            td Condición que permitirá comprobar la corrección.
          tr
            td Estado
            td Pendiente, en ejecución o finalizada.

    p.mb-0 El registro de las acciones correctivas permite conservar evidencia de las modificaciones realizadas, identificar responsables y hacer seguimiento a los compromisos establecidos. Su aplicación contribuye a mejorar los procedimientos de registro, cálculo y control de los costos de operación, además de reducir la posibilidad de que se repitan las inconsistencias.

    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.4 Verificación de los ajustes y recomendaciones

    p.mb-4 Una vez implementados los ajustes y las acciones correctivas, es necesario verificar que se hayan ejecutado de acuerdo con lo establecido y que hayan permitido solucionar las inconsistencias identificadas. Este proceso permite comprobar la confiabilidad de la información, evaluar los resultados de las medidas aplicadas y determinar si se requieren nuevas acciones.

    p.mb-4 La verificación debe considerar los siguientes aspectos:

    .BGF04.p-4.p-md-5.mb-4
      PasosA.color-primario(tipo="n")
        .row.align-items-center
          .col-md-9.mb-4.mb-md-0
            h5 Paso 1. Revisar la ejecución de las acciones
            p.mb-0 Comprobar que las actividades definidas se hayan realizado dentro del plazo establecido y por parte de los responsables asignados.
          .col-md-3.d-none.d-lg-block
            img.tema4-paso__icono(
              src="@/assets/curso/temas/t7/img15.svg"
              alt=""
            )
        .row.align-items-center
          .col-md-3.mb-4.mb-md-0.d-none.d-lg-block
            img.tema4-paso__icono(
              src="@/assets/curso/temas/t7/img16.svg"
              alt=""
            )
          .col-md-9.text-left
            h5 Paso 2. Contrastar la información corregida
            p.mb-0 Comparar los registros y cálculos actualizados con los documentos de soporte, las órdenes de trabajo, los reportes de operación y demás evidencias disponibles.
        .row.align-items-center
          .col-md-9.mb-4.mb-md-0
            h5 Paso 3. Evaluar los resultados
            p.mb-0 Determinar si el ajuste permitió corregir la inconsistencia y si la acción correctiva eliminó o redujo la causa que originó el problema.
          .col-md-3.d-none.d-lg-block
            img.tema4-paso__icono(
              src="@/assets/curso/temas/t7/img17.svg"
              alt=""
            )
        .row.align-items-center
          .col-md-3.mb-4.mb-md-0.d-none.d-lg-block
            img.tema4-paso__icono(
              src="@/assets/curso/temas/t7/img18.svg"
              alt=""
            )
          .col-md-9.text-left
            h5 Paso 4. Identificar situaciones recurrentes
            p.mb-0 Revisar si la misma inconsistencia se ha presentado nuevamente o si existen condiciones que puedan ocasionar su repetición.
        .row.align-items-center
          .col-md-9.mb-4.mb-md-0
            h5 Paso 5. Definir recomendaciones
            p.mb-0 Establecer medidas adicionales cuando los resultados no sean satisfactorios o proponer mejoras para fortalecer los procedimientos de registro, cálculo y control de los costos.
          .col-md-3.d-none.d-lg-block
            img.tema4-paso__icono(
              src="@/assets/curso/temas/t7/img19.svg"
              alt=""
            )

    p.mb-4 La verificación permite establecer si las medidas implementadas fueron efectivas y si es necesario mantener, modificar o complementar las acciones correctivas. Para comprender su aplicación, se presentan dos situaciones relacionadas con el control de los costos de operación.

    .tema6-ejemplo.p-4.mb-4
      .titulo-pastilla.mb-4
        img(src="@/assets/curso/icon.svg" alt="")
        span Ejemplo 1. Verificación del registro de combustible
      .row.justify-content-center
        .col-lg-10
          .tema6-ejemplo__datos.p-4
            ul.lista-ul--color.tema6-lista.mb-0
              li
                i.fas.fa-seedling
                | Después de implementar una revisión diaria entre los comprobantes de suministro y los registros de consumo, el encargado de maquinaria verifica que las cantidades coincidan con los soportes correspondientes. Durante el seguimiento, comprueba que los nuevos registros están completos y que no se presentan omisiones.
              li.mb-0
                i.fas.fa-seedling
                span
                  strong Resultado:
                  |  la acción correctiva permitió mejorar la correspondencia entre los consumos registrados y los soportes. Se recomienda mantener la verificación diaria como parte del procedimiento de control.

    .tema6-ejemplo.p-4.mb-4
      .titulo-pastilla.mb-4
        img(src="@/assets/curso/icon.svg" alt="")
        span Ejemplo 2. Verificación del cálculo del costo por hectárea
      .row.justify-content-center
        .col-lg-10
          .tema6-ejemplo__datos.p-4
            ul.lista-ul--color.tema6-lista.mb-0
              li
                i.fas.fa-seedling
                | Después de corregir la fórmula de la hoja de cálculo e incorporar los costos de mantenimiento, el responsable realiza nuevos cálculos y los contrasta con los registros de costos. También verifica que la fórmula incluya todos los conceptos definidos y que se aplique correctamente a las diferentes actividades.
              li.mb-0
                i.fas.fa-seedling
                span
                  strong Resultado:
                  |  la corrección permitió obtener valores completos y coherentes con los costos registrados. Se recomienda revisar periódicamente las fórmulas y validar las herramientas de cálculo cuando se incorporen nuevos conceptos o se modifiquen los criterios de costeo.

    p.mb-4 La verificación también permite establecer prácticas que contribuyan a prevenir nuevas inconsistencias y fortalecer la gestión de los costos de operación. Entre ellas se destacan:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure.mb-0
            img.tema2-disponibilidad-slider__imagen(
              src="@/assets/curso/temas/t7/img20.png"
              alt=""
            )
        .col-lg-8.p-4.p-lg-0
          SlyderF(columnas="col-md-6 col-xl-4")
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img21.svg" alt="")
              p.mb-0.text-center Mantener actualizados los registros de consumo, horas de trabajo, mantenimiento y áreas intervenidas.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img22.svg" alt="")
              p.mb-0.text-center Verificar periódicamente la correspondencia entre los datos registrados y sus documentos de soporte.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img23.svg" alt="")
              p.mb-0.text-center Revisar las fórmulas y los criterios utilizados para calcular los costos por hora, hectárea y actividad.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img24.svg" alt="")
              p.mb-0.text-center Asignar responsables para el registro, revisión y aprobación de la información.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img25.svg" alt="")
              p.mb-0.text-center Conservar las evidencias de los ajustes realizados y de las verificaciones efectuadas.
            .tarjeta.tema2-fondosly.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/temas/t7/img26.svg" alt="")
              p.mb-0.text-center Analizar las inconsistencias recurrentes para identificar oportunidades de mejora en los procedimientos.

    p.mb-0 La verificación de los ajustes y la aplicación de estas recomendaciones contribuyen a mantener información confiable, fortalecer el control de los recursos y mejorar la gestión económica de las actividades agrícolas mecanizadas. De esta manera, la empresa puede utilizar los resultados del seguimiento para orientar sus decisiones y promover el mejoramiento continuo de sus procesos.
</template>

<script>
export default {
  name: 'Tema7',
}
</script>
