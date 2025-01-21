export function initializeImageTrackHandlers(): void {
  const track = document.getElementById("image-track") as HTMLDivElement | null;

  if (!track) {
    console.error("Element with ID 'image-track' not found.");
    return;
  }

  // Инициализация data-* атрибутов
  track.dataset.mouseDownAt = "0";
  track.dataset.percentage = "0";
  track.dataset.prevPercentage = "0";

  // Обработчик нажатия мыши или тачскрина
  const handleOnDown = (e: MouseEvent | Touch) => {
    track.dataset.mouseDownAt = e.clientX.toString();
  };

  // Обработчик отпускания мыши или тачскрина
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage || "0";
  };

  // Обработчик перемещения мыши или тачскрина
  const handleOnMove = (e: MouseEvent | Touch) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt || "0") - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage || "0") + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage.toString();

    // Анимация контейнера
    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    // Анимация изображений
    for (const image of track.getElementsByClassName("image") as HTMLCollectionOf<HTMLImageElement>) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  // Привязка событий
  track.onmousedown = (e) => handleOnDown(e as MouseEvent);
  track.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = handleOnUp;
  window.ontouchend = handleOnUp;

  track.onmousemove = (e) => handleOnMove(e as MouseEvent);
  track.ontouchmove = (e) => handleOnMove(e.touches[0]);
}
