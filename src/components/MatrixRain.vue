<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const canvasRef = ref(null);
const router = useRouter();

onMounted(() => {
  const C = canvasRef.value;
  const $ = C.getContext("2d");
  C.width = window.innerWidth;
  C.height = window.innerHeight;

  const str = "1 2 3 4 5 6 7 8 9 0 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я ! @ # $ % ^ & * ( ) _ + = - { } [ ] | \ : ; \" ' < > , . ? / ~ `";

  const matrix = str.split("");


  let font = window.innerWidth < 768 ? 8 : 11;
  const col = Math.floor(C.width / font);
  const arr = Array.from({ length: col }, () => C.height + 1);

  function draw() {
    $.fillStyle = "rgba(0,0,0,0.05)";
    $.fillRect(0, 0, C.width, C.height);

    $.fillStyle = "#0f0";
    $.font = `${font}px system-ui`;

    for (let i = 0; i < arr.length; i++) {
      const txt = matrix[Math.floor(Math.random() * matrix.length)];
      $.fillText(txt, i * font, arr[i] * font);

      if (arr[i] * font > C.height && Math.random() > 0.975) arr[i] = +-3;
      arr[i]++;
    }
  }

  setInterval(draw, 20);

  window.addEventListener("resize", () => {
    C.width = window.innerWidth;
    C.height = window.innerHeight;
  });

});
</script>

<template>
  <div class="matrix-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.matrix-container {
  margin: 0;
  padding: 0;
  background: #000;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}
canvas {
  display: block;
}
</style>