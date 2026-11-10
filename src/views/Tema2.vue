<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de los costos
    .tema1-apertura.mb-0
      img.tema1-apertura__imagen(
        src="@/assets/curso/temas/t2/img1.png"
        alt=""
      )
      .tema1-apertura__destacado.p-4
        p.mb-0 Los costos expresan en términos monetarios los recursos utilizados para producir un bien o prestar un servicio. En la mecanización agrícola, su determinación permite conocer cuánto cuesta disponer de una máquina, ejecutar una labor o atender un contrato. Para realizar cálculos consistentes es necesario reconocer los elementos que los componen, clasificarlos y seleccionar un sistema de costeo adecuado.
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Elementos del costo

    p.mb-4 En la contabilidad de costos se reconocen tres elementos generales que permiten identificar los recursos utilizados para producir un bien o prestar un servicio:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(tabindex="0" data-aos="flip-left" @mouseover="mostrarIndicador = false" @focus="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img2.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Insumos directos
            h5.t2.mb-2 Insumos directos
            p.mb-0 Recursos que se consumen y pueden identificarse con una actividad específica. En los servicios mecanizados incluyen el ACPM, los lubricantes y las piezas de desgaste utilizadas durante una labor.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(tabindex="0" data-aos="flip-left")
          .crd_hover_txt--img
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img3.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Mano de obra directa
            h5.t2.mb-2 Mano de obra directa
            p.mb-0 Corresponde al trabajo del personal que ejecuta la actividad. Por ejemplo, el costo laboral del operador del tractor durante las horas dedicadas a la operación.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(tabindex="0" data-aos="flip-left")
          .crd_hover_txt--img
            figure.mb-0
              img(src="@/assets/curso/temas/t2/img4.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Costos indirectos
            h5.t2.mb-2 Costos indirectos
            p.mb-0 Comprenden los recursos necesarios para prestar el servicio que no se identifican directamente con una labor específica y requieren una base de asignación. Entre ellos se encuentran ciertos costos de administración, mantenimiento del taller y servicios generales compartidos.

    p.mb-4 En la gestión de maquinaria también se utiliza la agrupación entre costos de propiedad y costos de operación. Los primeros se relacionan con la tenencia del equipo, incluso cuando no está trabajando; los segundos dependen principalmente de su utilización. Esta clasificación complementa la clasificación contable y ayuda a construir el costo horario.

    .row.align-items-center.mb-0
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema2-icono(
          src="@/assets/curso/temas/t2/img5.svg"
          alt=""
        )
      .col-md
        .tema2-nota.px-4.p-2
          p.mb-0 Es importante evitar duplicidades en la asignación. Por ejemplo, si el combustible se registra como insumo directo de una labor, no debe incorporarse nuevamente en otro rubro del cálculo. Asimismo, los costos indirectos deben distribuirse mediante criterios verificables, como las horas-máquina, las horas de trabajo o el número de órdenes, según la relación que tengan con el servicio.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Clasificación de los costos

    .bloque-texto-g.tema2-bloque-clasificacion.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los costos pueden clasificarse desde diferentes perspectivas. La clasificación por comportamiento permite reconocer cómo varían frente al nivel de actividad; la clasificación por identificación determina si pueden asociarse directamente con el objeto de costo; y la clasificación por momento de cálculo distingue los valores reales de las estimaciones o estándares.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 5.
      span Clasificación de los costos
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Criterio
            th(scope="col") Clasificación
            th(scope="col") Ejemplo
        tbody
          tr
            td Comportamiento
            td Fijos
            td Seguro anual o depreciación calculada por tiempo.
          tr
            td Comportamiento
            td Variables
            td Combustible consumido según las horas de operación.
          tr
            td Comportamiento
            td Semivariables
            td Servicio con cargo básico y valor adicional por uso.
          tr
            td Relación con el objeto
            td Directos
            td Operario asignado exclusivamente a una labor.
          tr
            td Relación con el objeto
            td Indirectos
            td Administración compartida entre varios servicios.
          tr
            td Momento de cálculo
            td Históricos o reales
            td Costo registrado después de ejecutar la labor.
          tr
            td Momento de cálculo
            td Predeterminados
            td Costo estimado o estándar calculado antes de operar.
          tr
            td Relevancia para decidir
            td Relevantes
            td Combustible adicional requerido para aceptar un contrato.
          tr
            td Relevancia para decidir
            td Hundidos
            td Valor ya pagado por una máquina que no cambia entre alternativas.

    p.mb-4 Los costos fijos se mantienen constantes dentro de un periodo y rango de actividad, aunque el costo fijo unitario disminuye cuando se distribuye entre más horas o hectáreas. Los costos variables cambian con el nivel de uso. Los semivariables contienen una parte fija y otra variable. Estas categorías dependen del periodo y de las condiciones de análisis; por eso, un costo no debe calificarse como fijo o variable sin precisar el horizonte considerado.

    .row.justify-content-center.mb-0
      .col-lg-10
        .tema2-ejemplo
          .row.g-0.align-items-stretch
            .col-md-5
              .tema2-ejemplo__imagen
                img(
                  src="@/assets/curso/temas/t2/img7.svg"
                  alt=""
                )
            .col-md-7.d-flex.align-items-center
              p.p-4.mb-0
                strong Por ejemplo:
                |  una empresa tiene costos fijos anuales de $40.000.000 y costos variables de $70.000 por hora. Si la máquina trabaja 500 horas, el costo total será $40.000.000 + ($70.000 × 500) = $75.000.000. El costo total por hora será $75.000.000 / 500 = $150.000. Si trabaja 1.000 horas, el costo total será $110.000.000 y el costo por hora será $110.000. La mayor utilización distribuye el costo fijo entre más horas, aunque también aumenta el costo variable total.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Diferencias entre costos, gastos e ingresos

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El costo se relaciona con los recursos utilizados para prestar el servicio mecanizado; el gasto corresponde a los recursos consumidos para administrar o comercializar la actividad, sin vincularse directamente con la ejecución de una labor; y el ingreso representa el valor generado por la prestación del servicio o por otras actividades de la empresa.
        p.mb-0 Para diferenciar estos conceptos en una empresa de servicios agrícolas mecanizados, es necesario considerar la finalidad de los recursos y la forma en que se relacionan con la actividad económica. La siguiente tabla presenta sus características y algunos ejemplos aplicados a este tipo de empresa:
      .col-lg-6.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100.h-100.object-fit-cover(
          src="@/assets/curso/temas/t2/img8.png"
          alt=""
        )

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 6.
      span Diferencias entre costos, gastos, ingresos e inversiones
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th(scope="col") Concepto
            th(scope="col") Descripción
            th(scope="col") Ejemplo
        tbody
          tr
            td Costo
            td Recurso utilizado directa o indirectamente para prestar el servicio.
            td Combustible, mano de obra del operario y reparación del tractor.
          tr
            td Gasto
            td Recurso consumido para administrar o comercializar la empresa.
            td Honorarios contables, papelería o publicidad.
          tr
            td Ingreso
            td Valor generado por la prestación del servicio o por otras actividades de la empresa.
            td Valor facturado por la siembra de 40 hectáreas.
          tr
            td Inversión
            td Adquisición de un activo o recurso que proporcionará beneficios durante varios periodos.
            td Compra de un tractor o una sembradora.

    .row.align-items-center.justify-content-center.mb-4
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema2-icono(
          src="@/assets/curso/temas/t2/img9.svg"
          alt=""
        )
      .col-md-9
        .tema2-nota.p-2.px-4
          p.mb-0 Es importante precisar que la inversión no constituye una categoría equivalente a los costos, gastos e ingresos en la determinación del resultado del periodo. La compra de un tractor, por ejemplo, se reconoce inicialmente como un activo. Posteriormente, su depreciación se incorpora al costo o al gasto, según el uso que se le dé al equipo.

    p.mb-4 Esta distinción permite conocer el costo de cada labor y, por separado, los gastos necesarios para mantener la empresa. Para evaluar el resultado económico general, se comparan los ingresos con los costos y gastos reconocidos en el mismo periodo. De igual manera, un anticipo recibido no debe confundirse automáticamente con un ingreso devengado, pues su reconocimiento depende de las condiciones del servicio contratado y de las políticas contables aplicables.

    .row.justify-content-center.mb-4
      .col-lg-8
        .tema2-formula-titulo.p-4
          .tema2-calculo.p-3
            h4.tema2-calculo__operacion.mb-0 Resultado del periodo = Ingresos − Costos − Gastos

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema2-ejemplo
          .row.g-0.align-items-stretch
            .col-md-6
              .tema2-ejemplo__imagen
                img(
                  src="@/assets/curso/temas/t2/img10.svg"
                  alt=""
                )
            .col-md-6.d-flex.align-items-center
              p.p-4.mb-0 Por ejemplo, una empresa factura $18.000.000 por servicios de preparación de suelo. Los costos asociados a la prestación ascienden a $11.000.000 y los gastos administrativos y comerciales del periodo corresponden a $3.000.000. En este caso, el resultado antes de otros conceptos e impuestos es de $4.000.000.

    p.mb-0 Esta cifra permite identificar el resultado económico de las operaciones consideradas, siempre que los costos y gastos estén completos y correspondan al mismo periodo.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Sistemas de costeo

    p.mb-4 Un sistema de costeo reúne procedimientos para acumular, clasificar, asignar y controlar los costos. Su elección depende de la naturaleza del servicio, la homogeneidad de las operaciones, la información disponible y las decisiones que necesita tomar la empresa.

    p.mb-4 Entre los sistemas y enfoques de costeo se encuentran los siguientes:

    .titulo-pastilla
      img(src="@/assets/curso/icon.svg" alt="")
      span Según la forma de acumular y asignar los costos

    .tema2-slyder.p-4.mb-4
      SlyderB(:datos="datosSlyderCosteo")

    .titulo-pastilla
      img(src="@/assets/curso/icon.svg" alt="")
      span Según los componentes que se incorporan al costo

    .row.g-0.tema2-costeo-conectado.mb-4
      .col-md-6
        .tema2-costeo-conectado__tarjeta.tema2-costeo-conectado__tarjeta--absorbente.p-4
          img.tema2-costeo-conectado__imagen.mb-3(
            src="@/assets/curso/temas/t2/img14.svg"
            alt=""
          )
          h5.text-center Costeo absorbente
          p.mb-0 Incluye los costos variables y fijos de producción en el costo del servicio. Permite conocer el costo completo de los recursos asociados a la prestación y resulta útil para el análisis de largo plazo.
      .col-md-6
        .tema2-costeo-conectado__tarjeta.tema2-costeo-conectado__tarjeta--variable.p-4
          img.tema2-costeo-conectado__imagen.mb-3(
            src="@/assets/curso/temas/t2/img15.svg"
            alt=""
          )
          h5.text-center Costeo variable
          p.mb-0 Incorpora los costos variables al costo del servicio y analiza los costos fijos por separado. Facilita las decisiones de corto plazo y el cálculo del margen de contribución.

    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-5.col-8.mb-4.mb-lg-0
        img.w-100.h-100.object-fit-cover(
          src="@/assets/curso/temas/t2/img16.png"
          alt=""
        )
      .col-lg-7
        p.mb-4 En los servicios agrícolas mecanizados suele ser útil el costeo por órdenes, porque cada contrato puede presentar diferencias en la distancia, el tipo de suelo, el área, los implementos, los tiempos y las condiciones de operación. Por ello, una orden de trabajo debe identificar al cliente, el lote, la labor, la máquina, las horas de operación, los insumos y los costos asignados. El costeo por procesos, por su parte, puede ser pertinente cuando las operaciones son repetitivas y homogéneas.
        .cajon.color-secundario.p-4
          p.mb-0 Es importante reconocer que los enfoques absorbente y variable no sustituyen necesariamente la forma de acumular los costos por órdenes o procesos, pues responden a una pregunta diferente: qué componentes se incluyen en el costo del servicio para realizar el análisis. Por esta razón, la empresa debe definir el propósito del cálculo y mantener criterios consistentes en la asignación de los recursos.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5 Costos relevantes para la toma de decisiones

    .bloque-texto-g.bloque-texto-g--inverso.tema2-bloque-decisiones.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 En la prestación de servicios agrícolas mecanizados, las empresas deben evaluar si resulta conveniente aceptar un contrato, realizar una labor adicional, utilizar una máquina propia o contratar un servicio externo. Para tomar estas decisiones es necesario identificar los costos que pueden cambiar según la alternativa seleccionada.

    .row.align-items-center.justify-content-center.mb-4
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema2-icono(
          src="@/assets/curso/temas/t2/img18.svg"
          alt=""
        )
      .col-md-9
        .tema2-nota.p-3
          p.mb-0 Un costo relevante es aquel que varía entre las alternativas que se comparan y, por tanto, puede modificar la decisión. Por el contrario, los costos que permanecen iguales en todas las opciones no influyen directamente en la comparación.

    .row.justify-content-center.mb-4
      .col-lg-5
        .tema2-factor-titulo.p-2
          p.mb-0 Otros conceptos relacionados son:

    .row.g-4.mb-4
      .col-md-6
        .tema2-concepto
          img.tema2-concepto__imagen(
            src="@/assets/curso/temas/t2/img19.png"
            alt=""
          )
          .p-4
            h5 Costo de oportunidad:
            p.mb-0 representa el beneficio que se deja de obtener al elegir una alternativa en lugar de otra. Por ejemplo, cuando un tractor se destina a un contrato, puede dejar de atender otro servicio que generaría mayores ingresos.
      .col-md-6
        .tema2-concepto
          img.tema2-concepto__imagen(
            src="@/assets/curso/temas/t2/img20.png"
            alt=""
          )
          .p-4
            h5 Costo incremental:
            p.mb-0 corresponde al costo adicional que se genera al aumentar la producción o realizar una actividad adicional. En una labor de rastrillada, puede incluir el combustible, los lubricantes y la mano de obra necesarios para atender hectáreas adicionales.

    .tema2-ejemplo-decision.p-4.mb-4
      p.mb-4
        strong Por ejemplo:
        |  una empresa analiza aceptar un contrato adicional de rastrillada de 40 hectáreas a una tarifa de $70.000 por hectárea. El costo variable adicional se estima en $52.000 por hectárea.
      .row.align-items-stretch.justify-content-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0
          img.w-100.h-100.object-fit-cover(
            src="@/assets/curso/temas/t2/img21.png"
            alt=""
          )
        .col-lg-8
          .tema2-formula-titulo.p-3.mb-3
            p.mb-3 Para determinar el margen de contribución unitario se aplica la siguiente fórmula:
            .tema2-calculo.p-3
              h4.tema2-calculo__operacion.mb-0 Margen de contribución unitario = Tarifa − Costo variable unitario
          .tema2-formula-titulo.p-3.mb-3
            p.mb-3 Al reemplazar los valores:
            .tema2-calculo.p-3
              h4.tema2-calculo__operacion.mb-0 $70.000 − $52.000 = $18.000 por hectárea
          .tema2-formula-titulo.p-3
            p.mb-3 El margen de contribución total del contrato es:
            .tema2-calculo.p-3
              h4.tema2-calculo__operacion.mb-0 $18.000 × 40 hectáreas = $720.000
      p.mb-0 Esto significa que el contrato aporta $720.000 para cubrir los costos fijos y contribuir al resultado de la empresa. Si existe capacidad disponible y no se desplaza otro trabajo más rentable, aceptar el contrato puede ser conveniente. Sin embargo, si la máquina está ocupada y debe dejar de atender otro servicio con un margen superior, también debe considerarse el costo de oportunidad.

    .row.align-items-center.justify-content-center.mb-0
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema2-icono(
          src="@/assets/curso/temas/t2/img22.svg"
          alt=""
        )
      .col-lg-9
        .tema2-nota.p-2.px-4
          p.mb-0 La decisión no debe basarse únicamente en comparar la tarifa con el costo total promedio. Es necesario considerar la capacidad disponible, los costos adicionales, los compromisos contractuales, la distancia, los riesgos y las alternativas de uso de la maquinaria.
</template>

<script>


export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    datosSlyderCosteo: [
      {
        titulo: 'Costeo por órdenes',
        texto:
          'Acumula los costos de cada trabajo, cliente, contrato o lote específico. En los servicios agrícolas mecanizados puede aplicarse a la preparación de un predio o a una cosecha contratada por un cliente. Cada orden permite registrar los recursos utilizados, las horas de operación, los insumos y los costos asociados.',
        imagen: '@/assets/curso/temas/t2/img11.png',
      },
      {
        titulo: 'Costeo por procesos',
        texto:
          'Acumula los costos por etapas o procesos homogéneos y determina costos promedio. Puede utilizarse en operaciones repetitivas, como las desarrolladas en una planta de acondicionamiento de productos agrícolas.',
        imagen: '@/assets/curso/temas/t2/img12.png',
      },
      {
        titulo: 'Costeo basado en actividades (ABC)',
        texto:
          'Asigna los costos indirectos de acuerdo con las actividades que los generan y los inductores que permiten distribuirlos. Puede ser útil en empresas que administran varios equipos, prestan diferentes servicios y desarrollan actividades de apoyo, como mantenimiento, transporte y programación de operaciones.',
        imagen: '@/assets/curso/temas/t2/img13.png',
      },
    ],
  }),
}
</script>
