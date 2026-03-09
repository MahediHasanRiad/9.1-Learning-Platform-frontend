import { Quote } from "lucide-react";
import React from "react";

function FooterTop() {
  return (
    <section className="w-full py-16 px-6  border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative">
        
        {/* উপরের কোট আইকন */}
        <div className="flex justify-center mb-4">
          <Quote className="text-primary-0 opacity-20 w-12 h-12" />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            We are here to <span className="text-primary-0">Help Your Child</span> <br className="hidden md:block" /> Learn from the Best Teachers
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover tutors, watch demo classes, and make <span className="font-semibold text-gray-800">confident education decisions</span> for a brighter future.
          </p>
        </div>

        {/* নিচের কোট আইকন (Rotated) */}
        <div className="flex justify-center mt-6">
          <Quote className="text-primary-0 opacity-20 w-12 h-12 rotate-180" />
        </div>

      </div>
    </section>
  );
}

export default FooterTop;
