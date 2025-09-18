import React from 'react';
import { User } from '../types/User';
import { Mail, Phone, Globe, MapPin, Building2 } from 'lucide-react';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.username)}&mood=happy`;
  
  const fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Header with Avatar */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-white p-1 shadow-lg">
          <img
            src={avatarUrl}
            alt={`${user.name} avatar`}
            className="w-full h-full rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
        <p className="text-blue-100 text-sm">@{user.username}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <a 
            href={`mailto:${user.email}`}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm truncate"
          >
            {user.email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
          <a 
            href={`tel:${user.phone}`}
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-sm"
          >
            {user.phone}
          </a>
        </div>

        {/* Website */}
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-purple-600 flex-shrink-0" />
          <a 
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm truncate"
          >
            {user.website}
          </a>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm leading-relaxed">{fullAddress}</p>
        </div>

        {/* Company */}
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-gray-700 font-semibold text-sm">{user.company.name}</p>
            <p className="text-gray-500 text-xs italic">{user.company.catchPhrase}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;