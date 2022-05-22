if (!customElements.get('lay-grad')) {
  customElements.define('lay-grad', class LayGrad extends HTMLElement {
    constructor() {
      super();
      console.log("Laygrad")
      const heroimg_url = this.dataset.heroimg;
      this.setHV(heroimg_url);
    }
    loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
        img.src = src;
      });
    };
    setHV = async (src) => {
      try {
        const res = await this.loadImage(src);
        const img_aspect = res.width / res.height;
        const div_aspect = this.offsetWidth / this.offsetHeight;
        this.style.setProperty("--laygrad--hero-url",` url('${src}')`);

        if( img_aspect > div_aspect ){
          //console.log("yokonaga")
          this.classList.add("laygrad--heroimg--v");
        }
        else{
          //console.log("tatenaga")
          this.classList.add("laygrad--heroimg--h");
        }

      } catch (e) {
        console.log('onload error', e);
      }
    };
  });
}
