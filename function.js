var filebtn = document.querySelector('#filebtn');

filebtn.addEventListener('change', function() {
    var file = this.files[0];

    if (!file) return;

    var fileReader = new FileReader();

    fileReader.onload = function(res) {
        var img1 = res.currentTarget.result;
        getExif(img1);
        // console.log(img1);
        // console.log(EXIF.pretty(img1));
        // EXIF.getData(img1, function(){
        //     // EXIF.getAllTags(this);
        //     // EXIF.getTag(this, 'Orientation');
        //     console.log('ok:' + EXIF.pretty(this));
        // });
    }
    fileReader.readAsDataURL(file);
})

function getExif(img){
    // console.log("func getExif(img);");
    // console.log(img);
    var image = new Image();
    image.onload = function() {
        EXIF.getData(image, function() {
             alert(EXIF.pretty(this));
        });
    };
    image.src = img; //base64str
}