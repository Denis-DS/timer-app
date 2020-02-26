import React from 'react'

// const Timer = () => {
//   console.log('Рендер был вызван, потому что произошло обновление')
//   const [time, setTime] = React.useState(0)
//   const [start] = React.useState(Date.now())

//   React.useEffect(() => {
//     console.log('Монтирование компонента Timer')
//     const timer = setInterval(() => setTime(Date.now() - start), 1000)
//     return () => {
//       console.log('Таймер остановлен и размонтирован')
//       clearInterval(timer)
//     }
//   }, [start])

//   React.useEffect(() => {
//     console.log('Произошло обновление time')
//   }, [time])

//   const getTime = () => {
//     const formattedTime = new Date(time)
//     const date = formattedTime
//     date.setHours(date.getHours() - 3)
//     return date.toLocaleTimeString()
//   }

//   return (
//     <div>
//       <h2>{getTime()}</h2>
//     </div>
//   )
// }
// export default React.memo(Timer)

interface State {
  time: number
  start: number
}

export default class Timer extends React.Component<{}, State> {
  timer: any

  state = {
    time: 0,
    start: Date.now(),
  }

  componentDidMount() {
    console.log('componentDidMount был вызван сразу после запуска, а компонент Timer был смонтирован')
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1000,
    )
  }

  shouldComponentUpdate(nexProto: {}, nextState: State) {
    console.log('shouldComponentUpdate был вызван, потому что новое состояние было получено до рендеринга')
    return nextState !== this.state
  }

  componentDidUpdate(prevProto: {}, prevState: State) {
    console.log('componentDidUpdate был вызван сразу после обновления')
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount был вызван, потому что таймер был остановлен, а компонент Timer был размонтирован',
    )
    clearInterval(this.timer)
  }

  getTime() {
    const formattedTime = new Date(this.state.time)
    const date = formattedTime
    date.setHours(date.getHours() - 3)
    return date.toLocaleTimeString()
  }

  render() {
    console.log('рендер был вызван, потому что произошло обновление')
    return (
      <div>
        <h2>{this.getTime()}</h2>
      </div>
    )
  }
}
