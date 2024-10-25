import React from 'react';
import TeamMember from './TeamMember';
import member1Img from '../public/assets/images/member1.jpg'; // Placeholder image, replace with correct path
import member2Img from '../public/assets/images/member2.jpg'; // Placeholder image, replace with correct path
import member3Img from '../public/assets/images/member3.jpg'; // Placeholder image, replace with correct path

const OurTeam = () => {
  return (
    <section id="our-team" className="w-full py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-black mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            We're a talented group of professionals passionate about what we do.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="John Doe"
            position="CEO & Founder"
            description="John has over 15 years of experience in the tech industry and is the visionary behind our team."
            imgSrc={member1Img}
          />
          <TeamMember
            name="Jane Smith"
            position="Lead Developer"
            description="Jane specializes in full-stack development, bringing innovative solutions to complex problems."
            imgSrc={member2Img}
          />
          <TeamMember
            name="Alex Johnson"
            position="UI/UX Designer"
            description="Alex is a talented designer with a keen eye for user experience and interface design."
            imgSrc={member3Img}
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
