import img from '../../../../../public/images/teaching-home-page.png'

function ShowTeacherInfo() {
  return (
    <section className="grid md:grid-cols-2 items-center my-10">
      <div className="w-full md:hidden">
        <img
          src={img}
          alt=""
          className="w-2/3 mx-auto "
        />
      </div>
      <div className="p-6 md:p-8 space-y-4">
        <h1 className="italic text-2xl">See Real Teaching Before You Decide</h1>
        <p>
          Our platform allows guardians to watch demo classes, explore tutor
          profiles, and evaluate teaching quality before choosing a tutor or
          coaching center.
        </p>
        <p> This creates transparency in the education system.</p>
      </div>
      <div className="hidden md:block">
        <img
          src={img}
          alt=""
          className="w-2/3 float-right"
        />
      </div>
    </section>
  );
}

export default ShowTeacherInfo;
