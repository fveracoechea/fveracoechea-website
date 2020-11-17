export default {
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: '#000000'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 2,
        color: '#000000'
      },
      polygon: {
        'nb_sides': 5
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      bubble: {
        distance: 255,
        size: 10,
        duration: 2,
        opacity: 1,
      },
      repulse: {
        distance: 200
      }
    }
  }
}