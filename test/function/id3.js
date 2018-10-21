var jsmediatags = require("jsmediatags");
var fileurl = "/Users/chentao/Music/网易云音乐/毛宁 - 晚秋.mp3";

var jsmediatags = require("jsmediatags");

jsmediatags.read(fileurl, {
    onSuccess: function(tag) {
        console.log(tag);
    },
    onError: function(error) {
        console.log(':(', error.type, error.info);
    }
});