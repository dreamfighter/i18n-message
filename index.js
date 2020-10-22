const properties = require("properties-reader");

function splitToJson(msg,str,i,length,value){

    if(!msg[str[i]]){
        msg[str[i]] = {};
    }
    if(i+1<length){
        return splitToJson(msg[str[i]],str,i+1,length,value);
    }else{
        msg[str[i]] = value;
        return;
    }
}

module.exports.from = (prop) => {
    const message = {};
    prop.each((key, value) => {
        // called for each item in the reader,
        // first with key=main.some.thing, value=foo
        // next with key=blah.some.thing, value=bar
        const l = key.split('.');
        splitToJson(message,l,0,l.length,value)
        //message[key]=value;
    });
    return message;
}
module.exports = (str) => {
    const message = {};
    const prop = properties(str);
    prop.each((key, value) => {
        // called for each item in the reader,
        // first with key=main.some.thing, value=foo
        // next with key=blah.some.thing, value=bar
        const l = key.split('.');
        splitToJson(message,l,0,l.length,value)
        //message[key]=value;
    });
    return message;
}