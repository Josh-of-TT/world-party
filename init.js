import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

document.getElementById('header-sticky').animate(
    { transform: ['translateY(-240px)', 'translateY(60px)']},
    { duration: 10000, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
              new CSSUnitValue(400, 'px'),
              new CSSUnitValue(600, 'px')
          ]
      })
    });
