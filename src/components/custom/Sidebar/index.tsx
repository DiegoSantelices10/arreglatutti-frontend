/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import HomeIcon from '../../../../public/images/home-icon';
import ProfessionIcon from '../../../../public/images/profession-icon';
import LocationIcon from '../../../../public/images/location-icon';
import UserProfessionalIcon from '../../../../public/images/user-professional-icon';
import EmailIcon from '../../../../public/images/email-icon';
import LogoutIcon from '../../../../public/images/logout-icon';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define como móvil si el ancho es menor o igual a 768px
    };

    // Verificar al montar el componente
    handleResize();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    {
      title: 'Home',
      url: '/admin/backoffice',
      icon: <HomeIcon className="text-white " />,
    },
    {
      title: 'Profesionales',
      url: '/admin/backoffice/professional',
      icon: <UserProfessionalIcon className="text-white " />,
    },
    {
      title: 'Profesiones',
      url: '/admin/backoffice/profession',
      icon: <ProfessionIcon className="text-white " />,
    },
    {
      title: 'Barrios',
      url: '/admin/backoffice/city',
      icon: <LocationIcon className="text-white" />,
    },
    {
      title: 'Mensajes',
      url: '/admin/backoffice/message',
      icon: <EmailIcon className="text-white" />,
    },
  ];

  const onLogoutPress = () => {
    router.push('/admin/login');
  };

  return (
    <SidebarUI
      side="left"
      variant="sidebar"
      collapsible="offcanvas"
      className="border-none"
    >
      <SidebarHeader className="flex justify-center w-full items-center">
        <Image
          src="/images/logo-aquiles.png"
          alt="logo"
          width={160}
          height={160}
        />
      </SidebarHeader>
      <SidebarContent className="mt-20 bg-primary">
        <SidebarMenu className="space-y-4">
          {items.map((item: any) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  onClick={() => isMobile && toggleSidebar()} // Solo se ejecuta en dispositivos móviles
                >
                  <div className="w-auto">{item.icon}</div>
                  <h2 className="text-white text-left">{item.title}</h2>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex justify-end w-full items-end p-4">
        <div className="cursor-pointer" onClick={onLogoutPress}>
          <LogoutIcon className="text-white w-8 h-8" />
        </div>
      </SidebarFooter>
    </SidebarUI>
  );
};

export default Sidebar;
