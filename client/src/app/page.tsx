import Sidenav from "./components/Sidenav";
import Topnav from "./components/Topnav";

export default function Home() {
  return(
    <>
      {/* top nav */}
      <Topnav/>

      {/* main body */}
      <section className="flex">
        {/* sidenav */}
        <aside className="w-1/5">
          <Sidenav/>
        </aside>


        {/* main body */}
        <main></main>
      </section>
    </>
  );
}
