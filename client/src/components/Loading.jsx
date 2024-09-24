"use client";

export const Loading = () => {
  return (
    <div className="w-lvw h-lvh flex justify-center items-center">
      <div className="flex flex-col gap-12">
        <img src="Frame 3.png" alt="logo" />
        <div className="flex flex-col items-center gap-3">
          <span className="loading loading-spinner  loading-md"></span>
          <p>Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
};
