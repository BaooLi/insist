let public = (function () {
    function toArray(args) {
        return [...args]
    }

    function children(ele, tag) {
        let kid = ele.children;
        let ary = []
        for (let i = 0; i < kid.length; i++) {
            if (kid[i].tagName == tag.toUpperCase()) {
                ary.push(kid[i])
            }
        }
        return ary
    }

    function prevAll(ele) {
        let ary=[];
        let prev=ele.previousElementSibling;
        while (prev){
            ary.unshift(prev);
            prev=prev.previousElementSibling
        }
        return ary;
    }

    return {
        toArray,
        children,
        prevAll
    }
})();
console.log(public);