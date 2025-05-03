import { atom } from "recoil";

type Username = string | undefined;

export const usernameAtom = atom<Username>({
    key:"username",
    default:"JohnDoe"
})