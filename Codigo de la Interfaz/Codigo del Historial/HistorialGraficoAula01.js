google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawCharts);
var database = firebase.database();

function drawCharts() {
    ////////////////////////// CONSUMO MENSUAL AULA 01/////////////////////
    var dataCount = 10; // Por ejemplo, aquí se define como 10
    var lineOptions1;
    google.charts.setOnLoadCallback(function() {
        var lineChart1 = new google.visualization.LineChart(
            document.getElementById("line-chart1")
        );

        lineOptions1 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };
        
        function updateLineChart1() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/01_Monitoreo_Aula01/Aire/W_Promedio').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var pageViews = childSnapshot.val();
                    data.push([hour, pageViews]);
                });
                var lineData1 = google.visualization.arrayToDataTable(data);
                lineChart1.draw(lineData1, lineOptions1);
            });
        }
        updateLineChart1();
    });

    // CONSUMO DE LOS AIRES ACONDICIONADOS
    var lineOptions2;
    google.charts.setOnLoadCallback(function() {
        var lineChart2 = new google.visualization.LineChart(
            document.getElementById("line-chart2")
        );

        lineOptions2 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart2() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/01_Monitoreo_Aula01/Aire/W_Promedio_H/2023-09-15').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData2 = google.visualization.arrayToDataTable(data);
                lineChart2.draw(lineData2, lineOptions2);
            });
        }
        updateLineChart2();
    });

    // CONSUMO DE ENCHUFES
    var lineOptions3;
    google.charts.setOnLoadCallback(function() {
        var lineChart3 = new google.visualization.LineChart(
            document.getElementById("line-chart3")
        );

        lineOptions3 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart3() {
            var data = [["Hour", "Potencia Wh"]];
            
            // Consulta la referencia de Firebase y ordena los datos por clave en orden descendente
            var ref = database.ref('FCSEF/01_Monitoreo_Aula01/Enchufes/W_Promedio_H/2023-09-14').orderByKey().limitToLast(5);
        
            ref.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData3 = google.visualization.arrayToDataTable(data);
                lineChart3.draw(lineData3, lineOptions3);
            });
        }
        
        updateLineChart3();
    });

    // CONSUMO DE LUCES
    var lineOptions4;
    google.charts.setOnLoadCallback(function() {
        var lineChart4 = new google.visualization.LineChart(
            document.getElementById("line-chart4")
        );

        lineOptions4 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart4() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/01_Monitoreo_Aula01/Luces/W_Promedio_H/2023-09-14').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData4 = google.visualization.arrayToDataTable(data);
                lineChart4.draw(lineData4, lineOptions4);
            });
        }
        updateLineChart4();
    });

    ////////////////////////////CONSUMO MENSUAL DEL AULA 02 /////////////////////////////////////
    var dataCount = 10; // Por ejemplo, aquí se define como 10
    var lineOptions5;
    google.charts.setOnLoadCallback(function() {
        var lineChart5 = new google.visualization.LineChart(
            document.getElementById("line-chart5")
        );

        lineOptions5 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };
        
        function updateLineChart5() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/02_Monitoreo_Aula02/Enchufes/W_Promedio').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var pageViews = childSnapshot.val();
                    data.push([hour, pageViews]);
                });
                var lineData5 = google.visualization.arrayToDataTable(data);
                lineChart5.draw(lineData5, lineOptions5);
            });
        }
        updateLineChart5();
    });

    // CONSUMO DE LOS AIRES ACONDICIONADOS
    var lineOptions6;
    google.charts.setOnLoadCallback(function() {
        var lineChart6 = new google.visualization.LineChart(
            document.getElementById("line-chart6")
        );

        lineOptions6 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart6() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/02_Monitoreo_Aula02/Aire/W_Promedio_H').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData6 = google.visualization.arrayToDataTable(data);
                lineChart6.draw(lineData6, lineOptions6);
            });
        }
        updateLineChart6();
    });

    // CONSUMO DE ENCHUFES
    var lineOptions7;
    google.charts.setOnLoadCallback(function() {
        var lineChart7 = new google.visualization.LineChart(
            document.getElementById("line-chart7")
        );

        lineOptions7 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart7() {
            var data = [["Hour", "Potencia Wh"]];
            
            // Consulta la referencia de Firebase y ordena los datos por clave en orden descendente
            var ref = database.ref('FCSEF/02_Monitoreo_Aula02/Enchufes/W_Promedio_H').orderByKey().limitToLast(5);
        
            ref.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData7 = google.visualization.arrayToDataTable(data);
                lineChart7.draw(lineData7, lineOptions7);
            });
        }
        
        updateLineChart7();
    });

    // CONSUMO DE LUCES
    var lineOptions8;
    google.charts.setOnLoadCallback(function() {
        var lineChart8 = new google.visualization.LineChart(
            document.getElementById("line-chart8")
        );

        lineOptions8 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart8() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/02_Monitoreo_Aula02/Luces/W_Promedio_H/2023-09-14').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData8 = google.visualization.arrayToDataTable(data);
                lineChart8.draw(lineData8, lineOptions8);
            });
        }
        updateLineChart8();
    });



    ////////////////////////////CONSUMO MENSUAL DEL AULA 03 /////////////////////////////////////
    var dataCount = 10; // Por ejemplo, aquí se define como 10
    var lineOptions9;
    google.charts.setOnLoadCallback(function() {
        var lineChart9 = new google.visualization.LineChart(
            document.getElementById("line-chart9")
        );

        lineOptions9 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };
        
        function updateLineChart9() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/03_Monitoreo_Aula03/Enchufes/W_Promedio').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var pageViews = childSnapshot.val();
                    data.push([hour, pageViews]);
                });
                var lineData9 = google.visualization.arrayToDataTable(data);
                lineChart9.draw(lineData9, lineOptions9);
            });
        }
        updateLineChart9();
    });

    // CONSUMO DE LOS AIRES ACONDICIONADOS
    var lineOptions10;
    google.charts.setOnLoadCallback(function() {
        var lineChart10 = new google.visualization.LineChart(
            document.getElementById("line-chart10")
        );

        lineOptions10 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart10() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/03_Monitoreo_Aula03/Aire/W_Promedio_H/2023-09-13').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData10 = google.visualization.arrayToDataTable(data);
                lineChart10.draw(lineData10, lineOptions10);
            });
        }
        updateLineChart10();
    });

    // CONSUMO DE ENCHUFES
    var lineOptions11;
    google.charts.setOnLoadCallback(function() {
        var lineChart11 = new google.visualization.LineChart(
            document.getElementById("line-chart11")
        );

        lineOptions11 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart11() {
            var data = [["Hour", "Potencia Wh"]];
            
            // Consulta la referencia de Firebase y ordena los datos por clave en orden descendente
            var ref = database.ref('FCSEF/03_Monitoreo_Aula03/Enchufes/W_Promedio_H/2023-09-14').orderByKey().limitToLast(5);
        
            ref.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData11 = google.visualization.arrayToDataTable(data);
                lineChart11.draw(lineData11, lineOptions11);
            });
        }
        
        updateLineChart11();
    });

    // CONSUMO DE LUCES
    var lineOptions12;
    google.charts.setOnLoadCallback(function() {
        var lineChart12 = new google.visualization.LineChart(
            document.getElementById("line-chart12")
        );

        lineOptions12 = {
            backgroundColor: "transparent",
            colors: ["cornflowerblue"],
            fontName: "Open Sans",
            focusTarget: "category",
            chartArea: {
                left: 50,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'd, yyyy',
                gridlines: {
                    count: dataCount,
                    units: {
                        days: { format: ['d, yyyy'] }
                    }
                }
            },
            vAxis: {
                minValue: 0,
                maxValue: 50,
                baselineColor: "#DDD",
                gridlines: {
                    color: "#DDD",
                    count: 4
                },
                textStyle: {
                    fontSize: 11
                }
            },
            legend: {
                position: "bottom",
                textStyle: {
                    fontSize: 12
                }
            },
            animation: {
                duration: 1200,
                easing: "out",
                startup: true
            }
        };

        function updateLineChart12() {
            var data = [["Hour", "Potencia Wh"]];
            database.ref('FCSEF/03_Monitoreo_Aula03/Luces/W_Promedio_H/2023-09-14').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var hour = childSnapshot.key;
                    var otherData = childSnapshot.val(); // Ajusta según tus datos
                    data.push([hour, otherData]);
                });
                var lineData12 = google.visualization.arrayToDataTable(data);
                lineChart12.draw(lineData12, lineOptions12);
            });
        }
        updateLineChart12();
    });
}