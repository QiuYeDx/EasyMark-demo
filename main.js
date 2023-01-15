class PicManager{
    constructor(array = new Array()) {
        this._picArray = array;
    }
    addPic(pic){
        this._picArray.push(pic);
    }
    getNumOfPic(){
        return this._picArray.length;
    }
    getAllPic(){
        return this._picArray;
    }
    re0(){
        this._picArray = new Array();
    }
}

class Pic{
    constructor(dataUrl){
        this.dataUrl = dataUrl;
        this.tags={};
    }
    initTags(){
        // console.log("initTags():")
        var image = new Image();
        let self = this;
        image.onload = function(){
            console.log('image loaded');
            EXIF.getData(image, function(){
                self.tags = EXIF.getAllTags(this);
                console.log("initTags():");
                console.log(EXIF.pretty(this));
            });
        };
        image.src = this.dataUrl;
    }
    getTags(){ // get AllTags json
        return this.tags;
    }
    getDataUrl(){
        return this.dataUrl;
    }
}

var picManager = new PicManager();