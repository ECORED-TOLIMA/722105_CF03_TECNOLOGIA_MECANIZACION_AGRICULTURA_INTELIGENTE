<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

const mensajeCorrecto =
  '¡Excelente trabajo! Se evidencia la comprensión de los fundamentos y procedimientos relacionados con la determinación, proyección, cálculo y análisis de los costos de operación de las actividades agrícolas mecanizadas.'
const mensajeIncorrecto =
  'Revise nuevamente el contenido del componente formativo.'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Costos de operación de actividades agrícolas mecanizadas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Comprobar la comprensión de los fundamentos, procedimientos y herramientas para proyectar, calcular, sistematizar, evaluar y controlar los costos de operación de las actividades agrícolas mecanizadas, mediante la aplicación de conceptos y el análisis de situaciones propias del sector.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de una empresa que presta servicios agrícolas mecanizados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar exclusivamente la compra de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ofrecer labores mecanizadas para atender necesidades de producción agrícola.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comercializar únicamente insumos para cultivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar actividades agrícolas sin utilizar equipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 2,
          texto:
            'En una actividad de preparación del suelo, ¿cuál de los siguientes elementos corresponde a un insumo directo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El servicio de contabilidad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El arrendamiento de la oficina administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La publicidad de los servicios mecanizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El combustible consumido por el tractor durante la labor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 3,
          texto:
            'Una empresa presta un servicio de preparación del suelo a un cliente y acumula los recursos utilizados en ese contrato específico. ¿Qué sistema de costeo resulta más apropiado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Costeo por órdenes.', esCorrecta: true },
            { id: 'b', texto: 'Costeo por procesos.', esCorrecta: false },
            { id: 'c', texto: 'Costeo variable.', esCorrecta: false },
            { id: 'd', texto: 'Costeo absorbente.', esCorrecta: false },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 4,
          texto:
            '¿Cuál es la diferencia principal entre una inversión y un costo de operación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La inversión corresponde siempre a un gasto administrativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El costo de operación solo se presenta cuando se adquiere maquinaria nueva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La inversión permite adquirir un activo con beneficios en varios periodos, mientras que el costo de operación corresponde a los recursos utilizados para prestar el servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ambos conceptos representan exclusivamente ingresos de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes es una fuente interna de información para determinar los costos de operación?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una publicación especializada sobre precios internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El registro de horas de operación de la maquinaria de la empresa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una cotización de un proveedor de repuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un manual técnico publicado por el fabricante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 6,
          texto:
            'Una empresa tiene 500 galones de combustible valorados en $5.400.000 y recibe 1.000 galones adicionales por $11.200.000. ¿Cuál es el costo unitario aproximado mediante el método de promedio ponderado?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '$10.800 por galón.', esCorrecta: false },
            { id: 'b', texto: '$11.200 por galón.', esCorrecta: false },
            { id: 'c', texto: '$12.000 por galón.', esCorrecta: false },
            { id: 'd', texto: '$11.066,67 por galón.', esCorrecta: true },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 7,
          texto:
            'Una maquinaria tiene un costo de adquisición de $250.000.000, un valor residual de $75.000.000 y una vida útil de 10 años. ¿Cuál es su depreciación anual por el método de línea recta?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '$17.500.000', esCorrecta: true },
            { id: 'b', texto: '$25.000.000', esCorrecta: false },
            { id: 'c', texto: '$32.500.000', esCorrecta: false },
            { id: 'd', texto: '$7.500.000', esCorrecta: false },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 8,
          texto:
            '¿Qué método de determinación de costos utiliza registros de consumo, horas y valores efectivamente registrados durante la operación?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Método comparativo.', esCorrecta: false },
            { id: 'b', texto: 'Método estándar.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Método histórico o real.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Método estimado o de ingeniería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes conceptos corresponde a un costo de propiedad de la maquinaria agrícola?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El combustible consumido durante la jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La depreciación del tractor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los lubricantes utilizados durante la labor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los repuestos utilizados en una reparación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 10,
          texto:
            'Un tractor tiene un costo horario de $141.130 y trabaja con una sembradora cuyo costo horario es de $40.000. Si el conjunto tiene una capacidad efectiva de 2 hectáreas por hora, ¿cuál es el costo por hectárea?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$181.130 por hectárea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$90.565 por hectárea.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$141.130 por hectárea.',
              esCorrecta: false,
            },
            { id: 'd', texto: '$80.000 por hectárea.', esCorrecta: false },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 11,
          texto:
            'Para calcular el costo de mano de obra por hora, ¿qué relación debe establecerse?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El costo total de mano de obra dividido entre las horas definidas como base de asignación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El precio del combustible dividido entre las hectáreas trabajadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El valor de adquisición de la maquinaria dividido entre los días trabajados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El costo de mantenimiento dividido entre el número de contratos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 12,
          texto:
            'Durante una labor mecanizada, el tractor debe trasladarse entre dos predios antes de iniciar el trabajo. ¿Cómo debe tratarse este traslado en el análisis de costos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe excluirse siempre porque no se realiza trabajo sobre el suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Debe registrarse exclusivamente como un ingreso adicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe contabilizarse únicamente cuando se presenta una avería.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Debe registrarse y asignarse según criterios como la distancia, el tiempo o el costo del transporte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 13,
          texto:
            '¿Qué herramienta informática permite organizar registros, automatizar fórmulas y calcular costos por hora o por hectárea?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un editor de imágenes.', esCorrecta: false },
            { id: 'b', texto: 'Una hoja de cálculo.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Un reproductor multimedia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un programa de diseño gráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 14,
          texto:
            'Una empresa establece como estándar un consumo de 8 galones de combustible por hectárea, pero registra un consumo real de 9,5 galones por hectárea. ¿Cuál es la variación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,5 galones por hectárea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1 galón por hectárea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1,5 galones por hectárea.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '2,5 galones por hectárea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 15,
          texto:
            '¿Cuál es una de las principales finalidades de los indicadores de costos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar todos los registros de operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de revisar los costos reales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar exclusivamente el precio de compra de la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuantificar y hacer seguimiento al comportamiento de los costos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 16,
          texto:
            'Una empresa proyectó un costo de $110.000 por hectárea y obtuvo un costo real de $125.000 por hectárea. ¿Cuál es la variación porcentual aproximada respecto al costo proyectado?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '13,64 %', esCorrecta: true },
            { id: 'b', texto: '10,00 %', esCorrecta: false },
            { id: 'c', texto: '15,00 %', esCorrecta: false },
            { id: 'd', texto: '25,00 %', esCorrecta: false },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 17,
          texto:
            '¿Qué permite evaluar el análisis de sensibilidad en los costos de operación?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de maquinaria que puede adquirir una empresa sin considerar sus costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El efecto que producen los cambios en variables como el combustible o la capacidad de trabajo sobre los costos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La clasificación de los documentos contables por fecha.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cantidad de trabajadores requeridos para todas las actividades agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 18,
          texto:
            '¿Cuál es una característica de un informe de costos bien elaborado?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar únicamente el valor total sin explicar su origen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Excluir los soportes para simplificar la presentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incluir información clara, verificable y relacionada con el periodo o actividad evaluada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Combinar datos de distintos periodos sin identificar su procedencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 19,
          texto:
            'Durante la revisión de una hoja de cálculo se encuentra que un mismo gasto de mantenimiento fue registrado dos veces. ¿Qué tipo de inconsistencia se presenta?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Duplicidad de información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Error en las unidades de medida.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Valor desactualizado.', esCorrecta: false },
            { id: 'd', texto: 'Omisión de conceptos.', esCorrecta: false },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
        {
          id: 20,
          texto:
            'Después de corregir un registro de combustible, la empresa implementa una revisión diaria de los comprobantes y los consumos reportados. ¿Qué busca principalmente esta acción correctiva?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el consumo de combustible por jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar todos los documentos de suministro anteriores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar el costo horario sin revisar los datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar que se repita la causa de la inconsistencia y comprobar la confiabilidad de los registros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: mensajeCorrecto,
          mensaje_incorrecto: mensajeIncorrecto,
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
