<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Test page1</title>
    <link href="styles/site.css" rel="stylesheet" />

    <script src="scripts/vendors/jquery.js"></script>
    <script src="scripts/myControl.js"></script>
    <script src="scripts/myControl.utils.js"></script>
    <script src="scripts/myControl.roundChart.js"></script>
    <script src="scripts/myControl.stackBarChart.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The description of my page" />
</head>
<body>
    <div id="circleContainer"></div>
    <div id="stackBarContainer"></div>
</body>
</html>

<script type="text/javascript">
    $(document).ready(function () {
        var circleChart = myControl;

        circleChart.configModule({
            chartType: 'circle',
            data: {
                value: '34',
                label: 'of trans * people reported physical abuse in a 2007 survey',
                primaryColor: '#db5633',
                secondaryColor: '#e3faff',
                circleBorderRatio: 0.15, 
            }
        });
        circleChart.initModule($('#circleContainer'));


        var stackBarChart = myControl;
        stackBarChart.configModule({
            chartType: 'stackBar',
            data: {
                value: '34',
                label: 'this is test label',
                primaryColor: '#db5633',
                secondaryColor: '#e3faff',
                barWidthRatio: 0.15,
            }
        })

        stackBarChart.initModule($('#stackBarContainer'));
    });
</script>
