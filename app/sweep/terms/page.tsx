"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import Nav from "@/components/Nav";

function SweepFooterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient
          id="sweep-terms-footer"
          x1="0"
          y1="0"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5841D8" />
          <stop offset="1" stopColor="#4833C8" />
        </linearGradient>
      </defs>
      <rect width="28" height="28" rx="7" fill="url(#sweep-terms-footer)" />
      <path d="M14 7l-5 9h10L14 7z" fill="white" opacity=".9" />
      <path
        d="M9 16l5 5 5-5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity=".6"
      />
    </svg>
  );
}

export default function TermsPage() {
  const { t } = useLang();

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <Nav
        brandText="Sweep"
        brandHref="/sweep"
        backHref="/sweep"
        backKey="nav.back"
      />

      <div className="max-w-[720px] mx-auto px-6 md:px-[52px] pt-[130px] pb-[100px]">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.8px] uppercase px-[14px] py-[6px] rounded-full mb-6"
          style={{
            background: "rgba(88,65,216,.12)",
            border: "1px solid rgba(88,65,216,.3)",
            color: "var(--color-accent-light)",
          }}
        >
          {t("terms.page.badge")}
        </div>

        <h1
          className="font-extrabold leading-[1.05] mb-3"
          style={{ fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-2px" }}
        >
          {t("terms.page.h1")}
        </h1>

        <p
          className="text-[13px] mb-[60px]"
          style={{ color: "var(--color-text-muted)" }}
        >
          {t("terms.page.updated")}
        </p>

        {/* Section 1 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s1.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s1.p1")}
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s1.p2")}
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s2.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s2.p1")}
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s3.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s3.p1")}
          </p>

          {/* Sub box */}
          <div
            className="px-6 py-5 mb-[14px]"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderLeft: "3px solid var(--color-accent)",
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p
              className="text-[15px] leading-[1.75]"
              style={{ color: "var(--color-text-sub)" }}
            >
              <strong className="text-[var(--color-text)]">
                Auto-renewable subscriptions
              </strong>{" "}
              {t("terms.s3.sub1")}
            </p>
          </div>

          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s3.p2")}
          </p>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            <strong className="text-[var(--color-text)]">Refunds.</strong>{" "}
            {t("terms.s3.p3")
              .replace("Refunds. ", "")
              .replace("reportaproblem.apple.com.", "")}{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener"
              className="no-underline hover:underline"
              style={{ color: "var(--color-accent-light)" }}
            >
              reportaproblem.apple.com
            </a>
            .
          </p>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            <strong className="text-[var(--color-text)]">Free trials.</strong>{" "}
            {t("terms.s3.p4").replace("Free trials. ", "")}
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s3.p5")}
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s4.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s4.p1")}
          </p>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s4.p2")}
          </p>
          <ul className="p-0 list-none mb-[14px]">
            {[
              "terms.s4.li1",
              "terms.s4.li2",
              "terms.s4.li3",
              "terms.s4.li4",
            ].map((k) => (
              <li
                key={k}
                className="text-[15px] leading-[1.7] py-[6px] pl-[22px] relative"
                style={{ color: "var(--color-text-sub)" }}
              >
                <span
                  className="absolute left-0"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  –
                </span>
                {t(k)}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s5.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s5.p1")}
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s5.p2")}
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s6.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s6.p1")}
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s7.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s7.p1")}
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s7.p2")}
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s8.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-[14px]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s8.p1")}
          </p>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s8.p2")}
          </p>
        </div>

        {/* Section 9 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s9.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s9.p1").split("Privacy Policy")[0]}
            <Link
              href="/sweep/privacy"
              className="no-underline hover:underline"
              style={{ color: "var(--color-accent-light)" }}
            >
              Privacy Policy
            </Link>
            {t("terms.s9.p1").split("Privacy Policy")[1] ?? ""}
          </p>
        </div>

        {/* Section 10 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s10.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s10.p1")}
          </p>
        </div>

        {/* Section 11 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s11.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s11.p1")}
          </p>
        </div>

        {/* Section 12 */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("terms.s12.h2")}
          </h2>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--color-text-sub)" }}
          >
            {t("terms.s12.p1").replace("help@vantoro.studio", "")}{" "}
            <a
              href="mailto:help@vantoro.studio"
              className="no-underline hover:underline"
              style={{ color: "var(--color-accent-light)" }}
            >
              help@vantoro.studio
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-[52px] py-7"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div className="flex items-center gap-2 text-[14px] font-bold">
          <SweepFooterIcon />
          Sweep
        </div>
        <div className="flex gap-5">
          <Link
            href="/sweep/privacy"
            className="text-[12px] no-underline hover:text-[var(--color-text)] transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("footer.privacy")}
          </Link>
          <Link
            href="/sweep/terms"
            className="text-[12px] no-underline hover:text-[var(--color-text)] transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("footer.terms")}
          </Link>
        </div>
        <p className="text-[12px]" style={{ color: "var(--color-text-faint)" }}>
          {t("footer.copy")}
        </p>
      </footer>
    </div>
  );
}
