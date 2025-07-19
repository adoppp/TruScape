'use client';

import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';

import styles from '@/app/components/ui/GoBackButton/GoBackButton.module.scss';

import { IconArrowLeft } from '@/app/assets/svg';

const cn = classNames.bind(styles);

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button className={cn('button')} onClick={() => router.back()}>
      {IconArrowLeft}
      Go Back
    </button>
  );
};