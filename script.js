// 创建一个对象来存储音频元素和播放状态
const audioPlayers = {
  text1: { audio: new Audio("MP3\\1.MP3"), playing: false },
  text2: { audio: new Audio("MP3\\1.MP3"), playing: false },
  text3: { audio: new Audio("MP3\\1.MP3"), playing: false },
  // 添加更多音频，如果有的话
};

// 播放或暂停音频
function toggleAudio(elementId) {
  const player = audioPlayers[elementId];
  if (player.playing) {
    player.audio.pause();
    player.playing = false;
  } else {
    // 停止其他所有音频
    Object.values(audioPlayers).forEach((player) => {
      if (player !== audioPlayers[elementId] && player.playing) {
        player.audio.pause();
        player.playing = false;
      }
    });
    player.audio.play();
    player.playing = true;
  }
}

// 重置音频播放（从头开始）
function resetAudio(elementId) {
  const player = audioPlayers[elementId];
  player.audio.pause();
  player.audio.currentTime = 0;
  player.playing = false;
  toggleAudio(elementId);
}

// 绑定事件监听器到每个文本段落
document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll("p");
  textElements.forEach((element) => {
    element.addEventListener("click", () => {
      const elementId = element.id;
      // 判断是单击还是双击
      const now = new Date().getTime();
      if (element.lastClick && now - element.lastClick < 300) {
        // 如果是双击（在300毫秒内两次点击）
        resetAudio(elementId);
      } else {
        // 如果是单击
        toggleAudio(elementId);
      }
      element.lastClick = now;
    });
  });
});
