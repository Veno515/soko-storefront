import { Typography } from '@material-ui/core'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      onComplete={() => {
        // do your stuff here
        return [true, 1500] // repeat animation in 1.5 seconds
      }}
      isPlaying
      initialRemainingTime={15}
      duration={60}
      size="30"
      strokeWidth="1"
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2],
      ]}
    >
    {({ remainingTime, animatedColor }) => (
        <Typography style={{ color: animatedColor }}>
          {remainingTime}
        </Typography>
      )}
      </CountdownCircleTimer>
  )

