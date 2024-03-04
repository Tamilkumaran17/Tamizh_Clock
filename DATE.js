window.onload = function() {

    var currentDate = new Date();
    var tamilDays = ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'];
    
    var day = tamilDays[currentDate.getDay()];
    var dayInMonth = ('0' + currentDate.getDate()).slice(-2);
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var year = currentDate.getFullYear();

    var dateString =  dayInMonth + " : " + month + " : " + year;

    document.getElementById('date').textContent = dateString;
    document.getElementById('tamilDay').textContent = day;
};