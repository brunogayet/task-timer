import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

import { formatDistanceToNow } from 'date-fns'

import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && <Status color="green">Done</Status>}
                  {cycle.stoppedDate && <Status color="red">Stopped</Status>}
                  {!cycle.finishedDate && !cycle.stoppedDate && (
                    <Status color="yellow">In progress</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
