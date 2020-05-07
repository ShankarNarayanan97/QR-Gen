<script>

    var qrdata=document.getElementById('qr-data'); // get the data from text boxs
    var qrcode=new QRCode(document.getElementById('qrcode')); // now i am creating an instance of the class QRCode which is present in qrcode.min.js
    function genQR() { // this is the initial function which sends the data to the main function in external JS to generate QR
        let data=qrdata.value; 
        qrcode.makeCode(data); // passing the data to the main generator function
        
    }
</script>