import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotifications } from '../store/atoms/notifications'

const Notifications = () => {
    const [notificationCount,setNotificationsCount] = useRecoilState(notifications);
    const total = useRecoilValue(totalNotifications);

  return (
        <div>
            <button>jobs ({notificationCount.jobs})</button>
            <button>messages ({notificationCount.messages})</button>
            <button>network  ({notificationCount.network})</button>
            <button>notifications  ({notificationCount.notifications})</button>
            <button>Total ({total})</button>
            {/* <button>Totals  (notificationCount.)</button> */}
        </div>
  )
}

export default Notifications