import { WorksheetData } from '../types/worksheet';

export const WORKSHEETS_DATA: WorksheetData[] = [
  // =========================================================================
  // TEMA 1: LOS RIESGOS CON LA TECNOLOGÍA
  // =========================================================================
  {
    id: 1,
    themeNumber: 1,
    themeCategory: 'Tecnología y Convivencia Digital',
    shortTag: 'Riesgos de la Tecnología',
    title: 'Luces y Sombras en la Pantalla: Navegando Seguros en el Tambo y la Comunidad',
    subtitle: 'Ficha Pedagógica de Comprensión Lectora y Ciudadanía Digital en el Ámbito Rural',
    curricularArea: 'Comunicación',
    gradeAndLevel: '2.° de Secundaria - Ámbito Rural',
    cnebCompetency: 'Lee diversos tipos de textos escritos en su lengua materna',
    cnebCapacities: [
      'Obtiene información del texto escrito (Nivel Literal)',
      'Infiere e interpreta información del texto (Nivel Inferencial)',
      'Reflexiona y evalúa la forma, el contenido y contexto del texto (Nivel Crítico)'
    ],
    reading: {
      title: 'Luces y Sombras en la Pantalla',
      synopsis: 'La llegada del internet satelital al anexo de Monte Azul transforma la vida de los estudiantes, enfrentándolos a oportunidades educativas pero también a engaños digitales, ciberacoso y pérdida de horas de descanso.',
      readingTime: '6 minutos de lectura concentrada',
      paragraphs: [
        'En el anexo de Monte Azul, situado a más de tres mil metros sobre el nivel del mar, la inauguración de la antena satelital en el centro Tambo Bicentenario fue recibida con fiesta y algarabía. Para Mateo y Yanira, dos entusiastas estudiantes de segundo de secundaria, aquel acontecimiento representaba una ventana al mundo: por fin podrían investigar sobre técnicas agrícolas para sus parcelas familiares, consultar enciclopedias virtuales para el área de Ciencia y Tecnología, y comunicarse con sus tíos que trabajaban en Lima mediante videollamadas.',
        'Sin embargo, al cabo de pocas semanas, el deslumbrante brillo de las pantallas empezó a proyectar densas sombras en la convivencia escolar. Mateo, seducido por juegos en red y cadenas interminables de videos cómicos, comenzó a llegar tarde a clases con los ojos enrojecidos. Descuidaba el pastoreo de sus ovejas y las faenas familiares, ensimismado en responder notificaciones a cualquier hora de la noche. La falta de sueño disminuyó drásticamente su concentración en el colegio.',
        'La situación se tornó aún más delicada cuando Yanira cayó en un engaño digital. A través de un enlace compartido en un grupo de mensajería, una supuesta institución prometía "laptops de última generación y bonos estudiantiles automáticos" a cambio de ingresar nombres completos, números de DNI y fotografías de los documentos de identidad de sus padres. Entusiasmada por la posibilidad de tener una computadora propia, Yanira compartió los datos sin sospechar que se trataba de una modalidad de fraude electrónico denominada "phishing".',
        'Paralelamente, surgió el ciberacoso en el aula. Algunos compañeros crearon perfiles falsos y anónimos en redes sociales para burlarse de la forma de hablar de Lucía, una tímida compañera proveniente de un caserío vecino, alterando sus fotos con burlas crueles. Lucía dejó de participar en clases y lloraba en los recreos, sintiendo que no tenía ningún lugar seguro donde refugiarse de las miradas acusadoras de la red.',
        'Frente a estos sucesos, la profesora de Comunicación, la maestra Carmen, en coordinación con el presidente comunal y el teniente gobernador, convocó a una asamblea escolar de emergencia. Allí no se propuso prohibir la tecnología, sino aprender a dominarla con responsabilidad y ética. Los estudiantes redactaron el "Pacto Digital de Monte Azul": establecieron horarios libres de pantalla para convivir con la familia, acordaron nunca divulgar datos personales ni contraseñas, y se comprometieron a tratar en el ciberespacio con el mismo respeto y fraternidad que exigen las costumbres ancestrales de la comunidad.',
        'Mateo comprendió que el celular es una herramienta valiosa de aprendizaje pero jamás un reemplazo del calor humano, del esfuerzo en la chacra ni del diálogo frente a frente. Yanira aprendió a dudar de ofertas milagrosas y a verificar fuentes confiables, mientras que el aula entera se disculpó con Lucía, descubriendo que la verdadera modernidad radica en usar la tecnología para construir lazos de solidaridad y no para lastimar la dignidad de los demás.'
      ],
      vocabulary: [
        { word: 'Tambo', definition: 'Centro comunitario estatal en zonas rurales que brinda servicios públicos y acceso a internet.' },
        { word: 'Phishing', definition: 'Técnica de engaño cibernético para robar contraseñas, números de DNI y datos bancarios.' },
        { word: 'Ciberacoso', definition: 'Hostigamiento, humillación o intimidación constante que se realiza a través de medios digitales.' },
        { word: 'Ensimismado', definition: 'Concentrado en sus propios pensamientos o pantallas, ajeno al entorno que lo rodea.' },
        { word: 'Asertividad', definition: 'Capacidad de expresar ideas y límites con respeto, firmeza y sin agredir a los demás.' }
      ],
      illustrationType: 'technology',
      quoteText: '«La tecnología es como el fuego del fogón: si sabemos utilizarla abriga y alimenta; si la manejamos sin cuidado, quema y destruye la armonía del hogar.»',
      quoteAuthor: 'Sabiduría comunal de Monte Azul'
    },
    literalQuestions: [
      {
        id: 'lit-1',
        question: '¿Dónde se inauguró la antena de internet satelital que transformó al anexo de Monte Azul?',
        options: [
          'En el centro de salud de la provincia',
          'En el centro Tambo Bicentenario',
          'En la vivienda del teniente gobernador',
          'En la plaza principal del distrito vecino'
        ],
        correctIndex: 1,
        explanation: 'El primer párrafo precisa que la antena satelital se inauguró en el centro Tambo Bicentenario de Monte Azul.',
        pedagogicalSkill: 'Identificar lugar explícito'
      },
      {
        id: 'lit-2',
        question: '¿Qué consecuencia directa sufrió Mateo debido a su desvelo con los videojuegos nocturnos?',
        options: [
          'Perdió su teléfono celular en el camino a la chacra',
          'Llegaba tarde a clases con los ojos enrojecidos y descuidaba el pastoreo',
          'Decidió abandonar para siempre sus estudios secundarios',
          'Fue expulsado de la asamblea comunal por el teniente gobernador'
        ],
        correctIndex: 1,
        explanation: 'El texto indica explícitamente que Mateo llegaba tarde, con ojos enrojecidos, descuidando el pastoreo y las faenas familiares.',
        pedagogicalSkill: 'Reconocer acciones y consecuencias inmediatas'
      },
      {
        id: 'lit-3',
        question: '¿Qué información solicitaron los estafadores a Yanira con la promesa de laptops y bonos?',
        options: [
          'Nombres completos, DNI y fotografías de los documentos de sus padres',
          'El pago inmediato de una cuota de inscripción bancaria',
          'El registro fotográfico del ganado de su familia',
          'La firma del director de la institución educativa'
        ],
        correctIndex: 0,
        explanation: 'El texto señala que el mensaje trampa solicitaba nombres completos, números de DNI y fotos de documentos de identidad de sus progenitores.',
        pedagogicalSkill: 'Identificar datos específicos de la trama'
      },
      {
        id: 'lit-4',
        question: '¿Qué hicieron algunos compañeros del colegio para agredir a Lucía digitalmente?',
        options: [
          'Le escondieron sus cuadernos de trabajo durante el recreo',
          'Crearon perfiles falsos y anónimos para alterar sus fotos y burlarse de su forma de hablar',
          'La obligaron a comprar megas de internet para todo el grupo',
          'Le enviaron un virus que bloqueó su dispositivo móvil'
        ],
        correctIndex: 1,
        explanation: 'En el párrafo 4 se detalla que crearon perfiles falsos y anónimos para burlarse de su forma de hablar y alterar fotos.',
        pedagogicalSkill: 'Identificar hechos y conductas explícitas'
      },
      {
        id: 'lit-5',
        question: '¿Cuál fue el nombre del acuerdo colectivo redactado por los estudiantes en la asamblea comunal?',
        options: [
          'Reglamento de Castigo Estudiantil',
          'Pacto Digital de Monte Azul',
          'Estatuto de Comunicaciones Rurales',
          'Tratado de Prohibición Tecnológica'
        ],
        correctIndex: 1,
        explanation: 'El texto menciona explícitamente la redacción del "Pacto Digital de Monte Azul".',
        pedagogicalSkill: 'Localizar términos y acuerdos textuales'
      }
    ],
    inferentialQuestions: [
      {
        id: 'inf-1',
        question: 'A partir de la actitud inicial de Mateo y Yanira, ¿qué se puede deducir sobre el acceso a la tecnología en comunidades rurales?',
        options: [
          'Que la tecnología es intrínsecamente perjudicial y nunca debe permitirse en el campo',
          'Que genera gran ilusión de superación, pero requiere alfabetización y orientación preventiva para evitar riesgos',
          'Que los jóvenes rurales carecen de interés por comunicarse con familiares foráneos',
          'Que el internet satelital solo sirve para el entretenimiento lúdico y videojuegos'
        ],
        correctIndex: 1,
        explanation: 'Se deduce que el acceso abre inmensas oportunidades de desarrollo y estudio, pero sin educación preventiva expone a peligros imprevistos.',
        pedagogicalSkill: 'Deducir intenciones y contextos sociales'
      },
      {
        id: 'inf-2',
        question: '¿Por qué los ciberacosadores de Lucía decidieron utilizar "perfiles falsos y anónimos"?',
        options: [
          'Porque desconocían las normas gramaticales del idioma español',
          'Porque cobardemente buscaban dañar sin asumir las consecuencias ni ser sancionados',
          'Porque querían proteger la identidad de Lucía ante los profesores',
          'Porque la plataforma obligaba a todos los usuarios a ocultar sus nombres'
        ],
        correctIndex: 1,
        explanation: 'El anonimato en redes es utilizado como escudo de cobardía para evitar la responsabilidad personal y el reproche de la comunidad escolar.',
        pedagogicalSkill: 'Interpretar motivaciones de los personajes'
      },
      {
        id: 'inf-3',
        question: '¿Qué se infiere de la decisión de la asamblea comunal de "no prohibir la tecnología, sino aprender a dominarla"?',
        options: [
          'Que la comunidad consideró que la prohibición es inútil y que la verdadera solución radica en la educación y autorregulación',
          'Que las autoridades comunales mostraron desinterés por la salud emocional de los jóvenes',
          'Que el centro Tambo amenazó con retirar la antena si se prohibía el internet',
          'Que los padres de familia preferían que los estudiantes no hicieran faenas agrícolas'
        ],
        correctIndex: 0,
        explanation: 'Prohibir no educa; formar con criterios éticos permite aprovechar las bondades del internet minimizando las amenazas.',
        pedagogicalSkill: 'Extraer conclusiones lógicas del texto'
      },
      {
        id: 'inf-4',
        question: 'Del engaño que sufrió Yanira, se desprende que los ciberdelincuentes se aprovechan principalmente de:',
        options: [
          'La excelente velocidad del internet provisto en el centro Tambo',
          'La ingenuidad, necesidad económica y los anhelos de superación de las familias',
          'La ausencia de computadoras en las viviendas rurales',
          'El desconocimiento de los horarios de clase de los estudiantes'
        ],
        correctIndex: 1,
        explanation: 'Los estafadores utilizan cebos como bonos y equipos para aprovecharse de los deseos legítimos de progreso y la falta de malicia de los usuarios.',
        pedagogicalSkill: 'Identificar causas profundas de un fenómeno'
      },
      {
        id: 'inf-5',
        question: '¿Qué significado adquiere la frase: "La verdadera modernidad radica en usar la tecnología para construir lazos de solidaridad y no para lastimar"?',
        options: [
          'Que solo quienes tienen los celulares más caros son verdaderamente modernos',
          'Que el progreso auténtico se mide por los valores éticos y el bienestar colectivo, no solo por tener máquinas avanzadas',
          'Que es obligatorio compartir todas las tareas escolares en redes sociales públicas',
          'Que los aparatos electrónicos sustituyen completamente los valores comunales'
        ],
        correctIndex: 1,
        explanation: 'El avance tecnológico solo es positivo cuando eleva la dignidad y cohesión humana, no cuando destruye la armonía comunitaria.',
        pedagogicalSkill: 'Interpretar lenguaje figurado y sentido global'
      }
    ],
    criticalQuestions: [
      {
        id: 'crit-1',
        question: '¿Qué opinas sobre el comportamiento de Mateo al descuidar sus responsabilidades en la chacra y su familia por las pantallas?',
        promptHint: 'Considera la importancia de equilibrar el estudio digital con las labores del campo y la convivencia familiar.',
        communityContext: 'En nuestras comunidades rurales el trabajo en equipo (ayni) y el pastoreo son vitales para la economía familiar.',
        rubricCriteria: 'Argumenta con claridad sobre el valor de la disciplina, el respeto a la familia y el uso equilibrado del tiempo.',
        suggestedAnswer: 'Considero que su actitud fue irresponsable porque rompió la reciprocidad familiar. La tecnología debe sumar a nuestra vida, no robarnos el tiempo para apoyar a nuestros padres ni afectar nuestra salud.'
      },
      {
        id: 'crit-2',
        question: 'Si tú presenciaras que un compañero de tu colegio rural sufre ciberacoso por su forma de hablar o vestir, ¿cómo actuarías?',
        promptHint: 'Plantea acciones concretas de apoyo a la víctima y de reporte a docentes o autoridades escolares.',
        communityContext: 'La identidad cultural y la diversidad lingüística merecen total respeto en todas las escuelas del Perú.',
        rubricCriteria: 'Evidencia empatía, rechazo a la violencia y propone canales de ayuda solidarios y pacíficos.',
        suggestedAnswer: 'No me quedaría callado ni reenviaría las burlas. Brindaría mi solidaridad al compañero afectado, le aconsejaría hablar con el tutor y reportaría el hecho a la dirección o tutoría de la I.E.'
      },
      {
        id: 'crit-3',
        question: '¿Crees que el "Pacto Digital Comunitario" propuesto en Monte Azul podría aplicarse en tu propia institución educativa y hogar? ¿Por qué?',
        promptHint: 'Menciona normas o reglas de convivencia digital que harían falta en tu aula o en tu casa.',
        communityContext: 'El uso de celulares en el aula y en los hogares requiere normas consensuadas entre padres, maestros y estudiantes.',
        rubricCriteria: 'Contextualiza a su realidad escolar y formula propuestas viables de convivencia pacífica.',
        suggestedAnswer: 'Sí, sería muy útil acordar reglas claras como apagar los teléfonos durante las comidas, no llevarlos al pastoreo para evitar accidentes y priorizar el diálogo cara a cara en los recreos y faenas.'
      },
      {
        id: 'crit-4',
        question: 'A partir de la frase de cierre sobre el fogón, ¿de qué manera la tecnología puede ser un "fuego que abriga" para el desarrollo de tu pueblo?',
        promptHint: 'Piensa en proyectos productivos, difusión de costumbres, aprendizaje y medicina comunitaria.',
        communityContext: 'El internet en el campo puede conectar productos agrícolas con mercados justos o acceder a telesalud.',
        rubricCriteria: 'Reflexiona sobre el potencial positivo y transformador de las TIC en zonas andinas o amazónicas.',
        suggestedAnswer: 'Puede abrigar a nuestro pueblo si lo usamos para investigar mejores abonos orgánicos, dar a conocer nuestras artesanías y danzas al mundo, y formarnos como futuros profesionales que retornen a servir a su tierra.'
      }
    ],
    textIdentification: [
      {
        id: 'ident-1',
        question: '¿Cuál es el título que mejor sintetiza el sentido y conflicto central del texto leído?',
        options: [
          'La Gran Falla del Satélite en las Alturas del Perú',
          'Luces y Sombras en la Pantalla: Navegando Seguros en el Tambo y la Comunidad',
          'El Fin de la Agricultura en el Anexo de Monte Azul',
          'Los Mejores Videojuegos en las Comunidades Andinas'
        ],
        correctIndex: 1,
        explanation: 'El título resalta la dualidad entre beneficios ("luces") y riesgos ("sombras"), y la necesidad de navegar seguros.',
        pedagogicalSkill: 'Identificación del título y sentido global'
      },
      {
        id: 'ident-2',
        question: '¿Cuál es el tema principal del texto?',
        options: [
          'La biografía de los ingenieros que instalaron la antena del Tambo',
          'Los riesgos del mal uso de la tecnología y la importancia de la ciudadanía digital en la comunidad',
          'El costo económico del servicio de internet satelital en el Perú',
          'Los diferentes tipos de cultivos que existen en Monte Azul'
        ],
        correctIndex: 1,
        explanation: 'El texto gira en torno a cómo el uso descuidado de la tecnología trae problemas y cómo la comunidad se organiza para un uso responsable.',
        pedagogicalSkill: 'Determinación del tema central'
      },
      {
        id: 'ident-3',
        question: '¿Cuál es la idea principal que sostiene la lectura?',
        options: [
          'La tecnología debe ser prohibida por completo en las escuelas rurales para evitar problemas',
          'El acceso a internet ofrece valiosas oportunidades, pero exige responsabilidad, ética y respeto para no dañar a las personas ni a la comunidad',
          'Todos los estudiantes deben poseer teléfonos de alta gama para ser considerados modernos',
          'El pastoreo de ovejas es la única actividad importante para los adolescentes del campo'
        ],
        correctIndex: 1,
        explanation: 'La idea medular es que la tecnología es provechosa siempre que se use con conciencia ética, evitando sus graves riesgos.',
        pedagogicalSkill: 'Identificación de la idea principal'
      },
      {
        id: 'ident-4',
        question: '¿Cuál de las siguientes opciones constituye una idea secundaria del texto?',
        options: [
          'El engaño cibernético mediante enlaces fraudulentos expone la privacidad y seguridad familiar',
          'La asamblea comunal decidió demoler la antena satelital para siempre',
          'Mateo fue contratado por una empresa de Lima para programar videojuegos',
          'Yanira recibió una laptop de oro directamente de la presidencia'
        ],
        correctIndex: 0,
        explanation: 'El caso del phishing a Yanira ilustra y fundamenta los riesgos específicos que acompañan al mal uso de las redes.',
        pedagogicalSkill: 'Diferenciación entre idea principal y secundaria'
      },
      {
        id: 'ident-5',
        question: '¿Cuál fue el propósito comunicativo del autor al redactar este texto?',
        options: [
          'Vender paquetes de datos y teléfonos celulares a los comuneros',
          'Concientizar a los estudiantes sobre los peligros del entorno digital y promover un uso ético y reflexivo de las TIC',
          'Narrar un cuento de hadas sobre una antena mágica en la montaña',
          'Criticar las costumbres tradicionales de las zonas rurales peruanas'
        ],
        correctIndex: 1,
        explanation: 'El texto busca sensibilizar al lector sobre el ciberacoso, la adicción y el fraude, impulsando una actitud preventiva.',
        pedagogicalSkill: 'Identificación del propósito comunicativo'
      }
    ],
    sentenceOrdering: [
      {
        id: 'ord-1',
        text: 'Se inaugura con algarabía la antena de internet satelital en el centro Tambo Bicentenario.',
        correctOrder: 1
      },
      {
        id: 'ord-2',
        text: 'Mateo empieza a desvelarse por los videojuegos y Yanira cae en un enlace engañoso de phishing.',
        correctOrder: 2
      },
      {
        id: 'ord-3',
        text: 'Se crean cuentas falsas en redes sociales para hostigar y humillar a Lucía por su forma de hablar.',
        correctOrder: 3
      },
      {
        id: 'ord-4',
        text: 'La maestra Carmen y las autoridades comunales convocan a una asamblea escolar de reflexión.',
        correctOrder: 4
      },
      {
        id: 'ord-5',
        text: 'Los estudiantes firman el Pacto Digital de Monte Azul y piden disculpas públicas a Lucía.',
        correctOrder: 5
      }
    ],
    columnMatching: [
      {
        id: 'col-1',
        concept: 'Tambo Bicentenario',
        match: 'Punto de conexión e internet estatal en la comunidad',
        hint: 'Espacio físico donde llegó la señal satelital'
      },
      {
        id: 'col-2',
        concept: 'Phishing',
        match: 'Engaño digital para obtener datos privados y DNI',
        hint: 'El fraude que sufrió Yanira con las supuestas laptops'
      },
      {
        id: 'col-3',
        concept: 'Ciberacoso escolar',
        match: 'Ataques anónimos que lastimaron la dignidad de Lucía',
        hint: 'Hostigamiento mediante perfiles falsos y fotos alteradas'
      },
      {
        id: 'col-4',
        concept: 'Desvelo nocturno',
        match: 'Causa de ojos enrojecidos y bajo rendimiento de Mateo',
        hint: 'Consecuencia de pasar madrugadas jugando en el celular'
      },
      {
        id: 'col-5',
        concept: 'Pacto Digital',
        match: 'Compromiso colectivo de respeto, horarios y seguridad',
        hint: 'Solución consensuada en la asamblea comunal'
      }
    ],
    wordSearch: {
      grid: [
        ['P', 'H', 'I', 'S', 'H', 'I', 'N', 'G', 'Z', 'K', 'T', 'L'],
        ['A', 'L', 'G', 'A', 'R', 'A', 'B', 'I', 'A', 'M', 'A', 'U'],
        ['C', 'I', 'B', 'E', 'R', 'A', 'C', 'O', 'S', 'O', 'M', 'C'],
        ['T', 'F', 'O', 'G', 'O', 'N', 'P', 'R', 'O', 'N', 'B', 'E'],
        ['O', 'R', 'E', 'S', 'P', 'E', 'T', 'O', 'Y', 'T', 'O', 'S'],
        ['D', 'S', 'A', 'T', 'E', 'L', 'I', 'T', 'A', 'L', 'Q', 'X'],
        ['I', 'B', 'P', 'R', 'I', 'V', 'A', 'C', 'I', 'D', 'A', 'D'],
        ['G', 'J', 'S', 'O', 'L', 'I', 'D', 'A', 'R', 'I', 'O', 'S'],
        ['I', 'N', 'T', 'E', 'R', 'N', 'E', 'T', 'U', 'R', 'A', 'L'],
        ['T', 'A', 'S', 'E', 'R', 'T', 'I', 'V', 'I', 'D', 'A', 'D'],
        ['A', 'V', 'E', 'R', 'I', 'F', 'I', 'C', 'A', 'R', 'W', 'K'],
        ['L', 'D', 'I', 'G', 'N', 'I', 'D', 'A', 'D', 'N', 'P', 'M']
      ],
      words: [
        { word: 'PHISHING', clue: 'Modalidad de estafa virtual para robar identidades y claves', direction: 'horizontal', row: 0, col: 0 },
        { word: 'CIBERACOSO', clue: 'Intimidación y burlas sistemáticas a través de redes', direction: 'horizontal', row: 2, col: 0 },
        { word: 'RESPETO', clue: 'Valor indispensable para la convivencia en línea y en el aula', direction: 'horizontal', row: 4, col: 1 },
        { word: 'SATELITAL', clue: 'Tipo de conexión que llevó internet al pueblo andino', direction: 'horizontal', row: 5, col: 1 },
        { word: 'PRIVACIDAD', clue: 'Derecho a mantener protegidos nuestros datos y fotos familiares', direction: 'horizontal', row: 6, col: 2 },
        { word: 'ASERTIVIDAD', clue: 'Habilidad para poner límites claros con serenidad', direction: 'horizontal', row: 9, col: 1 },
        { word: 'VERIFICAR', clue: 'Acción de comprobar si una noticia o enlace es auténtico', direction: 'horizontal', row: 10, col: 1 },
        { word: 'DIGNIDAD', clue: 'Valor intrínseco de toda persona que nunca debe ser vulnerado', direction: 'horizontal', row: 11, col: 1 },
        { word: 'PACTO', clue: 'Acuerdo consensuado entre los estudiantes y docentes', direction: 'vertical', row: 0, col: 0 },
        { word: 'TAMBO', clue: 'Centro comunal donde se instaló el acceso digital', direction: 'vertical', row: 0, col: 10 }
      ]
    },
    fillInTheBlanks: {
      wordBank: ['asertividad', 'sin embargo', 'privacidad', 'por lo tanto', 'ciberacoso', 'responsabilidad'],
      items: [
        {
          id: 'fb-1',
          sentenceBefore: 'El internet satelital trajo muchos beneficios a la comunidad,',
          sentenceAfter: 'surgieron problemas de desvelo y engaños digitales.',
          correctWord: 'sin embargo',
          wordType: 'conector',
          grammarHint: 'Conector de oposición o contraste'
        },
        {
          id: 'fb-2',
          sentenceBefore: 'Mateo no durmió por jugar videojuegos;',
          sentenceAfter: 'no pudo concentrarse en sus clases ni cuidar su ganado.',
          correctWord: 'por lo tanto',
          wordType: 'conector',
          grammarHint: 'Conector de causa-consecuencia'
        },
        {
          id: 'fb-3',
          sentenceBefore: 'Nunca debemos compartir fotos de nuestro DNI porque ponemos en riesgo la',
          sentenceAfter: 'de toda nuestra familia.',
          correctWord: 'privacidad',
          wordType: 'vocabulario',
          grammarHint: 'Sustantivo que alude al derecho de reserva de datos'
        },
        {
          id: 'fb-4',
          sentenceBefore: 'Burlarse de un compañero a través de cuentas anónimas se denomina',
          sentenceAfter: 'y genera un gran dolor psicológico.',
          correctWord: 'ciberacoso',
          wordType: 'vocabulario',
          grammarHint: 'Término que designa el hostigamiento virtual'
        },
        {
          id: 'fb-5',
          sentenceBefore: 'Para rechazar mensajes sospechosos con tranquilidad y firmeza necesitamos practicar la',
          sentenceAfter: 'comunicativa.',
          correctWord: 'asertividad',
          wordType: 'vocabulario',
          grammarHint: 'Habilidad socioemocional de expresión equilibrada'
        },
        {
          id: 'fb-6',
          sentenceBefore: 'Manejar la tecnología con',
          sentenceAfter: 'permite convertir las redes en un puente de progreso comunal.',
          correctWord: 'responsabilidad',
          wordType: 'vocabulario',
          grammarHint: 'Valor ético del cumplimiento consciente de deberes'
        }
      ]
    }
  },

  // =========================================================================
  // TEMA 2: LA AUTOESTIMA
  // =========================================================================
  {
    id: 2,
    themeNumber: 2,
    themeCategory: 'Desarrollo Personal y Ciudadanía',
    shortTag: 'La Autoestima',
    title: 'Raíces Fuertes, Alas Propias: El Espejo de Nuestra Identidad Andino-Amazónica',
    subtitle: 'Ficha Pedagógica de Comprensión Lectora sobre Autovaloración e Identidad Cultural',
    curricularArea: 'Comunicación',
    gradeAndLevel: '2.° de Secundaria - Ámbito Rural',
    cnebCompetency: 'Lee diversos tipos de textos escritos en su lengua materna',
    cnebCapacities: [
      'Obtiene información del texto escrito (Nivel Literal)',
      'Infiere e interpreta información del texto (Nivel Inferencial)',
      'Reflexiona y evalúa la forma, el contenido y contexto del texto (Nivel Crítico)'
    ],
    reading: {
      title: 'Raíces Fuertes, Alas Propias',
      synopsis: 'Sayri y Killa enfrentan dudas sobre su valor personal y su identidad cultural al compararse con modelos ajenos, hasta que descubren en las enseñanzas de su abuela y en su propia voz el verdadero significado de la autoestima.',
      readingTime: '6 minutos de lectura concentrada',
      paragraphs: [
        'En la comunidad de Chihuancca, enclavada en las faldas de un majestuoso apu tutelar, Sayri y su prima Killa cursaban el segundo grado de secundaria con sentimientos encontrados. A sus catorce años, el cuerpo cambiaba con rapidez y las opiniones de los demás pesaban más de lo debido. Killa, de mirada dulce y manos hábiles para bordar mantas multicolores, había comenzado a callar en las clases; sentía vergüenza de su acento al hablar castellano y temía las burlas de compañeros que recién habían retornado de la ciudad vistiendo prendas de moda extranjera y alardeando de costumbres que ella no comprendía.',
        'Por su parte, Sayri experimentaba una constante zozobra interior. Aunque era solidario y conocía al detalle las fases de la luna para la siembra de la quinua y la papa nativa, se sentía inferior porque le costaba resolver con rapidez los acertijos de matemáticas. Se miraba al espejo del cuarto rústico y solo encontraba defectos: su estatura baja, su piel morena tostada por el viento gélido de la puna y sus manos agrietadas por el trabajo honesto del campo. Una nube de inseguridad opacaba la luz de sus virtudes.',
        'Una tarde lluviosa, mientras el humo de eucalipto aromaba la cocina a leña, su abuela, Mama Tomasa, observó la tristeza en sus rostros. Tomó su rueca y un puñado de lana de oveja teñida con cochinilla y hierbas del cerro, y los invitó a sentarse a su lado. «Miren este vellón», les dijo con voz pausada y cariñosa. «Si la lana quisiera ser tan brillante como el plástico de la ciudad, perdería su calor y su esencia. Cada fibra tiene una resistencia única; algunas hilan fino y otras grueso, pero todas juntas forman una lliclla capaz de abrigar al pueblo en la helada más cruda. La autoestima de una persona es igual que este telar: no nace de compararse con los demás, sino de reconocer con gratitud lo que somos y lo que podemos brindar al ayni comunal».',
        'Las palabras de la abuela resonaron hondo en el corazón de ambos adolescentes. Comprendieron que la autoestima no consiste en sentirse superior ni en humillar a nadie, sino en aceptarse con amor propio, reconociendo tanto las fortalezas que poseemos como aquellas debilidades que podemos cultivar y mejorar con esfuerzo. Decidieron dejar de esconder sus raíces y empezaron a mirarse con ojos de aprecio y dignidad.',
        'Semana después, el colegio organizó la «Feria de Saberes y Talentos Comunitarios». Killa, venciendo sus antiguos temores y con el corazón palpitando de emoción, subió al escenario vestida con su pollera bordada por sus propias manos y declamó un conmovedor poema en quechua y castellano sobre el canto de los zorzales y el amor a la tierra. Todo el auditorio se puso de pie para ovacionarla con admiración sincera. Sayri, por su lado, presentó una maqueta funcional de un sistema de riego por goteo con botellas recicladas para optimizar el agua en las laderas secas, explicando con solvencia cómo la ciencia escolar se complementa con la sabiduría de sus ancestros.',
        'Al terminar la jornada, mientras regresaban caminando por el sendero iluminado por el atardecer, Killa y Sayri sintieron una paz renovada. Ya no necesitaban la aprobación de modas pasajeras ni temían equivocarse al aprender. Habían descubierto que tener una alta y sana autoestima es tener raíces firmes en la propia historia y alas valientes para soñar y construir un futuro digno.'
      ],
      vocabulary: [
        { word: 'Autoestima', definition: 'Aprecio, valoración y respeto genuino que una persona tiene hacia sí misma.' },
        { word: 'Ayni', definition: 'Principio andino de reciprocidad y ayuda mutua solidaria entre personas y familias.' },
        { word: 'Lliclla', definition: 'Manta tradicional andina tejida a mano que se usa para cargar niños o abrigarse.' },
        { word: 'Zozobra', definition: 'Sentimiento de inquietud, angustia o aflicción interior.' },
        { word: 'Resiliencia', definition: 'Capacidad de sobreponerse a momentos difíciles y salir fortalecido de ellos.' }
      ],
      illustrationType: 'self_esteem',
      quoteText: '«El que aprende a valorarse a sí mismo no necesita apagar la luz de nadie para brillar; camina con la frente en alto abrazando su propia historia.»',
      quoteAuthor: 'Reflexión comunitaria de Chihuancca'
    },
    literalQuestions: [
      {
        id: 'lit-1',
        question: '¿Por qué Killa había empezado a guardar silencio y retraerse en el aula de clases?',
        options: [
          'Porque padecía de una afección en las cuerdas vocales',
          'Porque sentía vergüenza de su acento y temía las burlas de quienes venían de la ciudad',
          'Porque los profesores le prohibían expresarse en las asignaturas',
          'Porque prefería dedicarse exclusivamente a vender tejidos en la plaza'
        ],
        correctIndex: 1,
        explanation: 'El primer párrafo dice explícitamente que Killa callaba por vergüenza a su acento y temor a las burlas.',
        pedagogicalSkill: 'Identificar causas explícitas en el texto'
      },
      {
        id: 'lit-2',
        question: '¿Qué saberes tradicionales dominaba Sayri con gran destreza?',
        options: [
          'El manejo de motocicletas y vehículos de transporte pesado',
          'Las fases de la luna para la siembra de quinua y papa nativa',
          'La programación de computadoras y diseño de páginas web',
          'La compra y venta de ganado en la capital limeña'
        ],
        correctIndex: 1,
        explanation: 'En el párrafo 2 se indica explícitamente que conocía al detalle las fases lunares para la siembra.',
        pedagogicalSkill: 'Reconocer saberes y detalles explícitos'
      },
      {
        id: 'lit-3',
        question: '¿Con qué elemento tradicional comparó Mama Tomasa la autoestima de las personas?',
        options: [
          'Con un cántaro de barro recién horneado',
          'Con un telar y las fibras de lana que abrigan en la helada',
          'Con una moneda brillante traída del extranjero',
          'Con un tractor moderno que ara la tierra'
        ],
        correctIndex: 1,
        explanation: 'Mama Tomasa usó la metáfora del telar de lana de oveja para explicar cómo se construye la autovaloración.',
        pedagogicalSkill: 'Identificar analogías directas del texto'
      },
      {
        id: 'lit-4',
        question: '¿Qué talento presentó Killa en la «Feria de Saberes y Talentos Comunitarios»?',
        options: [
          'Cocinar un plato de trucha frita con papas nativas',
          'Declamar un poema bilingüe en quechua y castellano con su pollera bordada',
          'Cantar baladas modernas en un idioma extranjero',
          'Demostrar un truco de magia con cartas'
        ],
        correctIndex: 1,
        explanation: 'El párrafo 5 describe que declamó un poema en quechua y castellano usando su traje tradicional.',
        pedagogicalSkill: 'Identificar acciones principales de los personajes'
      },
      {
        id: 'lit-5',
        question: '¿Qué proyecto práctico expuso Sayri durante la feria escolar?',
        options: [
          'Un documental sobre la minería formal',
          'Una maqueta de riego por goteo con botellas recicladas para optimizar el agua',
          'Un manual de reparaciones mecánicas de camiones',
          'Un mapa de las carreteras asfaltadas del departamento'
        ],
        correctIndex: 1,
        explanation: 'El texto indica que Sayri presentó una maqueta funcional de riego por goteo con botellas recicladas.',
        pedagogicalSkill: 'Reconocer proyectos y aportes concretos'
      }
    ],
    inferentialQuestions: [
      {
        id: 'inf-1',
        question: '¿Por qué la comparación constante con los demás daña la autoestima de los adolescentes?',
        options: [
          'Porque nadie tiene tiempo de conversar con los vecinos',
          'Porque ignora la propia singularidad y genera sentimientos infundados de inferioridad',
          'Porque la comparación es un mandato de los exámenes del colegio',
          'Porque en la ciudad todas las personas son exactamente idénticas'
        ],
        correctIndex: 1,
        explanation: 'Compararse con estereotipos externos nubla la apreciación de los propios dones, provocando frustración y tristeza.',
        pedagogicalSkill: 'Deducir consecuencias psicológicas y emocionales'
      },
      {
        id: 'inf-2',
        question: '¿Qué representaban las «fibras de lana» en el consejo de la abuela Tomasa?',
        options: [
          'El dinero acumulado por la familia en el banco',
          'Las diversas habilidades, historias y virtudes individuales que enriquecen a la comunidad',
          'Los diferentes tipos de prendas de plástico que venden en las tiendas',
          'Las tareas escolares pendientes de revisión'
        ],
        correctIndex: 1,
        explanation: 'Cada fibra simboliza las capacidades únicas de cada ser humano, las cuales cobran mayor valor al ponerse al servicio de los demás.',
        pedagogicalSkill: 'Interpretar simbolismos y metáforas profundas'
      },
      {
        id: 'inf-3',
        question: '¿Qué transformó internamente a Sayri y Killa para atreverse a participar en la feria escolar?',
        options: [
          'Una amenaza de reprobar el año escolar por parte del director',
          'El descubrimiento de su valor interior y el orgullo por su identidad cultural y saberes',
          'El deseo de ganar un premio económico en efectivo',
          'La orden tajante del teniente gobernador comunal'
        ],
        correctIndex: 1,
        explanation: 'El cambio no provino de una presión externa, sino del florecimiento de su autoconfianza y amor por sus raíces.',
        pedagogicalSkill: 'Identificar causas de evolución de los personajes'
      },
      {
        id: 'inf-4',
        question: 'A partir de la actitud final de los compañeros que aplaudieron de pie a Killa, se concluye que:',
        options: [
          'La autenticidad y el orgullo cultural despiertan respeto genuino y desarman los prejuicios',
          'Los estudiantes solo aplaudían para que terminara rápido la ceremonia',
          'En el colegio estaba prohibido felicitar a los expositores',
          'La poesía en lenguas originarias no tiene valor en la educación peruana'
        ],
        correctIndex: 0,
        explanation: 'Cuando una persona se muestra con dignidad y autenticidad, inspira a su entorno a valorar su identidad.',
        pedagogicalSkill: 'Extraer conclusiones sobre el impacto social de la autoestima'
      },
      {
        id: 'inf-5',
        question: '¿Qué relación existe entre la autoestima saludable y el principio andino del «ayni»?',
        options: [
          'Ninguna, porque la autoestima es egoísta y el ayni es comunitario',
          'Quien se reconoce valioso comparte sus mejores capacidades para el bienestar recíproco de todos',
          'El ayni prohíbe que las personas tengan sentimientos personales',
          'La autoestima solo se cultiva en soledad y sin relacionarse con la gente'
        ],
        correctIndex: 1,
        explanation: 'Una persona con autoestima sólida no busca pisotear a otros, sino cooperar con generosidad en la construcción colectiva.',
        pedagogicalSkill: 'Relacionar conceptos axiológicos e interculturales'
      }
    ],
    criticalQuestions: [
      {
        id: 'crit-1',
        question: '¿Alguna vez te has sentido inseguro o con vergüenza de tus raíces, tu acento o tu comunidad? ¿Cómo lo afrontaste o cómo lo afrontarías hoy?',
        promptHint: 'Reflexiona sobre tu historia familiar, tu lengua materna y tus costumbres locales con honestidad y orgullo.',
        communityContext: 'En el Perú rural confluyen diversas lenguas y saberes milenarios que merecen respeto.',
        rubricCriteria: 'Demuestra autoconciencia, honestidad reflexiva y valoración de la identidad cultural propia.',
        suggestedAnswer: 'Al principio me daba timidez hablar en público porque temía que se rieran de mi forma de hablar, pero hoy entiendo que mi voz y mi cultura son una herencia valiosa que me hace único.'
      },
      {
        id: 'crit-2',
        question: '¿Qué opinas de las personas que se burlan de otros para sentirse "superiores" o "populares" en el colegio?',
        promptHint: 'Analiza si esa conducta es signo de una alta autoestima o, por el contrario, de una profunda inseguridad oculta.',
        communityContext: 'El respeto mutuo es indispensable para una convivencia armónica en las aulas y comunidades.',
        rubricCriteria: 'Emite un juicio crítico sustentado sobre la falsa superioridad y el acoso escolar.',
        suggestedAnswer: 'Quien humilla a los demás en realidad tiene una autoestima muy frágil y busca ocultar sus propias inseguridades. La verdadera fortaleza humana consiste en levantar al que tropieza, no en empujarlo.'
      },
      {
        id: 'crit-3',
        question: 'Mama Tomasa dijo que la lana no debe querer parecerse al plástico. ¿Cómo se aplica esta enseñanza a la influencia de las redes sociales y la televisión?',
        promptHint: 'Piensa en los estereotipos de belleza física y consumismo que nos imponen los medios de comunicación.',
        communityContext: 'Muchos jóvenes rurales se comparan con influencers urbanos que muestran vidas artificiales.',
        rubricCriteria: 'Cuestiona críticamente los estereotipos foráneos frente a la autenticidad y bienestar personal.',
        suggestedAnswer: 'Nos enseña que no debemos copiar modas vacías ni avergonzarnos de nuestro color de piel o vestimenta. Las redes venden imágenes irreales, mientras que nuestras raíces y valores son auténticos y duraderos.'
      },
      {
        id: 'crit-4',
        question: 'Si fueras líder o delegado de tu salón de 2.° de secundaria, ¿qué actividades organizarías para fortalecer la autoestima de tus compañeros?',
        promptHint: 'Propón ferias de talentos, deportes comunales, círculos de conversación o revaloración de saberes de los abuelos.',
        communityContext: 'La escuela es el espacio ideal para descubrir talentos artísticos, deportivos y científicos de cada estudiante.',
        rubricCriteria: 'Formula propuestas creativas, inclusivas y contextualizadas a su comunidad educativa.',
        suggestedAnswer: 'Organizaría un "Mural de Talentos" donde cada estudiante comparta algo que sabe hacer bien: cantar, tejer, cultivar hortalizas o declamar, creando un ambiente donde nadie se sienta menospreciado.'
      }
    ],
    textIdentification: [
      {
        id: 'ident-1',
        question: '¿Cuál es el título que mejor expresa el mensaje central de la lectura?',
        options: [
          'La Tristeza de los Niños del Campo',
          'Raíces Fuertes, Alas Propias: El Espejo de Nuestra Identidad Andino-Amazónica',
          'Las Reglas del Cultivo de Quinua y Papa',
          'El Retorno de los Alumnos de la Ciudad'
        ],
        correctIndex: 1,
        explanation: 'El título simboliza la conexión con los orígenes ("raíces") y la libertad para proyectarse al futuro ("alas").',
        pedagogicalSkill: 'Identificación de título significativo'
      },
      {
        id: 'ident-2',
        question: '¿Cuál es el tema principal tratado en el texto?',
        options: [
          'La elaboración de tejidos con tintes artificiales',
          'La construcción de una autoestima saludable basada en la autoaceptación y el orgullo por la propia identidad',
          'La historia política del departamento de Huancavelica',
          'El costo de las prendas de vestir importadas'
        ],
        correctIndex: 1,
        explanation: 'El núcleo temático es el desarrollo de la autoestima a través de la identidad cultural y el amor propio.',
        pedagogicalSkill: 'Determinación del tema global'
      },
      {
        id: 'ident-3',
        question: '¿Cuál es la idea principal del texto?',
        options: [
          'La verdadera autoestima no surge de compararse ni humillar a otros, sino de aceptarse con dignidad, valorar los propios saberes y ponerlos al servicio del bien común',
          'Solo las personas que viven en las grandes capitales pueden tener confianza en sí mismas',
          'Las matemáticas son la única asignatura que determina el valor de un estudiante en la vida',
          'Los abuelos deben dedicarse únicamente al trabajo agrícola y no aconsejar a los jóvenes'
        ],
        correctIndex: 0,
        explanation: 'Sintetiza la tesis central del relato sobre el autodescubrimiento y el respeto a la propia dignidad.',
        pedagogicalSkill: 'Localización de la idea principal'
      },
      {
        id: 'ident-4',
        question: '¿Cuál de las siguientes proposiciones es una idea secundaria del texto?',
        options: [
          'Mama Tomasa utilizó la rueca y la lana de oveja para ilustrar con sabiduría el valor de la diversidad individual',
          'Sayri vendió su maqueta de riego a una corporación internacional',
          'Killa decidió nunca más volver a hablar en lengua quechua en su hogar',
          'El colegio cerró sus puertas debido a las fuertes lluvias de la sierra'
        ],
        correctIndex: 0,
        explanation: 'La escena pedagógica de la abuela es un hecho secundario que refuerza y da sustento a la idea principal.',
        pedagogicalSkill: 'Diferenciación de ideas secundarias'
      },
      {
        id: 'ident-5',
        question: '¿Cuál es el propósito comunicativo fundamental del autor?',
        options: [
          'Incentivar a los adolescentes a valorar su identidad cultural y fortalecer su autoestima frente a estereotipos externos',
          'Explicar el procedimiento técnico de esquila del ganado ovino',
          'Convencer a los estudiantes de no asistir a ferias científicas',
          'Vender poemas tradicionales traducidos al idioma castellano'
        ],
        correctIndex: 0,
        explanation: 'El autor busca inspirar al estudiante rural a sentirse orgulloso de sus raíces y confiar en sus propias capacidades.',
        pedagogicalSkill: 'Reconocimiento del propósito comunicativo'
      }
    ],
    sentenceOrdering: [
      {
        id: 'ord-1',
        text: 'Killa y Sayri sufren de inseguridad y vergüenza al compararse con modas de la ciudad.',
        correctOrder: 1
      },
      {
        id: 'ord-2',
        text: 'Mama Tomasa les enseña con la lana y el telar que cada fibra tiene un valor y resistencia única.',
        correctOrder: 2
      },
      {
        id: 'ord-3',
        text: 'Los jóvenes comprenden que la autoestima nace de aceptarse y valorar sus propios orígenes.',
        correctOrder: 3
      },
      {
        id: 'ord-4',
        text: 'En la feria escolar, Killa declama un poema bilingüe y Sayri expone su maqueta de riego por goteo.',
        correctOrder: 4
      },
      {
        id: 'ord-5',
        text: 'Ambos regresan a casa con serenidad, convencidos de que tienen raíces fuertes y alas para soñar.',
        correctOrder: 5
      }
    ],
    columnMatching: [
      {
        id: 'col-1',
        concept: 'Mama Tomasa',
        match: 'Abuela sabia que enseña el valor del telar y la dignidad',
        hint: 'Figura de autoridad y cariño familiar en la cocina a leña'
      },
      {
        id: 'col-2',
        concept: 'Killa',
        match: 'Declamó un emotivo poema bilingüe vistiendo su pollera',
        hint: 'Adolescente que venció la vergüenza de su acento'
      },
      {
        id: 'col-3',
        concept: 'Sayri',
        match: 'Diseñó un sistema de riego por goteo con material reciclado',
        hint: 'Joven que unió la ciencia escolar con saberes de la siembra'
      },
      {
        id: 'col-4',
        concept: 'Ayni',
        match: 'Ayuda mutua y reciprocidad solidaria en la comunidad',
        hint: 'Costumbre ancestral andina de colaboración'
      },
      {
        id: 'col-5',
        concept: 'Autoestima sana',
        match: 'Amor propio y autoaceptación sin necesidad de creerse superior',
        hint: 'Concepto clave desarrollado en la lectura'
      }
    ],
    wordSearch: {
      grid: [
        ['A', 'U', 'T', 'O', 'E', 'S', 'T', 'I', 'M', 'A', 'K', 'T'],
        ['Y', 'D', 'I', 'G', 'N', 'I', 'D', 'A', 'D', 'B', 'A', 'E'],
        ['N', 'V', 'A', 'L', 'O', 'R', 'A', 'C', 'I', 'O', 'N', 'L'],
        ['I', 'F', 'O', 'R', 'T', 'A', 'L', 'E', 'Z', 'A', 'S', 'A'],
        ['I', 'D', 'E', 'N', 'T', 'I', 'D', 'A', 'D', 'W', 'P', 'R'],
        ['A', 'C', 'E', 'P', 'T', 'A', 'C', 'I', 'O', 'N', 'Q', 'X'],
        ['R', 'E', 'S', 'I', 'L', 'I', 'E', 'N', 'C', 'I', 'A', 'M'],
        ['Q', 'U', 'E', 'C', 'H', 'U', 'A', 'L', 'T', 'A', 'L', 'A'],
        ['A', 'U', 'T', 'O', 'N', 'O', 'M', 'I', 'A', 'J', 'O', 'S'],
        ['C', 'O', 'N', 'F', 'I', 'A', 'N', 'Z', 'A', 'V', 'G', 'B'],
        ['T', 'E', 'L', 'A', 'R', 'S', 'A', 'B', 'I', 'O', 'S', 'Z'],
        ['A', 'S', 'E', 'R', 'T', 'I', 'V', 'I', 'D', 'A', 'D', 'Y']
      ],
      words: [
        { word: 'AUTOESTIMA', clue: 'Sentimiento de valoración y aprecio hacia uno mismo', direction: 'horizontal', row: 0, col: 0 },
        { word: 'DIGNIDAD', clue: 'Cualidad que nos hace merecedores de respeto incondicional', direction: 'horizontal', row: 1, col: 1 },
        { word: 'VALORACION', clue: 'Reconocimiento de las propias virtudes y talentos', direction: 'horizontal', row: 2, col: 1 },
        { word: 'FORTALEZAS', clue: 'Cualidades y habilidades positivas que poseemos', direction: 'horizontal', row: 3, col: 1 },
        { word: 'IDENTIDAD', clue: 'Sentido de pertenencia a una cultura y comunidad', direction: 'horizontal', row: 4, col: 0 },
        { word: 'ACEPTACION', clue: 'Reconocerse tal como uno es con amor y sin reproches', direction: 'horizontal', row: 5, col: 0 },
        { word: 'RESILIENCIA', clue: 'Capacidad de sobreponerse a adversidades y aprender', direction: 'horizontal', row: 6, col: 0 },
        { word: 'CONFIANZA', clue: 'Seguridad y fe en nuestras propias capacidades', direction: 'horizontal', row: 9, col: 0 },
        { word: 'AYNI', clue: 'Principio andino de ayuda y reciprocidad mutua', direction: 'vertical', row: 0, col: 0 },
        { word: 'TELAR', clue: 'Símbolo usado por la abuela para explicar la unidad y fuerza', direction: 'vertical', row: 0, col: 11 }
      ]
    },
    fillInTheBlanks: {
      wordBank: ['identidad', 'por esta razón', 'autoestima', 'además', 'resiliencia', 'sin embargo'],
      items: [
        {
          id: 'fb-1',
          sentenceBefore: 'Killa temía hablar por su acento andino;',
          sentenceAfter: 'decidió callar en las primeras semanas de clase.',
          correctWord: 'por esta razón',
          wordType: 'conector',
          grammarHint: 'Conector que expresa consecuencia'
        },
        {
          id: 'fb-2',
          sentenceBefore: 'Sayri se sentía triste por sus dificultades en matemáticas,',
          sentenceAfter: 'era muy hábil para la siembra y el trabajo comunal.',
          correctWord: 'sin embargo',
          wordType: 'conector',
          grammarHint: 'Conector que indica contraste'
        },
        {
          id: 'fb-3',
          sentenceBefore: 'La abuela explicó que la',
          sentenceAfter: 'no significa creerse superior a nadie, sino respetarse a uno mismo.',
          correctWord: 'autoestima',
          wordType: 'vocabulario',
          grammarHint: 'Concepto central del texto sobre el aprecio personal'
        },
        {
          id: 'fb-4',
          sentenceBefore: 'Al declamar en su lengua materna, Killa demostró un profundo orgullo por su',
          sentenceAfter: 'cultural.',
          correctWord: 'identidad',
          wordType: 'vocabulario',
          grammarHint: 'Término referido a las raíces y pertenencia cultural'
        },
        {
          id: 'fb-5',
          sentenceBefore: 'Sayri no solo presentó una maqueta de riego,',
          sentenceAfter: 'demostró cómo la ciencia dialoga con los saberes de los abuelos.',
          correctWord: 'además',
          wordType: 'conector',
          grammarHint: 'Conector de adición o suma de ideas'
        },
        {
          id: 'fb-6',
          sentenceBefore: 'Superar la timidez y aprender de los tropiezos es una muestra clara de',
          sentenceAfter: 'adolescente.',
          correctWord: 'resiliencia',
          wordType: 'vocabulario',
          grammarHint: 'Capacidad de sobreponerse a dificultades'
        }
      ]
    }
  },

  // =========================================================================
  // TEMA 3: LA DELINCUENCIA
  // =========================================================================
  {
    id: 3,
    themeNumber: 3,
    themeCategory: 'Seguridad Ciudadana y Cultura de Paz',
    shortTag: 'La Delincuencia',
    title: 'Guardianes de la Dignidad: Decidir con Firmeza Frente a los Caminos Falsos',
    subtitle: 'Ficha Pedagógica de Comprensión Lectora sobre Prevención del Delito y Justicia Comunal',
    curricularArea: 'Comunicación',
    gradeAndLevel: '2.° de Secundaria - Ámbito Rural',
    cnebCompetency: 'Lee diversos tipos de textos escritos en su lengua materna',
    cnebCapacities: [
      'Obtiene información del texto escrito (Nivel Literal)',
      'Infiere e interpreta información del texto (Nivel Inferencial)',
      'Reflexiona y evalúa la forma, el contenido y contexto del texto (Nivel Crítico)'
    ],
    reading: {
      title: 'Guardianes de la Dignidad',
      synopsis: 'En un caserío cercano a una concurrida ruta comercial, dos amigos enfrentan la tentación del dinero fácil que ofrecen personas inescrupulosas, descubriendo que la honradez y la organización comunal son los únicos cimientos de un porvenir seguro.',
      readingTime: '6 minutos de lectura concentrada',
      paragraphs: [
        'El caserío El Triunfo siempre fue un lugar apacible, rodeado de maizales y quebradas cristalinas. No obstante, con la pavimentación de la carretera interprovincial y el consiguiente incremento de camiones de carga y ferias comerciales, el movimiento económico trajo consigo nuevos peligros. Joel y Renzo, inseparables amigos desde la escuela primaria y actuales estudiantes de segundo grado de secundaria, solían acudir por las tardes a ver el paso de los vehículos y a vender choclos sancochados para ayudar con los gastos de sus útiles escolares.',
        'Un sábado por la tarde, dos sujetos forasteros que frecuentaban un taller clandestino cerca de la carretera se acercaron a ellos. Lucían cadenas doradas, zapatillas de marca costosa y presumían fajos de billetes en los bolsillos. Con tono halagador y engañoso, les propusieron un «trabajito sencillo»: avisar por teléfono móvil cada vez que la policía o los miembros de la Ronda Campesina realizaran patrullajes, y guardar por un par de noches unos paquetes sellados en el corral de sus viviendas a cambio de doscientos soles por semana.',
        'Para Joel, la propuesta fue una tentación electrizante. Soñaba con comprarse un teléfono inteligente de última generación y una motocicleta para impresionar a sus conocidos. «¿Qué tiene de malo, Renzo?», le susurró a su amigo. «Solo es mirar y avisar; no le estamos robando a nadie y ganaremos en un día lo que nuestros padres ganan en un mes partiéndose la espalda bajo el sol». El espejismo del dinero fácil comenzaba a nublar su recto juicio.',
        'Renzo, sin embargo, se detuvo a reflexionar. Recordó a su padre, don Braulio, un humilde agricultor que por las noches se ponía su poncho de lana y empuñaba su vara de mando como miembro de las Rondas Campesinas para velar por la seguridad y la honradez de la comunidad. «Ese dinero no es limpio, Joel», le increpó con serenidad y valentía. «La gente honesta no paga tanto dinero por esconder paquetes en secreto ni por vigilar a las autoridades. Quienes entran en ese laberinto terminan en la cárcel, destruyendo el honor de sus familias o perdiendo la vida en una cuneta».',
        'La advertencia de Renzo no tardó en comprobarse. Tres días después, durante un operativo nocturno conjunto entre las Rondas Campesinas y la Policía Nacional, los forasteros fueron capturados con mercadería robada y sustancias ilícitas. En su confesión delataron que utilizaban a adolescentes de la zona como informantes y fachada para eludir las investigaciones. De no haber sido por la firmeza de Renzo, Joel habría terminado involucrado en un grave proceso judicial ante la Fiscalía de Menores.',
        'Impactado por lo sucedido, el presidente de la ronda comunal felicitó a Renzo en la asamblea general de comuneros y llamó la atención a las familias sobre la necesidad de cuidar a los jóvenes. La comunidad acordó fundar el «Club Juvenil Los Vencedores», gestionando talleres de carpintería, biohuertos escolares y un campeonato deportivo intercolegial. Joel, con lágrimas en los ojos, agradeció a su amigo por haberlo salvado del abismo, comprendiendo que la dignidad y la libertad no tienen precio, y que el verdadero progreso se construye con esfuerzo legítimo, estudio constante y manos limpias.'
      ],
      vocabulary: [
        { word: 'Rondas Campesinas', definition: 'Organizaciones comunales autónomas reconocidas por la ley peruana para brindar seguridad, justicia y paz social.' },
        { word: 'Delincuencia', definition: 'Comisión de delitos e infracciones que vulneran las leyes, la tranquilidad pública y los derechos de las personas.' },
        { word: 'Fachada', definition: 'Apariencia o engaño que se utiliza para encubrir una actividad ilegal o delictiva.' },
        { word: 'Espejismo', definition: 'Ilusión engañosa que parece real pero conduce a un grave peligro o desengaño.' },
        { word: 'Integridad', definition: 'Cualidad de una persona de actuar siempre con rectitud, honradez y coherencia moral.' }
      ],
      illustrationType: 'delinquency',
      quoteText: '«El dinero fácil es una trampa de arena movediza: promete riqueza inmediata pero hunde para siempre la libertad y la paz del hogar.»',
      quoteAuthor: 'Voz comunal de las Rondas de El Triunfo'
    },
    literalQuestions: [
      {
        id: 'lit-1',
        question: '¿Qué actividad realizaban Joel y Renzo por las tardes cerca de la carretera interprovincial?',
        options: [
          'Arreglaban llantas ponchadas de camiones pesados',
          'Vendían choclos sancochados para colaborar con los gastos de sus útiles escolares',
          'Entrenaban para ser choferes profesionales de carga',
          'Vigilaban los almacenes clandestinos de los forasteros'
        ],
        correctIndex: 1,
        explanation: 'El primer párrafo precisa que vendían choclos sancochados para ayudar con el gasto de sus útiles escolares.',
        pedagogicalSkill: 'Identificar acciones explícitas de los personajes'
      },
      {
        id: 'lit-2',
        question: '¿Qué tarea concreta ofrecieron los sujetos forasteros a cambio de doscientos soles?',
        options: [
          'Cosechar hectáreas de maíz y transportarlas en carretilla',
          'Avisar cuando patrullara la policía o la ronda y guardar paquetes sospechosos en su corral',
          'Pintar la fachada de la escuela secundaria de la comunidad',
          'Repartir volantes de propaganda de una feria patronal'
        ],
        correctIndex: 1,
        explanation: 'En el párrafo 2 se indica explícitamente la propuesta de avisar movimientos de la policía/ronda y esconder paquetes sellados.',
        pedagogicalSkill: 'Localizar hechos concretos en la trama'
      },
      {
        id: 'lit-3',
        question: '¿Qué cargo de servicio y liderazgo ejercía don Braulio, el padre de Renzo, en el caserío?',
        options: [
          'Era el juez de paz letrado de la capital provincial',
          'Miembro activo de las Rondas Campesinas que patrullaba con poncho y vara de mando',
          'Comerciante mayorista de repuestos mecánicos',
          'Director de la institución educativa secundaria'
        ],
        correctIndex: 1,
        explanation: 'El párrafo 4 menciona explícitamente que don Braulio era miembro de las Rondas Campesinas.',
        pedagogicalSkill: 'Reconocer roles y cargos de los personajes'
      },
      {
        id: 'lit-4',
        question: '¿Qué descubrieron las autoridades en el operativo nocturno donde capturaron a los forasteros?',
        options: [
          'Que eran turistas extranjeros extraviados en la cordillera',
          'Que poseían mercadería robada, sustancias ilícitas y usaban a menores como fachada',
          'Que tenían permisos oficiales para instalar una empresa minera',
          'Que habían venido a donar computadoras para el caserío'
        ],
        correctIndex: 1,
        explanation: 'En el párrafo 5 se detalla que cayeron con mercadería robada, drogas y confesaron usar menores como informantes.',
        pedagogicalSkill: 'Identificar hallazgos y desenlaces explícitos'
      },
      {
        id: 'lit-5',
        question: '¿Qué iniciativa comunitaria acordó fundar la asamblea general tras los acontecimientos?',
        options: [
          'Una empresa de transporte privado interprovincial',
          'El «Club Juvenil Los Vencedores» con talleres de carpintería, biohuertos y deporte',
          'Un comité de vigilancia armado con armas de fuego',
          'Un toque de queda total que prohibía salir de las casas'
        ],
        correctIndex: 1,
        explanation: 'El último párrafo señala la creación del Club Juvenil Los Vencedores con biohuertos, carpintería y deportes.',
        pedagogicalSkill: 'Identificar propuestas y soluciones textuales'
      }
    ],
    inferentialQuestions: [
      {
        id: 'inf-1',
        question: '¿Por qué las bandas delictivas buscan frecuentemente captar a estudiantes y adolescentes en zonas rurales?',
        options: [
          'Porque los adolescentes conocen las leyes penales mejor que los abogados',
          'Porque se aprovechan de su inexperiencia, necesidades económicas y de que no levantan sospechas inmediatas',
          'Porque buscan formar sindicatos de trabajadores agrícolas juveniles',
          'Porque en las comunidades campesinas no existe ningún tipo de justicia ni vigilancia'
        ],
        correctIndex: 1,
        explanation: 'Los delincuentes instrumentalizan la vulnerabilidad y la búsqueda de dinero rápido de los jóvenes como escudo.',
        pedagogicalSkill: 'Deducir motivaciones de agentes delictivos'
      },
      {
        id: 'inf-2',
        question: '¿Qué significa la frase de Renzo: «Quienes entran en ese laberinto terminan en la cárcel o perdiendo la vida»?',
        options: [
          'Que el caserío tenía calles con forma de laberinto turístico',
          'Que el delito es un camino sin salida pacífica que acarrea dolor, pérdida de libertad y tragedias irreparables',
          'Que a todos los delincuentes les gusta jugar juegos de mesa en la noche',
          'Que la policía no sabía orientarse en las quebradas de la sierra'
        ],
        correctIndex: 1,
        explanation: 'La metáfora del laberinto expresa la trampa irreversible que representa involucrarse en actividades criminales.',
        pedagogicalSkill: 'Interpretar expresiones figuradas en el texto'
      },
      {
        id: 'inf-3',
        question: '¿Cuál fue la diferencia fundamental entre el razonamiento de Joel y el de Renzo ante la propuesta de los forasteros?',
        options: [
          'Joel pensó solo en la ganancia inmediata y material, mientras que Renzo analizó los valores éticos y las consecuencias a largo plazo',
          'Joel era mayor de edad y Renzo aún cursaba la primaria',
          'Joel no quería comprarse un celular y Renzo sí',
          'Renzo tenía miedo de salir a la carretera por la noche'
        ],
        correctIndex: 0,
        explanation: 'Renzo aplicó el juicio crítico y la enseñanza moral de su familia, mientras Joel se dejó deslumbrar por la ambición momentánea.',
        pedagogicalSkill: 'Comparar puntos de vista y procesos de pensamiento'
      },
      {
        id: 'inf-4',
        question: '¿Por qué la presencia de las Rondas Campesinas es crucial en la prevención de la delincuencia en el ámbito rural?',
        options: [
          'Porque reemplazan a los colegios en la enseñanza de matemáticas',
          'Porque representan la organización vecinal legítima que vigila, orienta y cuida a la comunidad con sentido de justicia',
          'Porque prohíben que los camiones comerciales transiten por el departamento',
          'Porque cobran impuestos obligatorios a todos los transeúntes'
        ],
        correctIndex: 1,
        explanation: 'Las rondas campesinas garantizan el orden comunal y la protección de las familias donde la presencia policial es lejana.',
        pedagogicalSkill: 'Inferir la función social de las instituciones locales'
      },
      {
        id: 'inf-5',
        question: 'Del agradecimiento final de Joel hacia Renzo se desprende que un verdadero amigo es aquel que:',
        options: [
          'Te acompaña y celebra cualquier idea, aunque sea peligrosa o inmoral',
          'Te advierte con valentía cuando te equivocas y te protege de tomar decisiones que arruinen tu vida',
          'Te presta dinero sin preguntarte en qué lo vas a gastar',
          'Nunca te contradice para evitar discusiones en el aula'
        ],
        correctIndex: 1,
        explanation: 'La auténtica amistad no es complicidad en el error, sino lealtad, orientación sincera y defensa del bien.',
        pedagogicalSkill: 'Extraer enseñanzas axiológicas aplicadas a la vida'
      }
    ],
    criticalQuestions: [
      {
        id: 'crit-1',
        question: '¿Qué opinas de la ilusión del "dinero fácil"? ¿Por qué crees que algunos jóvenes caen en sus engaños a pesar de los riesgos?',
        promptHint: 'Considera la presión social, el bombardeo publicitario de marcas y la desesperación económica en familias vulnerables.',
        communityContext: 'En muchas zonas del país, mafias de contrabando o narcotráfico intentan seducir a escolares con lujos pasajeros.',
        rubricCriteria: 'Analiza críticamente las causas sociales del delito y defiende la cultura del trabajo honesto.',
        suggestedAnswer: 'El dinero fácil es una ilusión dañina. Muchos caen por querer cosas materiales sin esforzarse, pero ese camino siempre trae cárcel y sufrimiento. Nada supera la tranquilidad de ganarse el pan con honradez.'
      },
      {
        id: 'crit-2',
        question: 'Si un desconocido o un conocido te ofreciera dinero por realizar un "favor secreto" sospechoso, ¿qué harías exactamente?',
        promptHint: 'Describe tu reacción inmediata, tu negativa asertiva y a qué personas de confianza (padres, profesores, policía) acudirías.',
        communityContext: 'La seguridad personal y comunal depende de no guardar secretos peligrosos que puedan perjudicarnos.',
        rubricCriteria: 'Evidencia capacidad de autocuidado, comunicación asertiva y recurrencia a redes de protección.',
        suggestedAnswer: 'Rechazaría de inmediato la propuesta con firmeza diciendo que no participo en cosas turbias. Luego informaría de inmediato a mis padres o al director de la escuela para que tomen medidas preventivas.'
      },
      {
        id: 'crit-3',
        question: '¿Qué importancia tiene la labor de las Rondas Campesinas y las juntas vecinales en la seguridad de tu comunidad o caserío?',
        promptHint: 'Evalúa cómo la organización de los propios pobladores ayuda a resolver conflictos pacíficamente y prevenir robos.',
        communityContext: 'En el Perú profundo, las rondas son baluartes de justicia consuetudinaria y orden comunal pacífico.',
        rubricCriteria: 'Reconoce y valora las formas organizativas de seguridad y justicia comunitaria en el Perú.',
        suggestedAnswer: 'Tienen una importancia vital porque están formadas por nuestros propios padres y vecinos que conocen la zona, cuidan los caminos de noche y enseñan a los infractores a corregirse mediante el trabajo comunal.'
      },
      {
        id: 'crit-4',
        question: '¿Qué propuestas podrías plantear a la alcaldía o a tu comunidad para evitar que los adolescentes caigan en malas juntas o vicios?',
        promptHint: 'Piensa en espacios deportivos, bibliotecas comunitarias, academias de música autóctona o emprendimientos escolares.',
        communityContext: 'El tiempo libre sin actividades formativas es un factor de riesgo para la juventud en pueblos alejados.',
        rubricCriteria: 'Plantea alternativas de desarrollo juvenil creativas, viables y con sentido solidario.',
        suggestedAnswer: 'Propondría crear talleres técnicos como electricidad básica o confección, organizar torneos de vóley y fútbol los fines de semana, y abrir una sala de lectura con internet para hacer tareas en grupo.'
      }
    ],
    textIdentification: [
      {
        id: 'ident-1',
        question: '¿Qué título refleja con mayor precisión el conflicto y mensaje ético del texto?',
        options: [
          'La Venta de Choclos en la Pista Nueva',
          'Guardianes de la Dignidad: Decidir con Firmeza Frente a los Caminos Falsos',
          'Los Misterios del Corral de Joel',
          'La Historia de las Camionetas de Carga'
        ],
        correctIndex: 1,
        explanation: 'Enfatiza el rol de la dignidad, la toma de decisiones éticas y la prevención frente al engaño de la delincuencia.',
        pedagogicalSkill: 'Identificación del título nuclear'
      },
      {
        id: 'ident-2',
        question: '¿Cuál es el tema general que aborda la lectura?',
        options: [
          'La pavimentación de carreteras en el Perú profundo',
          'La prevención de la delincuencia juvenil a través de la honradez familiar y la organización comunitaria',
          'Las técnicas para cosechar choclos de calidad',
          'El costo de los uniformes escolares en ferias'
        ],
        correctIndex: 1,
        explanation: 'El tema abarca la protección de la juventud frente a las redes criminales mediante valores e instituciones comunales.',
        pedagogicalSkill: 'Reconocimiento del tema principal'
      },
      {
        id: 'ident-3',
        question: '¿Cuál es la idea principal que transmite el relato?',
        options: [
          'El dinero fácil prometido por la delincuencia es una trampa que destruye vidas, mientras que la honradez y el apoyo comunal garantizan un futuro digno',
          'Los adolescentes no deben conversar con nadie en las carreteras interprovinciales bajo ninguna circunstancia',
          'Comprarse zapatillas caras es el único objetivo que debe tener un joven de segundo de secundaria',
          'La policía no debe coordinar con las comunidades campesinas'
        ],
        correctIndex: 0,
        explanation: 'Expone la tesis moral de la lectura: el delito conduce a la perdición y la rectitud asegura la paz y la dignidad.',
        pedagogicalSkill: 'Identificación de la idea principal'
      },
      {
        id: 'ident-4',
        question: '¿Cuál de las siguientes es una idea secundaria del texto?',
        options: [
          'Don Braulio patrullaba de noche con su poncho de lana y vara de mando como rondero',
          'Joel viajó a la selva central a cultivar cacao con sus tíos',
          'Renzo compró una motocicleta con el premio de la feria agrícola',
          'Los forasteros eran profesores de la universidad'
        ],
        correctIndex: 0,
        explanation: 'La figura del padre rondero es un elemento secundario de caracterización que ejemplifica los valores familiares.',
        pedagogicalSkill: 'Distinguir ideas secundarias'
      },
      {
        id: 'ident-5',
        question: '¿Cuál es el propósito comunicativo del autor?',
        options: [
          'Alertar a los escolares sobre las estrategias de engaño delictivo y fomentar la integridad y la cultura de paz',
          'Enseñar a reparar motocicletas usadas en los talleres',
          'Promocionar las ferias de comida típica en las carreteras',
          'Criticar la labor de los agricultores de maíz'
        ],
        correctIndex: 0,
        explanation: 'Busca prevenir que los estudiantes rurales sean captados por la criminalidad y motivar la cohesión social.',
        pedagogicalSkill: 'Determinación del propósito comunicativo'
      }
    ],
    sentenceOrdering: [
      {
        id: 'ord-1',
        text: 'La pavimentación de la carretera atrae a comerciantes, pero también a personas con malas intenciones.',
        correctOrder: 1
      },
      {
        id: 'ord-2',
        text: 'Dos sujetos forasteros ofrecen doscientos soles a Joel y Renzo a cambio de avisar y esconder paquetes.',
        correctOrder: 2
      },
      {
        id: 'ord-3',
        text: 'Joel se entusiasma con el dinero fácil, pero Renzo le recuerda los valores de su padre rondero y lo frena.',
        correctOrder: 3
      },
      {
        id: 'ord-4',
        text: 'La ronda campesina y la policía capturan a los forasteros con mercadería ilícita en un operativo nocturno.',
        correctOrder: 4
      },
      {
        id: 'ord-5',
        text: 'La comunidad funda el Club Juvenil Los Vencedores y Joel agradece a Renzo por haberlo salvado del peligro.',
        correctOrder: 5
      }
    ],
    columnMatching: [
      {
        id: 'col-1',
        concept: 'Don Braulio',
        match: 'Ejemplo de honradez y autoridad moral en las Rondas Campesinas',
        hint: 'Padre de Renzo que porta poncho y vara de mando'
      },
      {
        id: 'col-2',
        concept: 'Joel',
        match: 'Casi cae en la trampa del dinero fácil seducido por comprar lujos',
        hint: 'Amigo que aprendió una valiosa lección de vida'
      },
      {
        id: 'col-3',
        concept: 'Renzo',
        match: 'Actuó con valentía, juicio crítico y lealtad para proteger a su amigo',
        hint: 'Joven que se negó a aceptar el dinero sucio'
      },
      {
        id: 'col-4',
        concept: 'Forasteros',
        match: 'Sujetos que pretendían usar a menores como fachada delictiva',
        hint: 'Detenidos en el operativo policial y comunal'
      },
      {
        id: 'col-5',
        concept: 'Club Los Vencedores',
        match: 'Iniciativa comunal con talleres productivos y deporte para jóvenes',
        hint: 'Espacio creado para prevenir que la juventud caiga en el delito'
      }
    ],
    wordSearch: {
      grid: [
        ['D', 'E', 'L', 'I', 'N', 'C', 'U', 'E', 'N', 'C', 'I', 'A'],
        ['H', 'O', 'N', 'R', 'A', 'D', 'E', 'Z', 'M', 'P', 'R', 'Y'],
        ['J', 'U', 'S', 'T', 'I', 'C', 'I', 'A', 'K', 'O', 'O', 'F'],
        ['R', 'O', 'N', 'D', 'E', 'R', 'O', 'S', 'L', 'N', 'N', 'I'],
        ['I', 'N', 'T', 'E', 'G', 'R', 'I', 'D', 'A', 'D', 'D', 'R'],
        ['V', 'A', 'L', 'E', 'N', 'T', 'I', 'A', 'C', 'A', 'A', 'M'],
        ['C', 'O', 'M', 'U', 'N', 'I', 'D', 'A', 'D', 'S', 'S', 'E'],
        ['L', 'I', 'B', 'E', 'R', 'T', 'A', 'D', 'Z', 'Q', 'W', 'Z'],
        ['P', 'R', 'E', 'V', 'E', 'N', 'C', 'I', 'O', 'N', 'B', 'A'],
        ['S', 'E', 'G', 'U', 'R', 'I', 'D', 'A', 'D', 'X', 'C', 'V'],
        ['P', 'A', 'Z', 'H', 'E', 'R', 'M', 'A', 'N', 'D', 'A', 'D'],
        ['T', 'R', 'A', 'B', 'A', 'J', 'O', 'D', 'I', 'G', 'N', 'O']
      ],
      words: [
        { word: 'DELINCUENCIA', clue: 'Actividad ilícita que quebranta la ley y la armonía social', direction: 'horizontal', row: 0, col: 0 },
        { word: 'HONRADEZ', clue: 'Virtud de actuar con rectitud y rechazar lo mal habido', direction: 'horizontal', row: 1, col: 0 },
        { word: 'JUSTICIA', clue: 'Dar a cada uno lo que le corresponde según el bien común', direction: 'horizontal', row: 2, col: 0 },
        { word: 'RONDEROS', clue: 'Pobladores organizados para proteger los campos y caminos', direction: 'horizontal', row: 3, col: 0 },
        { word: 'INTEGRIDAD', clue: 'Firmeza moral de no ceder ante presiones o sobornos', direction: 'horizontal', row: 4, col: 0 },
        { word: 'VALENTIA', clue: 'Coraje para decir la verdad y corregir a los amigos', direction: 'horizontal', row: 5, col: 0 },
        { word: 'COMUNIDAD', clue: 'Colectivo humano unido por costumbres y apoyo mutuo', direction: 'horizontal', row: 6, col: 0 },
        { word: 'LIBERTAD', clue: 'Bien preciado que se pierde al involucrarse en delitos', direction: 'horizontal', row: 7, col: 0 },
        { word: 'PREVENCION', clue: 'Medidas anticipadas para evitar que ocurran desgracias', direction: 'horizontal', row: 8, col: 0 },
        { word: 'SEGURIDAD', clue: 'Condición de tranquilidad y protección para las familias', direction: 'horizontal', row: 9, col: 0 }
      ]
    },
    fillInTheBlanks: {
      wordBank: ['honestidad', 'en consecuencia', 'delincuencia', 'ya que', 'justicia', 'a pesar de que'],
      items: [
        {
          id: 'fb-1',
          sentenceBefore: 'Los forasteros ofrecían mucho dinero,',
          sentenceAfter: 'el trabajo que pedían ponía en riesgo la tranquilidad del pueblo.',
          correctWord: 'a pesar de que',
          wordType: 'conector',
          grammarHint: 'Conector concesivo'
        },
        {
          id: 'fb-2',
          sentenceBefore: 'Renzo rechazó la propuesta ilícita,',
          sentenceAfter: 'sabía que el dinero fácil solo conduce a la cárcel y la deshonra.',
          correctWord: 'ya que',
          wordType: 'conector',
          grammarHint: 'Conector de causa'
        },
        {
          id: 'fb-3',
          sentenceBefore: 'El padre de Renzo inculcó a su hijo el valor de la',
          sentenceAfter: 'y el trabajo esforzado en el campo.',
          correctWord: 'honestidad',
          wordType: 'vocabulario',
          grammarHint: 'Valor moral que se opone al robo y la falsedad'
        },
        {
          id: 'fb-4',
          sentenceBefore: 'Las Rondas Campesinas y la policía actuaron a tiempo;',
          sentenceAfter: 'se evitó que los escolares fueran usados como cómplices.',
          correctWord: 'en consecuencia',
          wordType: 'conector',
          grammarHint: 'Conector de consecuencia lógica'
        },
        {
          id: 'fb-5',
          sentenceBefore: 'El crimen organizado y la',
          sentenceAfter: 'destruyen el futuro de los jóvenes si no nos organizamos unidos.',
          correctWord: 'delincuencia',
          wordType: 'vocabulario',
          grammarHint: 'Fenómeno social negativo de transgresión de leyes'
        },
        {
          id: 'fb-6',
          sentenceBefore: 'La comunidad aplicó la',
          sentenceAfter: 'preventiva y fundó un club juvenil para promover el deporte.',
          correctWord: 'justicia',
          wordType: 'vocabulario',
          grammarHint: 'Principio ético y legal de dar a cada quien lo debido'
        }
      ]
    }
  },

  // =========================================================================
  // TEMA 4: EL ALCOHOL Y LAS DROGAS
  // =========================================================================
  {
    id: 4,
    themeNumber: 4,
    themeCategory: 'Salud Integral y Proyecto de Vida',
    shortTag: 'Alcohol y Drogas',
    title: 'Mentes Despiertas, Vidas Plenas: El Coraje de Decir "NO" en Nuestras Fiestas',
    subtitle: 'Ficha Pedagógica de Comprensión Lectora sobre Prevención de Adicciones y Proyecto de Vida',
    curricularArea: 'Comunicación',
    gradeAndLevel: '2.° de Secundaria - Ámbito Rural',
    cnebCompetency: 'Lee diversos tipos de textos escritos en su lengua materna',
    cnebCapacities: [
      'Obtiene información del texto escrito (Nivel Literal)',
      'Infiere e interpreta información del texto (Nivel Inferencial)',
      'Reflexiona y evalúa la forma, el contenido y contexto del texto (Nivel Crítico)'
    ],
    reading: {
      title: 'Mentes Despiertas, Vidas Plenas',
      synopsis: 'Durante la fiesta patronal de una cuenca cafetalera, dos adolescentes con grandes metas profesionales se enfrentan a la presión grupal que busca inducirlos al consumo de licor y sustancias, demostrando que la verdadera alegría no necesita vicios.',
      readingTime: '6 minutos de lectura concentrada',
      paragraphs: [
        'En el valle de Santa Rosa, una laboriosa comunidad enclavada en la ceja de selva peruana donde los cafetales florecen con aroma dulce de azahares, la fiesta patronal de San Juan y el corte de la yunza eran las fechas más esperadas del año. Nayeli y Edwin, estudiantes destacados del segundo grado de secundaria, se habían preparado durante meses integrando la cuadrilla de danzantes escolares. Edwin, de catorce años, albergaba el sueño de titularse como ingeniero agrónomo para combatir las plagas de la roya que azotaban las cosechas de sus padres; Nayeli, por su parte, deseaba graduarse como enfermera para atender la posta médica de su caserío, donde muchas madres debían viajar horas en bote para recibir atención médica.',
        'Sin embargo, cuando cayó la noche y la banda de músicos empezó a tocar los huaynos y cumbias de costumbre, el ambiente festivo comenzó a tornarse riesgoso. Cerca del estrado comunal, un grupo de muchachos mayores y algunos primos forasteros que bebían cañazo destilado y cerveza artesanal comenzaron a llamar a Edwin. Le acercaron un vaso rebosante de licor adulterado: «Tómalo de un solo trago, muchacho. Ya eres hombre; en esta fiesta nadie se queda seco o dirán que eres un cobarde». Paralelamente, una vecina mayor intentaba convencer a Nayeli de probar unos cigarrillos extraños con sustancias que prometían «hacerte bailar toda la noche sin cansancio ni tristeza».',
        'La presión social era asfixiante. Varios compañeros del colegio miraban la escena con curiosidad y expectación. Para un adolescente, el miedo al rechazo y la burla del grupo puede pesar tanto como una montaña. No obstante, Edwin recordó con nitidez las sesiones de tutoría escolar sobre las adicciones: cómo el alcohol destruye las neuronas en cerebros en desarrollo, nubla la capacidad de discernir el peligro y causa terribles accidentes de tránsito en las estrechas trochas carrozables. También vio a pocos metros a don Cecilio, un vecino que solía ser un próspero agricultor, durmiendo tirado en el barro, con los bolsillos vacíos y la dignidad perdida por culpa de la embriaguez crónica.',
        'Mirando fijamente a los ojos de quienes lo presionaban, Edwin bajó el vaso con calma y respondió con voz firme y serena: «Agradezco su invitación, pero no tomo licor. Nuestra fiesta es para compartir danzas y alegrías de la cosecha, no para perder el control ni arruinarme la salud». Al mismo tiempo, Nayeli rechazó con contundencia las sustancias ofrecidas, diciendo: «Tengo metas claras para mi vida y mi cuerpo es mi mayor tesoro. No necesito humo ni alcohol para reír o bailar con mis amigos».',
        'Ante la serenidad y la firmeza moral de ambos jóvenes, los provocadores quedaron sin argumentos y bajaron la mirada avergonzados. Más aún, otros tres compañeros de segundo grado que estaban a punto de ceder a la presión, cobraron valor al ver el ejemplo de Edwin y Nayeli, y se apartaron del grupo de bebedores para regresar a la pista de baile sana y familiar.',
        'A la mañana siguiente, mientras el sol dorado iluminaba los cerros verdes de Santa Rosa, la comunidad amaneció consternada: durante la madrugada, dos jóvenes ebrios que manejaban una mototaxi sufrieron un grave despiste en una curva del río, quedando heridos de gravedad. Edwin y Nayeli confirmaron en su interior que la decisión tomada la noche anterior no solo había protegido su integridad física, sino que había blindado su proyecto de vida. Comprendieron que ser valiente no consiste en hacer lo que la multitud descontrolada exige, sino en tener el coraje de decir «NO» para mantener la mente despejada y el futuro en nuestras propias manos.'
      ],
      vocabulary: [
        { word: 'Adicción', definition: 'Dependencia física y psicológica hacia una sustancia que altera el organismo y la conducta.' },
        { word: 'Asertividad', definition: 'Capacidad de manifestar decisiones y límites propios con claridad y firmeza sin agredir ni someterse.' },
        { word: 'Presión de grupo', definition: 'Influencia social que ejercen amigos o pares para obligar a alguien a actuar contra su voluntad.' },
        { word: 'Proyecto de vida', definition: 'Plan estructurado de metas educativas, laborales y personales que una persona se propone lograr.' },
        { word: 'Discernimiento', definition: 'Habilidad para distinguir claramente lo que es conveniente y saludable de lo que causa daño.' }
      ],
      illustrationType: 'drugs',
      quoteText: '«Quien cuida su cuerpo y su mente como la tierra más fértil de su chacra, cosechará sueños grandes y una vida llena de dignidad.»',
      quoteAuthor: 'Consejo de salud comunal de Santa Rosa'
    },
    literalQuestions: [
      {
        id: 'lit-1',
        question: '¿Qué metas profesionales y vocacionales anhelaban alcanzar Edwin y Nayeli?',
        options: [
          'Edwin quería ser cantante de cumbia y Nayeli comerciante mayorista',
          'Edwin deseaba ser ingeniero agrónomo y Nayeli graduarse de enfermera para la posta médica',
          'Edwin soñaba con ser chofer de mototaxis y Nayeli salir del país inmediatamente',
          'Edwin buscaba ser dueño de una destilería y Nayeli policía'
        ],
        correctIndex: 1,
        explanation: 'El primer párrafo describe con claridad las vocaciones de agronomía para Edwin y enfermería para Nayeli.',
        pedagogicalSkill: 'Identificar proyectos personales explícitos'
      },
      {
        id: 'lit-2',
        question: '¿Qué argumento utilizaron los muchachos mayores para presionar a Edwin a beber licor adulterado?',
        options: [
          'Que el licor servía como medicina preventiva contra la gripe',
          'Que ya era un hombre y que en la fiesta nadie se quedaba seco para no ser llamado cobarde',
          'Que si bebía le darían un premio otorgado por el alcalde del valle',
          'Que era una obligación establecida por el director de la institución'
        ],
        correctIndex: 1,
        explanation: 'El párrafo 2 indica las frases exactas de presión: "Ya eres hombre... o dirán que eres un cobarde".',
        pedagogicalSkill: 'Localizar argumentos textuales en el diálogo'
      },
      {
        id: 'lit-3',
        question: '¿A qué persona observó Edwin tirado en el barro que le sirvió de advertencia sobre los efectos del alcohol?',
        options: [
          'Al presidente comunal de la yunza',
          'A don Cecilio, un vecino que antes era próspero y perdió todo por la embriaguez',
          'Al profesor de educación física de su colegio',
          'A un comerciante forastero que vendía zapatillas'
        ],
        correctIndex: 1,
        explanation: 'En el párrafo 3 se menciona el caso real de don Cecilio como claro ejemplo del deterioro causado por el alcohol.',
        pedagogicalSkill: 'Reconocer personajes secundarios y hechos explícitos'
      },
      {
        id: 'lit-4',
        question: '¿Cómo reaccionaron Edwin y Nayeli ante la insistencia para que consumieran alcohol y sustancias?',
        options: [
          'Aceptaron un trago pequeño para evitar que se burlaran de ellos',
          'Rechazaron con asertividad, firmeza y serenidad, explicando sus razones y cuidando su cuerpo',
          'Empezaron a arrojar botellas y golpear a los provocadores',
          'Fugaron asustados y abandonaron la fiesta patronal para siempre'
        ],
        correctIndex: 1,
        explanation: 'El párrafo 4 detalla cómo ambos se negaron con tranquilidad pero con argumentos firmes e inquebrantables.',
        pedagogicalSkill: 'Identificar conductas y respuestas asertivas en el texto'
      },
      {
        id: 'lit-5',
        question: '¿Qué trágico accidente ocurrió en la madrugada debido al consumo desmedido de bebidas alcohólicas?',
        options: [
          'El derrumbe de las tribunas del estrado de baile',
          'El despiste de una mototaxi conducida por jóvenes ebrios en una curva del río',
          'Un incendio en las plantaciones de café del caserío',
          'El robo total de la cosecha comunal de cacao'
        ],
        correctIndex: 1,
        explanation: 'El último párrafo relata el despiste de la mototaxi por parte de dos jóvenes en estado de ebriedad.',
        pedagogicalSkill: 'Localizar desenlaces explícitos'
      }
    ],
    inferentialQuestions: [
      {
        id: 'inf-1',
        question: '¿Por qué la frase "si no tomas eres un cobarde" es una forma de manipulación emocional dañina?',
        options: [
          'Porque el alcohol realmente aumenta el valor de las personas en el trabajo',
          'Porque utiliza falsos conceptos de masculinidad y orgullo para obligar a alguien a hacer algo que perjudica su salud',
          'Porque la cobardía solo se aplica a los exámenes de matemáticas',
          'Porque las fiestas patronales prohíben que la gente exprese sus sentimientos'
        ],
        correctIndex: 1,
        explanation: 'Apelar a la supuesta "valentía" es un truco para anular la voluntad de la víctima y hacerla ceder a los vicios.',
        pedagogicalSkill: 'Interpretar tácticas de manipulación interpersonal'
      },
      {
        id: 'inf-2',
        question: '¿Qué impacto tuvo la respuesta valiente de Edwin y Nayeli en los demás compañeros del colegio?',
        options: [
          'Hizo que todos los estudiantes compraran más licor inmediatamente',
          'Sirvió de ejemplo positivo y protector, dando valor a otros compañeros para alejarse de las adicciones',
          'Causó que los profesores suspendieran las clases durante todo el año',
          'Provocó que los muchachos mayores los expulsaran del valle de Santa Rosa'
        ],
        correctIndex: 1,
        explanation: 'El texto señala que tres compañeros que estaban a punto de ceder cobraron fuerza al ver su determinación.',
        pedagogicalSkill: 'Deducir el efecto multiplicador de la conducta ética'
      },
      {
        id: 'inf-3',
        question: '¿Por qué tener un "proyecto de vida" claro actúa como un escudo protector frente a las drogas y el alcohol?',
        options: [
          'Porque cuando una persona sabe hacia dónde se dirige y valora su futuro, no arriesga sus sueños por placeres destructivos pasajeros',
          'Porque tener un proyecto de vida te da dinero para comprar remedios caros',
          'Porque las universidades prohíben la postulación a las personas del campo',
          'Porque escribir metas en un cuaderno cura automáticamente las enfermedades físicas'
        ],
        correctIndex: 0,
        explanation: 'Los objetivos claros dotan al adolescente de sentido de propósito, volviéndolo inmune a las tentaciones que truncan su camino.',
        pedagogicalSkill: 'Comprender la función preventiva del proyecto de vida'
      },
      {
        id: 'inf-4',
        question: 'Del accidente de la mototaxi en la madrugada, se concluye que el alcohol:',
        options: [
          'Aumenta los reflejos mecánicos de los conductores novatos',
          'Altera gravemente la percepción, la coordinación motriz y el juicio de la realidad, convirtiendo cualquier máquina en un arma mortal',
          'Es un elemento indispensable para que las fiestas patronales sean divertidas',
          'Solo afecta a quienes consumen alimentos pesados antes de bailar'
        ],
        correctIndex: 1,
        explanation: 'El alcohol deprime el sistema nervioso, ocasionando tragedias prevenibles en conductores y peatones.',
        pedagogicalSkill: 'Extraer conclusiones sobre los efectos biológicos y sociales del alcohol'
      },
      {
        id: 'inf-5',
        question: '¿Cuál es el significado profundo de la afirmación final: "Ser valiente no consiste en hacer lo que la multitud exige, sino en tener el coraje de decir NO"?',
        options: [
          'Que debemos oponernos siempre a todas las normas de la escuela y el hogar',
          'Que la verdadera madurez y valentía residen en mantenerse fiel a los principios y al bienestar propio, aunque los demás opinen distinto',
          'Que no hay que participar en ninguna fiesta patronal ni celebración comunal',
          'Que el aislamiento total es la mejor forma de no tener problemas'
        ],
        correctIndex: 1,
        explanation: 'La valentía radica en la autonomía moral: resistir la corriente destructiva para preservar la salud y la integridad.',
        pedagogicalSkill: 'Interpretar el mensaje ético universal de la obra'
      }
    ],
    criticalQuestions: [
      {
        id: 'crit-1',
        question: 'En las fiestas patronales o aniversarios de tu comunidad, ¿has visto situaciones donde se presione a beber a jóvenes o niños? ¿Qué opinas al respecto?',
        promptHint: 'Analiza si el consumo de licor debe ser parte de las tradiciones familiares o si debe separarse de las festividades.',
        communityContext: 'En muchas fiestas patronales peruanas, el consumo abusivo de alcohol degenera en peleas y accidentes familiares.',
        rubricCriteria: 'Cuestiona críticamente las costumbres nocivas y distingue entre cultura festiva y abuso de sustancias.',
        suggestedAnswer: 'Sí, lamentablemente muchos adultos creen que invitar licor a un menor es normal o gracioso. Me parece una costumbre equivocada porque pone en peligro el cerebro y el futuro de los jóvenes.'
      },
      {
        id: 'crit-2',
        question: '¿Qué palabras exactas usarías tú si un grupo de amigos o familiares insistiera en que bebas o pruebes sustancias extrañas?',
        promptHint: 'Formula una respuesta asertiva donde no insultes pero dejes perfectamente clara tu negativa innegociable.',
        communityContext: 'Aprender a decir "no" con seguridad es una habilidad vital para la vida de todo adolescente.',
        rubricCriteria: 'Construye respuestas asertivas, respetuosas, directas y coherentes con su proyecto de vida.',
        suggestedAnswer: 'Les diría con total tranquilidad: "Agradezco que me consideren su amigo, pero no tomo alcohol ni pruebo drogas. Mi meta es estudiar y cuidar mi salud, y puedo disfrutar de la fiesta sin hacerme daño".'
      },
      {
        id: 'crit-3',
        question: '¿Cuáles son tus mayores sueños y metas para cuando termines la secundaria? ¿De qué manera el alcohol o las drogas podrían truncarlos?',
        promptHint: 'Menciona tus estudios superiores (universidad, instituto tecnológico, negocio propio) y cómo las adicciones afectan la concentración y la economía.',
        communityContext: 'Los jóvenes de zonas rurales enfrentan grandes retos para acceder a la educación superior y requieren salud plena.',
        rubricCriteria: 'Estructura un proyecto de vida personal y reflexiona sobre los riesgos de las adicciones para su cumplimiento.',
        suggestedAnswer: 'Mi sueño es ser médico veterinario o tener mi propio negocio agrícola. El alcohol y las drogas consumen el dinero de la familia, matan las neuronas y quitan la disciplina necesaria para estudiar.'
      },
      {
        id: 'crit-4',
        question: '¿Qué alternativas saludables y recreativas propondrías en tu colegio o pueblo para que las celebraciones no giren en torno al licor?',
        promptHint: 'Piensa en ferias gastronómicas con jugos naturales, concursos de danzas autóctonas, campeonatos de vóley o noches de fogata y cuentos.',
        communityContext: 'Revalorar la alegría comunitaria sana fomenta la unión familiar y la salud de la niñez.',
        rubricCriteria: 'Propone iniciativas recreativas saludables, viables y acordes con la riqueza cultural de su localidad.',
        suggestedAnswer: 'Propondría ferias de postres y jugos de frutas nativas, concursos de teatro escolar, noches de relatos orales de los abuelos y campeonatos relámpago de fútbol y vóley con premios para los equipos.'
      }
    ],
    textIdentification: [
      {
        id: 'ident-1',
        question: '¿Cuál es el título que mejor resume el sentido de la historia y el dilema resuelto por los protagonistas?',
        options: [
          'La Cosecha del Café en la Selva Alta',
          'Mentes Despiertas, Vidas Plenas: El Coraje de Decir "NO" en Nuestras Fiestas',
          'El Despiste de la Mototaxi Nocturna',
          'La Historia de la Yunza de San Juan'
        ],
        correctIndex: 1,
        explanation: 'Sintetiza la victoria de la lucidez mental y la asertividad frente a las presiones nocivas.',
        pedagogicalSkill: 'Identificación de título integrador'
      },
      {
        id: 'ident-2',
        question: '¿Cuál es el tema central del texto?',
        options: [
          'La preparación de danzas para la fiesta de San Juan',
          'La prevención del consumo de alcohol y drogas en la adolescencia mediante la asertividad y el proyecto de vida',
          'El mantenimiento mecánico de mototaxis rurales',
          'El precio del café pergamino en el mercado internacional'
        ],
        correctIndex: 1,
        explanation: 'El tema se enfoca en cómo prevenir adicciones y resistir la presión social en la adolescencia.',
        pedagogicalSkill: 'Identificación del tema medular'
      },
      {
        id: 'ident-3',
        question: '¿Cuál es la idea principal que defiende la lectura?',
        options: [
          'La verdadera diversión y la madurez no dependen del consumo de licor ni drogas, sino de la capacidad de cuidar la salud y defender con valentía las metas del proyecto de vida',
          'En las fiestas patronales peruanas está prohibido por ley bailar cumbias y huaynos',
          'Todos los adolescentes de segundo grado deben comprar bebidas alcohólicas para sus mayores',
          'La agronomía y la enfermería son las únicas carreras válidas en la selva'
        ],
        correctIndex: 0,
        explanation: 'Constituye la idea rectora que orienta toda la narrativa y los mensajes formativos del relato.',
        pedagogicalSkill: 'Localización de la idea principal'
      },
      {
        id: 'ident-4',
        question: '¿Cuál de las siguientes es una idea secundaria del texto?',
        options: [
          'Edwin soñaba con ser ingeniero agrónomo para ayudar a combatir la roya del café en su chacra',
          'Nayeli fue elegida alcaldesa del distrito de Santa Rosa',
          'Los músicos de la banda cancelaron el concierto por falta de instrumentos',
          'Don Cecilio ganó un premio internacional por su ganado vacuno'
        ],
        correctIndex: 0,
        explanation: 'El anhelo vocacional de Edwin es una idea secundaria que explica su firmeza ética.',
        pedagogicalSkill: 'Distinción de ideas secundarias'
      },
      {
        id: 'ident-5',
        question: '¿Cuál fue el propósito comunicativo del autor?',
        options: [
          'Fomentar la venta de cerveza y licor en botellas cerradas',
          'Concientizar a los adolescentes sobre los riesgos del alcohol y las drogas, promoviendo la asertividad y la protección del proyecto de vida',
          'Prohibir que los pobladores bailen en las plazas comunales',
          'Describir el cultivo del grano de café en la ceja de selva'
        ],
        correctIndex: 1,
        explanation: 'El autor busca empoderar a los estudiantes para que digan "NO" ante las adicciones y cuiden su futuro.',
        pedagogicalSkill: 'Reconocimiento del propósito comunicativo'
      }
    ],
    sentenceOrdering: [
      {
        id: 'ord-1',
        text: 'Nayeli y Edwin bailan con entusiasmo en la fiesta de San Juan soñando con sus futuras profesiones.',
        correctOrder: 1
      },
      {
        id: 'ord-2',
        text: 'Muchachos mayores y forasteros intentan obligar a Edwin a beber cañazo y ofrecen sustancias a Nayeli.',
        correctOrder: 2
      },
      {
        id: 'ord-3',
        text: 'Edwin y Nayeli rechazan las tentaciones con firmeza asertiva para proteger su salud y su proyecto de vida.',
        correctOrder: 3
      },
      {
        id: 'ord-4',
        text: 'Otros tres compañeros del aula siguen su valiente ejemplo y se alejan del grupo de bebedores.',
        correctOrder: 4
      },
      {
        id: 'ord-5',
        text: 'Una mototaxi con jóvenes ebrios sufre un accidente, confirmando que decir "NO" salvó sus vidas.',
        correctOrder: 5
      }
    ],
    columnMatching: [
      {
        id: 'col-1',
        concept: 'Edwin',
        match: 'Sueña con ser agrónomo y rechazó con calma el licor adulterado',
        hint: 'Joven que desea combatir las plagas del café'
      },
      {
        id: 'col-2',
        concept: 'Nayeli',
        match: 'Aspira a ser enfermera comunal y protegió su cuerpo sin dudar',
        hint: 'Adolescente que sueña con atender la posta médica'
      },
      {
        id: 'col-3',
        concept: 'Don Cecilio',
        match: 'Ejemplo del dolor y deterioro provocado por la embriaguez crónica',
        hint: 'Vecino que dormía en el fango con los bolsillos vacíos'
      },
      {
        id: 'col-4',
        concept: 'Asertividad',
        match: 'Capacidad de decir "NO" con serenidad, respeto y convicción',
        hint: 'Herramienta socioemocional usada por los protagonistas'
      },
      {
        id: 'col-5',
        concept: 'Proyecto de vida',
        match: 'Metas personales y profesionales que nos blindan de las adicciones',
        hint: 'Escudo protector que orienta las decisiones del futuro'
      }
    ],
    wordSearch: {
      grid: [
        ['A', 'S', 'E', 'R', 'T', 'I', 'V', 'I', 'D', 'A', 'D', 'M'],
        ['A', 'D', 'I', 'C', 'C', 'I', 'O', 'N', 'E', 'S', 'I', 'E'],
        ['S', 'A', 'L', 'U', 'D', 'F', 'I', 'S', 'I', 'C', 'A', 'N'],
        ['P', 'R', 'O', 'Y', 'E', 'C', 'T', 'O', 'V', 'I', 'D', 'A'],
        ['D', 'E', 'C', 'I', 'S', 'I', 'O', 'N', 'E', 'S', 'W', 'P'],
        ['F', 'I', 'R', 'M', 'E', 'Z', 'A', 'V', 'I', 'T', 'A', 'L'],
        ['V', 'A', 'L', 'E', 'N', 'T', 'I', 'A', 'P', 'A', 'Z', 'E'],
        ['D', 'I', 'G', 'N', 'I', 'D', 'A', 'D', 'Q', 'U', 'R', 'N'],
        ['A', 'U', 'T', 'O', 'C', 'U', 'I', 'D', 'A', 'D', 'O', 'A'],
        ['P', 'R', 'E', 'V', 'E', 'N', 'C', 'I', 'O', 'N', 'Y', 'S'],
        ['F', 'U', 'T', 'U', 'R', 'O', 'S', 'A', 'N', 'O', 'K', 'L'],
        ['S', 'O', 'B', 'R', 'I', 'E', 'D', 'A', 'D', 'X', 'Z', 'P']
      ],
      words: [
        { word: 'ASERTIVIDAD', clue: 'Habilidad de comunicar un "NO" rotundo con serenidad y respeto', direction: 'horizontal', row: 0, col: 0 },
        { word: 'ADICCIONES', clue: 'Enfermedad originada por el consumo reiterado de drogas o licor', direction: 'horizontal', row: 1, col: 0 },
        { word: 'SALUD', clue: 'Estado de completo bienestar físico, mental y social', direction: 'horizontal', row: 2, col: 0 },
        { word: 'PROYECTO', clue: 'Plan de metas y anhelos que nos guía hacia el porvenir', direction: 'horizontal', row: 3, col: 0 },
        { word: 'DECISIONES', clue: 'Elecciones conscientes que marcan nuestro destino', direction: 'horizontal', row: 4, col: 0 },
        { word: 'FIRMEZA', clue: 'Seguridad inquebrantable para no dejarse doblegar', direction: 'horizontal', row: 5, col: 0 },
        { word: 'VALENTIA', clue: 'Coraje para resistir las presiones de la multitud', direction: 'horizontal', row: 6, col: 0 },
        { word: 'DIGNIDAD', clue: 'Valor inestimable de nuestra persona y de nuestro cuerpo', direction: 'horizontal', row: 7, col: 0 },
        { word: 'AUTOCUIDADO', clue: 'Práctica cotidiana de proteger la propia vida y bienestar', direction: 'horizontal', row: 8, col: 0 },
        { word: 'PREVENCION', clue: 'Anticiparse a los riesgos antes de que causen tragedias', direction: 'horizontal', row: 9, col: 0 }
      ]
    },
    fillInTheBlanks: {
      wordBank: ['asertividad', 'en primer lugar', 'proyecto de vida', 'por esta razón', 'adicciones', 'asimismo'],
      items: [
        {
          id: 'fb-1',
          sentenceBefore: 'Edwin y Nayeli querían proteger su salud;',
          sentenceAfter: 'se negaron rotundamente a consumir cañazo y sustancias extrañas.',
          correctWord: 'por esta razón',
          wordType: 'conector',
          grammarHint: 'Conector que expresa consecuencia directa'
        },
        {
          id: 'fb-2',
          sentenceBefore: 'Tener un claro',
          sentenceAfter: 'nos impulsa a esforzarnos por nuestras metas profesionales.',
          correctWord: 'proyecto de vida',
          wordType: 'vocabulario',
          grammarHint: 'Concepto referido al plan de futuro personal'
        },
        {
          id: 'fb-3',
          sentenceBefore: 'Los jóvenes respondieron con calma y',
          sentenceAfter: 'desarmando las provocaciones de los bebedores.',
          correctWord: 'asertividad',
          wordType: 'vocabulario',
          grammarHint: 'Capacidad de decir lo que se piensa con respeto'
        },
        {
          id: 'fb-4',
          sentenceBefore: 'El alcohol deteriora el sistema nervioso y,',
          sentenceAfter: 'genera violencia doméstica y accidentes fatales.',
          correctWord: 'asimismo',
          wordType: 'conector',
          grammarHint: 'Conector de adición de información'
        },
        {
          id: 'fb-5',
          sentenceBefore: 'Para prevenir las',
          sentenceAfter: 'en las comunidades campesinas, es fundamental fortalecer la unión familiar.',
          correctWord: 'adicciones',
          wordType: 'vocabulario',
          grammarHint: 'Término referido a las dependencias químicas'
        },
        {
          id: 'fb-6',
          sentenceBefore: 'Para tomar buenas decisiones debemos,',
          sentenceAfter: 'aprender a valorar nuestro cuerpo y nuestros anhelos más profundos.',
          correctWord: 'en primer lugar',
          wordType: 'conector',
          grammarHint: 'Conector de ordenación y jerarquía'
        }
      ]
    }
  }
];
