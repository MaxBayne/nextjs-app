'use client';

export default function CssComponent() {
  let isGreen = true;

  return (
    <div>
      <p className="text-red-500 text-xl font-bold">
        This is How to apply Css Style
      </p>
      <p className="text-orange-500">
        This is How to apply Css Class
      </p>
      <p className={isGreen ? "text-green-500" : "text-orange-500"}>
        This is How to apply Css Class with Condition
      </p>
    </div>
  );
}