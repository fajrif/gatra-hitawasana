"use client"

import * as Icons from "@/components/ui/custom-icons";
import { LogoCarousel } from "@/components/ui/logo-carousel";

export default function VendorLogo() {
  const allLogos = [
    { name: "Fortinet", id: 1, img: Icons.FortinetLogo },
    { name: "Hewlett Packard", id: 2, img: Icons.HPLogo },
    { name: "Mikrotik", id: 3, img: Icons.MikrotikLogo },
    { name: "Cisco", id: 4, img: Icons.CiscoLogo },
    { name: "Huawei", id: 5, img: Icons.HuaweiLogo },
    { name: "VM Ware", id: 6, img: Icons.VMWareLogo },
    { name: "APC", id: 7, img: Icons.APCLogo },
    { name: "TP Link", id: 8, img: Icons.TPLinkLogo },
    { name: "Lenovo", id: 9, img: Icons.LenovoLogo },
    { name: "IBM", id: 10, img: Icons.IBMLogo },
    { name: "OpenNebula", id: 11, img: Icons.OpenNebulaLogo },
    { name: "Garmin", id: 12, img: Icons.GarminLogo },
  ];
  return (
    <div className="flex flex-row justify-center md:justify-end space-y-8 pb-10">
      <div className="w-full max-w-xl flex flex-col items-center space-y-4">
        <div className="text-center">
          <p className="text-sm md:text-lg text-muted-foreground font-light">Vendor terbaik sudah ada di sini</p>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  )
}
