'use client';


export default function TailwindCssComponent() 
{
  return (
    <div class="container mx-auto ">
      <h3> TailwindCss Component </h3>

      <hr />
      <br />
      <br />

      <div class="grid md:grid-cols-3 md:gap-10 sm:grid-cols-1 sm:gap-5">

        <div class="rounded-md 
                  shadow-md 
                  flex flex-col
                  p-8 
                  bg-gray-300
                  sm:flex-row
                  sm:items-center 
                  sm:gap-6 
                  sm:py-4 
                  hover:bg-purple-300 transition-colors duration-300 
                  hover:border-purple-800
                  max-w-sm">
        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.fbd7bb53.jpg"  alt=""  />
         <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="p-1.5 rounded-md  text-sm text-purple-600 hover:text-white hover:border-purple-400  active:bg-purple-700 hover:cursor-pointer">
            Message
          </button>
        </div>
        </div>

        <div class="rounded-md 
                    shadow-md 
                    flex flex-col
                    p-8 
                    bg-gray-300
                    sm:flex-row
                    sm:items-center 
                    sm:gap-6 
                    sm:py-4 
                    hover:bg-purple-300 transition-colors duration-300 
                    hover:border-purple-800
                    max-w-sm">
          <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.fbd7bb53.jpg"  alt=""  />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">Mohammed Salah</p>
              <p class="font-medium text-gray-500">Software Engineer</p>
            </div>
            <button class="p-1.5 rounded-md  text-sm text-purple-600 hover:text-white hover:border-purple-400  active:bg-purple-700 hover:cursor-pointer">
              Message
            </button>
          </div>
        </div>

        <div class="rounded-md 
                    shadow-md 
                    flex flex-col
                    p-8 
                    bg-gray-300
                    sm:flex-row
                    sm:items-center 
                    sm:gap-6 
                    sm:py-4 
                    hover:bg-purple-300 transition-colors duration-300 
                    hover:border-purple-800
                    max-w-sm">
          <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.fbd7bb53.jpg"  alt=""  />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">Ahmed Khalid</p>
              <p class="font-medium text-gray-500">UI Engineer</p>
            </div>
            <button class="p-1.5 rounded-md  text-sm text-purple-600 hover:text-white hover:border-purple-400  active:bg-purple-700 hover:cursor-pointer">
              Message
            </button>
          </div>
        </div>


      </div>

      


    </div>
  );
}
