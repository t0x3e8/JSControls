<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Test page1</title>
    <link href="styles/site.css" rel="stylesheet" />

    <script src="scripts/vendors/jquery.js"></script>
    <script src="scripts/myControl.js"></script>
    <script src="scripts/myControl.roundChart.js"></script>
</head>
<body>
    <div id="container"></div>
</body>
</html>

<script type="text/javascript">
    $(document).ready(function () {
        myControl.configModule({
            chart_type: 'circle',
            data: {
                value: '35',
                label: 'of trans * people reported physical abuse in a 2007 survey',
                primary_color: '#db5633',
                secondary_color: '#e3faff',
                circle_border_ratio: 0.15, 
            }
        });
        myControl.initModule($('#container'));
    });
</script>
