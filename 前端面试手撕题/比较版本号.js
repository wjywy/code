// let vsersion1 = '3.4.0'
// let version2 = '3.5.2'

const compareVersion = (version1, version2) => {
    const sion1 = version1.split(".")
    const sion2 = version2.split(".")
    const maxLength = Math.max(sion1.length, sion2.length)

    for (let i = 0; i < maxLength; i++) {
        let num1 = sion1[i] ? sion1[i] : 0
        let num2 = sion2[i] ? sion2[i] : 0
        if (num1 > num2) {
            return num1
        } else if (num1 < num2) {
            return num2
        } else continue
    }
    return 1
}
console.log(compareVersion('3.4.0', '3.5.2'))