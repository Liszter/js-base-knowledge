 inner = 'window';

function say() {
    console.log(inner);
    console.log(this.inner);
}

var obj1 = (function() {
    var inner = '1-1';
    return {
        inner: '1-2',
        say: function() {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();

var obj2 = (function() {
    var inner = '2-1';
    return {
        inner: '2-2',
        say: function() {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();


say();
obj1.say();
obj2.say();
obj1.say = say;
obj1.say();
obj1.say = obj2.say;
obj1.say();






// 
function a () {
    var t = "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd"
    , a = "10001"
    , n = Q.crypto.rsa.RSAUtils.getKeyPair(a, "", t)
    , i = Q.crypto.rsa.RSAUtils.encryptedString(n, encodeURIComponent(e)).replace(/\s/g, "-");
}