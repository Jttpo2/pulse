class Pulse extends Program {
  constructor(lightArray) {
    super(lightArray);

    this.currentLightIndex = 0;

    this.fadeTime = 370;
  }

  update() {
    super.update();

    if (this.isActive) {
      this.lightUpCurrent();

      if (this.isTimeForUpdate()) {
        this.fadeCurrent();
        this.next();
        this.lightUpCurrent();
        this.lastChange = millis();
      }
    }
  }

}
