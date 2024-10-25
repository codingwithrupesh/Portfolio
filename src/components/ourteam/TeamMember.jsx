import React from 'react';

const TeamMember = ({ name, position, description, imgSrc }) => {
  return (
    <div className="team-member flex flex-col items-center p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-32 h-32 mb-4">
        <img
          className="w-full h-full object-cover rounded-full"
          src={imgSrc}
          alt={`${name}'s photo`}
        />
      </div>

      {/* Member Details */}
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm font-medium text-gray-500 mb-3">{position}</p>
      <p className="text-center text-base text-gray-700">{description}</p>
    </div>
  );
};

export default TeamMember;
