import { atom, selector } from "recoil";

export const notifications = atom({
    key:"notifications",
    default:selector({
        key:"notificationSelector",
        get:async ({get})=>{
            const response = await fetch("http://localhost:3000/notifications");
            const data = await response.json();
            return data;
        }
    })
})

export const totalNotifications = selector({
    key:"totalNotifications",
    get:({get})=>{
        const notificationCount = get(notifications);
        return notificationCount.jobs+notificationCount.messages+notificationCount.network+notificationCount.notifications;
    }
})