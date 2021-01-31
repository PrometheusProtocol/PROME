                                  <!-- <img class="img-fluid d-block mx-auto" src="./img/1e.jpg" alt="" /> --> 
                                      <p>Total supply: 200, 000 $PROME </p>
                                      <p>Dev: 10, 000 $PROME </p>
                                      <p>Marketing: 10, 000 $PROME </p>
                                      <p>Presale: 16ETH</p>
                                      <p>Presale price: 3000 $PROME / 1 ETH</p>
                                      <p>Listing price: 2600 $PROME / 1 ETH</p>
                                      <p>Liquidity: 15ETH</p>
                                      <p>Events pool: 20, 000 $PROME events and rewards would be done every week.Initially this pool will be locked for first 4 days.
                                      </p>

                                      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

                                      <script type="text/javascript">
                                        // Load google charts
                                        google.charts.load('current', {'packages':['corechart']});
                                        google.charts.setOnLoadCallback(drawChart);

                                        // Draw the chart and set the chart values
                                        function drawChart() {
                                          var data = google.visualization.arrayToDataTable([
                                          ['Task', 'Tokenomics'],
                                          ['Dev', 10000],
                                          ['Marketing', 10000],
                                          ['Presale', 48000],
                                          ['Uniswap', 39000],
                                          ['Events Pool', 20000]
                                        ]);

                                          // Optional; add a title and set the width and height of the chart

                                              var options = {backgroundColor: 'transparent',
                                               'width':900,
                                               'height':700,
                                               'title' : 'Tokenomics'};

                                          // Display the chart inside the <div> element with id="piechart"
                                          var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                                          chart.draw(data, options);
                                        }
                                        </script>

                                    <div id="piechart"></div>