// halaman untuk sign up mendaftarkan ke dalam database

import { SignUpFormComponent } from "../components/signup/signup";

export const SignUpPage = () => {
  return (
    <>
      <div className="flex">
        <div
          className="h-screen w-full object-center"
          style={{
            backgroundImage: `url(https://plus.unsplash.com/premium_photo-1672129881087-76646a57d517?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>
        <div className="bg-white w-[100rem] rounded-xl">
          {/* menyiimpan elemen pada komponen */}
          <div className="bg-gradient-to-tr from-black to-slate-800 h-screen flex items-center justify-center text-white">
            <SignUpFormComponent />
          </div>
        </div>
      </div>
    </>
  );
};
