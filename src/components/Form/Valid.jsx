export const Valid = (date) => {
    if (!/^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).\d\d$/.test(date)) {
        return false;
    } else {
        return true;
    }
};
