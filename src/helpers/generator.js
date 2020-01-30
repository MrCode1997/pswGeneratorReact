export default () => {
    const chars = 'abcdefghijklmnopqrstuvz1234567890_.!?'
    const len = 10;
    let code = '';
    for ( let i = 0; i < len; i++ ) {
      code += chars[ ~~( Math.random() * chars.length ) ]
    }
    return code;
}
