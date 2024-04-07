import React from "react";
import { testimonials } from "@/utlis/constant";
import Blob from "../ui/Blob";

function Testimonials() {
  return (
    <main id="testimonials" className="lg:center relative mt-40 flex-col">
      {/* div containing heading */}
      <div className="center">
        <h1 className="mb-20 w-full max-w-xl text-center text-3xl font-bold md:text-4xl">
          What our clients think of{" "}
          <span className="gradient-text">KAYZEN</span>
        </h1>
      </div>

      {/* Testimonial Card Container */}
      <div className="no-scrollbar flex gap-10 overflow-x-scroll">
        {testimonials.map((testimonial) => {
          const { name, description, image, rating } = testimonial;

          return (
            <TestimonialCard
              name={name}
              description={description}
              rating={rating}
              image={image}
              key={name}
            />
          );
        })}
      </div>

      {/* floating gradient blobs */}
      <Blob className="absolute right-0 top-[100px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-pink-500 opacity-10 blur-3xl lg:block" />

      <Blob className="absolute left-[-150px] top-[-100px] z-[-10] hidden h-[500px] w-[500px] rounded-full bg-blue-500 opacity-5 blur-3xl lg:block" />
    </main>
  );
}

/* Testimonial Card PropsType */
interface TestimonialCardProps {
  name: string;
  description: string;
  image: any;
  rating: number;
}

/* Testimonial Card */
function TestimonialCard({
  name,
  description,
  image,
  rating,
}: TestimonialCardProps) {
  return (
    <section
      id="testimonial-card"
      className="w-full max-w-96 flex-shrink-0 rounded-md border-[1px] border-zinc-300 bg-white p-4 shadow-md"
    >
      <div className="flex justify-between">
        <div className="h-20 w-20 bg-zinc-300"></div>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
      <div>
        <h1 className="my-2 mt-3 text-xl font-semibold">{name}</h1>
        <h1>{description}</h1>
      </div>
    </section>
  );
}

export default Testimonials;
