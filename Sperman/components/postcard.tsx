// components/PostCard.tsx
import React from 'react';
import styles from './PostCard.module.css';
import { useRouter } from 'next/navigation';

interface PostCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  is_new?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, subtitle, description, link, is_new }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link); // 클릭 시 지정된 링크로 이동
  };

  return (
    <div 
      onClick={handleClick}
      className={styles.card}>
      {is_new && <span className={styles.newBadge}>NEW</span>}
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
