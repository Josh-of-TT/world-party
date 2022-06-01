import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

document.getElementById('header-sticky').animate(
    { transform: ['translateY(-260px)', 'translateY(-40px)']},
    { duration: 10000, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
              new CSSUnitValue(200, 'px'), // start showing
              new CSSUnitValue(600, 'px') // end position
          ]
      })
    });
