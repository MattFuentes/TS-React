(() => {

    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10,
    }

    let currentAudio = AudioLevel.max;
    console.log(currentAudio)
    console.log(AudioLevel)

    enum enumeracion {
        a=10,
        b,
        c=9,
        d
      }
      console.log(enumeracion)
})()