import { useContext, useEffect } from 'react'

import { differenceInSeconds } from 'date-fns'

import { CountDownContainer, Separator } from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const partMinutesAmount = Math.floor(currentSeconds / 60)
  const partSecondsAmount = currentSeconds % 60

  const minutesWithZeroFill = String(partMinutesAmount).padStart(2, '0')
  const secondsWithZeroFill = String(partSecondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesWithZeroFill}:${secondsWithZeroFill}`
    }
  }, [minutesWithZeroFill, secondsWithZeroFill, activeCycle])

  return (
    <CountDownContainer>
      <span>{minutesWithZeroFill[0]}</span>
      <span>{minutesWithZeroFill[1]}</span>
      <Separator>:</Separator>
      <span>{secondsWithZeroFill[0]}</span>
      <span>{secondsWithZeroFill[1]}</span>
    </CountDownContainer>
  )
}
