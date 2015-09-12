var s = Snap("#svg");

s.mousedown(function(){
  editor.draw = true;
});
s.mouseup(function(){
  editor.draw = false;
});

var palette = Snap("#palette");

var palette_controls = [];

for (var color=0; color < editor.colors.length; color++){
  palette_controls.push(new Pixel({
    x: color,
    y: 0,
    where: palette,
    callbacks: {
      "click": function(){
        editor.current_color = this.attr().fill;
      }
    }
  }));
  palette_controls[color].attr({
    fill: editor.colors[color]
  });
}

var pixels = [];

for (var i = 0; i < editor.matrix.length; i++) {
  pixels.push([]);
  for (var j = 0; j < editor.matrix[i].length; j++) {
    pixels[i].push(new Pixel({
      x: j,
      y: i,
      where: s,
      callbacks: {
        "mouseover": function(){
          if (editor.draw) {
            this.attr({
              fill: editor.current_color
            });
          }
        },
        "mousedown": function () {
          this.attr({
            fill: editor.current_color
          });
        }
      }
    }));
    pixels[i][j].attr({
      fill: editor.colors[editor.matrix[i][j]]
    });
  }
}

var a = document.getElementById("dl");
a.onclick = function() {
  a.download = "image.svg";
  a.href = s.toDataURL();
};
