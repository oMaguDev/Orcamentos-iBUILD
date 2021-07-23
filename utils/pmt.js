

export const pmt = (rate, nper, pmt) => {
    return pmt * 100 / rate * (1 - Math.pow(1 + rate, -nper));
}