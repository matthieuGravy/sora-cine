import mokupsora from "../assets/images/mokup-sora.png";
import SignupComponent from "./SignupComponent";
import { TitleMain } from "../compments/TitleCategory";

function Landing() {
  const title = "Get started";
  return (
    <article className="flex flex-col items-center align-center gap-y-4 pt-8 pb-6 px-4">
      <TitleMain title={title} />
      <section className="grid lg:grid-cols-2place-items-center bg-teal-600 py-12 px-8 xl:px-12 rounded-lg gap-x-14 gap-y-14">
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
