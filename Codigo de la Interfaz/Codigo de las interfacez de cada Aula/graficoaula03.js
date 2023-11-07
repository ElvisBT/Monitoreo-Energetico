// Obtén una referencia al elemento canvas y crea el contexto para el gráfico de línea
const canvas = document
  .getElementById("grafico-en-tiempo-real")
  .getContext("2d");

// Obtén una referencia a los elementos HTML para mostrar los valores
const potenciaValorElement = document.getElementById("POTENCIA_VALOR");
const corrienteValorElement = document.getElementById("CORRIENTE_VALOR");
const voltajeValorElement = document.getElementById("VOLTAJE_VALOR");

// Crea un objeto de gráfico de línea
const chart = new Chart(canvas, {
  type: "line",
  data: {
    labels: [], // Etiquetas de tiempo
    datasets: [
      {
        label: "Flujo de Corriente",
        data: [], // Datos del gráfico
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Tiempo",
          },
        
          ticks: {
            beginAtZero: true,
            max: 10, // Ajusta el rango máximo en el eje Y según tus necesidades
          },
        },
      ],
    },
  },
});
const database = firebase.database();

// Configura la referencia a tu base de datos de Firebase Realtime para corriente
const datacor = database.ref("FCSEF/03_Monitoreo_Aula03/Aire/Corriente/-Corriente-");

// Escucha cambios en los datos de Firebase en tiempo real para corriente
datacor.on("value", (snapshot) => {
  const data = snapshot.val();
  const tiempo = snapshot.key; // Utiliza la clave (tiempo) como etiqueta
  const corriente = data; // Los datos de corriente vienen directamente de Firebase

  // Agrega el nuevo punto de datos al gráfico
  chart.data.labels.push(tiempo);
  chart.data.datasets[0].data.push(corriente);

  // Actualiza el gráfico
  chart.update();

  // Actualiza los valores en los elementos HTML
  corrienteValorElement.textContent = corriente;
});

// Configura la referencia a tu base de datos de Firebase Realtime para potencia
const datapot = database.ref("FCSEF/03_Monitoreo_Aula03/Aire/Potencia/-Potencia-");

// Escucha cambios en los datos de Firebase en tiempo real para potencia
datapot.on("value", (snapshot) => {
  const potencia = snapshot.val();
  // Actualiza el valor de potencia en el elemento HTML
  potenciaValorElement.textContent = potencia;
});

// Configura la referencia a tu base de datos de Firebase Realtime para voltaje
const datavol = database.ref("FCSEF/03_Monitoreo_Aula03/Aire/Voltaje/Voltaje");

// Escucha cambios en los datos de Firebase en tiempo real para voltaje
datavol.on("value", (snapshot) => {
  const voltaje = snapshot.val();
  // Actualiza el valor de voltaje en el elemento HTML
  voltajeValorElement.textContent = voltaje;
});



var gaugeOptions = {

  chart: {
    type: 'solidgauge'
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '120%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  tooltip: {
    enabled: false
  },

  // the value axis
  yAxis: {
    stops: [
      [0.5, '#DDDF0D'], // yellow
      [0.7, '#55BF3B'], // green
      [0.8, '#DF5353'] // red
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }
};

// Obtener una referencia al gráfico de velocidad
var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
  yAxis: {
    min: 0,
    max: 10000,
    title: {
      text: 'Potencia W'
    }
  },

  credits: {
    enabled: false
  },

  series: [{
    name: 'Potencia W',
    data: [0], // Valor inicial, puedes cambiar esto según tus necesidades
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px;color:' +
        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
           '<span style="font-size:12px;color:silver"></span></div>'
    }
  }]

}));

// Función para actualizar los datos del medidor en tiempo real desde Firebase
function actualizarDatosMedidor() {
  // Configura la referencia a tu base de datos de Firebase Realtime para obtener los datos del medidor
  const database = firebase.database();
  const medidorRef = database.ref("FCSEF/03_Monitoreo_Aula03/Aire/Potencia/-Potencia-");

  // Escucha cambios en los datos de Firebase en tiempo real
  medidorRef.on("value", (snapshot) => {
    const nuevoValor = snapshot.val(); // Obtén el nuevo valor del medidor desde Firebase

    // Actualiza los datos en el gráfico de velocidad
    chartSpeed.series[0].points[0].update(nuevoValor);
  });
}

// Iniciar la actualización de datos del medidor de velocidad
actualizarDatosMedidor();






// Obtén una referencia al elemento canvas y crea el contexto para el gráfico de línea
const canvas2 = document.getElementById("grafico-en-tiempo-real2");
const contexto2 = canvas2.getContext("2d");

// Obtén una referencia a los elementos HTML para mostrar los valores
const potenciaValorElement2 = document.getElementById("POTENCIA_VALOR2");
const corrienteValorElement2 = document.getElementById("CORRIENTE_VALOR2");
const voltajeValorElement2 = document.getElementById("VOLTAJE_VALOR2");

// Crea un objeto de gráfico de línea
const chart2 = new Chart(canvas2, {
  type: "line",
  data: {
    labels: [], // Etiquetas de tiempo
    datasets: [
      {
        label: "Flujo de Corriente",
        data: [], // Datos del gráfico
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 10, // Ajusta el rango máximo en el eje Y según tus necesidades
          },
        },
      ],
    },
  },
});

// Configura la referencia a tu base de datos de Firebase Realtime para corriente
const datacor2 = database.ref("FCSEF/03_Monitoreo_Aula03/Enchufes/Corriente/-Corriente-");

// Escucha cambios en los datos de Firebase en tiempo real para corriente
datacor2.on("value", (snapshot) => {
  const data = snapshot.val();
  const tiempo = snapshot.key; // Utiliza la clave (tiempo) como etiqueta
  const corriente = data; // Los datos de corriente vienen directamente de Firebase

  // Agrega el nuevo punto de datos al gráfico
  chart.data.labels.push(tiempo);
  chart.data.datasets[0].data.push(corriente);

  // Actualiza el gráfico
  chart.update();

  // Actualiza los valores en los elementos HTML
  corrienteValorElement2.textContent = corriente;
});

// Configura la referencia a tu base de datos de Firebase Realtime para potencia
const datapot2 = database.ref("FCSEF/03_Monitoreo_Aula03/Enchufes/Potencia/-Potencia-");

// Escucha cambios en los datos de Firebase en tiempo real para potencia
datapot2.on("value", (snapshot) => {
  const potencia2 = snapshot.val();
  // Actualiza el valor de potencia en el elemento HTML
  potenciaValorElement2.textContent = potencia2;
});

// Configura la referencia a tu base de datos de Firebase Realtime para voltaje
const datavol2 = database.ref("FCSEF/03_Monitoreo_Aula03/Enchufes/Voltaje/Voltaje");

// Escucha cambios en los datos de Firebase en tiempo real para voltaje
datavol2.on("value", (snapshot) => {
  const voltaje2 = snapshot.val();
  // Actualiza el valor de voltaje en el elemento HTML
  voltajeValorElement2.textContent = voltaje2;
});



var gaugeOptions = {

  chart: {
    type: 'solidgauge'
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '120%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  tooltip: {
    enabled: false
  },

  // the value axis
  yAxis: {
    stops: [
      [0.5, '#DDDF0D'], // yellow
      [0.7, '#55BF3B'], // green
      [0.8, '#DF5353'] // red
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }
};

// Obtener una referencia al gráfico de velocidad
var chartSpeed2 = Highcharts.chart('container-speed2', Highcharts.merge(gaugeOptions, {
  yAxis: {
    min: 0,
    max: 1000,
    title: {
      text: 'Potencia W'
    }
  },

  credits: {
    enabled: false
  },

  series: [{
    name: 'Potencia W',
    data: [0], // Valor inicial, puedes cambiar esto según tus necesidades
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px;color:' +
        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
           '<span style="font-size:12px;color:silver"></span></div>'
    }
  }]

}));

// Función para actualizar los datos del medidor en tiempo real desde Firebase
function actualizarDatosMedidor2() {
  // Configura la referencia a tu base de datos de Firebase Realtime para obtener los datos del medidor
  const medidorRef2 = database.ref("FCSEF/03_Monitoreo_Aula03/Enchufes/Potencia/-Potencia-");

  // Escucha cambios en los datos de Firebase en tiempo real
  medidorRef2.on("value", (snapshot) => {
    const nuevoValor = snapshot.val(); // Obtén el nuevo valor del medidor desde Firebase

    // Actualiza los datos en el gráfico de velocidad
    chartSpeed2.series[0].points[0].update(nuevoValor);
  });
}

// Iniciar la actualización de datos del medidor de velocidad
actualizarDatosMedidor2();







// Obtén una referencia al elemento canvas y crea el contexto para el gráfico de línea
const canvas3 = document.getElementById("grafico-en-tiempo-real3");
const contexto3 = canvas3.getContext("2d");

// Obtén una referencia a los elementos HTML para mostrar los valores
const potenciaValorElement3 = document.getElementById("POTENCIA_VALOR3");
const corrienteValorElement3 = document.getElementById("CORRIENTE_VALOR3");
const voltajeValorElement3 = document.getElementById("VOLTAJE_VALOR3");

// Crea un objeto de gráfico de línea
const chart3 = new Chart(canvas3, {
  type: "line",
  data: {
    labels: [], // Etiquetas de tiempo
    datasets: [
      {
        label: "Flujo de Corriente",
        data: [], // Datos del gráfico
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 10, // Ajusta el rango máximo en el eje Y según tus necesidades
          },
        },
      ],
    },
  },
});

// Configura la referencia a tu base de datos de Firebase Realtime para corriente
const datacor3 = database.ref("FCSEF/03_Monitoreo_Aula03/Luces/Corriente/-Corriente-");

// Escucha cambios en los datos de Firebase en tiempo real para corriente
datacor2.on("value", (snapshot) => {
  const data = snapshot.val();
  const tiempo = snapshot.key; // Utiliza la clave (tiempo) como etiqueta
  const corriente = data; // Los datos de corriente vienen directamente de Firebase

  // Agrega el nuevo punto de datos al gráfico
  chart.data.labels.push(tiempo);
  chart.data.datasets[0].data.push(corriente);

  // Actualiza el gráfico
  chart.update();

  // Actualiza los valores en los elementos HTML
  corrienteValorElement3.textContent = corriente;
});

// Configura la referencia a tu base de datos de Firebase Realtime para potencia
const datapot3 = database.ref("FCSEF/03_Monitoreo_Aula03/Luces/Potencia/-Potencia-");

// Escucha cambios en los datos de Firebase en tiempo real para potencia
datapot3.on("value", (snapshot) => {
  const potencia3 = snapshot.val();
  // Actualiza el valor de potencia en el elemento HTML
  potenciaValorElement3.textContent = potencia3;
});

// Configura la referencia a tu base de datos de Firebase Realtime para voltaje
const datavol3 = database.ref("FCSEF/03_Monitoreo_Aula03/Luces/Voltaje/Voltaje");

// Escucha cambios en los datos de Firebase en tiempo real para voltaje
datavol3.on("value", (snapshot) => {
  const voltaje3 = snapshot.val();
  // Actualiza el valor de voltaje en el elemento HTML
  voltajeValorElement3.textContent = voltaje3;
});



var gaugeOptions = {

  chart: {
    type: 'solidgauge'
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '120%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  tooltip: {
    enabled: false
  },

  // the value axis
  yAxis: {
    stops: [
      [0.5, '#DDDF0D'], // yellow
      [0.7, '#55BF3B'], // green
      [0.8, '#DF5353'] // red
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }
};

// Obtener una referencia al gráfico de velocidad
var chartSpeed3 = Highcharts.chart('container-speed3', Highcharts.merge(gaugeOptions, {
  yAxis: {
    min: 0,
    max: 1000,
    title: {
      text: 'Potencia W'
    }
  },

  credits: {
    enabled: false
  },

  series: [{
    name: 'Potencia W',
    data: [0], // Valor inicial, puedes cambiar esto según tus necesidades
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px;color:' +
        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
           '<span style="font-size:12px;color:silver"></span></div>'
    }
  }]

}));

// Función para actualizar los datos del medidor en tiempo real desde Firebase
function actualizarDatosMedidor3() {
  // Configura la referencia a tu base de datos de Firebase Realtime para obtener los datos del medidor
  const medidorRef3 = database.ref("FCSEF/03_Monitoreo_Aula03/Luces/Potencia/-Potencia-");

  // Escucha cambios en los datos de Firebase en tiempo real
  medidorRef3.on("value", (snapshot) => {
    const nuevoValor = snapshot.val(); // Obtén el nuevo valor del medidor desde Firebase

    // Actualiza los datos en el gráfico de velocidad
    chartSpeed3.series[0].points[0].update(nuevoValor);
  });
}

// Iniciar la actualización de datos del medidor de velocidad
actualizarDatosMedidor3();



