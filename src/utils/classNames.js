export default function classNames(...args) {
  return args
    .reduce((acc, val) => {
      if (typeof val === 'string') {
        console.log('hi');
        return acc.concat(val.split(' '));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(' ');
}
