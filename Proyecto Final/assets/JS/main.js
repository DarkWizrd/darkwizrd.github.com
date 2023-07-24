$(document).ready(function () {
  $("#regresar").hide();
  $("canvas").hide();
  $("#btn1").hide();
  $("#btn3").hide();
  updateClock();
  let i = 0,
    sistema,
    presionAr,
    pulso,
    num1,
    num2,
    nombre,
    fecha_tratamiento,
    drenaje,
    balance,
    infusion,
    concentracion,
    cualidad,
    totaldrenaje = 0,
    totalbalance = 0,
    totalinfusion = 0,
    totalconcentracion = 0,
    totalcualidad = 0;
  let cambio = [];
  let msjHtml = "",
    msjPresion = "",
    msjPulso = "",
    msjCualidad = "",
    datoAnalisis = "",
    datoTurbiedad = "",
    datoPresion = "",
    datoPulso = "";

  let alerta1 = false,
    alerta2 = false,
    alerta3 = false;
  cambio[0] = document.getElementsByClassName("cambio1");
  cambio[1] = document.getElementsByClassName("cambio2");
  cambio[2] = document.getElementsByClassName("cambio3");
  cambio[3] = document.getElementsByClassName("cambio4");

  $("#btn2").click(function (event) {
    // Datos del Primer formulario
    analisis();
    $("#dato_analisis1").html(msjHtml + msjPresion + msjPulso + msjCualidad);
    event.preventDefault();
  });
  $("#btn1").click(function (event) {
    event.preventDefault();
    generarPdf();
  });
  $("#btn3").click(function (event) {
    event.preventDefault();
    $("#form1").fadeOut("fast");
    $("#form2").fadeOut("fast");
    grafico();
  });
  $("#regresar").click(function (event) {
    event.preventDefault();
    $("#form1").fadeIn("fast");
    $("#form2").fadeIn("fast");
    $("#btn1").fadeIn("fast");
    $("#btn3").fadeInt("fast");
    $("#regresar").fadeOut("fast");
    $("canvas").fadeOut("fast");
  });

  //Funciones y el resto del codigo

  function cualidad_contenido(cualidad) {
    if (cualidad > 1) {
      msjCualidad =
        "<br><strong style='color:red'>ALERTA: Consulte de inmediato con su néfrologo y programe su cita en la unidad de diálisis.</strong>";
      alert(
        "ALERTA: Consulte de inmediato con su néfrologo y programe su cita en la unidad de diálisis."
      );
      datoTurbiedad =
        "ALERTA: Consulte de inmediato con su néfrologo y programe su cita en la unidad de diálisis.";

      alerta2 = true;
    }
  }

  function presion_Arterial(presion) {
    //Condición del pulso del paciente
    var partes = presion.split("/");
    var sistole = partes[0]; // "180"
    var diastole = partes[1]; // "60"
    if (sistole >= 80 && sistole <= 129 && diastole >= 60 && diastole <= 84) {
      msjPresion =
        "<br><strong style='color:green'>Presión arterial normal.</strong>";
      alerta1 = false;
    } else if (
      (sistole >= 130 && sistole <= 139) ||
      (diastole >= 85 && diastole <= 89)
    ) {
      msjPresion = "<br>Presión arterial normal alta: " + presion;
      alerta1 = false;
    } else if (
      (sistole >= 140 && sistole <= 159) ||
      (diastole >= 90 && diastole <= 99)
    ) {
      msjPresion = "<br>Hipertensión leve (Grado 1): " + presion;
      alerta1 = false;
    } else if (
      (sistole >= 160 && sistole <= 179) ||
      (diastole >= 100 && diastole <= 109)
    ) {
      msjPresion = "<br>Hipertensión moderada (Grado 2): " + presion;
      alerta1 = false;
    } else if (
      (sistole >= 180 && sistole <= 209) ||
      (diastole >= 110 && diastole <= 119)
    ) {
      msjPresion =
        "<br>Hipertensión grave (Grado 3). <strong style='color:red'>REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO</strong>";
      alert(
        "Hipertensión grave (Grado 3). REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO"
      );
      datoPresion =
        "Hipertensión grave (Grado 3). REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO";
      alerta1 = true;
    } else if (sistole >= 210 || diastole >= 110) {
      msjPresion =
        "<br><strong style='color:red'>HIPERTENSIÓN CRITICA (Grado 4). REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO</strong>";
      alert(
        "HIPERTENSIÓN CRITICA (Grado 4). REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO"
      );
      datoPresion =
        "HIPERTENSIÓN CRITICA (Grado 4). REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO";
      alerta1 = true;
    }
    //$("#ultima_presion").val("");
    // event.preventDefault();
  }

  function frecuencia_cardiaca(pulso) {
    if (pulso < 60) {
      msjPulso =
        "<br>Pulsaciones por debajo del rango promedio: " + pulso + " bpm.";
      alert("Pulsaciones por debajo del rango promedio: " + pulso + " bpm.");
      datoPulso =
        "Pulsaciones por debajo del rango promedio: " + pulso + " bpm.";
    } else if (pulso >= 60 && pulso <= 100) {
      msjPulso = "<br>De acuerdo a su última toma, el pulso es normal.";
      alert("De acuerdo a su última toma, el pulso es normal.");
      datoPulso = "De acuerdo a su última toma, el pulso es normal.";
    } else {
      msjPulso =
        "<br>Pulsaciones por encima del rango promedio: " + pulso + " bpm.";
      alert("Pulsaciones por encima del rango promedio: " + pulso + " bpm.");
      datoPulso =
        "Pulsaciones por encima del rango promedio: " + pulso + " bpm.";
    }
    //$("#valor_frecuencia").val("");
  }

  function sendMail(nombre, fecha, analisis, turbiedad, presion, pulso) {
    var params = {
      to_name: "clesy.jaramillo@utp.ac.pa",
      from_name: nombre,
      message:
        "Reporte del dia: " +
        fecha +
        "\nNombre del paciente: " +
        nombre +
        "\n\nPresion arterial registrada: " +
        presion +
        "\nFrecuencia cardíaca registrada: " +
        pulso +
        "\nAnalisis: " +
        analisis +
        "\nTurbiedad de la muestra: " +
        turbiedad,
    };
    const serviceID = "service_9a5ilbj";
    const templateID = "template_6bsu1ji";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        //alert("success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } //enviar correo

  function generarPdf() {
    let nombre = $("#nombre_paciente").val();
    let fecha_tratamiento = $("#fecha_tratamiento").val();
    let sistema = $("#tipo_sistemadp").val();
    let presion = $("#ultima_presion").val();
    let pulso = $("#valor_frecuencia").val();
    let drenaje = $("#total_drenaje").val();
    let infusion = $("#total_infusion").val();
    let balance = $("#total_balance").val();
    let turbiedad = datoTurbiedad;

    let contenido =
      "Fecha del tratamiento: " +
      fecha_tratamiento +
      "\nNombre del paciente: " +
      nombre +
      "\nSistema utilizado: " +
      sistema +
      "\nUltima presión arterial: " +
      presion +
      "\nUltima frecuencia cardíaca: " +
      pulso +
      "bpm\nInfusion total de solución: " +
      infusion +
      "mL\nDrenaje total: " +
      drenaje +
      "mL\nCualidad del contenido: " +
      turbiedad +
      "\nBalance final: " +
      balance;
    var doc = new jsPDF();

    alert("Reporte generado");
    doc.text(10, 10, contenido);
    // Nombre del Archivo generado
    doc.save("Analisis de Balance Hidrico.pdf");
  }

  function grafico() {
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X.
    const etiquetas = ["Fase 1", "Fase 2", "Fase 3", "Fase 4"];
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const infusion = {
      label: "Infusion",
      data: [
        parseInt($("#infusion1").val()),
        parseInt($("#infusion2").val()),
        parseInt($("#infusion3").val()),
        parseInt($("#infusion4").val()),
      ], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
      backgroundColor: "#F2E205", // Color de fondo
      borderColor: "rgba(54, 162, 235, 1)", // Color del borde
      borderWidth: 1, // Ancho del borde
    };
    const drenaje = {
      label: "Drenaje",
      data: [
        parseInt($("#drenaje1").val()),
        parseInt($("#drenaje2").val()),
        parseInt($("#drenaje3").val()),
        parseInt($("#drenaje4").val()),
      ], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
      backgroundColor: "#0069AA", // Color de fondo
      borderColor: "rgba(54, 162, 235, 1)", // Color del borde
      borderWidth: 1.5, // Ancho del borde
    };
    const balance = {
      label: "Balance",
      data: [
        parseInt($("#balance1").val()),
        parseInt($("#balance2").val()),
        parseInt($("#balance3").val()),
        parseInt($("#balance4").val()),
      ], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
      backgroundColor: "#467D05", // Color de fondo
      borderColor: "rgba(54, 162, 235, 1)", // Color del borde
      borderWidth: 1, // Ancho del borde
    };
    new Chart($grafica, {
      type: "bar", // Tipo de gráfica
      data: {
        labels: etiquetas,
        datasets: [
          infusion,
          drenaje,
          balance,
          // Todos los datos necesarios...
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    $("canvas").fadeIn("fast");
    $("#regresar").fadeIn("fast");

  }

  function analisis() {
    sistema = $("#tipo_sistemadp").val();
    presionAr = $("#ultima_presion").val();
    pulso = $("#valor_frecuencia").val();
    if (presionAr !== "") {
      presion_Arterial(presionAr);
    }

    if (pulso !== "") {
      frecuencia_cardiaca(pulso);
    }

    num1 = parseInt(cambio[i][1].value);
    num2 = parseInt(cambio[i][2].value);
    $("#balance" + (i + 1)).val(num1 - num2);
    $("#nombre_paciente").attr("readonly", "readonly");
    $("#drenaje" + (i + 1)).attr("readonly", "readonly");
    $("#concentracion" + (i + 1)).attr("disabled", "disabled");
    $("#cualidad" + (i + 1)).attr("disabled", "disabled");
    i++; //Marca la fase de el analisis

    if ($("#balance4").val() !== "") {
      nombre = $("#nombre_paciente").val();
      fecha_tratamiento = $("#fecha_tratamiento").val();
      drenaje = document.getElementsByClassName("drenaje");
      balance = document.getElementsByClassName("balance");
      infusion = document.getElementsByClassName("infusion");
      concentracion = document.getElementsByClassName("concentracion");
      cualidad = document.getElementsByClassName("cualidad");

      for (i = 0; i < balance.length; i++) {
        totaldrenaje += parseInt(drenaje[i].value);
        totalinfusion += parseInt(infusion[i].value);
        totalconcentracion += parseFloat(concentracion[i].value);
        totalcualidad += parseFloat(cualidad[i].value, 10);
        totalbalance += parseFloat(balance[i].value);
      }
      cualidad_contenido(totalcualidad);

      // Evalúa la cualidad del contenido de la diálisis, cualidad normal=1,cualidad turbia=2, si totalcualidad>5 indica que el contenido fue turbio en mas de una ocasión.

      $("#total_concentracion").val(totalconcentracion.toString() + "%");
      $("#total_drenaje").val(totaldrenaje.toString() + "mL");
      $("#total_infusion").val(totalinfusion.toString() + " mL");
      $("#total_balance").val(totalbalance.toString() + " mL");
      //CONDICIÓN DEL BALANCE
      if (totalbalance <= 0) {
        msjHtml =
          "<strong style='color:green'>Balance Hídrico Favorable.</strong> Condición normal, no hay retención de líquidos.";
      } else if (totalbalance >= 1 && totalbalance <= 2000) {
        msjHtml =
          "Retención de líquidos considerable. En caso de presentarse esta situación <strong>por más de dos días consecutivos</strong>, llame y consulte con la unidad hospitalaria de Diálisis<br>Balance final del dia: " +
          totalbalance +
          " mL";
      } else if (totalbalance > 2000) {
        msjHtml =
          "<strong style='color:red'>ALERTA: Excesiva retención de líquidos.</strong> Consulte de inmediato con su nefrólogo<br>Balance final del dia: " +
          totalbalance +
          " mL";
        alert(
          "ALERTA: Excesiva retención de líquidos. Consulte de inmediato con su nefrólogo\nBalance final del dia: " +
          totalbalance +
          " mL"
        );
        datoAnalisis =
          "ALERTA: Excesiva retención de líquidos. Consulte de inmediato con su nefrólogo\nBalance final del dia: " +
          totalbalance +
          " mL";
        alerta3 = true;
      }
      //enviar datos por correo
      if (alerta1 || alerta2 || alerta3) {
        sendMail(
          nombre,
          fecha_tratamiento,
          datoAnalisis,
          datoTurbiedad,
          datoPresion,
          datoPulso
        );
        var mensajes
        if (datoTurbiedad !== "") { mensajes += datoTurbiedad + "\n"; }
        if (datoPresion !== "") { mensajes += datoPresion + "\n" }
        if (datoPulso !== "") { mensajes += datoPulso }
        if (mensajes === "") {
          mensajes = "No se registraron problemas"
        }
        insertarRegistro(nombre, fecha_tratamiento, totalinfusion, totaldrenaje, totalbalance, mensajes);
      }
      $("#btn1").fadeIn("smooth");
      $("#btn3").fadeIn("smooth");
    }
  }
  

  //Valida que solo se ingresen números en el campo drenaje y presión arterial
  $(".drenaje,#valor_frecuencia").keypress(function (event) {
    var inputValue = event.key;
    var isValid = /^[0-9]*\.?[0-9]*$/.test(inputValue);
    if (!isValid) {
      event.preventDefault();
      alert("Solo se admiten numeros");
    }
  });
  //validación de la entrada de datos del Campo de presión arterial
  $("#ultima_presion").keypress(function (event) {
    var inputValue = event.key;
    var isValid = /^[0-9\/]*$/.test(inputValue);

    if (!isValid) {
      event.preventDefault();
      alert("Solo se admiten números y el carácter '/'");
    } else {
      var cadena = $(this).val();
      var caracter = "/";

      if (cadena.length >= 4) {
        if (cadena[3] === caracter || cadena[4] === caracter) {
          updateClock();
        } else {
          alert("Utilice el formato indicado ###/##");
          $("#ultima_presion").val("");
        }
      }
    }
  });
  //Validación del campo de nombre(solo caracteres alfabéticos o espacios)
  $("#nombre_paciente").keypress(function (event) {
    var inputValue = event.key;
    var isValid = /^[a-zA-Z\s]+$/.test(inputValue);
    if (!isValid) {
      event.preventDefault();
      alert("No se permiten numeros");
    }
  });
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm;

    // Formatea los números de una sola cifra con un cero inicial
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    /* if (seconds < 10) {
      seconds = "0" + seconds;
    } */
    // Construye el string de la hora
    if (hours > 12) {
      hours -= 12;
      ampm = "pm";
    } else {
      ampm = "am";
    }
    var time = hours + ":" + minutes;
    var date = now.toLocaleDateString();

    // Actualiza el contenido del label con la hora y fecha
    $("#fecha_tratamiento").val(date);
    $("#fecha").text(time + "" + ampm /* + " Fecha: " + date */);
    //$("#hora").text(time + " " + ampm);
  }
  // Actualiza el reloj al cargar la página, cada minuto
  setInterval(updateClock, 60000);
});
