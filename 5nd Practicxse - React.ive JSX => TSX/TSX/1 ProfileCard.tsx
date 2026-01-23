interface User {
   name: string;
   age: number;
   city?: string;
   isActive: boolean; 
}
interface ProfileCardProps {
  user: User;
}
function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className={`card ${!user.isActive ? 'inactive' : ''}`}>
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city || 'Город не указан'}</p>
      <p>Статус: {user.isActive ? 'Активен' : 'Неактивен'}</p>
    </div>
  );
}

export default ProfileCard;