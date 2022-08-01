import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
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
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status color="green">Done</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
