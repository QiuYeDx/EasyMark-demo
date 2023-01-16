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

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
} 

var fileBtn = document.querySelector('#fileBtn');

// get dataUrl
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
        picManager.addInfo(file.name);
        fileReader.readAsDataURL(file);
    }
})

var checkBtn = document.querySelector('#checkBtn');

checkBtn.addEventListener('click', function() {
    for(var i=0; i<picManager.getAllPic().length; i++) {
        console.log(picManager.getAllPic()[i].getTags());
        // console.log(picManager.getAllPic()[i].getDataUrl());
    }
})

var downloadA = document.querySelector('#a_dl');

downloadA.addEventListener('click', function() {
    // downloadA.href = picManager.getAllPic()[0].getDataUrl();
    // downloadA.download = picManager.getAllInfo()[0];
    // console.log(picManager.getAllPic()[0].getDataUrl());
    saveAs(dataURLtoBlob(picManager.getAllPic()[0].getDataUrl()), "./output/out1.jpg");
})