var black_line = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var frame_line = [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0];
var editor = {
  draw: false,
  current_color: "#000",
  colors: [
    "#000", "#ccc", "#eee", "#fff"
  ],
  matrix: [
    black_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    frame_line,
    black_line
  ]
};