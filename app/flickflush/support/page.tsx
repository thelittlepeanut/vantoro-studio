"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import Nav from "@/components/Nav";

const FAQ = [1, 2, 3, 4, 5, 6];

export default function SupportPage() {
  const { t } = useLang();

  const linkStyle = { color: "var(--color-accent-light)" };
  const bodyStyle = { color: "var(--color-text-sub)" };

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <Nav
        brandText="FlickFlush"
        brandHref="/flickflush"
        backHref="/flickflush"
        backKey="nav.back"
      />

      <div className="max-w-[720px] mx-auto px-6 md:px-[52px] pt-[130px] pb-[100px]">
        <div
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.8px] uppercase px-[14px] py-[6px] rounded-full mb-6"
          style={{
            background: "rgba(88,65,216,.12)",
            border: "1px solid rgba(88,65,216,.3)",
            color: "var(--color-accent-light)",
          }}
        >
          {t("support.page.badge")}
        </div>

        <h1
          className="font-extrabold leading-[1.05] mb-3"
          style={{ fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-2px" }}
        >
          {t("support.page.h1")}
        </h1>

        <p className="text-[15px] leading-[1.75] mb-[60px]" style={bodyStyle}>
          {t("support.page.sub")}
        </p>

        {/* Contact */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("support.contact.h2")}
          </h2>
          <div
            className="rounded-[16px] px-7 py-6 mb-[14px]"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <p className="text-[15px] leading-[1.75] mb-3" style={bodyStyle}>
              {t("support.contact.p1")}
            </p>
            <a
              href="mailto:help@vantoro.studio"
              className="text-[18px] font-bold no-underline hover:underline"
              style={linkStyle}
            >
              help@vantoro.studio
            </a>
          </div>
          <p className="text-[15px] leading-[1.75]" style={bodyStyle}>
            {t("support.contact.p2")}
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-5 text-[var(--color-text)]">
            {t("support.faq.h2")}
          </h2>
          {FAQ.map((n) => (
            <div key={n} className="mb-6">
              <h3 className="text-[15px] font-semibold mb-1 text-[var(--color-text)]">
                {t(`support.faq.q${n}`)}
              </h3>
              <p className="text-[15px] leading-[1.75]" style={bodyStyle}>
                {t(`support.faq.a${n}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">
            {t("support.legal.h2")}
          </h2>
          <div className="flex gap-5">
            <Link
              href="/flickflush/privacy"
              className="text-[15px] no-underline hover:underline"
              style={linkStyle}
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/flickflush/terms"
              className="text-[15px] no-underline hover:underline"
              style={linkStyle}
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>

      <footer
        className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-[52px] py-7"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div className="flex items-center gap-2 text-[14px] font-bold">
          <Link
            href="/"
            className="no-underline text-[var(--color-text)] hover:opacity-70 transition-opacity"
          >
            Vantoro Studio
          </Link>
        </div>
        <div className="flex gap-5">
          <Link
            href="/flickflush/privacy"
            className="text-[12px] no-underline hover:text-[var(--color-text)] transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("footer.privacy")}
          </Link>
          <Link
            href="/flickflush/terms"
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
