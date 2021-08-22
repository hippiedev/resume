var timeline = new TimelineLite();

timeline
  .to("#box1", 0.5, {
    width: "0",
    ease: Power4.easeIn,
    delay: "0.5",
  })
  .to("#box2", 1, {
    width: "0",
    ease: Power3.easeOut,
    delay: "0",
  })
  .fromTo(
    "#text",
    0.5,
    { y: -45, opacity: 0 },
    {y: 0, opacity: 1 }
  );
