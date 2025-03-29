'use client';

import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type UserState = {
  user_id: string;
  email: string;
  name: string;
};

export type UserActions = {
  setUser: (user: UserState) => void;
  updateEmail: (email: UserState['email']) => Promise<void>;
  updateName: (name: UserState['name']) => Promise<void>;
  reset: () => void;
};

export type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        immer((set) => ({
          user_id: '',
          email: '',
          name: '',

          setUser: (user) =>
            set((state) => {
              state.user_id = user.user_id;
              state.email = user.email;
              state.name = user.name;
            }, false, 'user/setUser'),

          updateEmail: async (email) => {
            await new Promise((res) => setTimeout(res, 200));
            set((state) => {
              state.email = email;
            }, false, 'user/updateEmail');
          },

          updateName: async (name) => {
            await new Promise((res) => setTimeout(res, 200));
            set((state) => {
              state.name = name;
            }, false, 'user/updateName');
          },

          reset: () =>
            set((state) => {
              state.user_id = '';
              state.email = '';
              state.name = '';
            }, false, 'user/reset'),
        })),
        {
          name: 'user-storage',
          storage: createJSONStorage(() => localStorage),
        }
      ),
      { name: 'UserStore' }
    )
  )
);
