//請用不同方式寫三個程式解決下列遞迴問題：

//f(n) = 3*f(n-1) + 2*f(n-2)
//f(0) = 0, f(1) = 1
//方式列表：
//不用遞迴 （快）

//答案核對：
//n    = 0  1  2  3   4    5  ....
//f(n) = 0  1  3 11  39  139  ....

function f(n){
    if(n==0||n==1)return n;
    var a=0;
    var b=1;
    for(i=1;i<n;i++){
        s=3*b+2*a;
        a=b;
        b=s;
    }
    return b;
}

console.log("f(5)=",f(5));