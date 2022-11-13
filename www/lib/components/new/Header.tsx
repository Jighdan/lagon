import Link from 'next/link';
import { ReactNode } from 'react';
import { Button } from './Button';

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
};

const HeaderLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <Link href={href} className="text-grey text-base p-3 hover:text-white transition">
      {children}
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="container sticky top-0 mx-auto flex items-center justify-between bg-dark/50 backdrop-blur py-4 px-8 rounded-full z-10">
      <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_553_267)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5599 15.2272C22.4539 19.1745 19.3525 22.4532 15.1058 23.5911C10.8592 24.729 6.53394 23.4402 3.60248 20.5748C6.60023 20.9927 10.267 20.7466 14.0706 19.7274C17.8741 18.7082 21.1727 17.088 23.5599 15.2272ZM22.4991 6.18298C24.2922 9.67151 22.6064 11.2599 20.2818 13.323C18.6711 14.5595 16.7856 15.7085 14.6933 16.6842C10.2694 18.7471 5.84633 19.6037 2.45832 19.2823C2.10648 18.8217 1.78601 18.3324 1.50093 17.817C-0.292203 14.3285 1.39356 12.7401 3.71823 10.677C5.32887 9.44046 7.21437 8.29149 9.3067 7.31582C13.7306 5.25293 18.1537 4.3963 21.5417 4.71768C21.8935 5.17831 22.214 5.66752 22.4991 6.18298ZM8.89417 0.408883C4.6475 1.54678 1.54615 4.8255 0.440149 8.77277C2.8273 6.91194 6.12587 5.29175 9.92945 4.27259C13.733 3.25342 17.3998 3.00726 20.3975 3.42521C17.4661 0.559772 13.1408 -0.72901 8.89417 0.408883Z"
            fill="white"
          />
        </g>
        <path
          d="M33.2805 18V6.36364H35.3885V16.233H40.5135V18H33.2805ZM44.7635 18.1761C44.2105 18.1761 43.7124 18.0777 43.2692 17.8807C42.8298 17.6799 42.4813 17.3845 42.2237 16.9943C41.9699 16.6042 41.843 16.1231 41.843 15.5511C41.843 15.0587 41.9339 14.6515 42.1158 14.3295C42.2976 14.0076 42.5457 13.75 42.8601 13.5568C43.1745 13.3636 43.5286 13.2178 43.9226 13.1193C44.3203 13.017 44.7313 12.9432 45.1555 12.8977C45.6669 12.8447 46.0817 12.7973 46.3999 12.7557C46.718 12.7102 46.9491 12.642 47.093 12.5511C47.2408 12.4564 47.3146 12.3106 47.3146 12.1136V12.0795C47.3146 11.6515 47.1877 11.3201 46.9339 11.0852C46.6802 10.8504 46.3146 10.733 45.8374 10.733C45.3336 10.733 44.9339 10.8428 44.6385 11.0625C44.3468 11.2822 44.1499 11.5417 44.0476 11.8409L42.1271 11.5682C42.2786 11.0379 42.5286 10.5947 42.8771 10.2386C43.2256 9.87879 43.6518 9.60985 44.1555 9.43182C44.6593 9.25 45.2161 9.15909 45.826 9.15909C46.2464 9.15909 46.665 9.20833 47.0817 9.30682C47.4983 9.4053 47.879 9.56818 48.2237 9.79545C48.5684 10.0189 48.8449 10.3239 49.0533 10.7102C49.2654 11.0966 49.3714 11.5795 49.3714 12.1591V18H47.3942V16.8011H47.326C47.201 17.0436 47.0249 17.2708 46.7976 17.483C46.5741 17.6913 46.2919 17.8598 45.951 17.9886C45.6139 18.1136 45.218 18.1761 44.7635 18.1761ZM45.2976 16.6648C45.7105 16.6648 46.0684 16.5833 46.3714 16.4205C46.6745 16.2538 46.9074 16.0341 47.0703 15.7614C47.237 15.4886 47.3203 15.1913 47.3203 14.8693V13.8409C47.2559 13.8939 47.1461 13.9432 46.9908 13.9886C46.8393 14.0341 46.6688 14.0739 46.4794 14.108C46.29 14.142 46.1025 14.1723 45.9169 14.1989C45.7313 14.2254 45.5703 14.2481 45.4339 14.267C45.1271 14.3087 44.8525 14.3769 44.6101 14.4716C44.3677 14.5663 44.1764 14.6989 44.0362 14.8693C43.8961 15.036 43.826 15.2519 43.826 15.517C43.826 15.8958 43.9643 16.1818 44.2408 16.375C44.5173 16.5682 44.8696 16.6648 45.2976 16.6648ZM55.2351 21.4545C54.4964 21.4545 53.862 21.3542 53.3317 21.1534C52.8014 20.9564 52.3752 20.6913 52.0533 20.358C51.7313 20.0246 51.5078 19.6553 51.3828 19.25L53.2351 18.8011C53.3184 18.9716 53.4396 19.1402 53.5987 19.3068C53.7578 19.4773 53.9718 19.6174 54.2408 19.7273C54.5135 19.8409 54.8563 19.8977 55.2692 19.8977C55.8525 19.8977 56.3355 19.7557 56.718 19.4716C57.1006 19.1913 57.2919 18.7292 57.2919 18.0852V16.4318H57.1896C57.0836 16.6439 56.9283 16.8617 56.7237 17.0852C56.523 17.3087 56.2559 17.4962 55.9226 17.6477C55.593 17.7992 55.1783 17.875 54.6783 17.875C54.0078 17.875 53.3999 17.7178 52.8544 17.4034C52.3127 17.0852 51.8809 16.6117 51.5589 15.983C51.2408 15.3504 51.0817 14.5587 51.0817 13.608C51.0817 12.6496 51.2408 11.8409 51.5589 11.1818C51.8809 10.5189 52.3146 10.017 52.8601 9.67614C53.4055 9.33144 54.0135 9.15909 54.6839 9.15909C55.1953 9.15909 55.6158 9.24621 55.9453 9.42045C56.2786 9.59091 56.5438 9.79735 56.7408 10.0398C56.9377 10.2784 57.0874 10.5038 57.1896 10.7159H57.3033V9.27273H59.3317V18.142C59.3317 18.8883 59.1536 19.5057 58.7976 19.9943C58.4415 20.483 57.9548 20.8485 57.3374 21.0909C56.7199 21.3333 56.0192 21.4545 55.2351 21.4545ZM55.2521 16.2614C55.6877 16.2614 56.0589 16.1553 56.3658 15.9432C56.6726 15.7311 56.9055 15.4261 57.0646 15.0284C57.2237 14.6307 57.3033 14.1534 57.3033 13.5966C57.3033 13.0473 57.2237 12.5663 57.0646 12.1534C56.9093 11.7405 56.6783 11.4205 56.3714 11.1932C56.0684 10.9621 55.6953 10.8466 55.2521 10.8466C54.7938 10.8466 54.4112 10.9659 54.1044 11.2045C53.7976 11.4432 53.5665 11.7708 53.4112 12.1875C53.2559 12.6004 53.1783 13.0701 53.1783 13.5966C53.1783 14.1307 53.2559 14.5985 53.4112 15C53.5703 15.3977 53.8033 15.7083 54.1101 15.9318C54.4207 16.1515 54.8014 16.2614 55.2521 16.2614ZM65.2464 18.1705C64.3942 18.1705 63.6555 17.983 63.0305 17.608C62.4055 17.233 61.9207 16.7083 61.576 16.0341C61.2351 15.3598 61.0646 14.572 61.0646 13.6705C61.0646 12.7689 61.2351 11.9792 61.576 11.3011C61.9207 10.6231 62.4055 10.0966 63.0305 9.72159C63.6555 9.34659 64.3942 9.15909 65.2464 9.15909C66.0987 9.15909 66.8374 9.34659 67.4624 9.72159C68.0874 10.0966 68.5703 10.6231 68.9112 11.3011C69.2559 11.9792 69.4283 12.7689 69.4283 13.6705C69.4283 14.572 69.2559 15.3598 68.9112 16.0341C68.5703 16.7083 68.0874 17.233 67.4624 17.608C66.8374 17.983 66.0987 18.1705 65.2464 18.1705ZM65.2578 16.5227C65.7199 16.5227 66.1063 16.3958 66.4169 16.142C66.7275 15.8845 66.9586 15.5398 67.1101 15.108C67.2654 14.6761 67.343 14.1951 67.343 13.6648C67.343 13.1307 67.2654 12.6477 67.1101 12.2159C66.9586 11.7803 66.7275 11.4337 66.4169 11.1761C66.1063 10.9186 65.7199 10.7898 65.2578 10.7898C64.7843 10.7898 64.3904 10.9186 64.076 11.1761C63.7654 11.4337 63.5324 11.7803 63.3771 12.2159C63.2256 12.6477 63.1499 13.1307 63.1499 13.6648C63.1499 14.1951 63.2256 14.6761 63.3771 15.108C63.5324 15.5398 63.7654 15.8845 64.076 16.142C64.3904 16.3958 64.7843 16.5227 65.2578 16.5227ZM73.2308 12.8864V18H71.174V9.27273H73.1399V10.7557H73.2422C73.4429 10.267 73.763 9.87879 74.2024 9.59091C74.6456 9.30303 75.1929 9.15909 75.8445 9.15909C76.4467 9.15909 76.9714 9.28788 77.4183 9.54545C77.8691 9.80303 78.2176 10.1761 78.4638 10.6648C78.7138 11.1534 78.8369 11.7462 78.8331 12.4432V18H76.7763V12.7614C76.7763 12.178 76.6248 11.7216 76.3217 11.392C76.0225 11.0625 75.6077 10.8977 75.0774 10.8977C74.7176 10.8977 74.3975 10.9773 74.1172 11.1364C73.8407 11.2917 73.6229 11.517 73.4638 11.8125C73.3085 12.108 73.2308 12.4659 73.2308 12.8864Z"
          fill="white"
        />
        <defs>
          <clipPath id="clip0_553_267">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="flex gap-4">
        <HeaderLink href="#">Features</HeaderLink>
        <HeaderLink href="#">Docs</HeaderLink>
        <HeaderLink href="#">Pricing</HeaderLink>
        <HeaderLink href="#">Community</HeaderLink>
      </div>
      <div className="flex gap-4">
        <Button variant="tertiary">Get started</Button>
        <Button variant="secondary">Sign in</Button>
      </div>
    </header>
  );
};
