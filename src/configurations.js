const lights = [
  {
    console1: [1, 1],
    console2: [2, 12],
    node: {
      color: "white",
      number: 1
    }
  },
  {
    console1: [1, 1],
    console2: [4, 5],
    node: {
      color: "red",
      number: 2
    }
  },
  {
    console1: [1, 2],
    console2: [1, 4],
    node: {
      color: "red",
      number: 1
    }
  },
  {
    console1: [1, 7],
    console2: [12, 3],
    node: {
      color: "yellow",
      number: 3
    }
  },
  {
    console1: [1, 12],
    console2: [1, 1],
    node: {
      color: "cyan",
      number: 3
    }
  },
  {
    console1: [2, 4],
    console2: [1, 6],
    node: {
      color: "green",
      number: 2
    }
  },
  {
    console1: [2, 5],
    console2: [11, 2],
    node: {
      color: "yellow",
      number: 2
    }
  },

  {
    console1: [2, 6],
    console2: [5, 4],
    node: {
      color: "cyan",
      number: 1
    }
  },

  {
    console1: [2, 7],
    console2: [2, 11],
    node: {
      color: "yellow",
      number: 6
    }
  },

  {
    console1: [2, 9],
    console2: [12, 3],
    node: {
      color: "purple",
      number: 5
    }
  },

  {
    console1: [3, 3],
    console2: [1, 3],
    node: {
      color: "green",
      number: 7
    }
  },

  {
    console1: [4, 3],
    console2: [2, 4],
    node: {
      color: "green",
      number: 1
    }
  },

  {
    console1: [4, 3],
    console2: [2, 11],
    node: {
      color: "purple",
      number: 6
    }
  },

  {
    console1: [4, 6],
    console2: [5, 6],
    node: {
      color: "blue",
      number: 4
    }
  },

  {
    console1: [4, 8],
    console2: [12, 8],
    node: {
      color: "white",
      number: 5
    }
  },

  {
    console1: [4, 9],
    console2: [9, 4],
    node: {
      color: "yellow",
      number: 1
    }
  },

  {
    console1: [5, 6],
    console2: [7, 3],
    node: {
      color: "red",
      number: 5
    }
  },

  {
    console1: [5, 9],
    console2: [11, 7],
    node: {
      color: "purple",
      number: 7
    }
  },

  {
    console1: [6, 5],
    console2: [6, 10],
    node: {
      color: "purple",
      number: 1
    }
  },

  {
    console1: [6, 9],
    console2: [12, 10],
    node: {
      color: "white",
      number: 7
    }
  },

  {
    console1: [6, 11],
    console2: [11, 4],
    node: {
      color: "cyan",
      number: 4
    }
  },

  {
    console1: [7, 2],
    console2: [8, 3],
    node: {
      color: "white",
      number: 6
    }
  },

  {
    console1: [6, 11],
    console2: [11, 4],
    node: {
      color: "cyan",
      number: 4
    }
  },

  {
    console1: [7, 2],
    console2: [8, 3],
    node: {
      color: "white",
      number: 6
    }
  },

  {
    console1: [7, 4],
    console2: [2, 7],
    node: {
      color: "green",
      number: 5
    }
  },

  {
    console1: [7, 9],
    console2: [6, 5],
    node: {
      color: "yellow",
      number: 4
    }
  },

  {
    console1: [7, 12],
    console2: [1, 2],
    node: {
      color: "blue",
      number: 5
    }
  },

  {
    console1: [8, 4],
    console2: [5, 8],
    node: {
      color: "cyan",
      number: 2
    }
  },

  {
    console1: [8, 5],
    console2: [11, 8],
    node: {
      color: "cyan",
      number: 7
    }
  },

  {
    console1: [8, 6],
    console2: [2, 9],
    node: {
      color: "white",
      number: 3
    }
  },

  {
    console1: [8, 6],
    console2: [9, 2],
    node: {
      color: "yellow",
      number: 5
    }
  },

  {
    console1: [8, 10],
    console2: [5, 6],
    node: {
      color: "red",
      number: 3
    }
  },

  {
    console1: [8, 12],
    console2: [5, 9],
    node: {
      color: "cyan",
      number: 6
    }
  },

  {
    console1: [9, 3],
    console2: [12, 7],
    node: {
      color: "green",
      number: 3
    }
  },

  {
    console1: [9, 7],
    console2: [7, 8],
    node: {
      color: "purple",
      number: 4
    }
  },

  {
    console1: [9, 9],
    console2: [8, 10],
    node: {
      color: "purple",
      number: 2
    }
  },

  {
    console1: [10, 2],
    console2: [3, 8],
    node: {
      color: "white",
      number: 2
    }
  },

  {
    console1: [10, 3],
    console2: [2, 3],
    node: {
      color: "green",
      number: 4
    }
  },

  {
    console1: [10, 5],
    console2: [6, 2],
    node: {
      color: "blue",
      number: 2
    }
  },

  {
    console1: [10, 12],
    console2: [11, 5],
    node: {
      color: "green",
      number: 6
    }
  },

  {
    console1: [11, 1],
    console2: [5, 7],
    node: {
      color: "blue",
      number: 6
    }
  },

  {
    console1: [11, 4],
    console2: [2, 8],
    node: {
      color: "blue",
      number: 7
    }
  },

  {
    console1: [11, 4],
    console2: [4, 11],
    node: {
      color: "yellow",
      number: 7
    }
  },

  {
    console1: [11, 4],
    console2: [5, 4],
    node: {
      color: "red",
      number: 4
    }
  },

  {
    console1: [11, 6],
    console2: [12, 8],
    node: {
      color: "red",
      number: 7
    }
  },

  {
    console1: [11, 7],
    console2: [6, 3],
    node: {
      color: "purple",
      number: 3
    }
  },

  {
    console1: [11, 11],
    console2: [7, 3],
    node: {
      color: "blue",
      number: 3
    }
  },

  {
    console1: [12, 2],
    console2: [11, 4],
    node: {
      color: "cyan",
      number: 5
    }
  },

  {
    console1: [12, 5],
    console2: [7, 1],
    node: {
      color: "white",
      number: 4
    }
  },

  {
    console1: [12, 5],
    console2: [12, 11],
    node: {
      color: "blue",
      number: 1
    }
  }
];

export default lights;
