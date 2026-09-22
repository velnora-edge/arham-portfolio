
const FloatingPetals = () => {
  const petals = Array.from({ length: 22 }, (_, index) => ({
    id: index,
    left: `${(index * 47) % 100}%`,
    delay: `${(index * 1.7) % 12}s`,
    duration: `${10 + ((index * 3) % 9)}s`,
    size: `${10 + ((index * 5) % 10)}px`,
    rotation: `${(index * 37) % 360}deg`,
  }));

  return (
    <div className="floating-petals" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: petal.size,
            transform: `rotate(${petal.rotation})`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;