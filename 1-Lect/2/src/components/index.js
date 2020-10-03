import B from './b.js'
import c from './c.js'


export default () => {
    // b.init();
    let b = new B('some_name');
    let b1 = new B('qwert');

    console.log(b, b1)
    c.init();

    console.log(c)
}