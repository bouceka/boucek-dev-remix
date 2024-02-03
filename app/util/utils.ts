/**
 * @param {() => {}} func
 * @param {number} delay
 * @param {{ leading: boolean }} options
 */
export function debounce(func, delay, { leading } = {}) {
    let timerId: string | number | NodeJS.Timeout | undefined;
  
    return (...args: any) => {
      if (!timerId && leading) {
        func(...args);
      }
      clearTimeout(timerId);
  
      timerId = setTimeout(() => func(...args), delay);
    };
  }