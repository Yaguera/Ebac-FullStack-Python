function funcaoPadrao(callback){
    console.log("EXECUTADO VIA GULP");
    callback()
}

function dizOi(callback){
    console.log("oi")
    callback()
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;