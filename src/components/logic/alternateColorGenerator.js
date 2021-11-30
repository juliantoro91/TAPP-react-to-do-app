const colors = [
    "--emphasis1",
    "--emphasis2",
    "--emphasis3",
    "--emphasis4",
    "--emphasis5",
    "--emphasis6",
  ]
  
  function* alternateColorGenerator() {
    let id = 0;
    while(true) {
      yield colors[id];
      id++;
      if (id >= colors.length) {
          id = 0;
      }
    }
  }

  export { alternateColorGenerator };