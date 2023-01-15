// var filebtn = document.querySelector('#filebtn');

// filebtn.addEventListener('change', function() {
//     var file = this.files[0];

//     if (!file) return;

//     var fileReader = new FileReader();

//     fileReader.onload = function(res) {
//         var img1 = res.currentTarget.result;
//         getExif(img1);
//         // console.log(img1);
//         // console.log(EXIF.pretty(img1));
//         // EXIF.getData(img1, function(){
//         //     // EXIF.getAllTags(this);
//         //     // EXIF.getTag(this, 'Orientation');
//         //     console.log('ok:' + EXIF.pretty(this));
//         // });
//     }
//     fileReader.readAsDataURL(file);
// })

// function getExif(img){
//     // console.log("func getExif(img);");
//     // console.log(img);
//     var image = new Image();
//     image.onload = function() {
//         EXIF.getData(image, function() {
//              alert(EXIF.pretty(this));
//         });
//     };
//     image.src = img; //base64str
// }

var fileBtn = document.querySelector('#fileBtn');

fileBtn.addEventListener('change', function() {
    picManager.re0();
    for(var i=0; i<this.files.length; i++){
        var fileReader = new FileReader();
        fileReader.onload = function(res) {
            var dataUrl = res.currentTarget.result;
            var newPic = new Pic(dataUrl);
            newPic.initTags();
            picManager.addPic(newPic);
        }
        var file = this.files[i];
        if (!file) continue;
        fileReader.readAsDataURL(file);
    }
})

// function getExif(img){
//     // console.log("func getExif(img);");
//     // console.log(img);
//     var image = new Image();
//     image.onload = function() {
//         EXIF.getData(image, function() {
//              alert(EXIF.pretty(this));
//         });
//     };
//     image.src = img; //base64str
// }

var checkBtn = document.querySelector('#checkBtn');

checkBtn.addEventListener('click', function() {
    for(var i=0; i<picManager.getAllPic().length; i++) {
        console.log(picManager.getAllPic()[i].getTags());
        // console.log(picManager.getAllPic()[i].getDataUrl());
    }
})