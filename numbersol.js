function solution() {
    const iter = "1,3,545,6767,8,9-9,9994_33$$33,33!334";
    var sum = 0
    for (var i = 0; i < iter.length; i++) {
        try {
            sum = sum + Number(i)
        }
        catch {
            continue
        }
    }
    return sum
}
console.log(solution())