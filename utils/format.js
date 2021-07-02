

export const formatMoney = (num) => {
    const numberStringArray =  num.toString().split('')
    const formatted = numberStringArray.reverse().reduce((accumulator, current, i, array) => {
        if (i === 1) {
            return accumulator + current + ',00'
        }
        if ((i + 1) % 3 === 0) {
            return '.' + current + accumulator
        }
        return current + accumulator
    })
    const withCurrency = 'R$ ' + formatted
    return withCurrency
}