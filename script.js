
// ------------------- DIAS DE TRATAMIENTO ------------------- 

const diasTratContainer = document.getElementById('diasTratamiento')
const robertContainer = document.getElementById('robertachs')

let varInput1 = document.getElementById('varInput1');
let varInput2 = document.getElementById('varInput2');
let varInput3 = document.getElementById('varInput3');
let varInput4 = document.getElementById('varInput4');
// let varInput5 = document.getElementById('varInput5');
let textoClinico = document.getElementById('textoClinico');
let shapImg = document.getElementById('shapImg');
let caseNumber = ''

const data = {
  '0': {'fecha_presentacion_principal': '2022-04-27',
  'puesto_trabajo': 'operador porta contenedor',
  'fecha_accidente': '2022-04-27',
  'ingreso_tardio': null,
  'mecanismo': '00',
  'rubro': 718.0,
  'cantidad_siniestros': 1.0,
  'uo_sede_ingreso': ' SAN ANTONIO',
  'uo_servicio_ingreso': 'US_ATENCION_AMBULATORIA',
  'uo_medica_ingreso': 'UM_ATENCION_PRIMARIA',
  'id_uo_tratamiento_ingreso': 'SANTCAPR',
  'uo_tratamiento_ingreso': 'CONSULTA_AP',
  'tipo_siniestro_origen': '3',
  'ult_tipo_siniestro_primer_dia': '3',
  'tipo_siniestro_actual': '3',
  'tipo_siniestro_origen_desc': 'Enfermedad Profesional',
  'ult_tipo_siniestro_primer_dia_desc': 'Enfermedad Profesional',
  'tipo_siniestro_actual_desc': 'Enfermedad Profesional',
  'tipo_ley': '1',
  'tipo_ley_desc': 'Ley 16.744',
  'anteced': 'DOLOR, ADORMECIMIENTO, PUNZACION , PERDIDA DE FUERZA',
  'relato_admision': 'DOLOR, ADORMECIMIENTO, PUNZACION , PERDIDA DE FUERZA',
  'cod_ubic_les': '900',
  'parte_lesionada': 'Otras partes del cuerpo lesionadas',
  'criterio_gravedad': null,
  'tiene_salud_mental': 0,
  'tiene_fractura': 0,
  'cantidad_diag_fractura': null,
  'fecha_primer_diag_fractura': null,
  'fecha_ultimo_diag_fractura': null,
  'cantidad_diagnosticos': 6,
  'codigo_diagnostico_1': '4282',
  'fecha_creacion_diag_1': '2023-07-10',
  'mediana_mono_diag_1': 33.1764705882353,
  'mediana_poli_diag_1': 44.92044063647491,
  'std_diag_1': 91.81472621448907,
  'prop_ctp_diag_1': 0.4426751592356688,
  'q20_diag_1': 0.0,
  'q80_diag_1': 15.0,
  'lateralidad_diag_1': 'bilateral',
  'ubicacion_lesion_diag_1': 'extremidad superior',
  'cie10_diag_1': 'M192',
  'bloque_general_diag_1': 'EXTREMIDAD SUPERIOR',
  'bloque_especifico_diag_1': 'OTRAS ARTROSIS',
  'codigo_grupo_diag_1': 'M19',
  'cie10_grupo_diag_1': 'M00_M99',
  'cie10_macro_diag_1': 'M',
  'codigo_diagnostico_2': '4566',
  'fecha_creacion_diag_2': '2023-07-10',
  'mediana_mono_diag_2': 32.92857142857143,
  'mediana_poli_diag_2': 36.2557289127255,
  'std_diag_2': 80.7775000833209,
  'prop_ctp_diag_2': 0.3387014501202361,
  'q20_diag_2': 0.0,
  'q80_diag_2': 8.0,
  'lateralidad_diag_2': 'bilateral',
  'ubicacion_lesion_diag_2': 'extremidad superior',
  'cie10_diag_2': 'M751',
  'bloque_general_diag_2': 'EXTREMIDAD SUPERIOR',
  'bloque_especifico_diag_2': 'LESIONES DEL HOMBRO',
  'codigo_grupo_diag_2': 'M75',
  'cie10_grupo_diag_2': 'M00_M99',
  'cie10_macro_diag_2': 'M',
  'dia_semana_principal': 'Miercoles',
  'fecha_nacimiento_bp': '1974-08-25',
  'sexo': 'femenino',
  'dias_reposo_totales': 128.0,
  'primer_fecha_inicio_reposo': '2022-04-27',
  'primer_fecha_indicacion_reposo': '2022-04-27',
  'dias_reposo_iniciales': 14.0,
  'grado_total_incapacidad': null,
  'fecha_resolucion': null,
  'modalidad_incapacidad_desc': null,
  'primera_terapia_fisica': null,
  'primera_terapia_ocupacional': null,
  'id_via_administracion': null,
  'via_maxima': null,
  'descripcion_formato': null,
  'antibioticos': null,
  'anticoagulantes_orales': null,
  'hipoglicemiantes': null,
  'tromboliticos': null,
  'nivel_carga_laboral': 3.0,
  'hospitalizado': null,
  'anamnesis': 'Tomo conocimiento de caso:\nOperadora en puerto. \nEPE acogida por suseso:\nTendinopatía del manguito rotador bilateral.\nBursitis subacromio subdeltoídea  bilateral.\nEpicondilitis.\nEpitrocleitis.\nDirigenta sindical.\nDerivada de AP.\nARTROSIS AC NO LABORAL BILATERAL\nRefiere dolor cervical que se irradia a extremidad superior derecha.\nEn extremidad superi izqueirda presenta menos dolor. \nRefiere le cuesta abrir tapas de botella. Disminución de fuerza en mano derecha según refiere. \nEco de hombro bilateal del 10 de julio: Signos de artrosis acromioclavicular bilateral.Leve bursitis sub acromial sub deltoidea izquierda.Micro Tendinopatía cálcica del tendón subescapular del hombro izquierdo\nRM codo izquierdo: epicondilitis lateral sin rotura.\nRM codo derecho: Epicondilitis lateral si rotura. \nEco mano y muñeca builateral normales. \nSospecho cervicobraquialgia\nSolicito RM de columna cervical.\nMantener controles con MDT\nControl con resultados de resonullcia magentica en ap en caso de hnp derivar patologia de columna por disminución de clageno y degenerativa,.\n&&&&Cargo: Operador porta contenedor.\nulltigüedad laboral: 9 años\nEmpresa: Muellaje Del Maipo SA\nMEDIDAS DE MITIGACIÓN: SIN MEDIDAS DE MITIGACIÓN\nDIAGNÓSTICOS:\nTENDINOSIS SUPRAESPINOSO BILATERAL\n- BURSITIS SUBACROMIO SUBDELTOIDEA BILATERAL\n- ARTROSIS ACROMIOCLAVICULAR BILATERAL\n- EPITROCLETIS IZQUIERDA\n- ENTESOPATÍA CODO BILATERAL\n- TENOSINOVITIS DE C6 Y C4 IZQUIERDO\nCALIFICADO LEY POR COMITÉ EL 19/05/2023\nHA REALIZADO APROX 12 SESIONES DE TF\nPLAN: AJUSTE DE PUESTO DE TRABAJO/ REINTEGRO PROGRESIVO\nTRATAMIENTO\nCELECOXIB 200 MG (A) 200 MG C/12 HRS 30 días\nDICLOFENACO GEL TOPICO CADA 8 HORAS POR DOLOR\nADHERENCIA: BUENA\nNIEGA RAMS \n\nPaciente quien refiere que persiste con mucho dolor, indica noha podido dormir, indica que ayer termino sesiones de tf, pero el dolor es constante, refiere no la han vuelto a llamar para hacer turnos, por  lo que solo ha tenido un turno en el reintegro, siente que le dejaron a medias su tratamiento, indica que por el trabajo no puede tomar medicamentos mas fuertes.&&&&Operadora en puerto.\nEPE acogida por suseso:\nTendinopatía del manguito rotador bilateral.\nBursitis subacromio subdeltoídea bilateral.\nEpicondilitis.\nEpitrocleitis.\nDirigenta sindical.\nDerivada de AP.\nARTROSIS AC NO LABORAL BILATERAL\nEn último control conmigo paciente con dolor cervical que se irradia a extremidad superior derecha. Se solicito RM de columna cervicl ya que se evicenció sintomas secundarios a síndrome cervicobraquial. RM muitesra discopatia cervical multinivel y espondioliartrosis cervical multinivel. Junta médica de estas patologías NO laborales. \nEco de hombro bilateal del 10 de julio: Signos de artrosis acromioclavicular bilateral.Leve bursitis sub acromial sub deltoidea izquierda.Micro Tendinopatía\ncálcica del tendón subescapular del hombro izquierdo\nRM codo izquierdo: epicondilitis lateral sin rotura.\nRM codo derecho: Epicondilitis lateral sin rotura.\nEco mano y muñeca builateral normales.\nExplico a paciente mecanismo que no es compatible con discopátia degenerativa, por pérdida de colágeno y disminución de espacios intervertebrales, dolor en movilización de columna. \nSignos clínicos son compartibles pero con HNP cervical, no con tenxiniopatpia actualmente.\nRequiere manejo por su previsión de estas patología.\nSin reposo por traumatología por patología cervical no laboral.\nControl en MDT el 31 para posinle alta y control a,bulatorio de su patologia.\nSin acciones pendientes por traumatología.&&&&Cargo: Operador porta contenedor.\nulltigüedad laboral: 9 años\nEmpresa: Muellaje Del Maipo SA \nEn sintesis:\n-TP MR bilateral laboral\n-Bursitis subacromial bilateral laboral\n-Epicondilitis bilateral laboral\n-Epitrocleitis medial laboral. iz \n\n\nmedicamentos que ha tomado:\nNAPROXENO 550 MG (A) 550 MG C/12 HRS 15 días VIA ORAL\n-Celecoxib 200mg OD\n-Paracetamol 500mg 2-2-2 \n\nTRATAMIENTO\nTramadol/paracetamol 37,5 mg/325 mg. 1 comp SOS VO\nNo esta utilizando pregabalina\nDiclofenaco gel aplicacion nocturna \n\n\nEVALUACIÓN KINÉSICA:\nTIEMPO DE EVOLUCIÓN:\n8 meses de evolución.\nTIPO DE PROCEDIMIENTO:\nSesiones de TF para manejo del dolor en hombros y codos bilateral, no se logra avanzar en realizacion de ejercicios, ya que en medio\ndel ciclo paciente comienza con EPE cervical.\nTIEMPO EN TF:\n12 sesiones.\nDOLOR:\nHombro derecho: 7/10 constante punzante (sin cambios), nocturno y al realizar esfuerzos 10/10 (sin cambios) en cara anterior de hombro.\nHombro izquierdo: 6/10 constante punzante (sin cambios), nocturno y al realizar esfuerzos 7/10 (sin cambios)en cara anterior del hombro.\nCodo derecho: Dolor constante ENA 6/10 (sin cambios), al realizar movilidad activa 7/10 (sin cambios) en epitroclea y epicondilo.\nCodo izquierdo: Dolor constante ENA 5/10 (sin cambios), al realizar moviilidad activa 6/10 (sin cambios) en epotroclea y epicondilo.\nSENSIBILIDAD:\nParestesia en brazo y antebrazo derecho.\nAVO:\nSin contactura muscular en hombros ni cuello.\nEVALUACION ARTICULAR ACTIVA:\nHombro derecho: 130° flexion (antes 125°), 45° extension (antes 5°), 80° abduccion (sin cambios).\nHombro izquierdo: 135° flexion (sin cambios), 35° extension (sin cambios), 90° abduccion (sin cambios).\nCodo derecho: 0° extension (sin cambios), 125° flexion (sin cambios).\nCodo izquierdo: 0° extension (antes 10°), 125° flexion (sin cambios).\nEVALUACION MUSCULAR:\nDiestra, se realiza medicion con dinamometro de mano: 6 kg a derecha (antes 5 kg)/ 5 kg a izquierda (antes 4 kg).\n*** No se aprecia una mejora significativa a pesar del reposo y del ciclo de 12 sesiones ***\nEvaluación Funcional:\nCodo: Sí\nLogra tocar hombro ipisilateral: Sí\nLogra tocar hombro contralateral: Sí\nLogra tocarse la cara: Sí\n\n\nrefiere que tiene medicamentos, persiste con las mismas dolencias el codo disminuyo un poco pero el resto sigue igual&&&&Tomo conocimiento del caso, paciente femenino de 48 años.\nCargo: Operador porta contenedor.\nulltigüedad laboral: 9 años \nEmpresa: Muellaje Del Maipo SA\nIngreso: 2022\nEnfermedad calificada por comité evaluador ACHS como no laboral 19.05.2022 y posteriormente recalificada laboral por apelación SUSESO\nDictamen SUSESO 14.06.2023 N° O-98992-2023 resuelve:\n"En consecuencia, la Sra. Catherine Tapia Castro presenta una tendinopatía del manguito rotador bilateral y una bursitis subacromio subdeltoídea \n bilateral, las que califican como enfermedad profesional, por lo cual esa mutualidad deberá reingresarla y otorgarle todas las prestaciones \n médicas y económicas que correspondan. Además, presenta una artrosis acromioclavicular bilateral que califica como enfermedad común.\n Por otra parte, esa mutualidad debe precisar los diagnósticos que presenta la trabajadora en segmentos codo y muñeca bilateral y calificar \n dichaspatologías, considerando que los estudios de puesto de trabajo demuestran exposición a riesgo suficiente para epicondilitis, epitrocleitis y\n tendinitis extensora de muñeca bilateral"\n\nBajo indicación SUSESO, Comité evaluador ACHS se pronuncia junto a nuevos estudios de imagen realizados, 29.06.2023:\n"En virtud del cuadro clínico y los hallazgos imagenológicos, LOS DIAGNÓSTICOS SON:\nEpicondilitis bilateral\nEpitrocleitis izquierdo\nELEMENTOS QUE SUSTENTAN LA DECISIÓN\n• Bajo Dictamen SUSESO ORD.: O-02-ISESAT-00731-2023 se indica acoger como patologia laboral Epicondilitis bilateral y\nEpitrocleitis izquierda.\nJustificación frente a la no realización de algún examen:\n• Calificacion según Dictamen SUSESO. \n\n*Nota:\n- Diagnosticos en base a nuevos antecedentes control médico(20-6-23) y exámenes imagenologicos (28-06-23). Mano muñeca\nbilateral sin hallazgos patologicos."\n\nEn sintesis:\n-TP MR bilateral laboral\n-Bursitis subacromial bilateral laboral\n-Artrosis acromioclavicular NO LABORAL\n-Epicondilitis bilateral laboral\n-Epitrocleitis medial laboral.\n\nSegmento muñeca-mano, sin hallazgos patológicos, sin prestaciones o cobertura a través de la ley 16.744. EN CASO DE PRESENTAR DOLENCIAS DEBERA ACUDIR A SU SISTEMA PREVISIONAL.\n\nUltima evaluación por APS en agencia ACHS San Antonio 03.07.2023 en donde indican:\n-Reposo laboral abierto\n-Transporte en paciente autovalente sin incapacidad para su deambulación independiente. Otorgar prestación: LLEVAR-TRAER por lo que \n atención de cursante día y su transporte posterior a su domicilio queda a cargo de agencia San Antonio. Desde agencia providencia se deja \n constado: SIN CRITERIOS CLÍNICOS PARA TR.\n-Celecoxib 200mg OD\n-Paracetamol 500mg 2-2-2 \n\nPara el día de hoy paciente refiere buena adherencia a medicamentos, niega RAMs. \n\nPaciente acusa y alega de que tuvo que realizar acto quirurgico por extrasistema mientras estuvo en apelación con SUSESO, describe que le "pegaron el tendón" del hombro derecho, acusa de que queda "igual" y mantiene dolor, se realiza anamnesis dirigida a paciente y reconoce que ha recuperado ROM y FM posterior a su cirugía. (Mayo, 2023).\n\nSegún escala EVA:\n-Hombro derecho: 7/10 en reposo y actividad el cual enfatiza que "no se modifica con el reposo o la actividad". \n-Hombro izquierdo: 4/10 en reposo y en actividades que involucren F-E o movimientos por encima de los 90° alcanza un máximo de 7/10.\n-Codo derecho: 4/10 en reposo y en actividades físicas o laborales.\n-Codo izquierdo: 4/10 en reposo y actividades físicas o laborales.\n\nDescribe como principal foco de queja o dolor segmentos hombros bilaterales, siendo mucho mayor a derecha que a izquierda.\nSueño interrumpido por presentar dolor nocturno en ambos hombros que le obliga a dormir boca arriba, no puede apoyarse en ninguno de los 2. Dolor empeora en las mañanas y lo asocia a rigidez durante las primeras horas diurnas.\n\nEn materia laboral: desconoce, explica que ha presentado reposo laboral extendido (más de 1 mes hasta la actualiadad) por lo que no ha hecho contacto con esta y desconoce condiciones de su puesto de trabajo.&&&&Am: niega\nMedicamentos: niega\nAlergia: Niega\nHábitos OH niega Tabaco: Niega Otras drogas: Niega\nOcupación: Operador- dirigente sindical\nDX \ntendinopatía del manguito rotador bilateral\nbursitis subacromio subdeltoídea bilateral\nartrosis acromioclavicular bilateral ( no laboral)\nepitrocleitis izquierda\nentensopatia de codo bilateral\ntenosinovitis c6 y c4 izquierdo\n\nPaciente quien acude refiriendo, que necesita ser evaluada por especialista por sus condiciones clinicas acogidas, indica que siempre ha estado con dolor y que ha ido aumentando gradualmente, en intensidad, refiere que en mayo de 2022 la operan de hombro derecho de manguto rotador, indica que queria reingresarse si saber resultado se suseso, ya que ella como lider sindical tiene gran conocimeinto de calificaciones y considera que achs debia cambiar su calificacion\nRefiere que no toma medicamentos&&&&Cargo: Operador porta contenedor.\nulltigüedad laboral: 9 años\nEmpresa: Muellaje Del Maipo SA\nMEDIDAS DE MITIGACIÓN: SIN MEDIDAS DE MITIGACIÓN \n\nDIAGNÓSTICOS: \nTENDINOSIS SUPRAESPINOSO BILATERAL\n- BURSITIS SUBACROMIO SUBDELTOIDEA BILATERAL\n- ARTROSIS ACROMIOCLAVICULAR BILATERAL\n- EPITROCLETIS IZQUIERDA\n- ENTESOPATÍA CODO BILATERAL\n- TENOSINOVITIS DE C6 Y C4 IZQUIERDO\n\nCALIFICADO LEY POR COMITÉ EL 19/05/2023\nHA REALIZADO APROX  12 SESIONES DE TF \nPLAN: AJUSTE DE PUESTO DE TRABAJO/ REINTEGRO PROGRESIVO\n\nTRATAMIENTO\nTramadol/paracetamol 37,5 mg/325 mg. 1 comp SOS VO\nDiclofenaco gel aplicacion nocturna \nADHERENCIA: BUENA\nNIEGA RAMS\n\nACTUALMENTE ACUDE A REGULARIZACIÓN POR REINTEGRO PROGRESIVO POST EVALUACIÓN DE TERAPEUTA OCUPACIONAL QUE REFIERE QUE NO SE PUEDE ADECUAR PUESTO DE TRABAJO POR LO QUE SE PROPONE REINTEGRO PROGRESIVO CON PAUSAS ACTIVAS PARA CAMBIO DE PUESTO DE TRABAJO.\n\nNO HA RECIBIDO SESIONES DE KNT DESDE HACE UN MES\n\nINFORMO PATOLOGÍA CERVICAL NO LEY, PACIENTE SE MUESTRA MUY INCONFORME YA QUE LA CONCLUSIÓN FUE PREVIO A EPT&&&&LL-TR&&&&Am: niega\nMedicamentos: niega\nAlergia: Niega\nHábitos OH niega Tabaco: Niega Otras drogas: Niega\nOcupación: Operador- dirigente sindical\nDX\ntendinopatía del manguito rotador bilateral\nbursitis subacromio subdeltoídea bilateral\nartrosis acromioclavicular bilateral ( no laboral)\nepitrocleitis izquierda\nentensopatia de codo bilateral\ntenosinovitis c6 y c4 izquierdo\n\nPaciente quien acude a control, indica se siente muy molesta y pide ser atendida por medico jefe, refiere que perdiste con su dolor y quiere ser evaluada por especialidad, ingresa a box refiriendo que no quiere ser atendida por medico general.\n\nFECHA : 28/6/2023\nEXAMEN : RM CODO DERECHO_\nEXAMEN\nRM CODO DERECHO_\nHallazgos:\nSeñal de estructura ósea conservada.\nNo se observan lesiones osteocondrales.\nLigamentos del complejo medial y lateral conservados.\nTendinopatía del extensor común en la región del epicóndilo sin signos de rotura. Tendón flexor común de aspecto normal.\nNervio cubital sin alteraciones patológicas significativas.\nTendón del bíceps, tendón del tríceps sin alteraciones.\nNo hay signos de sinovitis articular.\nLeve edema del celular subcutáneo cara posteromedial. Planos musculares periarticulares conservados.\nImpresión:\nTendinopatía del extensor común en la región del epicóndilo sin signos de rotura.\nDiscreto edema del celular subcutáneo en cara posteromedial.\n\nFECHA : 28/6/2023\nEXAMEN : RM CODO IZQUIERDO_\nEXAMEN\nRM CODO IZQUIERDO_\nHallazgos:\nSeñal de estructura ósea conservada.\nNo veo lesiones osteocondrales.\nTendinosis del extensor común en la región del epicóndilo con pequeña rotura fibrilar parcial de 3 x 3 mm intrasustancia.\nTendón flexor común de aspecto normal.\nLigamentos del complejo medial y lateral conservados.\nNervio cubital de aspecto normal.\nTendón del bíceps sin alteraciones. Tendón del tríceps en límite normal. Planos musculares periarticulares conservados.\nLeve edema del celular subcutáneo en la cara posteromedial.\nNo hay signos de sinovitis articular.\nImpresión\nTendinopatía del extensor común en la región del epicóndilo con pequeña lesión fibrilar parcial intrasustancia.\nDiscreto edema del celular subcutáneo en cara posteromedial. \n \nFECHA : 28/6/2023\nEXAMEN : ECOTOMOGRAFIA MUÑECA BILATERAL\nEXAMEN\nECOTOMOGRAFIA MUÑECA BILATERAL\nECOTOMOGRAFIA MANO BILATERAL\nHallazgos:\nTendones extensores y flexores se observan de grosor, ecogenicidad y patrón fibrilar conservado, sin líquido en sus vainas.\nNo observo signos de sinovitis radiocarpiana, trapeciometacarpiana ni en articulaciones metacarpofalángicas.\nNervios medianos de grosor y patrón fascicular normal con área de sección de 7 mm² a derecha y 9 mm² a izquierda.\nNo se visualizan formaciones quísticas.\nImpresión:\nExamen sin hallazgos patológicos. \n\nFECHA : 28/6/2023\nEXAMEN : ECOTOMOGRAFIA MANO BILATERAL\nEXAMEN\nECOTOMOGRAFIA MUÑECA BILATERAL\nECOTOMOGRAFIA MANO BILATERAL\nHallazgos:\nTendones extensores y flexores se observan de grosor, ecogenicidad y patrón fibrilar conservado, sin líquido en sus vainas.\nNo observo signos de sinovitis radiocarpiana, trapeciometacarpiana ni en articulaciones metacarpofalángicas.\nNervios medianos de grosor y patrón fascicular normal con área de sección de 7 mm² a derecha y 9 mm² a izquierda.\nNo se visualizan formaciones quísticas.\nImpresión:\nExamen sin hallazgos patológicos. \n\nFECHA : 28/6/2023\nEXAMEN : ECOTOMOGRAFIA CODO BILATERAL\nEXAMEN\nECOTOMOGRAFIA CODO BILATERAL\nHallazgos:\nNo se observan signos de derrame articular.\nTendón extensor común bilateral de grosor conservado, hipoecogénicos, con aumento de la vascularización y entesofitos en su\ninserción.\nTendón flexor común izquierdo de grosor conservado, hipoecogénico en su inserción.\nTendón flexor como derecho de aspecto ecográfico normal.\nTendones del bíceps y tríceps sin alteraciones.\nNervio cubital bien situado de grosor y patrón fascicular conservado.\nNo se visualizan formaciones quísticas.\nImpresión:\n - Tendinopatía del extensor común bilateral. - Tendinopatía del flexor común izquierdo. \n&&&&Cargo: Operador porta contenedor.\nulltigüedad laboral: 9 años\nEmpresa: Muellaje Del Maipo SA\nIngreso: 2022\nEnfermedad calificada por comité evaluador ACHS como no laboral 19.05.2022 y posteriormente recalificada laboral por apelación SUSESO\nDictamen SUSESO 14.06.2023 N° O-98992-2023 resuelve:\n"En consecuencia, la Sra. Catherine Tapia Castro presenta una tendinopatía del manguito rotador bilateral y una bursitis subacromio subdeltoídea\n bilateral, las que califican como enfermedad profesional, por lo cual esa mutualidad deberá reingresarla y otorgarle todas las prestaciones\n médicas y económicas que correspondan. Además, presenta una artrosis acromioclavicular bilateral que califica como enfermedad común.\n Por otra parte, esa mutualidad debe precisar los diagnósticos que presenta la trabajadora en segmentos codo y muñeca bilateral y calificar\n dichaspatologías, considerando que los estudios de puesto de trabajo demuestran exposición a riesgo suficiente para epicondilitis, epitrocleitis y\n tendinitis extensora de muñeca bilateral"\nBajo indicación SUSESO, Comité evaluador ACHS se pronuncia junto a nuevos estudios de imagen realizados, 29.06.2023:\n"En virtud del cuadro clínico y los hallazgos imagenológicos, LOS DIAGNÓSTICOS SON:\nEpicondilitis bilateral\nEpitrocleitis izquierdo\nELEMENTOS QUE SUSTENTAN LA DECISIÓN\n• Bajo Dictamen SUSESO ORD.: O-02-ISESAT-00731-2023 se indica acoger como patologia laboral Epicondilitis bilateral y\nEpitrocleitis izquierda.\nJustificación frente a la no realización de algún examen:\n• Calificacion según Dictamen SUSESO. \n\n\nTRATAMIENTO\nNAPROXENO 550 MG (A) 550 MG C/12 HRS 15 días VIA ORAL\nTRAMADOL 37.5 MG - PARACETAMOL 325 MG (A) 1 CMP C/8 HRS 7 días VIA ORAL  SOS \nDICLOFENACO 1% / 30 GR (A). 1 TUB SEGUN  NECESIDAD 3 días VIA TOPICA SOS \n\nACUDE PORQUE MAÑANA LE CORRESPONDE REINCORPORARSE A SUS ACTIVIDADES LABORALES Y NO SE SIENTE EN CONDICIONES ESTA CON MUCHO DOLOR EN SUS HOMBROS EVA 8/10 A PREDOMINIO DE HOMBRO D A PESAR DE MEDICACION Y TERAPIAS\n\n\nREFIERE QUE NECESITA UN REINGRESO EN SANTIAGO LE MANDARON HACER KINE MAÑANA TIENE QUE REGRESAR ELLA OPERA MAQUINARIA NO SE SIENTE QUE ESTA ESTE EN CONDICIONES DE REINCORPORARSE \n',
  'examen_fisico': 'Hombro derecho doloroso, rom bilateral flexion anterioer 120°, RE 40° RI derexcha sacroiliaca e izquierda T10.\nJobe positivo biolateral mayor a derechaa.\nDolor corredera bicipital bilateral.\nBelluoress psotiivo a izquierda\nImpresiona roger bikelas positivo a derecha&&&&Paciente ingresa por sus propios medios\nOrientada en sus 3 esferas mentales\nHOMBRO IZQUIERDO\nInspeccion:AVO -/+++ sin equimosis, sin deformidad\nAsimetrías/ Deformaciones: -\nPalpación:\nMovilidad de fragmentos: -\nCrepitacion: -\nDolor en un punto localizado:\n1.Acromio-clavicular: +\n2. Supraespinoso: +\n3. Subacromial(abduccion): +\nReflejos osteo-tendíneos: -\nMovilidad:\nAbducción(supraespinoso): Doloroso\nAducción: Doloroso\nFlexión:Doloroso\nExtensión:Doloroso\nRotacion externa(Infraespinoso): Doloroso\nRotacion interna(subescapular):Doloroso\nFlexion(biceps):Doloroso\nFuerza muscular: M5\nSensibilidad: Completa&&&&signos de radiculopatía cervical, dolor evocado en extremidad superior.\n&&&&algia 8/10 en hombros d algia 7/10 en codos \n\nhombro derecho avo- , sin equimosis ni deformidad, se evidencia estigmas o cicatrices en cara lateral y anterior de deltoide de laparoscopía realizada. Dolor a la palpación de tubérculo mayor humeral y región subacromial. \nMovimientos activos Hombro derecho: 130° flexion  45° extension , 80° abduccion \nApley + superior e inferior,Test Hawkins + Test Jobe +, Test Neer + Test O’Brien+, Test Yocum + Speed +. \nEx Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados.\n\n\n hombro izquierdo avo- , sin equimosis ni deformidad. Dolor a la palpación de tubérculo mayor humeral,\ntubérculo menor humeral y región subacromial. \n135° flexion , 35° extension, 90° abduccion \n Apley + solo superior, Test Hawkins +, Test Jobe +, Test Neer +,Test O’Brien +, Test Yocum + Speed +. Ex Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados.\n\n\ncodo derecho avo-, sin equimosis ni deformidad, trofismo conservado. Dolor a la palpación de epicóndilo\nlateral exacerbado con extensión contrarresistencia de muñeca. Movimientos activos de flexión, extensión y pronosupinación en rango completo, movimientos pasivos de flexión, extensión y pronosupinación en rango completo. Test Cozen +, Test Mills + Test de maudsley + Test de la silla+ sin dejar caer .\nEx Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados.\n\n\n codo izquierdo avo- , sin equimosis ni deformidad. Dolor a la palpación de epicóndilo medial y lateral\nexacerbado con flexión y extensión contrarresistencia de muñeca. Movimientos activos de flexión, extensión y pronosupinación en rango completo, movimientos pasivos de flexión, extensión y pronosupinación en rango completo. Test Cozen +, Test Mills + Test de maudsley + Test de la silla + sin dejar\ncaer. . Ex Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados. \n\n\n&&&&A la inspección de hombro derecho no se evidencia aumento de volumen, sin equimosis ni deformidad, se evidencia estigmas o cicatrices en cara lateral y anterior de deltoide de laparoscopía realizada. Dolor a la palpación de tubérculo mayor humeral y región subacromial. Movimientos activos de flexión, extensión, rotación interna y externa, abducción y aducción en rango completo pero asociado a importante arco doloros al realizar flexión >90° y abducción a partir de los 75°, movimientos pasivos de flexión, extensión, rotación interna y externa, abducción y aducción en rango completo. , Apley + superior e inferior, Test Hawkins + Test Jobe +, Test Neer + Test O’Brien -, Test Yocum - Speed -. Ex Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados.\n\nA la inspección de hombro izquierdo no se evidencia aumento de volumen, sin equimosis ni deformidad. Dolor a la palpación de tubérculo mayor humeral, tubérculo menor humeral y región subacromial. Movimientos activos de flexión, extensión, rotación interna y externa, abducción y aducción en rango completo, movimientos pasivos de flexión, extensión, rotación interna y externa, abducción y aducción en rango completo. , Apley + solo superior, Test Hawkins +, Test Jobe +, Test Neer +,Test O’Brien -, Test Yocum - Speed -. Ex Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados.\n\nA la inspección de codo derecho no se evidencia aumento de volumen, sin equimosis ni deformidad, trofismo conservado. Dolor a la palpación de epicóndilo lateral exacerbado con extensión contrarresistencia de muñeca. Movimientos activos de flexión, extensión y pronosupinación en rango completo, movimientos pasivos de flexión, extensión y pronosupinación en rango completo. Test Cozen +, Test Mills + Test de maudsley + Test de la silla+ sin dejar caer . Ex Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados.\n\nA la inspección de codo izquierdo no se evidencia aumento de volumen, sin equimosis ni deformidad. Dolor a la palpación de epicóndilo medial y lateral exacerbado con flexión y extensión contrarresistencia de muñeca. Movimientos activos de flexión, extensión y pronosupinación en rango completo, movimientos pasivos de flexión, extensión y pronosupinación en rango completo. Test Cozen +, Test Mills + Test de maudsley + Test de la silla + sin dejar caer. . Ex Neurológico: Sin alteración sensitiva por dermatomas C5 a T1, miotomas sin alteraciones, ROT conservados.\n\n\n&&&&Paciente ingresa por sus propios medios\nOrientada en sus 3 esferas mentales\n\nHOMBRO DERECHO\nAVO -/++++ sin equimosis, sin deformidad\ncon cicatriz en buenas condiciones \nPalpación: \nMovilidad de fragmentos: -\nCrepitacion:  -\nDolor en un punto localizado: dolor a la palpacion generalizada \n1.Acromio-clavicular: +\n2. Supraespinoso: +\n3. Subacromial(abduccion): +\n \nReflejos osteo-tendíneos:+ \n\nMovilidad:\nAbducción(supraespinoso): Doloroso y rigido \nAducción: Doloroso y rigido \nFlexión:Doloroso y rigido \nExtensión:Doloroso y rigido \nRotacion  externa(Infraespinoso): Doloroso y rigido \nRotacion  interna(subescapular):Doloroso y rigido \nFlexion(biceps):Doloroso y rigido \n\n\nHOMBRO IZQUIERDO\nAVO -/++++ sin equimosis, sin deformidad\ncon cicatriz en buenas condiciones \nPalpación: \nMovilidad de fragmentos: -\nCrepitacion:  -\nDolor en un punto localizado: dolor a la palpacion generalizada \n1.Acromio-clavicular: +\n2. Supraespinoso: +\n3. Subacromial(abduccion): +\n \nReflejos osteo-tendíneos:+ \n\nMovilidad:\nAbducción(supraespinoso): Doloroso \nAducción: Doloroso \nFlexión:Doloroso \nExtensión:Doloroso \nRotacion  externa(Infraespinoso): Doloroso \nRotacion  interna(subescapular):Doloroso\nFlexion(biceps):Doloroso \n\n\nCODO DERECHO \nAVO -/++++ sin equimosis, sin deformidad\ncon dolor a la palpacion de ambos epicondilos\nrom conservados\ncozen +, thompson -\n\n\nCODO IZQUIERDO\nAVO -/++++ sin equimosis, sin deformidad\ncon dolor a la palpacion de ambos epicondilos\nrom conservados\ncozen +, thompson -\n&&&&BEG, CLOTEP\n\ningresa a box por su cuenta\n\nhombro derecho \n\nsin AVO , sin equimosis ni deformidad, cicatrices en cara lateral y anterior de deltoide de laparoscopía realizada. Dolor a la palpación de tubérculo mayor humeral y región subacromial. Movimientos activos Hombro derecho: 110° flexion 30° extension , 90° abduccion\nApley + superior e inferior,Test Hawkins + Test Jobe +, Test Neer + Test O’Brien+, Test Yocum + Speed +.\n\n hombro izquierdo\nsin avo, sin equimosis ni deformidad. Dolor a la palpación de región subacromial.\n135° flexion , 35° extension, 90° abduccion  Apley + solo superior, Test Hawkins +, Test Jobe +, Test Neer +,Test O’Brien +, Test Yocum + Speed +. \n\ncodo derecho \nsin AVO, sin equimosis ni deformidad, trofismo conservado. Dolor a la palpación de epicóndilo lateral exacerbado con extensión contrarresistencia de muñeca. Movimientos activos de flexión, extensión y pronosupinación en rango completo, movimientos\npasivos de flexión, extensión y pronosupinación en rango completo. Test Cozen +, Test Mills +\n\ncodo izquierdo\n avo- , sin equimosis ni deformidad. Dolor a la palpación de epicóndilo medial y lateral exacerbado con flexión y extensión contrarresistencia de muñeca. Movimientos activos de flexión, extensión y pronosupinación en rango completo, movimientos pasivos de flexión, extensión y pronosupinación en rango completo. Test Cozen +, Test Mills + \n&&&&LL-TR&&&&CODO DERECHO\nAVO -/++++ sin equimosis, sin deformidad\ncon dolor a la palpacion de ambos epicondilos\nrom conservados\ncozen +, thompson -\nCODO IZQUIERDO\nAVO -/++++ sin equimosis, sin deformidad\ncon dolor a la palpacion de ambos epicondilos\nrom conservados\ncozen +, thompson&&&&ORIENTADA EN SUS TRES ESFERAS\nALGIA 8/10\n\nHOMBROS SIN AVO SIN EQUIMOSIS DOLOR A LA PALPACION ROM LIMITADOS',
  'indicacion_medico': 'Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL&&&&Reposo si, con incapacidad laboral temporal con alta diferida ( Último día de reposo el 11.10.2023  )\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\n -.- \nDICLOFENACO 1% / 30 GR (A)., TOPICA, 35APL, SEGUN NECESIDAD ,por 2  días [ 0  ]\nPARACETAMOL 500 MG (A), ORAL, 500MG, C/8 HRS ,por 10  días [ 0  ]&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\n&&&&Reposo si, con incapacidad laboral temporal con alta diferida ( Último día de reposo el 20.07.2023  )\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nECOTOMOGRAFIA DE HOMBRO | Bilatera | Seguimiento EP ME ley\nManguito rotador bilateral\nEVALUACION KINESIOLOGICA INTEGRAL | 12 sesiones de TF para codo bilateral.\nFavor adjun\nEVALUACION KINESIOLOGICA INTEGRAL | 12 sesiones de TF para hombros bilatarles.\nAdjunta\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL -.- \nNAPROXENO 550 MG (A), ORAL, 550MG, C/12 HRS ,por 15  días [ 0  ]\nTRAMADOL 37.5 MG - PARACETAMOL 325 MG (A), ORAL, 1CMP, C/8 HRS ,por 7  días [ 0  ]\nDICLOFENACO 1% / 30 GR (A)., TOPICA, 35APL, SEGUN NECESIDAD ,por 3  días [ 0  ]\nTRAMADOL 37.5 MG - PARACETAMOL 325 MG (A), ORAL, 1CMP, C/12 HRS ,por 35  días [ 0  ]&&&&PLAN\nReposo\nullalgesia sos\nNo inmovilizacion\nmedios fisico para manejo de dolor\nss RMN DE HOMBROS BILATERAL\nss Ecotomografia de codo, muñecas y manos bilateral\ntransporte ( portuario)\nSe deriva prioritariamente a MDT con resultados de examenes( no agendar controles en agencia\ncontrol sos -.- \nCELECOXIB 200 MG (A), ORAL, 200MG, C/24 HRS AM ,por 10  días [ 0  ]\nPARACETAMOL 500 MG (A), ORAL, 500MG, C/8 HRS ,por 10  días [ 0  ]&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nEVALUACION CONTROL TERAPIA OCUPACIONAL\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL -.- \nTRAMADOL 37.5 MG - PARACETAMOL 325 MG (A), ORAL, 1CMP, SEGUN NECESIDAD ,por 30  días [ 0  ]&&&&LL-TR&&&&PLAN\nReposo\nullalgesia sos\nNo inmovilizacion\nmedios fisico para manejo de dolor\ntransporte ( portuario)\nSe deriva prioritariamente a MDT  no agendar controles en agencia)\ncontrol sos&&&&Reposo si, con incapacidad laboral temporal\nTransporte si, Llevar-Traer en Furgón , hasta el próximo control\u200b\n***ORDENES CLINICAS GENERADAS***\n -.- \nPREGABALINA 75 MG (A), ORAL, 75MG, C/24 HRS PM ,por 30  días [ 0  ]\nTRAMADOL 37.5 MG - PARACETAMOL 325 MG (A), ORAL, 1CMP, C/8 HRS ,por 30  días [ 0  ]',
  'cantidad_prestaciones_eco': 7.0,
  'primera_prestaciones_eco': (2022, 4, 28),
  'ultima_prestaciones_eco': (2023, 7, 10),
  'dif_entre_eco': 439.0,
  'dif_a_primer_eco': 1.0,
  'prop_eco_por_dias': 1.0159817934036255,
  'cantidad_prestaciones_rm': 3.0,
  'primera_prestaciones_rm': (2023, 6, 28),
  'ultima_prestaciones_rm': (2023, 7, 24),
  'dif_entre_rm': 27.0,
  'dif_a_primer_rm': 427.0,
  'prop_rm_por_dias': 1.115384578704834,
  'cantidad_prestaciones_rx': null,
  'primera_prestaciones_rx': null,
  'ultima_prestaciones_rx': null,
  'dif_entre_rx': null,
  'dif_a_primer_rx': null,
  'prop_rx_por_dias': null,
  'cantidad_prestaciones_tac': null,
  'primera_prestaciones_tac': null,
  'ultima_prestaciones_tac': null,
  'dif_entre_tac': null,
  'dif_a_primer_tac': null,
  'prop_tac_por_dias': null,
  'cantidad_prestaciones_tmt': 6.0,
  'primera_prestaciones_tmt': (2023, 7, 24),
  'ultima_prestaciones_tmt': (2023, 10, 23),
  'dif_entre_tmt': 92.0,
  'dif_a_primer_tmt': 453.0,
  'prop_tmt_por_dias': 1.0659340620040894,
  'cantidad_ordenes_cirugia': null,
  'primera_orden_cirugia': null,
  'ultima_orden_cirugia': null,
  'dif_entre_cirugia': null,
  'dif_a_primer_cirugia': null,
  'prop_cirugia_por_dias': null,
  'cantidad_ordenes_tf': 27.0,
  'primera_orden_tf': (2022, 4, 29),
  'ultima_orden_tf': (2023, 9, 14),
  'dif_entre_tf': 504.0,
  'dif_a_primer_tf': -503.0,
  'prop_tf_por_dias': 1.0536779165267944,
  'dia_de_presentacion': 2,
  'mes_de_presentacion': 4,
  'es_hombre': 0,
  'edad_presentacion': 47.672436805683894,
  'tuvo_tf': 0,
  'tuvo_to': 0,
  'dif_dias_a_tf': null,
  'dif_dias_a_to': null,
  'dif_dias_a_accidente': 0.0,
  'dif_dias_a_diag_1': 439,
  'fecha_carga': '2023-10-09',
  'hora_carga': '15:40',
  'Max_protocolo': 21},
'1': {'fecha_presentacion_principal': '2023-08-18',
  'puesto_trabajo': 'mucama',
  'fecha_accidente': '2023-08-18',
  'ingreso_tardio': null,
  'mecanismo': '92',
  'rubro': 853.0,
  'cantidad_siniestros': 1.0,
  'uo_sede_ingreso': ' CALAMA',
  'uo_servicio_ingreso': 'US_ATENCION_AMBULATORIA',
  'uo_medica_ingreso': 'UM_ATENCION_PRIMARIA',
  'id_uo_tratamiento_ingreso': 'CLMTCAPR',
  'uo_tratamiento_ingreso': 'CONSULTA_AP',
  'tipo_siniestro_origen': '2',
  'ult_tipo_siniestro_primer_dia': '2',
  'tipo_siniestro_actual': '2',
  'tipo_siniestro_origen_desc': 'Trayecto',
  'ult_tipo_siniestro_primer_dia_desc': 'Trayecto',
  'tipo_siniestro_actual_desc': 'Trayecto',
  'tipo_ley': '1',
  'tipo_ley_desc': 'Ley 16.744',
  'anteced': 'AL MOMENTO DEL ACCIDENTE ESTABA CAMInullDO DESDE SU DOMICILIO UBICADO EN',
  'relato_admision': 'AL MOMENTO DEL ACCIDENTE ESTABA CAMInullDO DESDE SU DOMICILIO UBICADO EN CALLE FAUSTINO SARMIENTO HACIA SU TRABAJO EN HOTEL IBIS PARA DAR INICIO A SU JORNADA. LO QUE OCURRIO FUE QUE MIENTRAS IBA CAMInullDO AV PRATEN UN PASO PEATONAL UN CONDUCTOR NO LA VIO POR CULPA DEL SOL, ATROPELLANDOLA, PROVOCANDO QUE SALIERA PROYECTADA. . EL ACCIDENTE OCURRIO CON UN CONDUCTOR., NO TIENE TESTIGOS DE SU ACCIDENTE, AVISO A LA EMPRESA, EL NOMBRE Y CARGO  DE LA PERSONA ES VERONICA ORTIZ, JEFATURA, FECHA Y HORA EN QUE AVISO A SU EMPRESA SOBRE EL ACCIDENTE: 18.08.2023 A LAS 07:45:00',
  'cod_ubic_les': '900',
  'parte_lesionada': 'Otras partes del cuerpo lesionadas',
  'criterio_gravedad': '1',
  'tiene_salud_mental': 0,
  'tiene_fractura': 1,
  'cantidad_diag_fractura': 2.0,
  'fecha_primer_diag_fractura': '2023-08-18',
  'fecha_ultimo_diag_fractura': '2023-09-21',
  'cantidad_diagnosticos': 2,
  'codigo_diagnostico_1': '8586',
  'fecha_creacion_diag_1': '2023-08-18',
  'mediana_mono_diag_1': 73.46428571428571,
  'mediana_poli_diag_1': 140.25423728813558,
  'std_diag_1': 138.2309611572004,
  'prop_ctp_diag_1': 0.9766233766233766,
  'q20_diag_1': 31.0,
  'q80_diag_1': 147.40000000000003,
  'lateralidad_diag_1': 'derecho',
  'ubicacion_lesion_diag_1': 'extremidad inferior',
  'cie10_diag_1': 'S824',
  'bloque_general_diag_1': 'EXTREMIDAD INFERIOR',
  'bloque_especifico_diag_1': 'FRACTURA PIERNA, INCLUSIVE EL TOBILLO',
  'codigo_grupo_diag_1': 'S82',
  'cie10_grupo_diag_1': 'S00_T99',
  'cie10_macro_diag_1': 'S',
  'codigo_diagnostico_2': 'A001',
  'fecha_creacion_diag_2': '2023-08-18',
  'mediana_mono_diag_2': null,
  'mediana_poli_diag_2': null,
  'std_diag_2': null,
  'prop_ctp_diag_2': null,
  'q20_diag_2': null,
  'q80_diag_2': null,
  'lateralidad_diag_2': 'no especificada',
  'ubicacion_lesion_diag_2': 'no_encontrado',
  'cie10_diag_2': null,
  'bloque_general_diag_2': null,
  'bloque_especifico_diag_2': null,
  'codigo_grupo_diag_2': null,
  'cie10_grupo_diag_2': null,
  'cie10_macro_diag_2': null,
  'dia_semana_principal': 'Viernes',
  'fecha_nacimiento_bp': '1987-06-02',
  'sexo': 'femenino',
  'dias_reposo_totales': 53.0,
  'primer_fecha_inicio_reposo': '2023-08-18',
  'primer_fecha_indicacion_reposo': '2023-08-18',
  'dias_reposo_iniciales': 53.0,
  'grado_total_incapacidad': null,
  'fecha_resolucion': null,
  'modalidad_incapacidad_desc': null,
  'primera_terapia_fisica': null,
  'primera_terapia_ocupacional': null,
  'id_via_administracion': null,
  'via_maxima': null,
  'descripcion_formato': null,
  'antibioticos': null,
  'anticoagulantes_orales': null,
  'hipoglicemiantes': null,
  'tromboliticos': null,
  'nivel_carga_laboral': 3.0,
  'hospitalizado': null,
  'anamnesis': 'DG: FRACTURA DIAFISARIA 1/3 PROXIMAL DE PERONE DERECHO.\nFECHA DEL ACCIDENTE: 18/08/23\nDIAS DE EVOLUCIÓN: 3\nMEDICAMENTOS: ANALGESIA.\nPLAN: ORTOPEDICO/EN ESTUDIO.\nENTERADO DEL CASO\nADHERENCIA AL TRATAMIENTO, BUENA RESPUESTA A ANALGÉSICOS, SIN RAM.\nPACIENTE ACUDE A CONTROL MEDICO, REIFERE\n&&&&DG: FRACTURA DIAFISARIA 1/3 PROXIMAL DE PERONE DERECHO.\nFECHA DEL ACCIDENTE: 18/08/23\nDIAS DE EVOLUCIÓN: 6\nMEDICAMENTOS: ANALGESIA.\nPLAN: ORTOPEDICO/EN ESTUDIO.\nENTERADO DEL CASO\nADHERENCIA AL TRATAMIENTO, BUENA RESPUESTA A ANALGÉSICOS, SIN RAM.\nPACIENTE ACUDE A CONTROL MEDICO, REIFERE PERSISTENCIA DE DOLOR EN PIERNA DERECHA ENA 3/10, TOLERADO.&&&&DG: FRACTURA DIAFISARIA 1/3 PROXIMAL DE PERONE DERECHO.\nFECHA DEL ACCIDENTE: 18/08/23\nDIAS DE EVOLUCIÓN: 6\nMEDICAMENTOS: ANALGESIA.\nPLAN: ORTOPEDICO/EN ESTUDIO.\nENTERADO DEL CASO \nSE REGULARIZAN OM TMT.&&&&DG: FRACTURA DIAFISARIA 1/3 PROXIMAL DE PERONE DERECHO.\nFECHA DEL ACCIDENTE: 18/08/23\nDIAS DE EVOLUCIÓN: 6\nMEDICAMENTOS: ANALGESIA.\nPLAN: ORTOPEDICO/EN ESTUDIO.\nENTERADO DEL CASO\n\nPACIENTE REFIERE MANTENER DOLOR EVA 3/10 LOGRA APOYO PERO AL FLEXIONAR GENERA DOLOR&&&&AM: (-)\nFCOS: (-)\nullT. QX: CESAREA.\nALERGIAS: (-)\nOCUPACIÓN: MUCAMA HORARIO: 6X1 ROTATIVO.\nEMPRESA: HOTEL IBIS.\nCUADRO OCURRE EL DIA DE HOY A LAS 7:30AM (4H DE EVOLUCION AL INGRESO)\nEN TRAYECTO A JORNADA LABORAL.\nPACIENTE REFIERE QUE MIENTRAS SE TRASLADABA A SU TRABAJO EN SCOOTER, MIENTRAS ATRAVIESA PASO DE CEBRA EN AV. ARTURO PRATT, ES ALCANZADA POR AUTOMOVIL QUE LA ARROLLA, CAYENDO EN ACERA SOBRE SU COSTADO DERECHO. ACTUALMENTE PRESENTA DOLOR EN REGION OCCIPITAL, HOMBRO, HEMITORAX Y PIERNA DERECHA. ASI MISMO REFIERE PERDIDA DE CONSCIENCIA (NO OBJETIVA TIEMPO) <1MIN. NIEGA MAREOS, NAUSEAS, VOMITOS, DOLOR ABDOMINAL, DISNEA.\n',
  'examen_fisico': 'PACIENTE EN CONDICIONES CLINICAS ESTABLES.\nAFEBRIL, HIDRATADA, EUPNEICA.\nCLOTE. CP: MP+, SRA, RR2T S/S.\nABD: BLANDO, DEPRESIBLE, NO DOLOROSO A LA PALPACION, SIN SIGNOS DE IRRITACION PERITONEAL.\nEXT: DOLOR A LA PALPACION DE HOMBRO DERECHO, LIMITACION FUNCIONAL POR DOLOR.\nDOLOR A LA PALPACION DE CARA ANTEROLATERAL DE PIERNA DERECHA 1/3 PROXIMAL, AVO ++/+++, SIN EQUIMOSIS NI DEFORMIDAD.\nROM DE PIE Y TOBILLO COMPLETOS. NV CONSERVADO. \n&&&&PACIENTE EN CONDICIONES CLINICAS ESTABLES.\nMARCHA ASISTIDA POR BASTONES.\nAFEBRIL, HIDRATADA, EUPNEICA.\nCLOTE. CP: MP+, SRA, RR2T S/S.\nABD: BLANDO, DEPRESIBLE, NO DOLOROSO A LA PALPACION, SIN SIGNOS DE IRRITACION PERITONEAL.\nEXT: INMOVILIZACION INGUINOPEDICA, EDEMA GLOBAL LEVE, SIN HERIDAS, APARATO EXTENSOR COMPETENTE, ROM ACTIVOS Y PASIVOS COMPLETOS, DOLOR EN RODILLA Y LARA LATERAL DE PIERNA. BIPEDESTACION CON EQUILIBRIO. NO LOGRA APOYO MONOPODAL. FM Y NV CONSERVADO.&&&&REALIZADO POR TMT.&&&&PACIENTE EN CONDICIONES CLINICAS ESTABLES.\nMARCHA ASISTIDA POR BASTONES.\nAFEBRIL, HIDRATADA, EUPNEICA.\nCLOTE. CP: MP+, SRA, RR2T S/S.\nABD: BLANDO, DEPRESIBLE, NO DOLOROSO A LA PALPACION, SIN SIGNOS DE IRRITACION PERITONEAL.\nEXT: INMOVILIZACION INGUINOPEDICA, EDEMA GLOBAL LEVE, SIN HERIDAS, APARATO EXTENSOR COMPETENTE, ROM ACTIVOS Y PASIVOS\nCOMPLETOS, DOLOR EN RODILLA Y LARA LATERAL DE PIERNA. BIPEDESTACION CON EQUILIBRIO. NO LOGRA APOYO MONOPODAL. FM Y NV\nCONSERVADO.&&&&PACIENTE EN CONDICIONES CLINICAS ESTABLES.\nAFEBRIL, HIDRATADA, EUPNEICA.\nINGRESA EN CAMILLA DESDE AMBULANCIA.\nDOLOR Y AVO EN REGION OCCIPITAL SIN CREPITACION NI HERIDA.\nCOLUMNA CERVICAL CON DOLOR A LA PALPACION POSTERIOR.\nCLOTE. CP: MP+, SRA, RR2T S/S.\nABD: BLANDO, DEPRESIBLE, NO DOLOROSO A LA PALPACION, SIN SIGNOS DE IRRITACION PERITONEAL.\nEXT: DOLOR A LA PALPACION DE HOMBRO DERECHO, LIMITACION FUNCIONAL POR DOLOR.\nDOLOR A LA PALPACION DE CARA ANTEROLATERAL DE PIERNA DERECHA 1/3 PROXIMAL, AVO ++/+++, SIN EQUIMOSIS NI DEFORMIDAD.\nROM DE PIE Y TOBILLO COMPLETOS. NV CONSERVADO.\n',
  'indicacion_medico': 'Reposo si, con incapacidad laboral temporal\nTransporte si, Llevar - Traer con pierna extendida , hasta el próximo contr\n***ORDENES CLINICAS GENERADAS***\n\n&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\n\n -.- \nCELECOXIB 200 MG (A), ORAL, 200MG, C/24 HRS AM ,por 10  días [ 0  ]&&&&Reposo si, con incapacidad laboral temporal\nTransporte si, Llevar - Traer en Automovil , hasta el próximo control\u200b\n***ORDENES CLINICAS GENERADAS***\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nATENCION KINESIOLOGICA INTEGRAL AMBULATO | FRACTURA PERONE, DIAFISIARIA CERRADA\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL -.- \nCELECOXIB 200 MG (A), ORAL, 200MG, C/24 HRS AM ,por 10  días [ 0  ]&&&&Reposo si, con incapacidad laboral temporal\nTransporte si, Llevar-Traer en Furgón , hasta el próximo control\u200b\n***ORDENES CLINICAS GENERADAS***\n\n -.- \nCELECOXIB 200 MG (A), ORAL, 200MG, C/24 HRS AM ,por 15  días [ 0  ]&&&&Reposo si, con incapacidad laboral temporal\nTransporte si, Llevar - Traer en Automovil , hasta el próximo control\u200b\n***ORDENES CLINICAS GENERADAS***\n\n -.- \nCELECOXIB 200 MG (A), ORAL, 200MG, C/12 HRS ,por 10  días [ 0  ]\nTRAMADOL 37.5 MG - PARACETAMOL 325 MG (A), ORAL, 1CMP, C/8 HRS ,por 10  días [ 0  ]\nDICLOFENACO 1% / 30 GR (A)., TOPICA, 35APL, SEGUN NECESIDAD ,por 1  días [ 0  ]\nCICLOBENZAPRINA 10 MG (A), ORAL, 10MG, C/24 HRS PM ,por 58  días [ 0  ]',
  'cantidad_prestaciones_eco': null,
  'primera_prestaciones_eco': null,
  'ultima_prestaciones_eco': null,
  'dif_entre_eco': null,
  'dif_a_primer_eco': null,
  'prop_eco_por_dias': null,
  'cantidad_prestaciones_rm': null,
  'primera_prestaciones_rm': null,
  'ultima_prestaciones_rm': null,
  'dif_entre_rm': null,
  'dif_a_primer_rm': null,
  'prop_rm_por_dias': null,
  'cantidad_prestaciones_rx': 8.0,
  'primera_prestaciones_rx': (2023, 8, 18),
  'ultima_prestaciones_rx': (2023, 9, 22),
  'dif_entre_rx': 36.0,
  'dif_a_primer_rx': 0.0,
  'prop_rx_por_dias': 1.2285714149475098,
  'cantidad_prestaciones_tac': 1.0,
  'primera_prestaciones_tac': (2023, 8, 18),
  'ultima_prestaciones_tac': (2023, 8, 18),
  'dif_entre_tac': 1.0,
  'dif_a_primer_tac': 0.0,
  'prop_tac_por_dias': null,
  'cantidad_prestaciones_tmt': 5.0,
  'primera_prestaciones_tmt': (2023, 8, 18),
  'ultima_prestaciones_tmt': (2023, 9, 21),
  'dif_entre_tmt': 35.0,
  'dif_a_primer_tmt': 0.0,
  'prop_tmt_por_dias': 1.1470588445663452,
  'cantidad_ordenes_cirugia': null,
  'primera_orden_cirugia': null,
  'ultima_orden_cirugia': null,
  'dif_entre_cirugia': null,
  'dif_a_primer_cirugia': null,
  'prop_cirugia_por_dias': null,
  'cantidad_ordenes_tf': 2.0,
  'primera_orden_tf': (2023, 9, 21),
  'ultima_orden_tf': (2023, 9, 21),
  'dif_entre_tf': 1.0,
  'dif_a_primer_tf': 0.0,
  'prop_tf_por_dias': null,
  'dia_de_presentacion': 4,
  'mes_de_presentacion': 8,
  'es_hombre': 0,
  'edad_presentacion': 36.21155807443,
  'tuvo_tf': 0,
  'tuvo_to': 0,
  'dif_dias_a_tf': null,
  'dif_dias_a_to': null,
  'dif_dias_a_accidente': 0.0,
  'dif_dias_a_diag_1': 0,
  'fecha_carga': '2023-10-09',
  'hora_carga': '15:40',
  'Max_protocolo': 120},
'2': {'fecha_presentacion_principal': '2023-08-18',
  'puesto_trabajo': 'carniceria',
  'fecha_accidente': '2023-08-18',
  'ingreso_tardio': null,
  'mecanismo': '92',
  'rubro': 612.0,
  'cantidad_siniestros': 1.0,
  'uo_sede_ingreso': ' TEMUCO',
  'uo_servicio_ingreso': 'US_ATENCION_HOSPITALIZACION',
  'uo_medica_ingreso': 'OTRA',
  'id_uo_tratamiento_ingreso': 'TEMTHPEX',
  'uo_tratamiento_ingreso': 'OTRA',
  'tipo_siniestro_origen': '1',
  'ult_tipo_siniestro_primer_dia': '1',
  'tipo_siniestro_actual': '1',
  'tipo_siniestro_origen_desc': 'Trabajo',
  'ult_tipo_siniestro_primer_dia_desc': 'Trabajo',
  'tipo_siniestro_actual_desc': 'Trabajo',
  'tipo_ley': '1',
  'tipo_ley_desc': 'Ley 16.744',
  'anteced': 'AL MOMENTO DEL ACCIDENTE ESTABA CORTANDO CARNE CON MAQUINA DE CORTA HUESO',
  'relato_admision': 'AL MOMENTO DEL ACCIDENTE ESTABA CORTANDO CARNE CON MAQUINA DE CORTA HUESO. LO QUE OCURRIO FUE QUE SE PASA A LLEVAR DEDO MANO IZQ.. EL ACCIDENTE OCURRIO CON HERIDA CORTANTE., NO TIENE TESTIGOS DE SU ACCIDENTE, AVISO A LA EMPRESA, FECHA Y HORA EN QUE AVISO A SU EMPRESA SOBRE EL ACCIDENTE: 18.08.2023 A LAS 16:31:00',
  'cod_ubic_les': '900',
  'parte_lesionada': 'Otras partes del cuerpo lesionadas',
  'criterio_gravedad': '1',
  'tiene_salud_mental': 0,
  'tiene_fractura': 0,
  'cantidad_diag_fractura': null,
  'fecha_primer_diag_fractura': null,
  'fecha_ultimo_diag_fractura': null,
  'cantidad_diagnosticos': 1,
  'codigo_diagnostico_1': '8491',
  'fecha_creacion_diag_1': '2023-08-18',
  'mediana_mono_diag_1': 143.46875,
  'mediana_poli_diag_1': 227.1578947368421,
  'std_diag_1': 255.93239036920593,
  'prop_ctp_diag_1': 0.9319371727748691,
  'q20_diag_1': 47.199999999999996,
  'q80_diag_1': 238.6,
  'lateralidad_diag_1': 'izquierda',
  'ubicacion_lesion_diag_1': 'extremidad superior',
  'cie10_diag_1': 'S680',
  'bloque_general_diag_1': 'EXTREMIDAD SUPERIOR',
  'bloque_especifico_diag_1': 'AMPUTACION TRAUMATICA DE LA MUNECA Y DE LA MANO',
  'codigo_grupo_diag_1': 'S68',
  'cie10_grupo_diag_1': 'S00_T99',
  'cie10_macro_diag_1': 'S',
  'codigo_diagnostico_2': null,
  'fecha_creacion_diag_2': null,
  'mediana_mono_diag_2': null,
  'mediana_poli_diag_2': null,
  'std_diag_2': null,
  'prop_ctp_diag_2': null,
  'q20_diag_2': null,
  'q80_diag_2': null,
  'lateralidad_diag_2': null,
  'ubicacion_lesion_diag_2': null,
  'cie10_diag_2': null,
  'bloque_general_diag_2': null,
  'bloque_especifico_diag_2': null,
  'codigo_grupo_diag_2': null,
  'cie10_grupo_diag_2': null,
  'cie10_macro_diag_2': null,
  'dia_semana_principal': 'Viernes',
  'fecha_nacimiento_bp': '1997-03-04',
  'sexo': 'masculino',
  'dias_reposo_totales': 53.0,
  'primer_fecha_inicio_reposo': '2023-08-18',
  'primer_fecha_indicacion_reposo': '2023-08-18',
  'dias_reposo_iniciales': 53.0,
  'grado_total_incapacidad': null,
  'fecha_resolucion': null,
  'modalidad_incapacidad_desc': null,
  'primera_terapia_fisica': null,
  'primera_terapia_ocupacional': null,
  'id_via_administracion': null,
  'via_maxima': null,
  'descripcion_formato': null,
  'antibioticos': null,
  'anticoagulantes_orales': null,
  'hipoglicemiantes': null,
  'tromboliticos': null,
  'nivel_carga_laboral': null,
  'hospitalizado': null,
  'anamnesis': 'PACIENTE CON ANTECEDENTE DE ENFERMEDAD DE VON WILLENBRAND, SIN ALERGIAS\nSUFRE AMPUTACIÓN PARCIAL DE PUNTA PULGAR IZQUIERDO HACE 1 SEMANA.\n\nTIENE CONTROL PROXIMA SEMANA CON DR TROLL QUIEN LE HIZO UN VENDAJE SEMIOCLUSIVO. \nTOMANDO PARACETAMOL, CON DOLOR LEVE, SIN NECESIDAD DE MAYOR ANALGESIA.\nVIENE A ACHS PARA CAMBIO DE PARCHE, QUE SE LE HA DETERIORADO. SIN OTRAS MOLESTIAS&&&&Pcte de Perquenco\nAM: Enf Von Willebrand\nAlergias: AAS\nCarnicero\nAcc. 18-08-23 (4 sem)\nAmputación traumática punta D1 izq (Allen 1)\nTto: Aseo + VSO\nDada condición de coagulopatía, se hospitaliza para observación 1 dia... sin complicaciones.\n61/2 SEM DE EV\nREFIERE ESTAR CON TEMOR AL REINTEGRO LUEGO DEL ACCIDENTE, CON LABILIDAD EMOCIONAL&&&&Pcte de Perquenco\nAM: Enf Von Willebrand\nAlergias: AAS\nCarnicero\n\nAcc. 18-08-23 (4 sem)\nAmputación traumática punta D1 izq (Allen 1)\nTto: Aseo + VSO\nDada condición de coagulopatía, se hospitaliza para observación 1 dia... sin complicaciones.&&&&AM: Enf Von Willebrand \nAlergias: AAS\nCarnicero\n\nAcc. 18-08-23 (2 sem)\nAmputación traumática punta D1 izq (Allen 1)\nTto: Aseo + VSO\nDada condición de coagulopatía, se hospitaliza para observación 1 dia... sin complicaciones.&&&&AM: ENFERMEDAD DE V. WILLEBRAND\nFCOS: (-)\nullT. QX: (-)\nALERGIAS: AAS\nW:  \tCARNICERO\nDOMInullCIA: DIESTRO\n\nHOY A LAS 16.30 EN SU TRABAJO ESTABA CORTANDO CARNE CON SIERRA ELÉCTRICA Y SE REBANA PUNTA DEL DEDO PULGAR IZQUIERDO, EVOLUCIONA CON SANGRADO ABUNDANTE Y DOLOR EVA 7/10. \nVAT\n',
  'examen_fisico': 'PULGAR IZQUIERDO, SE OBSERVA PARCHE CON LEVE SUCIEDAD, SE RETIRA POR PARTES, SE RENUEVA PARCHE SIN RETIRAR SEMIOCLUSIVO. SIN OTROS HALLAZGOS.&&&&PULGAR IZQ CON CICATRIZACION 95%. CON COSTRA EN VERTICE\nHIPERSENSIBLE PULPEJO DE PULGAR\nLIMITADA LA FLEXION AUN Y CON POCA POTENCIA&&&&Se retira VSO\nPunta de D1 izq con tej. granulatorio ++ con relleno casi completo de vértice.\nRigidez ++ de pulgar.&&&&Aposito externo limpio\nTegaderm in situ\nResto de mano con xerosis&&&&SE EXAMINA A PACIENTE YA ESTANDO EN BOX DE PROCEDIMIENTOS, SE RETIRA VENDAJE. SANGRADO ABUNDANTE ACTIVO QUE IMPIDE VISUALIZAR LESIÓN, SE APLICA TORNIQUETE, SE OBSERVA AMPUTACION PARCIAL DE FALANGE DISTAL PULGAR IZQUIERDO CON COMPROMISO DE LA UÑA, IMPRESIONA ALLEN 1-2. NV CONSERVADO. ROM CONSERVADOS. \n',
  'indicacion_medico': 'Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nCURACION INTERMEDIA&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nCURACION AVANZADA | post kine\nEVALUACION KINESIOLOGICA INTEGRAL\nEVALUACION KINESIOLOGICA INTEGRAL -.- \nACIDO ASCORBICO 500 MG (A), ORAL, 500MG, C/24 HRS AM ,por 14  días [ 0  ]\nPARACETAMOL 500 MG (A), ORAL, 1000MG, C/12 HRS ,por 14  días [ 0  ]\nCELECOXIB 200 MG (A), ORAL, 200MG, SEGUN NECESIDAD ,por 7  días [ 0  ]&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\nCURACION SIMPLE | Solo recambio de aposito externo, no tegaderm\nCURACION SIMPLE -.- \nPARACETAMOL 500 MG (A), ORAL, 1000MG, C/8 HRS ,por 14  días [ 0  ]\nCELECOXIB 200 MG (A), ORAL, 200MG, SEGUN NECESIDAD ,por 10  días [ 0  ]\nEUCERIN PH-5 LOCION 250 ML, TOPICA, 20APL, SEGUN NECESIDAD ,por 1  días [ 0  ]\nCREMA MULTIPROPÓSITO MANOS (A), TOPICA, 20APL, SEGUN NECESIDAD ,por 1  días [ 0  ]&&&&Reposo si, con incapacidad laboral temporal\nTransporte: No.\n***ORDENES CLINICAS GENERADAS***\n&&&&Reposo si, con incapacidad laboral temporal\nTransporte si, Llevar en Furgón\n***ORDENES CLINICAS GENERADAS***\nHOSPITALIZACION EXTERNA COMUN\nHOSPITALIZACION EXTERNA COMUN\nHOSPITALIZACION EXTERNA COMUN\nHOSPITALIZACION EXTERNA COMUN',
  'cantidad_prestaciones_eco': null,
  'primera_prestaciones_eco': null,
  'ultima_prestaciones_eco': null,
  'dif_entre_eco': null,
  'dif_a_primer_eco': null,
  'prop_eco_por_dias': null,
  'cantidad_prestaciones_rm': null,
  'primera_prestaciones_rm': null,
  'ultima_prestaciones_rm': null,
  'dif_entre_rm': null,
  'dif_a_primer_rm': null,
  'prop_rm_por_dias': null,
  'cantidad_prestaciones_rx': 3.0,
  'primera_prestaciones_rx': (2023, 8, 18),
  'ultima_prestaciones_rx': (2023, 8, 18),
  'dif_entre_rx': 1.0,
  'dif_a_primer_rx': 0.0,
  'prop_rx_por_dias': null,
  'cantidad_prestaciones_tac': null,
  'primera_prestaciones_tac': null,
  'ultima_prestaciones_tac': null,
  'dif_entre_tac': null,
  'dif_a_primer_tac': null,
  'prop_tac_por_dias': null,
  'cantidad_prestaciones_tmt': 7.0,
  'primera_prestaciones_tmt': (2023, 8, 18),
  'ultima_prestaciones_tmt': (2023, 10, 12),
  'dif_entre_tmt': 56.0,
  'dif_a_primer_tmt': 0.0,
  'prop_tmt_por_dias': 1.1272727251052856,
  'cantidad_ordenes_cirugia': null,
  'primera_orden_cirugia': null,
  'ultima_orden_cirugia': null,
  'dif_entre_cirugia': null,
  'dif_a_primer_cirugia': null,
  'prop_cirugia_por_dias': null,
  'cantidad_ordenes_tf': 2.0,
  'primera_orden_tf': (2023, 9, 14),
  'ultima_orden_tf': (2023, 10, 3),
  'dif_entre_tf': 20.0,
  'dif_a_primer_tf': -19.0,
  'prop_tf_por_dias': 1.105263113975525,
  'dia_de_presentacion': 4,
  'mes_de_presentacion': 8,
  'es_hombre': 1,
  'edad_presentacion': 26.45639540852995,
  'tuvo_tf': 0,
  'tuvo_to': 0,
  'dif_dias_a_tf': null,
  'dif_dias_a_to': null,
  'dif_dias_a_accidente': 0.0,
  'dif_dias_a_diag_1': 0,
  'fecha_carga': '2023-10-09',
  'hora_carga': '15:40',
  'Max_protocolo': 121}}



//   ./assets/octobiwan.jpg

function calcularFunction() {
    let resultadoCard = document.getElementById('resultadoCard')
    let prediccion = document.getElementById('prediccion')
    const btnCase = document.getElementById('SelectCaseNumber')

    if (btnCase.innerText == 'Seleccionar caso'){
        alert('Seleccione un caso para poder predecir')
    }
    else {
        prediccion.innerHTML = data[caseNumber].Max_protocolo
        resultadoCard.style.display = 'block'
    }
}

function resetClick() {
    let resultadoCard = document.getElementById('resultadoCard')
    let input = document.getElementsByClassName('form-control');
    const btnCase = document.getElementById('SelectCaseNumber')
    
    for (let i = 0; i < input.length; i++){
        input[i].value = '';
    }
    textoClinico.value = ''
    shapImg.src = ''

    console.log();(resultadoCard.style.display)

    resultadoCard.style.display = 'none'
    btnCase.innerHTML = 'Seleccionar caso'

}

function showVarClick() {
    let tabla = document.getElementById('tablaVariables')
    tabla.style.display = 'block'
}

function selectCase(element) {
    const id = parseInt(element.id)
    const btnCase = document.getElementById('SelectCaseNumber')

    btnCase.innerText = 'Caso '+(id+1)+' '

    caseNumber = id
    varInput1.value = data[id].bloque_especifico_diag_1
    varInput2.value = data[id].sexo
    varInput3.value = data[id].tipo_siniestro_origen_desc
    varInput4.value = data[id].nivel_carga_laboral
    // varInput5.value = data[id].dia_semana_principal
    textoClinico.value = data[id].examen_fisico
    shapImg.src = `assets/demo_dt_ft_imp_${id+1}.jpg`
}

function modelSelect(element) {
    if (element.id == 'dt') {
        diasTratContainer.style.display = 'block'
        robertContainer.style.display = 'none'
    }
    else if (element.id == 'rob') {
        diasTratContainer.style.display = 'none'
        robertContainer.style.display = 'block'
    }
}


// ------------------- ROBERTACHS ------------------- 

function calcularRobertFunction() {
    let input = document.getElementById('textoRobert');
    
    var datos = {
        "dataframe_split": {
          "columns": ["clinical_text"],
          "data": [[input.value]]
        }
    }

    // postJSON(datos)
}

function resetRobertClick() {
    let resultadoCard = document.getElementById('resultadoRobertCard');
    let input = document.getElementById('textoRobert');

    input.value = ''
    resultadoCard.style.display = 'none'

}



var url = "https://adb-5655458034558005.5.azuredatabricks.net/serving-endpoints/A031_clf_calificacion_rga-CPU-v2/invocations";

var datos = {
    "dataframe_split": {
        "columns": ["clinical_text"],
        "data": [["Iba caminando por la calle camino al trabajo y me atropelló un camión. Tengo testigos del accidente."]]
    }
}

async function postJSON(datos, url) {
    
    var header = {
        "Content-Type": "application/json",
        "Authorization": 'Bearer APIKEY'
    }

    try {
      const response = await fetch(url, {
        method: "POST", 
        credentials: "include",
        headers: header,
        body: JSON.stringify(datos),
      });
  
      const result = response; /* .json() */
      console.log("Success:", result);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  


// postJSON(datos);
  
