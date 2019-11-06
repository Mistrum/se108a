//請用不同方式寫三個程式解決下列遞迴問題：

//f(n) = 3*f(n-1) + 2*f(n-2)
//f(0) = 0, f(1) = 1
//方式列表：

//遞迴要查表 （快）
//答案核對：

//n    = 0  1  2  3   4    5  ....
//f(n) = 0  1  3 11  39  139  ....

var f = [0,1];

function fibonacci(n){
    if(f[n]!=null)return f[n];
    f[n] = 3*(fibonacci(n - 1)) + 2*(fibonacci(n - 2));
    return f[n];
}

console.log("fibonacci()=",fibonacci(5));