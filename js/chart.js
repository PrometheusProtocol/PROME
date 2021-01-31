                                      
                                       // Load google charts
                                        google.charts.load('current', {'packages':['corechart']});
                                        google.charts.setOnLoadCallback(drawChart);

                                        // Draw the chart and set the chart values
                                        function drawChart() {
                                          var data = google.visualization.arrayToDataTable([
                                          ['Task', 'Tokenomics'],
                                          ['Dev', 50000],
                                          ['Marketing', 30000],
                                          ['Presale', 30000],
                                          ['Uniswap', 28000],
                                          ['Team Pool', 10000],
                                          ['Farming Pool', 42000]
                                        ]);

                                          // Optional; add a title and set the width and height of the chart

                                              var options = {backgroundColor: 'transparent',
                                               'width': 550,
                                               'height':300,
                                               'title' : 'Tokenomics'};

                                          // Display the chart inside the <div> element with id="piechart"
                                          var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                                          chart.draw(data, options);
                                        }