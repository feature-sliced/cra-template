/** 
 * Остановить основной поток программы на некоторое время
 */
export const sleep = (timeout = 1000) => {
    return new Promise((resolve) => setTimeout(() => resolve(), timeout));
};
