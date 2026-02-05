"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { decodeCookie, encodeCookie, getCookie, setCookie } from "@utils";

const CookieBanner = () => {
  const cookieConsentName = "__client_consent";

  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getCookie(cookieConsentName);

    if (!storedCookieConsent) {
      return setCookieConsent(null);
    }

    const decodedCookie = JSON.parse(decodeCookie(storedCookieConsent));

    setCookieConsent(decodedCookie);
  }, [setCookieConsent]);

  useEffect(() => {
    const consentValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: consentValue,
    });

    const token = encodeCookie(cookieConsent);

    setCookie(cookieConsentName, token, 182);
  }, [cookieConsent]);

  return (
    <>
      <AnimatePresence>
        {cookieConsent === null && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-0 inset-x-0 bg-white py-7 z-[99] border-t"
          >
            <div className="max-w-[1280px] mx-auto w-full px-8 flex tab-s:flex-col tab-s:items-end gap-10 items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">But first, cookies 🍪</h2>
                <p className="body-text">
                  We use essential cookies to make our site work. We'd like to
                  use other cookies to improve and personalize your visit, and
                  analyze our website performance, but only if you accept. Learn
                  more about your choices in{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary underline"
                  >
                    our cookie policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex items-center tab-s:flex-wrap tab-s:justify-end min-w-fit gap-5">
                <button
                  onClick={() => setCookieConsent(false)}
                  className="text-gray-500 hover:text-black transition-colors bg-white rounded-lg px-5 py-3"
                >
                  Decline
                </button>
                <button
                  onClick={() => setCookieConsent(true)}
                  className="bg-primary text-white rounded-lg px-5 py-3 hover:bg-secondary transition-all hover:scale-105 active:scale-95"
                >
                  Accept Cookies
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default CookieBanner;
