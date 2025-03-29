import { useState } from "react";
import { useLoginMutation } from "@/features/(account)/(auth)/user/api/useLoginMutation";
import { useUserStore } from "@/features/(account)/(auth)/user/states/userStore";
import { useRouter } from "next/navigation";
import { setAccessToken } from "@/lib/authToken";

export default function useLoginForm() {
  const [form, setForm] = useState<LoginFormState>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const loginMutation = useLoginMutation();

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

    loginMutation.mutate(
      { email: form.email, password: form.password },
      {
        onSuccess: (data) => {
          console.log("로그인 성공", data);
          const { message, logged_in_user, access_token, refresh_token } = data;

          setAccessToken(access_token);

          setUser({
            user_id: logged_in_user.user_id,
            email: logged_in_user.email,
            name: logged_in_user.name,
          });

          if (message === "로그인에 성공했습니다") {
            router.push("/dashboard/guest/customer");
          } else if (message === "비밀번호가 일치하지 않습니다") {
            alert("비밀번호가 일치하지 않습니다");
            router.push("/user/login");
          } else if (message === "고객에서 등록된 ID가 없습니다") {
            alert("고객에서 등록된 ID가 없습니다");
            router.push("/user/login");
          } else {
            setError(message);
          }
        },
        onError: (err: any) => {
          console.error("Login error:", err.message);
          setError("로그인 실패. 다시 시도해주세요.");
        },
      }
    );
  };

  return { form, error, handleChange, handleSubmit, isLoading: loginMutation.isPending };
}
