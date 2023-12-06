import mokupsora from "../assets/images/mokup-sora.png";
import SignupComponent from "./SignupComponent";
import { TitleDetail } from "../compments/TitleCategory";

function Landing() {
  const title = "Get started";
  return (
    <article className="flex flex-col items-center align-center ">
      <TitleDetail title={title} />
      <section className="grid grid-cols-2 place-items-center bg-teal-600 py-12 px-12 rounded-lg gap-x-14">
        <figure className="grid items-center">
          <img alt="" src={mokupsora} className="max-w-xs" />
        </figure>
        <section>
          <article className="flex flex-col gap-y-4 items-center">
            <SignupComponent />
          </article>
        </section>
      </section>
    </article>
  );
}

export { Landing };
