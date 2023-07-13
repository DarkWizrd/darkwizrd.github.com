$(document).ready(function () {
  updateClock();
  var cambio = [];
  var mensaje = "";
  var mensajeCorreo = "";
  let alerta1 = false,
    alerta2 = false,
    alerta3 = false;
  var i = 0;
  var x = 0;
  cambio[0] = document.getElementsByClassName("cambio1");
  cambio[1] = document.getElementsByClassName("cambio2");
  cambio[2] = document.getElementsByClassName("cambio3");
  cambio[3] = document.getElementsByClassName("cambio4");
  $("#btn2").click(function (event) {
    // Datos del Primer formulario
    balance();
    event.preventDefault();
  });

  //Funciones y el resto del codigo

  function balance() {
    var sistema = $("#tipo_sistemadp").val();
    var presionAr = $("#ultima_presion").val();
    if (presionAr !== "") {
      presion_Arterial(presionAr);
    }
    var pulso = $("#valor_frecuencia").val();
    if (pulso !== "") {
      frecuencia_cardiaca(pulso);
    }
    var num1 = parseInt(cambio[i][1].value);
    var num2 = parseInt(cambio[i][2].value);
    $("#balance" + (i + 1)).val(num1 - num2);
    $("#nombre_paciente").attr("readonly", "readonly");
    $("#drenaje" + (i + 1)).attr("readonly", "readonly");
    $("#concentracion" + (i + 1)).attr("disabled", "disabled");
    $("#cualidad" + (i + 1)).attr("disabled", "disabled");
    i++; //Marca la fase de el analisis
    if ($("#balance4").val() !== "") {
      var nombre = $("#nombre_paciente").val();
      var fecha_tratamiento = $("#fecha_tratamiento").val();
      var drenaje = document.getElementsByClassName("drenaje");
      var balance = document.getElementsByClassName("balance");
      var infusion = document.getElementsByClassName("infusion");
      var concentracion = document.getElementsByClassName("concentracion");
      var cualidad = document.getElementsByClassName("cualidad");
      var totaldrenaje = 0,
        totalbalance = 0,
        totalinfusion = 0,
        totalconcentracion = 0,
        totalcualidad = 0;

      for (i = 0; i < balance.length; i++) {
        totaldrenaje += parseInt(drenaje[i].value);
        totalinfusion += parseInt(infusion[i].value);
        totalconcentracion += parseFloat(concentracion[i].value);
        totalcualidad += parseFloat(cualidad[i].value, 10);
        totalbalance += parseInt(balance[i].value);
      }
      cualidad_contenido(totalcualidad);

      // Evalúa la cualidad del contenido de la diálisis, cualidad normal=1,cualidad turbia=2, si totalcualidad>5 indica que el contenido fue turbio en mas de una ocasión.

      $("#total_concentracion").val(totalconcentracion.toString() + "%");
      $("#total_drenaje").val(totaldrenaje.toString() + "mL");
      $("#total_infusion").val(totalinfusion.toString() + " mL");
      $("#total_balance").val(totalbalance.toString() + " mL");
      //CONDICIÓN DEL BALANCE
      if (totalbalance <= 0) {
        $("#dato_analisis1").html(
          "<strong style='color:green'>Balance Hídrico Favorable.</strong> Condición normal, no hay retención de líquidos.<br>" +
            mensaje
        );
      } else if (totalbalance >= 1 && totalbalance <= 2000) {
        $("#dato_analisis1").html(
          "Retención de líquidos considerable. En caso de presentarse esta situación <strong>por más de dos días consecutivos</strong>, llame y consulte con la unidad hospitalaria de Diálisis<br>Balance final del dia=" +
            totalbalance +
            " mL<br>" +
            mensaje
        );
      } else if (totalbalance > 2000) {
        $("#dato_analisis1").html(
          "<strong style='color:red'>ALERTA: Excesiva retención de líquidos.</strong> Consulte de inmediato con su nefrólogo<br>Balance final del dia=" +
            totalbalance +
            " mL<br>" +
            mensaje
        );
        alert(
          "ALERTA: Consulte de inmediato con su néfrologo y programe su cita en la unidad de diálisis, su cuerpo esta reteniendo demasiados líquidos\nBalance final del dia: " +
            totalbalance +
            " mL\n" +
            mensaje
        );
        mensajeCorreo +=
          "\nALERTA: Excesiva retención de líquidos. Balance final del dia: " +
          totalbalance +
          " mL.";
        alerta3 = true;
      }
      if (alerta1 || alerta2 || alerta3) {
        sendMail(nombre, fecha_tratamiento, mensajeCorreo);
      }
    }
  }
  function cualidad_contenido(cualidad) {
    if (cualidad > 5) {
      mensaje =
        "ALERTA: Consulte de inmediato con su néfrologo y programe su cita en la unidad de diálisis.";
      mensajeCorreo = "\nRIESGO DE PERITONITIS.";
      alert(
        "ALERTA: Consulte de inmediato con su néfrologo y programe su cita en la unidad de diálisis.\n"
      );
      alerta2 = true;
    }
  }
  function presion_Arterial(presion) {
    //Condición del pulso del paciente
    var partes = presion.split("/");
    var sistole = partes[0]; // "180"
    var diastole = partes[1]; // "60"
    if (sistole >= 80 && sistole <= 129 && diastole >= 60 && diastole <= 84) {
      mensaje += "Presión arterial normal";
      alert(mensaje);
    } else if (
      (sistole >= 130 && sistole <= 139) ||
      (diastole >= 85 && diastole <= 89)
    ) {
      mensaje += "Presión arterial normal alta: " + presion;
      alert(mensaje);
    } else if (
      (sistole >= 140 && sistole <= 159) ||
      (diastole >= 90 && diastole <= 99)
    ) {
      mensaje += "Hipertensión leve <strong>Grado 1: </strong>" + presion;
      alert(mensaje);
    } else if (
      (sistole >= 160 && sistole <= 179) ||
      (diastole >= 100 && diastole <= 109)
    ) {
      mensaje += "Hipertensión moderada <strong>Grado 2: </strong>" + presion;
      alert(mensaje);
    } else if (
      (sistole >= 180 && sistole <= 209) ||
      (diastole >= 110 && diastole <= 119)
    ) {
      mensaje +=
        "Hipertensión grave <strong strong > Grado 3</strong> Requiere ATENCIÓN HOSPITALARIA DE INMEDIATO ";
      mensajeCorreo +=
        "Hipertensión grave Grado 3. REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO. Ultima presion arterial: " +
        presion;
      alert(
        "ALERTA: Hipertensión crítica (Grado 4). Requiere ATENCIÓN HOSPITALARIA DE INMEDIATO"
      );
      alerta1 = true;
    } else if (sistole >= 210 || diastole >= 110) {
      mensaje +=
        "\nHipertensión grave <strong>Grado 4 </strong> Requiere <strong>ATENCIÓN HOSPITALARIA DE INMEDIATO</strong>. Ultima presion arterial: " +
        presion;
      mensajeCorreo +=
        "\nHipertensión grave Grado 4. REQUIERE ATENCIÓN HOSPITALARIA DE INMEDIATO. Ultima presion arterial: " +
        presion;

      alert(
        "ALERTA: Hipertensión crítica (Grado 4). Requiere ATENCIÓN HOSPITALARIA DE INMEDIATO"
      );
      alerta1 = true;
    }
    $("#ultima_presion").val("");
    // event.preventDefault();
  }
  function frecuencia_cardiaca(pulso) {
    if (pulso < 60) {
      alert("Pulsaciones por debajo del rango promedio " + pulso + " bpm.");
    } else if (pulso >= 60 && pulso <= 100) {
      alert("De acuerdo a su última toma, el pulso es normal.");
    } else {
      alert("Pulsaciones por encima del rango promedio " + pulso + " bpm.");
    }
    $("#valor_frecuencia").val("");
  }
  function sendMail(nombre, fecha, mensaje) {
    var params = {
      from_name: nombre,
      message:
        "Reporte del dia: " +
        fecha +
        "\nNombre del paciente: " +
        nombre +
        "\n" +
        mensaje,
    };
    const serviceID = "service_9a5ilbj";
    const templateID = "template_6bsu1ji";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        alert("success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
      ampm = "PM";
    } else {
      ampm = "AM";
    }
    var time = hours + ":" + minutes;
    var date = now.toLocaleDateString();

    // Actualiza el contenido del label con la hora y fecha
    $("#fecha_tratamiento").val(date);
    $("#fecha").text("Hoy es " + date);
    $("#hora").text(time + " " + ampm);
  }
  // Actualiza el reloj al cargar la página, cada minuto
  setInterval(updateClock, 60000);

  // boton2
  $("#btn1").click(function (event) {
    event.preventDefault();
    sendMail();
  });

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
});

/*
      var salida=true
      var cambio = [];
      cambio[0] = document.getElementsByClassName("cambio1");
      cambio[1] = document.getElementsByClassName("cambio2");
      cambio[2] = document.getElementsByClassName("cambio3");
      cambio[3] = document.getElementsByClassName("cambio4");
      console.log(cambio2)
      var num1, num2
      //***Primer cambio
      num1 = parseInt(cambio1[1].value)
      num2 = parseInt(cambio1[2].value)
      alert(num1 - num2)
      $("#balance+ (i+1)").val(num1 - num2);
      $('#drenaje1').attr("readonly", "readonly");

      //Segundo cambio
      num1 = parseInt(cambio2[1].value)
      num2 = parseInt(cambio2[2].value)
      alert(num1 - num2)
      $("#balance2").val(num1 - num2);
      $('#drenaje2').attr("readonly", "readonly");
      //***Tercer Cambio
      num1 = parseInt(cambio3[1].value)
      num2 = parseInt(cambio3[2].value)
      alert(num1 - num2)
      $("#balance3").val(num1 - num2);
      $('#drenaje3').attr("readonly", "readonly");
      //***Cuarto cambio
      num1 = parseInt(cambio4[1].value)
      num2 = parseInt(cambio4[2].value)
      alert(num1 - num2)
      $("#balance4").val(num1 - num2);
      $('#drenaje4').attr("readonly", "readonly");
      */
