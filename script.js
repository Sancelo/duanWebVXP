const canvas = document.getElementById('curveCanvas');
const ctx = canvas.getContext('2d');

// Đặt kích thước canvas theo kích thước của div bao quanh
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

// Tạo gradient ngang qua canvas
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

// Thêm màu cho gradient, bạn có thể thêm nhiều màu tùy ý
gradient.addColorStop(0, 'blue');    // Điểm bắt đầu (màu đỏ)
gradient.addColorStop(0.25, 'purple');    // Điểm bắt đầu (màu đỏ)
gradient.addColorStop(0.5, 'red'); // Điểm giữa (màu xanh)
gradient.addColorStop(0.75, 'purple');    // Điểm bắt đầu (màu đỏ)
gradient.addColorStop(1, 'blue'); // Điểm kết thúc (màu tím)

// Các điểm cho đường cong để phủ toàn bộ chiều rộng canvas
const startX = 0;               // Bắt đầu từ góc trái
const startY = canvas.height;   // Bắt đầu từ dưới cùng của canvas
const endX = canvas.width;      // Kết thúc ở góc phải
const controlX = canvas.width / 2;  // Điểm điều khiển ở giữa chiều rộng
const controlY = canvas.height * 0.1; // Đặt controlY để đường cong sát với banner

ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.quadraticCurveTo(controlX, controlY, endX, startY);
ctx.strokeStyle = gradient; // Sử dụng gradient làm màu cho đường cong
ctx.lineWidth = 3;
ctx.stroke();
