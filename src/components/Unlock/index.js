import {useState} from 'react'

import {MainContainer, LockImage, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isDeviceLocked, changeLockUnlockStatus] = useState(true)

  const changeStatus = () => {
    changeLockUnlockStatus(prevState => !prevState)
  }

  return (
    <MainContainer>
      <LockImage
        src={
          isDeviceLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isDeviceLocked ? 'lock' : 'unlock'}
      />
      <Text>
        {isDeviceLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Text>
      <Button type="button" onClick={changeStatus}>
        {isDeviceLocked ? 'Unlock' : 'Lock'}
      </Button>
    </MainContainer>
  )
}

export default Unlock
