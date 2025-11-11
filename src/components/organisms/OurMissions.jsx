import React from "react";

const OurMissions = () => {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-4 py-8 md:grid-cols-3 md:items-center">
        
        {/* RIGHT CARD */}
        <div className="grid gap-3 h-full">
          <img
            src="https://images.unsplash.com/photo-1650964336783-fd8c0c241b13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
            alt="Clean water support"
            className="h-full w-full rounded-xl object-cover"
          />
          <div className="flex justify-between flex-col rounded-xl bg-neutral-100 p-6">
            <p className="text-neutral-600 text-justify text-sm">
              “This place is awesome and huge! The team was super cool and very
              pleasant. If you want someone to deliver the sound to your
              project.”
            </p>
            <div className="mt-4">
              <div className="font-semibold text-neutral-900">Huyre Merry</div>
              <div className="text-sm text-neutral-500">Designer</div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 h-full">
          <div className="flex justify-between flex-col rounded-xl bg-neutral-100 p-6">
            <p className="text-neutral-600 text-justify text-sm">
              “This place is awesome and huge! The team was super cool and very
              pleasant. If you want someone to deliver the sound to your
              project.”
            </p>
            <div className="mt-4">
              <div className="font-semibold text-neutral-900">Huyre Merry</div>
              <div className="text-sm text-neutral-500">Designer</div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1723142912077-b70ab43105f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1288"
            alt="Clean water support"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMissions;