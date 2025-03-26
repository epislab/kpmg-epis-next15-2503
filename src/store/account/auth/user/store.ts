'use client';

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type UserType = {
  user_id: string;
  email: string;
  name: string;
  setUser: (user: { user_id: string; email: string; name: string }) => void;
  reset: () => void;
};

export const useUserStore = create<UserType>()(
  persist(
    (set) => ({
      user_id: "",
      email: "",
      name: "",

      // ✅ 로그인 성공 시 사용자 정보 설정
      setUser: (user) =>
        set({
          user_id: user.user_id,
          email: user.email,
          name: user.name,
        }),

      // ✅ 로그아웃 시 초기화
      reset: () =>
        set({
          user_id: "",
          email: "",
          name: "",
        }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
