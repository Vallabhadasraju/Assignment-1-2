import { User } from '../types/User';

export const filterUsers = (users: User[], searchTerm: string, filterBy: string): User[] => {
  let filtered = users;

  // Apply search filter
  if (searchTerm) {
    const lowercaseSearch = searchTerm.toLowerCase();
    filtered = filtered.filter(user => 
      user.name.toLowerCase().includes(lowercaseSearch) ||
      user.username.toLowerCase().includes(lowercaseSearch) ||
      user.email.toLowerCase().includes(lowercaseSearch) ||
      user.phone.toLowerCase().includes(lowercaseSearch) ||
      user.website.toLowerCase().includes(lowercaseSearch) ||
      user.company.name.toLowerCase().includes(lowercaseSearch)
    );
  }

  // Apply domain filter
  if (filterBy && filterBy !== 'all') {
    filtered = filtered.filter(user => user.email.includes(filterBy));
  }

  return filtered;
};

export const sortUsers = (users: User[], sortBy: string): User[] => {
  const sorted = [...users];

  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'email':
      return sorted.sort((a, b) => a.email.localeCompare(b.email));
    case 'city':
      return sorted.sort((a, b) => a.address.city.localeCompare(b.address.city));
    case 'company':
      return sorted.sort((a, b) => a.company.name.localeCompare(b.company.name));
    default:
      return sorted;
  }
};