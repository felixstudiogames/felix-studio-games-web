import React from 'react'
import { Link } from "react-router-dom";
import logo from "./../assets/logo-02.svg";
import characters from "./../assets/characters.svg";

function Logo({ className }) {
  return (
    <Link to={'/'}>
      <img
        src={logo}
        alt="Felix Studio Games"
        className={`block h-11 w-auto ${className || ""}`}
      />
    </Link>
  );
}

const PrivacyPolicyContentSection = () => {
  return (
    <section className='px-5 pt-40 md:px-10 lg:px-[140px] lg:py-16'>
      <div className="min-h-screen flex flex-col bg-[#faf6ec] text-[#3d3d3d] antialiased">
        {/* Main */}
        <main className="flex-1 max-w-[1200px] w-full mx-auto px-0 py-0 pb-24 md:pb-0">
          {/* Hero */}
          <div className="relative mb-24">
            <div className="w-20 h-[5px] bg-[#4a4a45] mb-[5px]" />
            <h1 className="text-[32px] md:text-[44px] font-bold text-[#4a4a45] m-0 tracking-[-0.01em]">
              Privacy Policy
            </h1>
            <img
              src={characters}
              alt=""
              className="hidden md:block absolute -top-12 right-0 w-[200px] h-auto pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 pt-0 md:pt-[100px]">
            {/* Sidebar */}
            <aside className="flex flex-row md:flex-col gap-10 md:gap-7 mb-2 md:mb-0">
              <div>
                <p className="m-0 mb-1 font-bold text-[#4a4a45] text-[15px]">Effective Date:</p>
                <p className="m-0 text-[#6b6b64] text-[15px]">5th May, 2026</p>
              </div>
              <div>
                <p className="m-0 mb-1 font-bold text-[#4a4a45] text-[15px]">Developer:</p>
                <p className="m-0 text-[#6b6b64] text-[15px]">Felix Studio Games</p>
              </div>
            </aside>

            {/* Content */}
            <article className="max-w-[720px] text-[15.5px] leading-[1.7] text-[#4b4b45] [&_p]:m-0 [&_p]:mb-[18px] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#4a4a45] [&_h2]:mt-9 [&_h2]:mb-[14px] [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-[#4a4a45] [&_h3]:mt-6 [&_h3]:mb-[6px] [&_ul]:m-0 [&_ul]:mb-[18px] [&_ul]:pl-5 [&_li]:mb-[6px] [&_strong]:text-[#4a4a45] [&_strong]:font-bold [&_a]:text-[#ff5a1f] [&_a]:no-underline [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5">
              <p>
                Welcome to <strong>Call Break Master</strong>. This Privacy
                Policy explains how <strong>Felix Studio Games</strong>{" "}
                collects, uses, and shares information when you use our mobile
                game.
              </p>
              <p>
                By using <strong>Call Break Master</strong>, you agree to the
                collection and use of information in accordance with this
                policy.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We do not collect personally identifiable information such as
                your name, email address, or phone number.
              </p>
              <p>
                However, we may collect certain non-personal information
                automatically, including:
              </p>
              <ul>
                <li>Device information (model, OS version)</li>
                <li>App usage data (game interactions, session duration)</li>
                <li>Advertising identifiers (such as device Advertising ID)</li>
                <li>Log data (IP address, device type, crash logs if applicable)</li>
              </ul>

              <h2>Third-Party Services</h2>
              <p>
                Our game uses third-party services that may collect
                information used to identify you.
              </p>

              <h3>i. Advertising</h3>
              <p>We use Google AdMob to display ads.</p>
              <p>AdMob may collect:</p>
              <ul>
                <li>Advertising ID</li>
                <li>Device information</li>
                <li>Interaction with ads</li>
              </ul>

              <p>
                Learn more:{" "}
                <a href="https://policies.google.com/privacy">
                  Google Privacy Policy
                </a>
              </p>

              <h3>ii. Analytics</h3>
              <p>We use Firebase to understand how users interact with the game.</p>
              <p>Firebase may collect:</p>
              <ul>
                <li>App usage data</li>
                <li>Device information</li>
                <li>Performance data</li>
              </ul>

              <h3>iii. Crash Reporting</h3>
              <p>
                We use Firebase Crashlytics to monitor and fix crashes in the
                game.
              </p>
              <p>This service may collect information such as:</p>
              <ul>
                <li>Crash logs</li>
                <li>Device information (e.g., device model, OS version)</li>
                <li>App state at the time of the crash</li>
              </ul>

              <h2>How We Use Information</h2>
              <p>We use the collected data to:</p>
              <ul>
                <li>Improve game performance and user experience</li>
                <li>Analyze gameplay behavior</li>
                <li>Fix bugs and crashes</li>
                <li>Show relevant advertisements</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>This game is intended for users aged 13 and above.</p>
              <p>
                We do not knowingly collect personal information from children
                under 13. Since our app does not require account registration,
                we do not directly store personal data.
              </p>
              <p>
                However, if you believe that a child has used our app and you
                have concerns, please contact us. We will guide you on how to
                remove or limit data collection, including through device
                settings or third-party services.
              </p>

              <h2>Data Security</h2>
              <p>
                We take reasonable measures to protect your information.
                However, no method of transmission over the internet is 100%
                secure.
              </p>

              <h2>User Rights</h2>
              <p>
                Depending on your location, you may have certain privacy
                rights regarding data collected by third-party services used
                in the game, such as Google AdMob and Firebase.
              </p>
              <p>
                Since Call Break Master does not require user accounts or
                directly store personally identifiable information, we do not
                provide an in-app mechanism for requesting data deletion.
              </p>
              <p>
                Users may manage certain data and privacy preferences through
                their device settings, including resetting advertising
                identifiers or limiting ad personalization.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated effective date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or suggestions, contact us at:{" "}
                <a href="mailto:felixstudiogames@gmail.com">
                  felixstudiogames@gmail.com
                </a>
              </p>
            </article>
          </div>
          {/* Footer */}
          <footer className="hidden lg:flex justify-center pt-10 md:px-16 border-t border-[#e4ddc9] mt-[140px]">
            <Logo className="!h-[52px]" />
          </footer>
        </main>
      </div>
    </section>
  );
}

export default PrivacyPolicyContentSection