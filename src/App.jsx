import './App.css'
import React, { useEffect, useState } from 'react'
import reportWebVitals from './reportWebVitals'

const timeout = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, ms)
  )

function App() {
  const [playState, setPlayState] = useState('paused')
  const [step, setStep] = useState(0)

  console.log(playState)

  const handleStart = async () => {
    const base = 20
    setPlayState('running')
    setStep(0)
    await timeout(base * 100)
    setStep(1)
    await timeout(base * 90)
    setStep(2)
    await timeout(base * 50)
    setStep(3)
    await timeout(base * 240)
    setStep(4)
    await timeout(base * 50)
    setStep(5)
    await timeout(base * 80)
    setStep(6)
  }

  return (
    <div>
      <div className="row-center-center full-screen">
        <div>
          <div className="h-900" />
          <div className="ball" style={{ animationPlayState: playState }}>
            <div className="gravity" style={{ animationPlayState: playState }}>
              <div className="arrow">&lt;</div>
            </div>
            <div className="pulling" style={{ animationPlayState: playState }}>
              <div className="arrow">&gt;</div>
            </div>
            <div className="text">
              {step === 0 && (
                <p style={{ color: 'black' }}>小球向下拉到最满的时刻，释放</p>
              )}
              {step === 1 && (
                <p style={{ color: 'blue' }}>重力小于拉力，向上加速</p>
              )}
              {step === 2 && (
                <p style={{ color: 'red' }}>重力等于拉力的时候，受力平衡</p>
              )}
              {step === 3 && (
                <p style={{ color: '#098323' }}>
                  重力大于拉力，合力向下，小球向上减速
                </p>
              )}
              {step === 4 && <p style={{ color: 'red' }}>减速到0</p>}
              {step === 5 && (
                <p style={{ color: 'blue' }}>
                  重力比拉力大，合力向下，向下加速
                </p>
              )}
              {step === 6 && (
                <p style={{ color: '#098323' }}>
                  重力比拉力小，合力向上，向下减速
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-100" />
      <div className="row-center-center">
        <div className="btn" onClick={handleStart}>
          自动开始
        </div>
      </div>
    </div>
  )
}

const component = <App />

reportWebVitals()

export default component
