
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            made by garv verma &bull; <a href="mailto:garv.verma2024@nst.rishihood.edu.in" className="underline hover:text-primary">garv.verma2024@nst.rishihood.edu.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
