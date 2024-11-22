document.addEventListener("DOMContentLoaded", () => {
    const lightning = document.querySelector(".lightning");
  
    // 번개의 색을 랜덤하게 변화시킴
    setInterval(() => {
      const randomColor = `rgba(255, 255, ${Math.floor(Math.random() * 255)}, 0.9)`;
      lightning.style.backgroundColor = randomColor;
    }, 500);

    setTimeout(() => {
        loadingScreen.style.display = "none"; // 완전히 숨김
      }, 3000); // transition 시간(1초)과 맞추기
  });
  
  