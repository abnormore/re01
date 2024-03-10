// 创建一个对象来存储音频元素和播放状态
const audioPlayers = {
  text1: { audio: new Audio("MP3\\1.MP3"), playing: false },
  text2: { audio: new Audio("MP3\\2.MP3"), playing: false },
  text3: { audio: new Audio("MP3\\3.MP3"), playing: false },
  text4: { audio: new Audio("MP3\\4.MP3"), playing: false },
  text5: { audio: new Audio("MP3\\5.MP3"), playing: false },
  text6: { audio: new Audio("MP3\\6.MP3"), playing: false },
  text7: { audio: new Audio("MP3\\7.MP3"), playing: false },
  text8: { audio: new Audio("MP3\\8.MP3"), playing: false },
  text9: { audio: new Audio("MP3\\9.MP3"), playing: false },
  text10: { audio: new Audio("MP3\\10.MP3"), playing: false },
  text11: { audio: new Audio("MP3\\11.MP3"), playing: false },
  text12: { audio: new Audio("MP3\\12.MP3"), playing: false },
  text13: { audio: new Audio("MP3\\13.MP3"), playing: false },
  text14: { audio: new Audio("MP3\\14.MP3"), playing: false },
  text15: { audio: new Audio("MP3\\15.MP3"), playing: false },
  text16: { audio: new Audio("MP3\\16.MP3"), playing: false },
  text17: { audio: new Audio("MP3\\17.MP3"), playing: false },
  text18: { audio: new Audio("MP3\\18.MP3"), playing: false },
  text19: { audio: new Audio("MP3\\19.MP3"), playing: false },
  text20: { audio: new Audio("MP3\\20.MP3"), playing: false },
  text21: { audio: new Audio("MP3\\21.MP3"), playing: false },
  text22: { audio: new Audio("MP3\\22.MP3"), playing: false },
  text23: { audio: new Audio("MP3\\23.MP3"), playing: false },
  text24: { audio: new Audio("MP3\\23.MP3"), playing: false },
  text25: { audio: new Audio("MP3\\23.MP3"), playing: false },
  text26: { audio: new Audio("MP3\\26.MP3"), playing: false },
  text27: { audio: new Audio("MP3\\27.MP3"), playing: false },
  text28: { audio: new Audio("MP3\\28.MP3"), playing: false },
  text29: { audio: new Audio("MP3\\29.MP3"), playing: false },
  text30: { audio: new Audio("MP3\\30.MP3"), playing: false },
  text31: { audio: new Audio("MP3\\31.MP3"), playing: false },
  text32: { audio: new Audio("MP3\\32.MP3"), playing: false },
  text33: { audio: new Audio("MP3\\33.MP3"), playing: false },
  text34: { audio: new Audio("MP3\\34.MP3"), playing: false },
  text35: { audio: new Audio("MP3\\35.MP3"), playing: false },
  text36: { audio: new Audio("MP3\\36.MP3"), playing: false },
  text37: { audio: new Audio("MP3\\37.MP3"), playing: false },
  text38: { audio: new Audio("MP3\\38.MP3"), playing: false },
  text39: { audio: new Audio("MP3\\39.MP3"), playing: false },
  text40: { audio: new Audio("MP3\\40.MP3"), playing: false },
  text41: { audio: new Audio("MP3\\41.MP3"), playing: false },
  text42: { audio: new Audio("MP3\\42.MP3"), playing: false },
  text43: { audio: new Audio("MP3\\43.MP3"), playing: false },
  text44: { audio: new Audio("MP3\\44.MP3"), playing: false },
  text45: { audio: new Audio("MP3\\45.MP3"), playing: false },
  text46: { audio: new Audio("MP3\\46.MP3"), playing: false },
  text47: { audio: new Audio("MP3\\47.MP3"), playing: false },
  text48: { audio: new Audio("MP3\\48.MP3"), playing: false },
  text49: { audio: new Audio("MP3\\49.MP3"), playing: false },
  text50: { audio: new Audio("MP3\\50.MP3"), playing: false },
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
