const swing = document.getElementById("swing");
const rope = document.getElementById("rope");
const wrapper = document.getElementById("swing-wrapper");
const bgAudio = document.getElementById("bgAudio");
const muteBtn = document.getElementById("muteBtn");
function swingFrontBack() {
  const tl = gsap.timeline();

  tl.to([swing, rope], {
    rotateX: -15,
    scale: 1.05,
    scaleY: 1.05, // stretch
    duration: 0.5,
    ease: "power1.inOut"
  })
  .to([swing, rope], {
    rotateX: 15,
    scale: 0.95,
    scaleY: 0.95, // slight squash
    yoyo: true,
    repeat: 3,
    duration: 0.5,
    ease: "power1.inOut"
  })
  .to([swing, rope], {
    rotateX: 0,
    scale: 1,
    duration: 0.3,
    ease: "power1.out"
  });
}

// const swing = document.getElementById("swing");

//     function swingFrontBack() {
//       const tl = gsap.timeline();

//       // simulate front-back motion using scale and rotation
//       tl.to(swing, {
//         rotateX: -15,
//         scale: 1.05,
//         duration: 0.5,
//         ease: "power1.inOut"
//       })
//       .to(swing, {
//         rotateX: 15,
//         scale: 0.95,
//         yoyo: true,
//         repeat: 3,
//         duration: 0.5,
//         ease: "power1.inOut"
//       })
//       .to(swing, {
//         rotateX: 0,
//         scale: 1,
//         duration: 0.3,
//         ease: "power1.out"
//       });
//     }

function offerFlowers() {
      const flowerCount = Math.floor(Math.random() * 8) + 8; // 8 to 15
      for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.innerText = "🌸";
        document.body.appendChild(flower);

        const startX = (Math.random() * 100 - 50);
        const startY = 10;
        const endX = startX + (Math.random() * 100 - 150);
        const endY = wrapper.offsetTop + wrapper.offsetHeight - 100;

        gsap.set(flower, {
          x: endX,
          y: endY,
          rotation: Math.random() * 360
        });

        gsap.to(flower, {
          x: startX,
          y: startY,
          rotation: "+=" + (Math.random() * 180 - 90),
          scale: Math.random() * 0.5 + 0.8,
          opacity: 0,
          duration: 2.5,
          ease: "power2.out",
          // onComplete: () => flower.remove()
        });
      }
    }

function handleTap() {
      swingFrontBack();
      offerFlowers();
    }

    wrapper.addEventListener("click", handleTap);
    wrapper.addEventListener("touchstart", handleTap);

    // document.getElementById("swing-wrapper").addEventListener("click", swingFrontBack);
    // document.getElementById("swing-wrapper").addEventListener("touchstart", swingFrontBack);
document.body.addEventListener("click", () => {
  if (bgAudio.paused) {
    bgAudio.play();
  }
}, { once: true });

muteBtn.addEventListener("click", () => {
  bgAudio.muted = !bgAudio.muted;
  muteBtn.textContent = bgAudio.muted ? "🔇" : "🔊";
});