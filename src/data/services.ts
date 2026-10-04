import type { LucideIcon } from 'lucide-react';
import { DatabaseBackup, Gauge, Headset, MonitorCog, Network, Wrench } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'Computer Repairs',
    description: 'Diagnosis, troubleshooting, software issues and general computer maintenance.',
    icon: Wrench,
  },
  {
    title: 'Laptop Upgrades',
    description: 'Improve speed, storage and usability with suitable hardware upgrades.',
    icon: Gauge,
  },
  {
    title: 'IT Support',
    description: 'Practical technical assistance for personal and small-business setups.',
    icon: Headset,
  },
  {
    title: 'System Setup',
    description: 'Get your new computer configured and ready for work or school.',
    icon: MonitorCog,
  },
  {
    title: 'Networking & Setup',
    description: 'Basic network setup, connectivity troubleshooting and device configuration.',
    icon: Network,
  },
  {
    title: 'Data & Software Support',
    description: 'Software installation, system configuration and general technical assistance.',
    icon: DatabaseBackup,
  },
];
