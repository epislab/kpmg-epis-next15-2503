"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


// onChange={e => {setPassword(e.target.value)}}
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const  handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "aaa" && password === "bbb") {
      router.push("/dashboard/common/user/templates"); // 로그인 성공 시 이동
    } else {
      router.push("/"); // 로그인 실패 시 이동
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Log In</h2>

        {/* 샘플 계정 정보 */}
        {/* <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded mb-4">
          <p><strong>Admin:</strong> workor.d.atv@gmail.com / wor.d8551</p>
          <p><strong>Manager:</strong> earlybirdfarmers@gmail.com / Earlybird2022</p>
          <p><strong>Supervisor:</strong> theeng.pty.ltd@gmail.com / dldpswl4112</p>
          <p><strong>Worker:</strong> bea5763@naver.com / passW0rd!</p>
        </div> */}

        {/* 소셜 로그인 버튼 */}
        <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          <i className="fab fa-google"></i> Login with Google
        </button>

        <p className="text-center text-gray-500 mt-4">OR</p>

        {/* 로그인 폼 */}
        <form className="mt-4 space-y-3"> 
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="fullname"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={handleLogin}
          >
            Login
          </button>
          </form>

        <div className="mt-4 text-center">
          <Link href="/account/guest/templates/createGuest" className="text-blue-600 hover:underline">
            Don't have an account?
          </Link>
          <br />
          <Link href="/api/user/forgot" className="text-blue-600 hover:underline">
            Forgot your password?
          </Link>
          <br />
          <Link href="/company/search" className="text-blue-600 hover:underline">
            Search Company
          </Link>
        </div>
      </div>
    </div>
  );
}
