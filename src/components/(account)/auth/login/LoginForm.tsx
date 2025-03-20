"use client";

import useLoginForm from "@/hooks/(account)/auth/login/useLoginForm";
import { useRouter } from "next/navigation";

interface InputFieldProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
function InputField({ type, name, placeholder, value, onChange }: InputFieldProps) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-blue-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    );
  }
  

export default function LoginForm() {
  const { form, error, handleChange, handleSubmit } = useLoginForm();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    const isSuccess = await handleSubmit(e);
    // if (isSuccess) {
    //   router.push("/auth/user/list"); // 로그인 성공 시 이동
    // }
    console.log("로그인 성공:", isSuccess);
    router.push("/auth/user/list");
  };

  return (
    <form onSubmit={onSubmit}>
      <InputField type="email" name="email" placeholder="이메일" value={form.email} onChange={handleChange} />
      <InputField type="password" name="password" placeholder="비밀번호" value={form.password} onChange={handleChange} />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
      >
        로그인
      </button>
    </form>
  );
}
