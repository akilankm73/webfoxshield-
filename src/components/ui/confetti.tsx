import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import confetti from 'canvas-confetti';

type ConfettiSideCannons = {
  triggerAnimation: () => void;
};

const ConfettiSideCannons = forwardRef((props, ref) => {
  const handleClick = () => {
    const end = Date.now() + 0.1 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  useImperativeHandle(ref, () => ({
    triggerAnimation: handleClick,
  }));

  return (
    <div className="relative">
      {/* <Button onClick={handleClick}>Trigger Side Cannons</Button> */}
    </div>
  );
});

ConfettiSideCannons.displayName = 'ConfettiSideCannons';

export { ConfettiSideCannons };