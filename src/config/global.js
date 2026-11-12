export default {
  global: {
    Name: 'Costos de operación de actividades agrícolas mecanizadas',
    Description:
      'El componente formativo desarrolla los conocimientos y habilidades necesarios para proyectar, calcular, evaluar y ajustar los costos de operación de las actividades agrícolas mecanizadas. Aborda los fundamentos del costeo, la gestión de información e inventarios, la depreciación de maquinaria, los métodos de cálculo, la sistematización de datos y el análisis de resultados para la toma de decisiones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Empresa y producción en los servicios mecanizados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características y finalidad de la empresa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Producción y prestación de servicios mecanizados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Bienes y recursos de la producción',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de los costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos del costo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de los costos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diferencias entre costos, gastos e ingresos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistemas de costeo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Costos relevantes para la toma de decisiones',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Información para la determinación de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fuentes y técnicas de recolección de información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Registro y documentación de los costos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Gestión y valoración de inventarios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Depreciación de la maquinaria agrícola',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Proyección y cálculo de los costos de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métodos de determinación de costos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Costos de propiedad y costos de operación de la maquinaria',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cálculo del costo horario de la maquinaria',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Costos de mano de obra',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Costos de traslado y tiempos improductivos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Cálculo del costo por actividad mecanizada',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistematización de los costos de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Registro y organización de la información de costos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Herramientas informáticas para el cálculo y control',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estándares de costos y análisis por actividad',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Evaluación y análisis de los costos de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Análisis de costos y su importancia',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Indicadores de costos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Medición e interpretación de resultados',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Análisis de sensibilidad y escenarios',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Presentación de resultados e informes de costos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Novedades, inconsistencias y ajustes de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Identificación y clasificación de novedades',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Inconsistencias frecuentes en los costos de operación',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Ajustes y acciones correctivas',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Verificación de los ajustes y recomendaciones',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Centro de costos',
      significado:
        'Unidad, equipo, labor o área de la empresa a la que se asignan costos para facilitar su control y análisis por separado.',
    },
    {
      termino: 'Costo',
      significado:
        'Valor monetario de los recursos utilizados para producir un bien o prestar un servicio.',
    },
    {
      termino: 'Costo estándar',
      significado:
        'Costo predeterminado que representa lo que debería costar una actividad bajo condiciones definidas.',
    },
    {
      termino: 'Costo fijo',
      significado:
        'Costo que se mantiene constante dentro de un periodo y rango de actividad determinados.',
    },
    {
      termino: 'Costo incremental',
      significado:
        'Costo adicional que se genera al elegir una alternativa o ampliar el nivel de una actividad o servicio.',
    },
    {
      termino: 'Costo por hora',
      significado:
        'Valor de los costos atribuibles a una máquina o conjunto de maquinaria por cada hora de operación.',
    },
    {
      termino: 'Costo variable',
      significado:
        'Costo que cambia según el nivel de actividad o la utilización de los recursos.',
    },
    {
      termino: 'Depreciación',
      significado:
        'Distribución sistemática del valor depreciable de un activo durante su vida útil.',
    },
    {
      termino: 'Gasto',
      significado:
        'Recurso consumido en actividades administrativas, comerciales o de apoyo al funcionamiento de la empresa.',
    },
    {
      termino: 'Indicador de costos',
      significado:
        'Medida que relaciona un costo con una unidad de actividad, recurso o resultado.',
    },
    {
      termino: 'Inventario',
      significado:
        'Existencias de insumos, repuestos, materiales y herramientas disponibles para las operaciones de la empresa.',
    },
    {
      termino: 'Kárdex',
      significado:
        'Registro de las entradas, salidas y saldos de inventario, expresados en cantidades y valores.',
    },
    {
      termino: 'Margen de contribución',
      significado:
        'Diferencia entre el ingreso unitario y el costo variable unitario.',
    },
    {
      termino: 'Objeto de costo',
      significado:
        'Elemento para el cual se desea determinar un costo, como una máquina, labor, contrato o cliente.',
    },
    {
      termino: 'Valor residual',
      significado:
        'Valor estimado que se espera obtener por un activo al final de su vida útil.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Society of Agricultural and Biological Engineers. (2025). Agricultural machinery management data (ASAE D497.7, reaffirmed 2025). ASABE.',
      link: 'https://elibrary.asabe.org/abstract.asp?aid=36431&redir&redirType&t=2&utm',
    },
    {
      referencia: 'Congreso de Colombia. (2009). Ley 1314 de 2009.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Horngren, C. T., Datar, S. M., & Rajan, M. V. (2018). Cost accounting: A managerial emphasis (16.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Johnson, J. (2023). Farm machinery cost calculations (Publication 3543). Mississippi State University Extension Service.',
      link: 'https://accessibility.extension.msstate.edu/publications/farm-machinery-cost-calculations?utm',
    },
    {
      referencia:
        'Kay, R. D., Edwards, W. M., & Duffy, P. A. (2020). Farm management (9.ª ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420 de 2015.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Srivastava, A. K., Goering, C. E., Rohrbach, R. P., & Buckmaster, D. R. (2006). Machinery selection and management. En Engineering principles of agricultural machines (2.ª ed., pp. 525–552). American Society of Agricultural and Biological Engineers.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diego Fabián Chavarriaga Valencia',
          cargo: 'Instructor técnico ',
          centro: 'Centro Agropecuario de Buga - Regional Valle',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
