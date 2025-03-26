import { useState } from "react";
import api from '@/lib/axios'
import { useUserStore } from "@/store/account/auth/user/store";
import { useRouter } from "next/navigation";
interface LoginFormState {
  email: string;
  password: string;
}

export default function useLoginForm() {
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const router = useRouter();




  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("이메일과 비밀번호를 입력하세요.");
      return;
    }

    setError("");
    console.log("로그인 요청", form);

    try {
      const response = await api.post('/api/user/login', {
        email: form.email,
        password: form.password
      });
      
      
      console.log("로그인 성공", response.data);

      const message = response.data.message;
      const user = response.data.logged_in_user;

        // ✅ zustand store에서 setUser 가져오기
      const setUser = useUserStore((state) => state.setUser);

      // ✅ 사용자 정보 상태 저장
      setUser({
        user_id: user.user_id,
        email: user.email,
        name: user.name,
      });

      if (message === "로그인에 성공했습니다") {
        const token = response.data.accessToken
        // useAuthStore.getState().setAccessToken(token)

        router.push('/dashboard/guest/customer');
        return true;
      } else {
        if (message === "비밀번호가 일치하지 않습니다") {
          alert("비밀번호가 일치하지 않습니다");
          router.push('/user/login');
        } else if (message === "고객에서 등록된 ID가 없습니다") {
          alert("고객에서 등록된 ID가 없습니다");
          router.push('/user/login');
        } else {
          setError(message);
        }
        return false;
      }

    } catch (err: any) {
      setError("로그인 실패. 다시 시도해주세요.");
      console.error("Login error:", err.message);
      return false;
    }
  };

  return { form, error, handleChange, handleSubmit };
}
