import React, { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TrustpilotIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#00B67A" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27 16.9 20l-1.3-5.6L20 10.9l-5.7-.49L12 5l-2.3 5.41L4 10.9l4.4 3.5L7.1 20z" />
  </svg>
);

const AppStoreIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#0D8AFF" />
    <path
      d="M15.7 12.4c0-1.8 1.5-2.7 1.6-2.8-.9-1.3-2.2-1.5-2.7-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.7-3.1 1.9-1.3 2.3-.3 5.7 1 7.6.6.9 1.3 1.9 2.3 1.9.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.9.7-1 1-2 1-2.1-.1 0-1.7-.7-1.7-2.1zM13.9 6.9c.5-.6.8-1.4.7-2.3-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.7 2.2.8 0 1.6-.4 2.1-1z"
      fill="#fff"
    />
  </svg>
);

const PlayStoreIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4.3 2.3c-.3.3-.5.8-.5 1.3v17c0 .5.2 1 .5 1.3l.1.1L14 12.5v-.1L4.4 2.2z" fill="#00D2FF" />
    <path d="M17.3 15.8 14 12.5v-.1l3.3-3.3 3.7 2.1c1.1.6 1.1 1.6 0 2.2z" fill="#FFCE00" />
    <path d="M17.3 15.8 14 12.5 4.3 22.2c.4.4 1 .4 1.7.1z" fill="#EA3B4E" />
    <path d="M17.3 9.1 6 2.7c-.7-.4-1.3-.3-1.7.1L14 12.5z" fill="#00F076" />
  </svg>
);

const G2Icon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#FF492C" />
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#fff"
      fontFamily="Arial, sans-serif"
    >
      G2
    </text>
  </svg>
);

const CapterraIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.5h8.7l1 3.2H2z" fill="#FF9D28" />
    <path d="M10.7 9.5 12 22l4.8-12.5z" fill="#FF9D28" />
    <path d="M2 9.5l9.2 3L10.7 9.5z" fill="#68C5ED" />
    <circle cx="17.3" cy="9" r="4.7" fill="#044D80" />
  </svg>
);

const VaultaLogo = () => (
  <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIElTs17C36k_mKyv6xRwSW4dNhp42UqyR5VJE7ZpujcsdrFoU" alt="" className='h-8' />
);

const ratings = [
  { Icon: TrustpilotIcon, score: "4.7", label: "on Trustpilot" },
  { Icon: AppStoreIcon, score: "4.8", label: "on App Store" },
  { Icon: PlayStoreIcon, score: "4.8", label: "on Play Store" },
  { Icon: G2Icon, score: "4.8", label: "on G2" },
  { Icon: CapterraIcon, score: "4.7", label: "on Capterra" },
];

const linkColumns = [
  {
    title: "Company",
    links: [
      { label: "Comprehensive Financial Solutions" },
      { label: "Seamless Payment Processing" },
      { label: "Customizable Financial Plans" },
      { label: "Multi-Currency Support" },
      { label: "Real-Time Financial Insights" },
      { label: "Careers", external: true },
      { label: "Scalable Business Accounts" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Financial Guides & Insights" },
      { label: "Templates", external: true },
      { label: "Industry Reports & Case Studies" },
      { label: "Webinars & Expert Talks" },
      { label: "API Documentation" },
      { label: "Help Center" },
      { label: "Whitepapers & Research Articles" },
      { label: "Customer Success Stories" },
      { label: "Regulatory & Compliance Updates" },
      { label: "Blog & Newsroom" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Business Accounts & Cards" },
      { label: "Invoice Management" },
      { label: "Spend Control" },
      { label: "Financial Analytics" },
      { label: "How It Works" },
      { label: "Multi-Currency Transactions" },
      { label: "Fraud Protection & Security" },
      { label: "Scalable Payment Solutions" },
      { label: "Custom Financial Solutions" },
    ],
  },
];

function FooterLink({ label, external }) {
  return (
    <li>
      <a
        href="#"
        className="group inline-flex items-center gap-1 text-[14px] text-gray-600 transition-colors duration-150 hover:text-gray-900"
      >
        <span className="border-b border-transparent group-hover:border-gray-400">
          {label}
        </span>
        {external && (
          <ArrowUpRight
            size={13}
            strokeWidth={2}
            className="text-gray-400 transition-colors duration-150 group-hover:text-gray-900"
          />
        )}
      </a>
    </li>
  );
}
const links = [
  {
    label: "GitHub",
    link: "https://github.com/areebbaig580"
  },
  {
    label: "areebbaig580@gmail.com",
    link: "mailto:areebbaig580@gmail.com"
  },
  {
    label: "Portfolio",
    link: "https://portfolio-blond-sigma-56.vercel.app/"
  }
];

export default function Footer() {
  const footerRef = useRef();
  useGSAP(()=>{

    gsap.from(".footer",{
      y: 50,
      duration: 0.7,
      opacity: 0,
      scrollTrigger:{
        trigger: footerRef.current,
        start: "top 70%",
      }
    })
   }, {scope: footerRef})
  return (
    <footer className="w-full bg-[#FAFAF9] font-sans overflow-y-hidden" ref={footerRef}>
      <div className="mx-auto max-w-7xl px-8 py-14 footer">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-[15px] font-semibold text-gray-900">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="mb-4 flex items-center gap-1.5">
              <VaultaLogo />
              <span className="text-[19px] font-bold text-[#1D2B6B]">
                Vaulta<span className="text-[#1D2B6B]">.</span>
              </span>
            </div>

            <p className="mb-1 text-[14px] font-semibold text-gray-900">
              Support that never sleeps
            </p>
            <p className="mb-4 text-[13px] text-gray-500">
              24/7 chat, phone, or email
            </p>

            <div className="mb-4 flex items-center gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
              <div className="relative">
                <Star size={20} className="text-amber-400" />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Star size={20} className="fill-amber-400 text-amber-400" />
                </div>
              </div>
            </div>

            <ul className="space-y-1.5">
              {ratings.map(({ Icon, score, label }) => (
                <li
                  key={label}
                  className="group flex cursor-default items-center gap-2 text-[13px] text-gray-600 transition-colors duration-150 hover:text-gray-900"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>
                    <span className="font-medium text-gray-800 group-hover:text-gray-900">
                      {score}
                    </span>{" "}
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/10 bg-[#111142]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-5 sm:flex-row">
          <p className="text-[13px] text-gray-300">
            © Areeb baig 2026. All right reserved
          </p>
          <div className="flex items-center gap-6">
            {links.map((l, index) => (
              <a
                key={index}
                href={l.link}
                className="text-[13px] text-gray-300 transition-colors duration-150 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}