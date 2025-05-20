import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className=" bg-white p-6 mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex justify-center">
            <Image
              src="/images/logo-secondary.png"
              alt="logo"
              layout="intrinsic"
              width={140}
              height={140}
            />
          </div>
          <div className="flex flex-col md:flex-row text-textSecondary gap-4 justify-center items-center">
            <Link
              href="/privacyPolicy"
              target="_blank"
              className="text-textSecondary hover:text-gray-600 text-sm font-medium"
            >
              Políticas de privacidad
            </Link>{' '}
            <Link
              href="/termsAndConditions"
              target="_blank"
              className="text-textSecondary hover:text-gray-600 text-sm font-medium"
            >
              Terminos y condiciones
            </Link>
            <Link
              href="/cookies"
              target="_blank"
              className="text-textSecondary hover:text-gray-600 text-sm font-medium"
            >
              Políticas de cookies
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-center items-center z-[9999]">
            <Link
              href="https://www.instagram.com/aquilessoluciones"
              target="_blank"
            >
              <FaInstagram size={24} className="text-textSecondary" />
            </Link>
          </div>

          <p className="text-center text-sm text-textSecondary">
            Copyright @ 2025 Aquiles Soluciones
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
