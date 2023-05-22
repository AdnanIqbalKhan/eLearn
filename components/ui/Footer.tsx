import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900 text-white">
      <div className="flex items-center justify-center py-6 space-y-4 bg-zinc-900">
        <div>
          <span>&copy; 2023 eLearn, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
