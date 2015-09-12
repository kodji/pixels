class Pixel {
  constructor (o) {
    var opts = {
      x: 10 * o.x,
      y: 10 * o.y,
      width: 10,
      height: 10,
      generator: o.where,
      callbacks: o.callbacks
    };
    var p = opts.generator.rect(
        opts.x,
        opts.y,
        opts.width,
        opts.height
    );
    if (opts.callbacks) {
      for (var i in opts.callbacks) {
        if (opts.callbacks.hasOwnProperty(i)){
          p[i](opts.callbacks[i]);
        }
      }
    }
    return p;
  }
}
