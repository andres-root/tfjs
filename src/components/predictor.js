
import React from 'react'
import * as tf from '@tensorflow/tfjs'


class Predictor extends React.Component {
    constructor(props) {
      super(props)

      const trainData = {
        sizeMB:  [0.080, 9.000, 0.001, 0.100, 8.000, 5.000, 0.100, 6.000, 0.050, 0.500,
                  0.002, 2.000, 0.005, 10.00, 0.010, 7.000, 6.000, 5.000, 1.000, 1.000],
        timeSec: [0.135, 0.739, 0.067, 0.126, 0.646, 0.435, 0.069, 0.497, 0.068, 0.116,
                  0.070, 0.289, 0.076, 0.744, 0.083, 0.560, 0.480, 0.399, 0.153, 0.149]
      }
      
      const testData = {
        sizeMB:  [5.000, 0.200, 0.001, 9.000, 0.002, 0.020, 0.008, 4.000, 0.001, 1.000,
                  0.005, 0.080, 0.800, 0.200, 0.050, 7.000, 0.005, 0.002, 8.000, 0.008],
        timeSec: [0.425, 0.098, 0.052, 0.686, 0.066, 0.078, 0.070, 0.375, 0.058, 0.136,
                  0.052, 0.063, 0.183, 0.087, 0.066, 0.558, 0.066, 0.068, 0.610, 0.057]
      }

      const trainTensors = {
        sizeMB: tf.tensor2d(trainData.sizeMB, [20, 1]),
        timeSec: tf.tensor2d(trainData.timeSec, [20, 1]),
      }

      const testTensors = {
        sizeMB: tf.tensor2d(testData.sizeMB, [20, 1]),
        timeSec: tf.tensor2d(testData.timeSec, [20, 1]),
      }
  
      console.log(tf)

    }
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }
}

export default Predictor
