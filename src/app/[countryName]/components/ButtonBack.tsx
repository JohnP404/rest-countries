"use client";

export default function ButtonBack() {
  function goBack() {
    history.back();
  }

  return (
    <button
      onClick={goBack}
      className="flex justify-center items-center py-1 px-2 gap-2 w-[6.5rem] rounded-md
    bg-white text-very-dark-blue
    dark:bg-dark-blue dark:text-white"
    >
      <span className="material-icons-outlined">chevron_left</span>
      <span className="pr-3">Back</span>
    </button>
  );
}
