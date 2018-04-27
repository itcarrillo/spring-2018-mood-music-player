function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const samples = [
  { danceability: 0.509, energy: 0.842, key: 10, loudness: -4.611, mode: 0, valence: 0.356, tempo: 149.843 },
  { danceability: 0.609, energy: 0.726, key: 5, loudness: -4.346, mode: 0, valence: 0.362, tempo: 93.958 },
  { danceability: 0.449, energy: 0.599, key: 1, loudness: -4.892, mode: 1, valence: 0.165, tempo: 134.144 },
  { danceability: 0.474, energy: 0.594, key: 11, loudness: -5.756, mode: 1, valence: 0.503, tempo: 86.131 },
  { danceability: 0.687, energy: 0.587, key: 1, loudness: -5.772, mode: 0, valence: 0.676, tempo: 156.575 },
  { danceability: 0.651, energy: 0.568, key: 5, loudness: -6.774, mode: 1, valence: 0.805, tempo: 93.006 },
  { danceability: 0.588, energy: 0.408, key: 3, loudness: -8.662, mode: 1, valence: 0.484, tempo: 85.008 },
  { danceability: 0.709, energy: 0.562, key: 5, loudness: -4.864, mode: 1, valence: 0.386, tempo: 125.965 },
  { danceability: 0.707, energy: 0.632, key: 10, loudness: -7.031, mode: 1, valence: 0.372, tempo: 97.04 },
  { danceability: 0.631, energy: 0.599, key: 7, loudness: -6.137, mode: 0, valence: 0.727, tempo: 170.122 },
  { danceability: 0.675, energy: 0.748, key: 1, loudness: -3.947, mode: 1, valence: 0.469, tempo: 149.923 },
  { danceability: 0.471, energy: 0.755, key: 11, loudness: -6.612, mode: 0, valence: 0.512, tempo: 154.801 },
  { danceability: 0.665, energy: 0.725, key: 7, loudness: -6.588, mode: 0, valence: 0.703, tempo: 101.96 },
  { danceability: 0.697, energy: 0.521, key: 5, loudness: -6.519, mode: 1, valence: 0.331, tempo: 91.998 },
  { danceability: 0.708, energy: 0.648, key: 6, loudness: -5.626, mode: 1, valence: 0.338, tempo: 143.955 },
  { danceability: 0.791, energy: 0.862, key: 9, loudness: -3.24, mode: 0, valence: 0.592, tempo: 123.994 },
  { danceability: 0.745, energy: 0.652, key: 7, loudness: -3.099, mode: 1, valence: 0.409, tempo: 106.809 },
  { danceability: 0.677, energy: 0.682, key: 9, loudness: -6.879, mode: 1, valence: 0.875, tempo: 106.279 },
  { danceability: 0.862, energy: 0.515, key: 0, loudness: -6.927, mode: 1, valence: 0.751, tempo: 129.055 },
  { danceability: 0.738, energy: 0.937, key: 9, loudness: -7.788, mode: 0, valence: 0.614, tempo: 131.994 },
  { danceability: 0.869, energy: 0.887, key: 0, loudness: -4.505, mode: 1, valence: 0.784, tempo: 129.221 },
  { danceability: 0.633, energy: 0.673, key: 6, loudness: -6.403, mode: 0, valence: 0.659, tempo: 86.776 },
  { danceability: 0.736, energy: 0.811, key: 9, loudness: -4.17, mode: 0, valence: 0.609, tempo: 103.502 },
  { danceability: 0.531, energy: 0.805, key: 2, loudness: -7.127, mode: 1, valence: 0.349, tempo: 129.107 },
  { danceability: 0.586, energy: 0.7, key: 0, loudness: -9.558, mode: 1, valence: 0.897, tempo: 147.245 },
  { danceability: 0.58, energy: 0.981, key: 8, loudness: -2.603, mode: 0, valence: 0.861, tempo: 134.007 },
  { danceability: 0.694, energy: 0.881, key: 1, loudness: -4.053, mode: 0, valence: 0.924, tempo: 121.554 },
  { danceability: 0.78, energy: 0.629, key: 9, loudness: -6.809, mode: 0, valence: 0.612, tempo: 120.014 },
  { danceability: 0.615, energy: 0.97, key: 9, loudness: 1.342, mode: 0, valence: 0.507, tempo: 122.993 },
  { danceability: 0.509, energy: 0.538, key: 7, loudness: -7.335, mode: 1, valence: 0.244, tempo: 75.089 },
  { danceability: 0.796, energy: 0.591, key: 6, loudness: -7.887, mode: 1, valence: 0.813, tempo: 199.893 },
  { danceability: 0.66, energy: 0.536, key: 10, loudness: -8.786, mode: 0, valence: 0.775, tempo: 159.963 },
  { danceability: 0.53, energy: 0.904, key: 0, loudness: -3.614, mode: 1, valence: 0.923, tempo: 121.962 },
  { danceability: 0.756, energy: 0.718, key: 0, loudness: -4.635, mode: 1, valence: 0.776, tempo: 102.891 },
  { danceability: 0.934, energy: 0.49, key: 1, loudness: -5.972, mode: 1, valence: 0.702, tempo: 103.06 },
  { danceability: 0.46, energy: 0.873, key: 0, loudness: -7.96, mode: 1, valence: 0.485, tempo: 146.247 },
  { danceability: 0.684, energy: 0.67, key: 1, loudness: -11.574, mode: 1, valence: 0.292, tempo: 131.167 },
  { danceability: 0.599, energy: 0.785, key: 3, loudness: -4.013, mode: 1, valence: 0.52, tempo: 140.046 },
  { danceability: 0.625, energy: 0.85, key: 4, loudness: -3.904, mode: 1, valence: 0.633, tempo: 94.661 },
  { danceability: 0.583, energy: 0.482, key: 2, loudness: -7.261, mode: 1, valence: 0.586, tempo: 103.067 },
  { danceability: 0.502, energy: 0.43, key: 2, loudness: -7.694, mode: 1, valence: 0.348, tempo: 103.804 },
  { danceability: 0.621, energy: 0.901, key: 2, loudness: -5.396, mode: 1, valence: 0.744, tempo: 113.967 },
  { danceability: 0.781, energy: 0.556, key: 5, loudness: -13.067, mode: 0, valence: 0.968, tempo: 125.999 },
  { danceability: 0.611, energy: 0.846, key: 11, loudness: -5.9, mode: 1, valence: 0.751, tempo: 103.912 },
  { danceability: 0.566, energy: 0.825, key: 11, loudness: -4.504, mode: 1, valence: 0.278, tempo: 94.991 },
  { danceability: 0.852, energy: 0.537, key: 7, loudness: -7.424, mode: 1, valence: 0.483, tempo: 100.369 },
  { danceability: 0.537, energy: 0.606, key: 2, loudness: -7.048, mode: 1, valence: 0.582, tempo: 128.73 },
  { danceability: 0.765, energy: 0.788, key: 3, loudness: -9.896, mode: 1, valence: 0.964, tempo: 126.879 },
  { danceability: 0.394, energy: 0.151, key: 3, loudness: -16.748, mode: 1, valence: 0.31, tempo: 178.051 },
  { danceability: 0.613, energy: 0.953, key: 2, loudness: -3.435, mode: 1, valence: 0.537, tempo: 105.046 },
  { danceability: 0.566, energy: 0.57, key: 11, loudness: -9.875, mode: 0, valence: 0.491, tempo: 134.537 },
  { danceability: 0.774, energy: 0.75, key: 11, loudness: -4.927, mode: 0, valence: 0.925, tempo: 118.015 },
  { danceability: 0.699, energy: 0.812, key: 0, loudness: -6.005, mode: 1, valence: 0.662, tempo: 138.185 },
  { danceability: 0.488, energy: 0.417, key: 9, loudness: -10.775, mode: 1, valence: 0.418, tempo: 87.634 },
  { danceability: 0.801, energy: 0.985, key: 7, loudness: -2.69, mode: 1, valence: 0.72, tempo: 127.99 },
  { danceability: 0.617, energy: 0.886, key: 9, loudness: -5.953, mode: 1, valence: 0.629, tempo: 96.328 },
  { danceability: 0.534, energy: 0.605, key: 9, loudness: -4.366, mode: 1, valence: 0.56, tempo: 123.003 },
  { danceability: 0.465, energy: 0.843, key: 2, loudness: -6.011, mode: 0, valence: 0.636, tempo: 140.056 },
  { danceability: 0.629, energy: 0.914, key: 6, loudness: -7.344, mode: 0, valence: 0.724, tempo: 131.961 },
  { danceability: 0.673, energy: 0.901, key: 2, loudness: -2.379, mode: 1, valence: 0.503, tempo: 100.002 },
  { danceability: 0.743, energy: 0.807, key: 1, loudness: -3.78, mode: 1, valence: 0.899, tempo: 144.062 },
  { danceability: 0.683, energy: 0.772, key: 7, loudness: -7.907, mode: 0, valence: 0.737, tempo: 123.871 },
  { danceability: 0.714, energy: 0.905, key: 8, loudness: -2.663, mode: 1, valence: 0.838, tempo: 125.927 },
  { danceability: 0.618, energy: 0.955, key: 4, loudness: -3.836, mode: 1, valence: 0.79, tempo: 150.034 },
  { danceability: 0.46, energy: 0.786, key: 1, loudness: -5.238, mode: 1, valence: 0.408, tempo: 103.192 },
  { danceability: 0.417, energy: 0.229, key: 0, loudness: -12.602, mode: 1, valence: 0.227, tempo: 81.006 },
  { danceability: 0.743, energy: 0.675, key: 8, loudness: -4.267, mode: 0, valence: 0.59, tempo: 92.909 },
  { danceability: 0.647, energy: 0.444, key: 5, loudness: -6.781, mode: 1, valence: 0.387, tempo: 108.625 },
  { danceability: 0.63, energy: 0.946, key: 0, loudness: -4.22, mode: 1, valence: 0.539, tempo: 113.839 },
  { danceability: 0.36, energy: 0.257, key: 7, loudness: -9.655, mode: 1, valence: 0.13, tempo: 76.972 },
  { danceability: 0.576, energy: 0.39, key: 10, loudness: -7.202, mode: 1, valence: 0.319, tempo: 73.433 },
  { danceability: 0.519, energy: 0.145, key: 3, loudness: -19.581, mode: 1, valence: 0.487, tempo: 158.975 },
  { danceability: 0.587, energy: 0.271, key: 10, loudness: -7.761, mode: 1, valence: 0.291, tempo: 141.801 },
  { danceability: 0.746, energy: 0.576, key: 1, loudness: -8.64, mode: 1, valence: 0.124, tempo: 134.944 },
  { danceability: 0.653, energy: 0.818, key: 5, loudness: -8.125, mode: 1, valence: 0.198, tempo: 174.984 },
  { danceability: 0.63, energy: 0.884, key: 1, loudness: -5.674, mode: 1, valence: 0.289, tempo: 110.07 },
  { danceability: 0.695, energy: 0.827, key: 3, loudness: -4.202, mode: 1, valence: 0.762, tempo: 121.05 },
  { danceability: 0.442, energy: 0.456, key: 7, loudness: -9.639, mode: 1, valence: 0.158, tempo: 147.977 },
  { danceability: 0.635, energy: 0.853, key: 0, loudness: -3.926, mode: 1, valence: 0.372, tempo: 112.964 }
  /*
  { danceability: 0.389, energy: 0.0851, key: 5, loudness: -15.477, mode: 1, valence: 0.364, tempo: 184.298 },
  { danceability: 0.549, energy: 0.371, key: 2, loudness: -9.56, mode: 1, valence: 0.13, tempo: 87.024 },
  { danceability: 0.783, energy: 0.503, key: 2, loudness: -9.119, mode: 0, valence: 0.435, tempo: 120.053 },
  { danceability: 0.352, energy: 0.061, key: 10, loudness: -21.414, mode: 1, valence: 0.452, tempo: 103.732 },
  { danceability: 0.52, energy: 0.852, key: 0, loudness: -5.866, mode: 1, valence: 0.234, tempo: 140.267 },
  { danceability: 0.708, energy: 0.843, key: 7, loudness: -2.678, mode: 1, valence: 0.633, tempo: 148.164 },
  { danceability: 0.511, energy: 0.936, key: 2, loudness: -6.966, mode: 1, valence: 0.905, tempo: 146.822 },
  { danceability: 0.672, energy: 0.546, key: 4, loudness: -6.992, mode: 0, valence: 0.429, tempo: 138.887 },
  { danceability: 0.243, energy: 0.313, key: 3, loudness: -12.069, mode: 1, valence: 0.22, tempo: 92.975 },
  { danceability: 0.557, energy: 0.54, key: 9, loudness: -10.484, mode: 1, valence: 0.394, tempo: 129.171 },
  { danceability: 0.316, energy: 0.288, key: 7, loudness: -8.022, mode: 1, valence: 0.27, tempo: 73.744 },
  { danceability: 0.572, energy: 0.853, key: 1, loudness: -3.203, mode: 1, valence: 0.102, tempo: 171.297 },
  { danceability: 0.623, energy: 0.493, key: 5, loudness: -7.727, mode: 0, valence: 0.594, tempo: 81.019 },
  { danceability: 0.572, energy: 0.209, key: 8, loudness: -10.413, mode: 1, valence: 0.446, tempo: 80.069 },
  { danceability: 0.475, energy: 0.209, key: 0, loudness: -14.442, mode: 1, valence: 0.3, tempo: 112.725 },
  { danceability: 0.533, energy: 0.376, key: 9, loudness: -11.913, mode: 0, valence: 0.187, tempo: 165.007 },
  { danceability: 0.56, energy: 0.731, key: 2, loudness: -6.121, mode: 1, valence: 0.401, tempo: 99.981 },
  { danceability: 0.482, energy: 0.473, key: 10, loudness: -10.377, mode: 1, valence: 0.039, tempo: 101.785 },
  { danceability: 0.646, energy: 0.376, key: 0, loudness: -10.054, mode: 1, valence: 0.142, tempo: 123.172 },
  { danceability: 0.469, energy: 0.572, key: 2, loudness: -6.025, mode: 1, valence: 0.16, tempo: 80.022 },
  { danceability: 0.444, energy: 0.287, key: 5, loudness: -10.631, mode: 0, valence: 0.246, tempo: 124.027 },
  { danceability: 0.471, energy: 0.381, key: 4, loudness: -12.72, mode: 0, valence: 0.167, tempo: 115.022 },
  { danceability: 0.866, energy: 0.347, key: 7, loudness: -9.553, mode: 0, valence: 0.616, tempo: 110.063 },
  { danceability: 0.646, energy: 0.813, key: 6, loudness: -5.29, mode: 0, valence: 0.821, tempo: 112.115 },
  { danceability: 0.713, energy: 0.319, key: 0, loudness: -11.099, mode: 1, valence: 0.472, tempo: 94.043 },
  { danceability: 0.557, energy: 0.299, key: 0, loudness: -10.634, mode: 1, valence: 0.297, tempo: 90.081 },
  { danceability: 0.612, energy: 0.94, key: 11, loudness: -4.467, mode: 1, valence: 0.63, tempo: 99.972 },
  { danceability: 0.577, energy: 0.838, key: 9, loudness: -5.793, mode: 1, valence: 0.802, tempo: 116.048 },
  { danceability: 0.514, energy: 0.771, key: 0, loudness: -5.756, mode: 1, valence: 0.359, tempo: 136.058 },
  { danceability: 0.538, energy: 0.587, key: 3, loudness: -8.458, mode: 1, valence: 0.388, tempo: 108.634 },
  { danceability: 0.488, energy: 0.556, key: 10, loudness: -11.118, mode: 1, valence: 0.0742, tempo: 125.995 },
  { danceability: 0.512, energy: 0.255, key: 0, loudness: -15.867, mode: 1, valence: 0.215, tempo: 115.144 },
  { danceability: 0.721, energy: 0.616, key: 9, loudness: -6.795, mode: 0, valence: 0.521, tempo: 104.955 },
  { danceability: 0.55, energy: 0.132, key: 10, loudness: -15.643, mode: 1, valence: 0.241, tempo: 114.974 },
  { danceability: 0.453, energy: 0.898, key: 4, loudness: -7.156, mode: 0, valence: 0.552, tempo: 123.011 },
  { danceability: 0.668, energy: 0.67, key: 6, loudness: -5.919, mode: 0, valence: 0.654, tempo: 92.016 },
  { danceability: 0.467, energy: 0.589, key: 2, loudness: -5.302, mode: 1, valence: 0.59, tempo: 118.87 },
  { danceability: 0.538, energy: 0.912, key: 0, loudness: -4.684, mode: 0, valence: 0.588, tempo: 154.042 },
  { danceability: 0.703, energy: 0.306, key: 5, loudness: -13.497, mode: 1, valence: 0.8, tempo: 141.966 },
  { danceability: 0.52, energy: 0.785, key: 6, loudness: -4.765, mode: 0, valence: 0.679, tempo: 96.996 },
  { danceability: 0.329, energy: 0.3, key: 11, loudness: -10.214, mode: 1, valence: 0.0664, tempo: 128.881 },
  { danceability: 0.367, energy: 0.361, key: 1, loudness: -13.263, mode: 1, valence: 0.416, tempo: 66.551 },
  { danceability: 0.945, energy: 0.702, key: 11, loudness: -5.016, mode: 0, valence: 0.678, tempo: 119.887 },
  { danceability: 0.697, energy: 0.298, key: 0, loudness: -7.635, mode: 1, valence: 0.509, tempo: 134.216 },
  { danceability: 0.637, energy: 0.333, key: 3, loudness: -9.603, mode: 1, valence: 0.588, tempo: 84.347 },
  { danceability: 0.48, energy: 0.154, key: 2, loudness: -13.614, mode: 1, valence: 0.398, tempo: 149.32 },
  { danceability: 0.666, energy: 0.696, key: 9, loudness: -7.93, mode: 1, valence: 0.471, tempo: 113.98 },
  { danceability: 0.691, energy: 0.846, key: 6, loudness: -3.853, mode: 1, valence: 0.856, tempo: 97.016 },
  { danceability: 0.563, energy: 0.858, key: 9, loudness: -3.828, mode: 1, valence: 0.542, tempo: 144.982 },
  { danceability: 0.598, energy: 0.547, key: 10, loudness: -5.93, mode: 0, valence: 0.25, tempo: 77.969 },
  { danceability: 0.65, energy: 0.54, key: 7, loudness: -8.051, mode: 1, valence: 0.371, tempo: 139.507 },
  { danceability: 0.596, energy: 0.392, key: 2, loudness: -5.817, mode: 0, valence: 0.628, tempo: 163.759 },
  { danceability: 0.618, energy: 0.325, key: 9, loudness: -14.336, mode: 1, valence: 0.27, tempo: 103.644 },
  { danceability: 0.516, energy: 0.906, key: 1, loudness: -4.525, mode: 1, valence: 0.728, tempo: 116.775 },
  { danceability: 0.457, energy: 0.877, key: 0, loudness: -5.105, mode: 1, valence: 0.709, tempo: 168.958 },
  { danceability: 0.38, energy: 0.524, key: 0, loudness: -11.007, mode: 1, valence: 0.436, tempo: 146.961 },
  { danceability: 0.356, energy: 0.96, key: 4, loudness: -3.487, mode: 1, valence: 0.0857, tempo: 125.921 },
  { danceability: 0.381, energy: 0.984, key: 1, loudness: -2.42, mode: 1, valence: 0.81, tempo: 186.081 },
  { danceability: 0.47, energy: 0.474, key: 5, loudness: -9.406, mode: 1, valence: 0.241, tempo: 170.173 },
  { danceability: 0.459, energy: 0.884, key: 10, loudness: -5.005, mode: 0, valence: 0.615, tempo: 154.868 },
  { danceability: 0.386, energy: 0.607, key: 10, loudness: -7.7, mode: 1, valence: 0.532, tempo: 147.207 }
  */
];

/*
const labels = [  
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.75, valence_level: 0.6825 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.84375, valence_level: 0.75 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.4375, valence_level: 0.375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 1, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.21875, valence_level: 0.56875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.78125, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.8125, valence_level: 0.5625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 1, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.25, valence_level: 0.53125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.53125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.6875, valence_level: 0.625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.15625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.6875, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.65625, valence_level: 0.2812 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.6875, valence_level: 0.2812 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 1, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.4375, valence_level: 0.3125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 1, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.34375, valence_level: 0.375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.78125, valence_level: 0.625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.75 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.6875, valence_level: 0.5625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 1, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.28125, valence_level: 0.21875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 1, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.9375, valence_level: 0.6875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 1, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 1, valence_level: 0.6875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.65625, valence_level: 0.875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.65625, valence_level: 0.4375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.40625, valence_level: 0.53125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 1, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.875, valence_level: 0.59375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.53125, valence_level: 0.46875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.59375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.65625, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.875, valence_level: 0.28125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 1, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.40625, valence_level: 0.28125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.59375, valence_level: 0.375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.59375, valence_level: 0.40625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.8125, valence_level: 0.6875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.5625, valence_level: 0.4375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.375, valence_level: 0.375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.28125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.4375, valence_level: 0.4375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.4375, valence_level: 0.5625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.625, valence_level: 0.125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.375, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 1, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.1875, valence_level: 0.6875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.6875, valence_level: 0.6875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.5, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.78125, valence_level: 0.34375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 1, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.5, valence_level: 0.28125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.6875, valence_level: 0.53125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.65625, valence_level: 0.59375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.46875, valence_level: 0.4375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 1, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.15625, valence_level: 0.375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.875, valence_level: 0.625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 1, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.3125, valence_level: 0.34375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 1, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.75 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 1, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.34375, valence_level: 0.4375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 1, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.3125, valence_level: 0.25 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 1, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.875, valence_level: 0.59375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 1, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.53125, valence_level: 0.84375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.25 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.78125, valence_level: 0.34375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.6875, valence_level: 0.4375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 1, Excited: 0, Empowering: 0 }, // { energy_level: 0.59375, valence_level: 0.90625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 1, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.28125, valence_level: 0.75 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.65625, valence_level: 0.28125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 1, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 1, valence_level: 0.46875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 1, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.90625, valence_level: 0.625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.71875, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 1, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.1875, valence_level: 0.25 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.4375, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 1, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.3125, valence_level: 0.5 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 1, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.9375, valence_level: 0.40625 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 1, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.595, valence_level: 0.28125 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.59625, valence_level: 0.5025 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 1, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.1575, valence_level: 0.375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 1, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.22, valence_level: 0.3775 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.5, valence_level: 0.46875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 1, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.59625, valence_level: 0.6575 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 1, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.65875, valence_level: 0.59375 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 1, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 0, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.75125, valence_level: 0.25 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 }, // { energy_level: 0.40875, valence_level: 0.46875 }
  { Somber: 0, Depressing: 0, Brooding: 0, Despair: 0, Aggresive: 0, Ominous: 0, Melancholy: 0, Yearning: 0, Anxious: 0, Angsty: 0, Sentimental: 0, Mellow: 0, Sensual: 1, Chill: 0, Energizing: 0, Nostalgic: 0, Tender: 0, Optimistic: 0, Stirring: 0, Upbeat: 0, Peaceful: 0, Easygoing: 0, Content: 0, Excited: 0, Empowering: 0 } // { energy_level: 0.5625, valence_level: 0.5325 }
];
*/

const labels = [
  {energy_level: 0.75000, valence_level: 0.68250},
  {energy_level: 0.84375, valence_level: 0.75000},
  {energy_level: 0.43750, valence_level: 0.37500},
  {energy_level: 0.21875, valence_level: 0.56875},
  {energy_level: 0.78125, valence_level: 0.50000},
  {energy_level: 0.81250, valence_level: 0.56250},
  {energy_level: 0.25000, valence_level: 0.53125},
  {energy_level: 0.71875, valence_level: 0.53125},
  {energy_level: 0.68750, valence_level: 0.62500},
  {energy_level: 0.71875, valence_level: 0.15625},
  {energy_level: 0.68750, valence_level: 0.50000},
  {energy_level: 0.65625, valence_level: 0.28120},
  {energy_level: 0.68750, valence_level: 0.28120},
  {energy_level: 0.43750, valence_level: 0.31250},
  {energy_level: 0.34375, valence_level: 0.37500},
  {energy_level: 0.78125, valence_level: 0.62500},
  {energy_level: 0.71875, valence_level: 0.75000},
  {energy_level: 0.68750, valence_level: 0.56250},
  {energy_level: 0.28125, valence_level: 0.21875},
  {energy_level: 0.93750, valence_level: 0.68750},
  {energy_level: 1.00000, valence_level: 0.68750},
  {energy_level: 0.65625, valence_level: 0.87500},
  {energy_level: 0.65625, valence_level: 0.43750},
  {energy_level: 0.40625, valence_level: 0.53125},
  {energy_level: 0.87500, valence_level: 0.59375},
  {energy_level: 0.53125, valence_level: 0.46875},
  {energy_level: 0.71875, valence_level: 0.59375},
  {energy_level: 0.65625, valence_level: 0.50000},
  {energy_level: 0.87500, valence_level: 0.28125},
  {energy_level: 0.40625, valence_level: 0.28125},
  {energy_level: 0.59375, valence_level: 0.37500},
  {energy_level: 0.59375, valence_level: 0.40625},
  {energy_level: 0.81250, valence_level: 0.68750},
  {energy_level: 0.56250, valence_level: 0.43750},
  {energy_level: 0.37500, valence_level: 0.37500},
  {energy_level: 0.71875, valence_level: 0.28125},
  {energy_level: 0.43750, valence_level: 0.43750},
  {energy_level: 0.43750, valence_level: 0.56250},
  {energy_level: 0.62500, valence_level: 0.12500},
  {energy_level: 0.37500, valence_level: 0.50000},
  {energy_level: 0.18750, valence_level: 0.68750},
  {energy_level: 0.68750, valence_level: 0.68750},
  {energy_level: 0.50000, valence_level: 0.50000},
  {energy_level: 0.78125, valence_level: 0.34375},
  {energy_level: 0.50000, valence_level: 0.28125},
  {energy_level: 0.68750, valence_level: 0.53125},
  {energy_level: 0.65625, valence_level: 0.59375},
  {energy_level: 0.46875, valence_level: 0.43750},
  {energy_level: 0.15625, valence_level: 0.37500},
  {energy_level: 0.87500, valence_level: 0.62500},
  {energy_level: 0.31250, valence_level: 0.34375},
  {energy_level: 0.71875, valence_level: 0.75000},
  {energy_level: 0.34375, valence_level: 0.43750},
  {energy_level: 0.31250, valence_level: 0.25000},
  {energy_level: 0.87500, valence_level: 0.59375},
  {energy_level: 0.53125, valence_level: 0.84375},
  {energy_level: 0.71875, valence_level: 0.25000},
  {energy_level: 0.78125, valence_level: 0.34375},
  {energy_level: 0.68750, valence_level: 0.43750},
  {energy_level: 0.59375, valence_level: 0.90625},
  {energy_level: 0.28125, valence_level: 0.75000},
  {energy_level: 0.65625, valence_level: 0.28125},
  {energy_level: 1.00000, valence_level: 0.46875},
  {energy_level: 0.90625, valence_level: 0.62500},
  {energy_level: 0.71875, valence_level: 0.50000},
  {energy_level: 0.18750, valence_level: 0.25000},
  {energy_level: 0.43750, valence_level: 0.50000},
  {energy_level: 0.31250, valence_level: 0.50000},
  {energy_level: 0.93750, valence_level: 0.40625},
  {energy_level: 0.59500, valence_level: 0.28125},
  {energy_level: 0.59625, valence_level: 0.50250},
  {energy_level: 0.15750, valence_level: 0.37500},
  {energy_level: 0.22000, valence_level: 0.37750},
  {energy_level: 0.50000, valence_level: 0.46875},
  {energy_level: 0.59625, valence_level: 0.65750},
  {energy_level: 0.65875, valence_level: 0.59375},
  {energy_level: 0.75125, valence_level: 0.25000},
  {energy_level: 0.40875, valence_level: 0.46875},
  {energy_level: 0.56250, valence_level: 0.53250}
]

const orderedData = samples.map((sample,index) => {
    return {
        input: sample,
        output: labels[index]
    };
});

const shuffledData = shuffle(orderedData);

module.exports = shuffledData;
