import { Button } from "./button";
import { Input } from "./input";

export default function Footer(){
    return <>
    <footer
  className="text-center text-surface ">

  <div className="px-6 pt-6">
    <form>
      <div
        className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
        <div className="md:mb-6 md:ms-auto">
          <p>
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div className="relative md:mb-6" data-twe-input-wrapper-init>
          <Input
            type="email"
            className="peer block min-h-[auto] w-full  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputEmail2"
            placeholder="Email address" />
          <label
            htmlFor="exampleFormControlInputEmail2"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Email address
          </label>
        </div>

        <div className="mb-6 md:me-auto">
          <Button
          type="submit"
           >
            Subscribe
          </Button>
        </div>
      </div>
    </form>
  </div>

  <div className="">
    © 2024 Copyright :
    <a href="https://github.com/DipakKhade"> Dipak Khade</a>
  </div>
</footer>
COPY
</>
}